import { NextRequest, NextResponse } from "next/server";
import { ProductSchema } from "@/lib/schemas";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate against schema on the server side
        const result = ProductSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Validation Failed", details: result.error.format() },
                { status: 400 }
            );
        }

        const productData = result.data;

        // In a real application, you would save to database or external API here
        // For now, we mock success.

        // Transform to WordPress/Formidable Forms payload structure
        const wpPayload = {
            post_title: productData.product_name,
            post_content: productData.about_product,
            tax_input: {
                product_cat: [productData.product_category],
                product_tag: productData.keywords
            },
            meta_input: {
                cle_product_id: productData.product_id,
                cle_product_name: productData.product_name,
                cle_manager_name: productData.product_manager_name,
                cle_manager_email: productData.product_manager_email,
                cle_start_date: productData.start_date,
                cle_end_date: productData.end_date,
                cle_price_inr: productData.price_in_inr,
                cle_price_usd: productData.price_in_usd,
                cle_product_category: productData.product_category,
                cle_product_image: productData.product_image,
                cle_about_product: productData.about_product,
                cle_keywords: productData.keywords?.join(', ')
            }
        };




        return NextResponse.json({
            success: true,
            message: "Product created successfully",
            product: productData
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
