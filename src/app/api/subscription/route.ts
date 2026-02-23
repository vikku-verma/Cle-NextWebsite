import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const apiUrl = process.env.SUBSCRIPTION_API_URL?.trim();

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
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Referer': 'https://shop.stmjournals.com/',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`WooCommerce API Error (${response.status}):`, errorText.substring(0, 200));

            return NextResponse.json(
                {
                    error: `Secondary API access failed: ${response.status}`,
                    message: response.status === 403 ? "Access blocked by provider security (Cloudflare). This may require IP whitelisting on the source server." : response.statusText,
                    status: response.status
                },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Ensure data is an array before processing
        if (!Array.isArray(data)) {
            console.error("Expected array from WooCommerce API, received:", typeof data);
            return NextResponse.json(
                { error: 'Invalid response format from WooCommerce', details: data },
                { status: 500 }
            );
        }

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
