import { Workshop } from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const username = process.env.WP_USER!;
const appPassword = process.env.WP_APP_PASSWORD!;
const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

export async function fetchWorkshops(): Promise<Workshop[]> {


    if (!API_URL) {
        console.error("fetchWorkshops: NEXT_PUBLIC_WORDPRESS_API_URL is not defined");
        return [];
    }

    try {

        const res = await fetch(API_URL, {
            next: {
                // Set to 0 to ensure fresh data on every request ( Real-time )
                revalidate: 0,
                tags: ['workshops']
            },
            headers: {
                'Authorization': `Basic ${auth}`,
            },
        });

        if (!res.ok) {
            console.error(`fetchWorkshops: Failed to fetch workshops: ${res.status} ${res.statusText}`);
            return [];
        }

        const data = await res.json();




        let items: any[] = [];

        if (Array.isArray(data)) {
            items = data;
        } else if (typeof data === "object" && data !== null) {
            // Critical Fix: Check if 'data' IS an entry (single object response) vs a Map of entries
            // Formidable entries usually have 'id'
            // Based on user sample: key "meta" exists
            if (data.id && data.meta) {
                // It's a single entry
                items = [data];
            } else {
                // It's likely a map { "123": entry, "124": entry }
                items = Object.values(data);
            }
        }



        // Map raw API data to our Workshop interface
        const workshops: Workshop[] = items.map((item: any) => {
            if (!item || typeof item !== 'object') return null;

            const meta = item.meta || {};

            return {
                id: item.id,
                categorySlug: (meta.name || item.name || meta.an73j || "").toLowerCase(),
                data: item,
                title: meta.vwoxi || item.item_name || item.name || "Untitled Workshop",
                description: meta.nveuw || meta.description || "",
                date: meta['9uve2-value'] || meta.date || item.created_at,
                price: meta.price || "Free",
                author: meta.lgcq5 || meta.author_name || "Guest",
                image: meta.image || meta.banner || "",
            };
        }).filter(item => item !== null) as Workshop[];


        return workshops;
    } catch (error) {
        console.error("Error fetching workshops:", error);
        return [];
    }
}
