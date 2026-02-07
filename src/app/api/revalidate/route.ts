import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Check for secret if needed, or just proceed since it's a webhook
        // For now, we'll assume the webhook is configured to send some data
        // We really just need to know that something changed

        console.log("Webhook received for revalidation:", body);

        // Revalidate the workshops tag
        revalidateTag('workshops');

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}
