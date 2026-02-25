import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(100),
    lastName: z.string().min(1, "Last name is required").max(100),
    email: z.string()
        .email("Invalid email address")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address format"),
    phone: z.string().max(20).optional().or(z.literal("")),
    subject: z.enum([
        "Registration Query",
        "Paper Submission",
        "Sponsorship",
        "Technical Issue",
        "Other",
    ]),
    message: z.string().min(10, "Message must be at least 10 characters long").max(5000),
});

export async function POST(req: NextRequest) {
    try {
        /**
         * 1️⃣ Get Raw Body & Validate
         */
        const rawBody = await req.json();
        const validationResult = contactSchema.safeParse(rawBody);

        if (!validationResult.success) {
            return NextResponse.json(
                { error: "Validation failed", details: validationResult.error.format() },
                { status: 400 }
            );
        }

        const {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
        } = validationResult.data;

        /**
         * 2️⃣ Check Environment Variables
         */
        const WP_API_URL = process.env.CONFERENCE_CONTACT_API;
        const WP_USER = process.env.WP_USER;
        const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;

        if (!WP_API_URL || !WP_USER || !WP_APP_PASSWORD) {
            return NextResponse.json(
                { error: "Server configuration error." },
                { status: 500 }
            );
        }

        /**
         * 3️⃣ Prepare Auth
         */
        const auth = Buffer.from(
            `${WP_USER}:${WP_APP_PASSWORD}`
        ).toString("base64");

        /**
         * 4️⃣ Prepare Formidable Payload
         * ⚠️ Ensure field IDs match your actual form
         */
        const payload = {
            form_id: 35,
            item_meta: {
                401: firstName,
                402: lastName,
                404: email,
                408: phone || "",
                407: subject,
                405: message,
            },
        };

        /**
         * 5️⃣ Timeout Protection (10s)
         */
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(WP_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });

        clearTimeout(timeout);

        const data = await response.json().catch(() => null);

        /**
         * 6️⃣ Forward WordPress Error Directly
         */
        if (!response.ok) {
            return NextResponse.json(
                {
                    error: "WordPress rejected the request",
                    details: data,
                },
                { status: response.status }
            );
        }

        /**
         * 7️⃣ Success
         */
        return NextResponse.json(
            {
                success: true,
                entryId: data?.id ?? null,
            },
            { status: 200 }
        );

    } catch (error: any) {
        if (error.name === "AbortError") {
            return NextResponse.json(
                { error: "Request to WordPress timed out." },
                { status: 504 }
            );
        }

        console.error("API Error:", error);

        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}