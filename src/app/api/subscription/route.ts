import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const apiUrl = process.env.SUBSCRIPTION_API_URL;

        if (!apiUrl) {
            return NextResponse.json(
                { error: 'SUBSCRIPTION_API_URL is not defined' },
                { status: 500 }
            );
        }

        // Create URL object to safely append query parameters
        const url = new URL(apiUrl);
        url.searchParams.set('per_page', '100'); // Fetch up to 100 products

        const response = await fetch(url.toString(), {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { error: `Failed to fetch from WooCommerce: ${response.status} ${response.statusText}`, details: errorText },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Enhance data with min_price and max_price from meta_data
        // Enhance data with min_price and max_price from meta_data
        const enhancedData = data.map((product: any) => {
            const getMeta = (key: string) => product.meta_data?.find((m: any) => m.key === key)?.value;

            return {
                ...product,
                min_price: getMeta('_inr-zone_min_variation_price') ||
                    getMeta('_india_min_variation_price') ||
                    getMeta('_min_variation_price') ||
                    product.price,
                max_price: getMeta('_inr-zone_max_variation_price') ||
                    getMeta('_india_max_variation_price') ||
                    getMeta('_max_variation_price') ||
                    product.price
            };
        });

        return NextResponse.json(enhancedData);
    } catch (error) {
        console.error("Error in subscription API route:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
