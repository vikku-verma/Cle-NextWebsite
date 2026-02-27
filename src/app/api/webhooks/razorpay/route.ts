import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.text();
        const razorpaySignature = req.headers.get("x-razorpay-signature");

        if (!razorpaySignature) {
            return NextResponse.json({ error: "Missing signature" }, { status: 400 });
        }

        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!webhookSecret) {
            console.error("RAZORPAY_WEBHOOK_SECRET is not configured.");
            return NextResponse.json({ error: "Webhook configuration error" }, { status: 500 });
        }

        // Verify the webhook signature
        const expectedSignature = crypto
            .createHmac("sha256", webhookSecret)
            .update(payload)
            .digest("hex");

        if (expectedSignature !== razorpaySignature) {
            console.error("Invalid webhook signature.");
            return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
        }

        const event = JSON.parse(payload);

        // We are interested in standard forms of successful payment
        if (event.event === "order.paid" || event.event === "payment.captured") {
            let orderId = "";
            let paymentId = "";
            let entryId = "";

            if (event.event === "order.paid") {
                const order = event.payload.order.entity;
                const payment = event.payload.payment.entity;
                orderId = order.id;
                paymentId = payment.id;
                entryId = order.notes?.entryId || payment.notes?.entryId;

                // Fallback to checking receipt if notes somehow missed
                if (!entryId && order.receipt && order.receipt.startsWith("rcptid_")) {
                    entryId = order.receipt.split("_")[1];
                }
            } else if (event.event === "payment.captured") {
                const payment = event.payload.payment.entity;
                orderId = payment.order_id;
                paymentId = payment.id;
                entryId = payment.notes?.entryId;
            }

            if (!entryId) {
                console.warn(`Webhook received for ${event.event} but no entryId found in notes. Order ID: ${orderId}`);
                // Return 200 anyway so Razorpay doesn't retry infinitely for a rogue transaction
                return NextResponse.json({ received: true, warning: "missing_entry_id" });
            }

            console.log(`Webhook triggered! Updating Formidable Entry ${entryId} for Order ${orderId}`);

            // Update WordPress Formidable Forms
            const wpPayload = {
                item_meta: {
                    427: orderId,
                    428: paymentId,
                    429: "Successful"
                }
            };

            const wpApiUrl = process.env.CONFERENCE_REG_API_URL;

            if (wpApiUrl) {
                const wpUser = process.env.WP_USER;
                const wpPassword = process.env.WP_APP_PASSWORD;
                const authHeader = `Basic ${Buffer.from(`${wpUser}:${wpPassword}`).toString('base64')}`;

                try {
                    const baseUrl = wpApiUrl.split('?')[0];
                    const updateUrl = `${baseUrl}/${entryId}`;

                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000);

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
                        console.error("WordPress Formidable API Error in Webhook:", wpResponse.status, errorText);
                        // Depending on your requirements, you could return a 500 here to force Razorpay to retry later.
                    } else {
                        console.log(`Successfully synced Entry ${entryId} via Webhook.`);
                    }
                } catch (wpError) {
                    console.error("Failed to reach WordPress API in Webhook:", wpError);
                }
            }
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error("Razorpay Webhook Error:", error);
        return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
    }
}
