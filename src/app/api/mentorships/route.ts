import { NextResponse } from "next/server";
import { Mentor } from "@/lib/schemas";

export async function GET() {
    // TODO: Fetch real mentors from backend
    return NextResponse.json([]);
}
