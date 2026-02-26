import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const {
            fullName,
            email,
            phone,
            institution,
            region,
            category,
            presentationType,
            track,
            paperTitle,
            country,
            state,
            city,
            numberOfDelegates,
            totalAmountPaid,
            currency
        } = data;

        console.log("Creating Unpaid Lead in WordPress:", email);

        // Convert internal frontend values to exactly match WordPress Formidable Options
        const regionMap: Record<string, string> = {
            "india": "India",
            "international": "International"
        };
        const presentationTypeMap: Record<string, string> = {
            "attendee": "Attendee Only",
            "paper_presentation": "Author (Paper Presentation)",
            "poster_presentation": "Author (Poster Presentation)"
        };
        const trackMap: Record<string, string> = {
            "track1": "Law, Policy and Humanities",
            "track2": "Constitutional and Administrative Law",
            "track3": "Criminal Law and Justice",
            "track4": "Corporate and Commercial Law",
            "track5": "International Law and Relations"
        };

        // Prepare Payload for WordPress Formidable Forms (Initial 'Unpaid' State)
        const wpPayload = {
            form_id: 36,
            item_meta: {
                410: fullName,
                411: email,
                412: phone,
                413: institution,
                419: regionMap[region] || region,
                421: category,
                422: presentationTypeMap[presentationType] || presentationType,
                423: numberOfDelegates,
                424: track ? (trackMap[track] || track) : "",
                425: totalAmountPaid, // Expected cost
                426: currency,
                429: "Unpaid", // Status set to Unpaid before Razorpay
                431: country,
                432: state,
                433: city,
                434: paperTitle || ""
            }
        };

        const wpApiUrl = process.env.CONFERENCE_REG_API_URL;

        if (!wpApiUrl) {
            console.error("CONFERENCE_REG_API_URL is missing.");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const wpUser = process.env.WP_USER;
        const wpPassword = process.env.WP_APP_PASSWORD;
        const authHeader = `Basic ${Buffer.from(`${wpUser}:${wpPassword}`).toString('base64')}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const wpResponse = await fetch(wpApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authHeader
            },
            body: JSON.stringify(wpPayload),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const wpData = await wpResponse.json();

        if (!wpResponse.ok) {
            console.error("WordPress Lead Creation Failed:", wpResponse.status, wpData);
            return NextResponse.json({ error: "Failed to create registration lead in WordPress." }, { status: 502 });
        }

        const entryId = wpData.id || wpData.entry_id;
        if (!entryId) {
            console.error("WordPress returned success but no ID:", wpData);
            return NextResponse.json({ error: "Failed to retrieve Lead ID." }, { status: 502 });
        }

        return NextResponse.json({
            success: true,
            entryId: entryId,
            message: "Lead created successfully (Unpaid)."
        });

    } catch (error: any) {
        console.error("Lead Creation Finalization Error:", error);
        return NextResponse.json(
            { error: "Internal server error during lead creation." },
            { status: 500 }
        );
    }
}
