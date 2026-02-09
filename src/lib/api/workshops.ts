import { Workshop } from "@/lib/types";

export async function fetchWorkshops(): Promise<Workshop[]> {
    const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    const username = process.env.WP_USER!;
    const appPassword = process.env.WP_APP_PASSWORD!;

    if (!API_URL) {
        console.error("fetchWorkshops: NEXT_PUBLIC_WORDPRESS_API_URL is not defined");
        return [];
    }

    const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

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
                // Category Slug: prefer 'bhb5u' (short code) -> 'xxa5l' (full name) -> generic fallback
                categorySlug: (meta.bhb5u || meta.xxa5l || "").toLowerCase(),
                data: item,
                // Title: 'vwoxi'
                title: meta.vwoxi || item.item_name || item.name || "Untitled Workshop",
                // Description: 'nveuw'
                description: meta.nveuw || "",
                // Date: '9uve2-value' (Start Date)
                date: meta['9uve2-value'] || item.created_at,
                // Price: Map 'rem8o' (INR) or '7pnnx' (USD). Expected as array in meta.
                price: (Array.isArray(meta.rem8o) ? meta.rem8o[0] : meta.rem8o) ||
                    (Array.isArray(meta['7pnnx']) ? meta['7pnnx'][0] : meta['7pnnx']) ||
                    undefined,
                pricing: {
                    inr: (Array.isArray(meta.rem8o) ? Number(meta.rem8o[0]) : Number(meta.rem8o)) || undefined,
                    usd: (Array.isArray(meta['7pnnx']) ? Number(meta['7pnnx'][0]) : Number(meta['7pnnx'])) || undefined,
                },
                // Author: 'lgcq5'
                author: meta.lgcq5 || "Guest",
                // Image: 'fprg8'
                image: meta.fprg8 || "",

                // Important Dates
                workshopStartDate: (Array.isArray(meta['9uve2']) ? meta['9uve2'][0] : meta['9uve2']) || "",
                workshopEndDate: (Array.isArray(meta['6cr9u']) ? meta['6cr9u'][0] : meta['6cr9u']) || "",
                registrationStartDate: (Array.isArray(meta['d0q33']) ? meta['d0q33'][0] : meta['d0q33']) || "",
                registrationEndDate: (Array.isArray(meta['5gwwk']) ? meta['5gwwk'][0] : meta['5gwwk']) || "",
            };
        }).filter(item => item !== null) as Workshop[];


        return workshops;
    } catch (error) {
        console.error("Error fetching workshops:", error);
        return [];
    }
}
export async function fetchWorkshopById(id: string): Promise<Workshop | null> {
    const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    const username = process.env.WP_USER!;
    const appPassword = process.env.WP_APP_PASSWORD!;

    if (!API_URL) return null;

    // Construct URL for single entry: Remove query params from API_URL and append ID
    const baseUrl = API_URL.split('?')[0];
    const singleEntryUrl = `${baseUrl}/${id}`;

    const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

    try {
        const res = await fetch(singleEntryUrl, {
            next: { revalidate: 0, tags: [`workshop-${id}`] },
            headers: { 'Authorization': `Basic ${auth}` }
        });

        if (!res.ok) {
            console.error(`fetchWorkshopById: Failed to fetch workshop ${id}: ${res.status}`);
            return null;
        }

        const data = await res.json();

        if (!data || !data.id) return null;

        const item = data;
        const meta = item.meta || {};

        return {
            id: item.id,
            // Category Slug: prefer 'bhb5u' (short code) -> 'xxa5l' (full name) -> generic fallback
            categorySlug: (meta.bhb5u || meta.xxa5l || "").toLowerCase(),
            data: item,
            // Title: 'vwoxi'
            title: meta.vwoxi || item.item_name || item.name || "Untitled Workshop",
            // Description: 'nveuw'
            description: meta.nveuw || "",
            // Date: '9uve2-value' (Start Date)
            date: meta['9uve2-value'] || item.created_at,
            // Price: Map 'rem8o' (INR) or '7pnnx' (USD). Expected as array in meta.
            price: (Array.isArray(meta.rem8o) ? meta.rem8o[0] : meta.rem8o) ||
                (Array.isArray(meta['7pnnx']) ? meta['7pnnx'][0] : meta['7pnnx']) ||
                undefined,
            pricing: {
                inr: (Array.isArray(meta.rem8o) ? Number(meta.rem8o[0]) : Number(meta.rem8o)) || undefined,
                usd: (Array.isArray(meta['7pnnx']) ? Number(meta['7pnnx'][0]) : Number(meta['7pnnx'])) || undefined,
            },
            // Author: 'lgcq5'
            author: meta.lgcq5 || "Guest",
            // Image: 'fprg8'
            image: meta.fprg8 || "",

            // Important Dates
            workshopStartDate: (Array.isArray(meta['9uve2']) ? meta['9uve2'][0] : meta['9uve2']) || "",
            workshopEndDate: (Array.isArray(meta['6cr9u']) ? meta['6cr9u'][0] : meta['6cr9u']) || "",
            registrationStartDate: (Array.isArray(meta['d0q33']) ? meta['d0q33'][0] : meta['d0q33']) || "",
            registrationEndDate: (Array.isArray(meta['5gwwk']) ? meta['5gwwk'][0] : meta['5gwwk']) || "",
        };

    } catch (error) {
        console.error("Error fetching workshop:", error);
        return null;
    }
}
