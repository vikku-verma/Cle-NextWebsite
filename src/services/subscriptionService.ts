export interface SubscriptionImage {
    id: number;
    src: string;
    name: string;
    alt: string;
}

export interface SubscriptionAttribute {
    id: number;
    name: string;
    option: string;
}

export interface SubscriptionProduct {
    id: number;
    name: string;
    permalink: string;
    price: string;
    price_html: string;
    images: SubscriptionImage[];
    stock_status: string;
    type: string;
    attributes: SubscriptionAttribute[];
    variations: number[];
    min_price?: string;
    max_price?: string;
}

export const fetchSubscriptions = async (): Promise<SubscriptionProduct[]> => {
    try {
        // Fetch from our internal API route
        const response = await fetch('/api/subscription');

        if (!response.ok) {
            throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
        }

        const data: SubscriptionProduct[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching subscriptions:", error);
        return [];
    }
};
