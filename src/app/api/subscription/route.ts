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

        const response = await fetch(apiUrl, {
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
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in subscription API route:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
