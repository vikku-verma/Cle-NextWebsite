import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { calculateRegistrationPrice } from "@/lib/pricing";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { region, category, presentationType, numberOfDelegates } = body;

        if (!region || !category || !presentationType || !numberOfDelegates) {
            return NextResponse.json(
                { error: "Missing required registration pricing parameters" },
                { status: 400 }
            );
        }

        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            console.warn("Razorpay credentials missing in environment variables.");
            return NextResponse.json(
                { error: "Payment gateway configuration error on server." },
                { status: 500 }
            );
        }

        // 1. Calculate the exact safe price on the server
        const { amount, currency } = calculateRegistrationPrice(region, category, presentationType, numberOfDelegates);

        const razorpay = new Razorpay({
            key_id,
            key_secret,
        });

        // Amount must be in subunits (e.g. paise for INR, cents for USD)
        // Ensure amount is an integer
        const amountInSubunits = Math.round(Number(amount) * 100);

        const options = {
            amount: amountInSubunits,
            currency: currency,
            receipt: `rcptid_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        };

        const order = await razorpay.orders.create(options);

        // Send order info to frontend
        return NextResponse.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
            razorpay_key_id: key_id
        });

    } catch (error: any) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json(
            { error: "Failed to generate payment order", details: typeof error === 'object' ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : String(error) },
            { status: 500 }
        );
    }
}
