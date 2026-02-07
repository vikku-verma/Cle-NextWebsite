import { NextResponse } from "next/server";
import { Product } from "@/lib/schemas";


export async function GET() {
    // TODO: Fetch real products from WordPress or Database
    // const products = await fetchProductsFromSource();
    return NextResponse.json([]);
}
