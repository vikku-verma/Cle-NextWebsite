import { NextResponse } from "next/server";
import { CLEEvent } from "@/lib/schemas";

export async function GET() {
    // TODO: Fetch real events from backend
    return NextResponse.json([]);
}
