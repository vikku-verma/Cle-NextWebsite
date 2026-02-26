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
            razorpay_signature,
            entryId
        } = data;

        if (!entryId) {
            return NextResponse.json({ error: "Missing Entry ID for payment update." }, { status: 400 });
        }

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

        // 2. Prepare Payload for WordPress Formidable Forms UPDATE
        // We only update the payment-specific fields to avoid wiping the rest of the form
        const wpPayload = {
            item_meta: {
                427: razorpay_order_id,
                428: razorpay_payment_id,
                429: "Successful"
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
                // Formidable V2 API endpoint for updates: /wp-json/frm/v2/entries/<id>
                // We assume wpApiUrl is the base form URL `...?form_id=36`. We need to strip standard query params and append ID.
                const baseUrl = wpApiUrl.split('?')[0];
                const updateUrl = `${baseUrl}/${entryId}`;

                const wpResponse = await fetch(updateUrl, {
                    method: 'PUT',
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
