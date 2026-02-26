import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const entryId = searchParams.get("id");
        const email = searchParams.get("email");

        if (!entryId || !email) {
            return NextResponse.json({ error: "Registration ID and Email are required." }, { status: 400 });
        }

        const wpApiUrl = process.env.CONFERENCE_REG_API_URL;
        if (!wpApiUrl) {
            console.error("CONFERENCE_REG_API_URL is missing.");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const wpUser = process.env.WP_USER;
        const wpPassword = process.env.WP_APP_PASSWORD;
        const authHeader = `Basic ${Buffer.from(`${wpUser}:${wpPassword}`).toString('base64')}`;

        // Formidable V2 API endpoint to fetch a single entry
        const baseUrl = wpApiUrl.split('?')[0];
        const fetchUrl = `${baseUrl}/${entryId}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const wpResponse = await fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authHeader
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!wpResponse.ok) {
            if (wpResponse.status === 404) {
                return NextResponse.json({ error: "Registration ID not found." }, { status: 404 });
            }
            throw new Error(`WordPress API returned ${wpResponse.status}`);
        }

        const entryData = await wpResponse.json();

        // Formidable forms returns a single object for an ID fetch
        // Verify the email matches for security
        // Assuming Field 411 is the Email field based on previous mapping
        const recordedEmail = entryData.meta['411'] || entryData.meta?.mdx0h; // Sometimes Formidable uses internal field keys natively

        // We need to robustly find the email field in the meta object since keys can vary
        let foundEmail = "";
        if (entryData.meta) {
            for (const key in entryData.meta) {
                // Basic email regex validation just to sniff out the email field if keys shifted
                if (typeof entryData.meta[key] === 'string' && entryData.meta[key].includes('@') && entryData.meta[key].toLowerCase() === email.toLowerCase()) {
                    foundEmail = entryData.meta[key];
                    break;
                }
            }
        }

        if (!foundEmail && entryData.meta && entryData.meta['411']?.toLowerCase() !== email.toLowerCase()) {
            return NextResponse.json({ error: "Email does not match our records for this Registration ID." }, { status: 403 });
        }

        // Check if already paid
        // Assuming field 429 is Status
        let isPaid = false;
        if (entryData.meta) {
            for (const key in entryData.meta) {
                if (entryData.meta[key] === "Successful") {
                    isPaid = true;
                    break;
                }
            }
        }

        if (isPaid) {
            return NextResponse.json({ error: "This registration has already been paid successfully." }, { status: 400 });
        }

        // We need to recreate the exact variables required for Razorpay initialization
        // Extracting region (419), category (421), presentationType (422), delegates (423), name (410), phone (412)
        const findField = (meta: any, possibleValues: string[]) => {
            for (const key in meta) {
                if (typeof meta[key] === 'string' && possibleValues.some(v => meta[key].toLowerCase().includes(v.toLowerCase()))) {
                    return meta[key];
                }
                if (typeof meta[key] === 'number' && possibleValues.includes('NUMBER')) {
                    return meta[key];
                }
            }
            return null;
        }

        const regionRaw = String(findField(entryData.meta, ["India", "International"]) || "india");
        const region = regionRaw.toLowerCase().includes("india") ? "india" : "international";

        const categoryRaw = String(findField(entryData.meta, ["Students", "Research Scholar", "Faculty Member", "Professional"]) || "Students");
        const categoryMap: any = {
            "students": "Students",
            "research scholar": "Research Scholar & Post-Doctoral",
            "faculty member": "Faculty Member",
            "professional": "Professional"
        };
        const categoryKey = Object.keys(categoryMap).find(k => categoryRaw.toLowerCase().includes(k));
        const category = categoryKey ? categoryMap[categoryKey] : "Students";

        const presentationRaw = String(findField(entryData.meta, ["Attendee Only", "Paper Presentation", "Poster Presentation"]) || "Attendee Only");
        let presentationType = "attendee";
        if (presentationRaw.toLowerCase().includes("paper")) presentationType = "paper_presentation";
        if (presentationRaw.toLowerCase().includes("poster")) presentationType = "poster_presentation";

        let delegates = 1;
        // Try to find the delegate number specifically
        if (entryData.meta['423']) delegates = parseInt(entryData.meta['423'], 10) || 1;

        const fullName = entryData.meta['410'] || entryData.name || "Delegate";
        const phone = entryData.meta['412'] || "";

        return NextResponse.json({
            success: true,
            lead: {
                entryId: entryId,
                fullName,
                email,
                phone,
                region,
                category,
                presentationType,
                numberOfDelegates: delegates
            }
        });

    } catch (error: any) {
        console.error("Fetch Lead Error:", error);
        return NextResponse.json(
            { error: "Internal server error fetching registration." },
            { status: 500 }
        );
    }
}
