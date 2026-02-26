import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

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
            currency,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = data;

        console.log("Received registration data:", {
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
            currency,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });

        // 1. Verify Razorpay Signature
        const key_secret = process.env.RAZORPAY_KEY_SECRET;
        if (!key_secret) {
            console.error("RAZORPAY_KEY_SECRET is not configured.");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const generated_signature = crypto
            .createHmac("sha256", key_secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generated_signature !== razorpay_signature) {
            console.error("Invalid Razorpay signature. Possible tampering.");
            return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
        }

        // 2. Convert internal frontend values to exactly match WordPress Formidable Options
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

        // 2. Prepare Payload for WordPress Formidable Forms
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
                425: totalAmountPaid,
                426: currency,
                427: razorpay_order_id,
                428: razorpay_payment_id,
                429: "Successful",
                // Assuming sequential IDs for new fields based on previous mapping. 
                // The site admin might need to adjust these to match their exact Formidable Form setup
                431: country,
                432: state,
                433: city,
                434: paperTitle || ""
            }
        };

        // 3. Send to WordPress
        const wpApiUrl = process.env.CONFERENCE_REG_API_URL;

        if (wpApiUrl) {
            const wpUser = process.env.WP_USER;
            const wpPassword = process.env.WP_APP_PASSWORD;
            const authHeader = `Basic ${Buffer.from(`${wpUser}:${wpPassword}`).toString('base64')}`;

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            try {
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

                if (!wpResponse.ok) {
                    const errorText = await wpResponse.text();
                    console.error("WordPress Formidable API Error:", wpResponse.status, errorText);
                }
            } catch (wpError) {
                console.error("Failed to reach WordPress API:", wpError);
            }
        } else {
            console.warn("CONFERENCE_REG_API_URL is missing. Skipping WordPress submission. Data:", wpPayload);
        }

        // 4. Return Success to Frontend
        return NextResponse.json({
            success: true,
            message: "Registration and payment verified successfully.",
            paymentId: razorpay_payment_id
        });

    } catch (error: any) {
        console.error("Registration Finalization Error:", error);
        return NextResponse.json(
            { error: "Internal server error during finalization." },
            { status: 500 }
        );
    }
}
