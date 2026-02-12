import { Workshop, WordPressFormEntry } from "@/lib/types";

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
        let items: WordPressFormEntry[] = [];

        if (Array.isArray(data)) {
            console.log("fetchWorkshops: Raw API Data (Array):", data.length, "items");
            items = data;
        } else if (typeof data === "object" && data !== null) {
            if (data.id && data.meta) {
                items = [data];
            } else {
                items = Object.values(data);
            }
        }

        // Map raw API data to our Workshop interface
        const workshops: Workshop[] = items.map((item: WordPressFormEntry) => {
            if (!item || typeof item !== 'object') return null;

            const meta = item.meta || {};

            // Helper to safely extract string value from meta field
            const getMetaString = (value: string | string[] | number | undefined): string => {
                if (Array.isArray(value)) return String(value[0] || '');
                return String(value || '');
            };

            return {
                id: item.id,
                name: item.name || "",
                // Category Slug: prefer 'xdzph' (new mapping) -> 'bhb5u' -> 'xxa5l' -> generic fallback
                categorySlug: getMetaString(meta.xdzph || meta.bhb5u || meta.xxa5l || "").toLowerCase(),
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

                // Table display fields
                workshopHeading: (Array.isArray(meta.n9958) ? meta.n9958[0] : meta.n9958) || "",
                mentorName: (Array.isArray(meta['1btvm']) ? meta['1btvm'][0] : meta['1btvm']) || "",
                schedule: (Array.isArray(meta['37m4n']) ? meta['37m4n'][0] : meta['37m4n']) || "",
                duration: (Array.isArray(meta.xsu59) ? meta.xsu59[0] : meta.xsu59) || "",
                tagline: (Array.isArray(meta.sodgf) ? meta.sodgf[0] : meta.sodgf) || "",
                registrationEndDateRaw: (Array.isArray(meta.ryr77) ? meta.ryr77[0] : meta.ryr77) || "",
                programStartDate: (Array.isArray(meta['37m4n']) ? meta['37m4n'][0] : meta['37m4n']) || "",
                programEndDate: (Array.isArray(meta.ca8o8) ? meta.ca8o8[0] : meta.ca8o8) || "",
                aboutCourse: (Array.isArray(meta['6c22m']) ? meta['6c22m'][0] : meta['6c22m']) || "",
                workshopObjectives: (Array.isArray(meta.q3b72) ? meta.q3b72[0] : meta.q3b72) || "",
                // Workshop Structure
                day1Title: (Array.isArray(meta.bmc1t) ? meta.bmc1t[0] : meta.bmc1t) || "",
                day1Description: (Array.isArray(meta.qw8va) ? meta.qw8va[0] : meta.qw8va) || "",
                day2Title: (Array.isArray(meta['4rh07']) ? meta['4rh07'][0] : meta['4rh07']) || "",
                day2Description: (Array.isArray(meta.zbjt5) ? meta.zbjt5[0] : meta.zbjt5) || "",
                day3Title: (Array.isArray(meta.ram1r) ? meta.ram1r[0] : meta.ram1r) || "",
                day3Description: (Array.isArray(meta.gycx9) ? meta.gycx9[0] : meta.gycx9) || "",
                day4Title: (Array.isArray(meta['2k4gy']) ? meta['2k4gy'][0] : meta['2k4gy']) || "",
                day4Description: (Array.isArray(meta.dyxd4) ? meta.dyxd4[0] : meta.dyxd4) || "",
                day5Title: (Array.isArray(meta.pen1b) ? meta.pen1b[0] : meta.pen1b) || "",
                day5Description: (Array.isArray(meta.ftll8) ? meta.ftll8[0] : meta.ftll8) || "",
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

        // Helper to safely extract string value from meta field
        const getMetaString = (value: string | string[] | number | undefined): string => {
            if (Array.isArray(value)) return String(value[0] || '');
            return String(value || '');
        };

        return {
            id: item.id,
            name: item.name || "",
            // Category Slug: prefer 'bhb5u' (short code) -> 'xxa5l' (full name) -> generic fallback
            categorySlug: getMetaString(meta.bhb5u || meta.xxa5l || "").toLowerCase(),
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

            // Table display fields
            workshopHeading: (Array.isArray(meta.n9958) ? meta.n9958[0] : meta.n9958) || "",
            mentorName: (Array.isArray(meta['1btvm']) ? meta['1btvm'][0] : meta['1btvm']) || "",
            schedule: (Array.isArray(meta['37m4n']) ? meta['37m4n'][0] : meta['37m4n']) || "",
            duration: (Array.isArray(meta.xsu59) ? meta.xsu59[0] : meta.xsu59) || "",
            tagline: (Array.isArray(meta.sodgf) ? meta.sodgf[0] : meta.sodgf) || "",
            registrationEndDateRaw: (Array.isArray(meta.ryr77) ? meta.ryr77[0] : meta.ryr77) || "",
            programStartDate: (Array.isArray(meta['37m4n']) ? meta['37m4n'][0] : meta['37m4n']) || "",
            programEndDate: (Array.isArray(meta.ca8o8) ? meta.ca8o8[0] : meta.ca8o8) || "",
            aboutCourse: (Array.isArray(meta['6c22m']) ? meta['6c22m'][0] : meta['6c22m']) || "",
            workshopObjectives: (Array.isArray(meta.q3b72) ? meta.q3b72[0] : meta.q3b72) || "",
            // Workshop Structure
            day1Title: (Array.isArray(meta.bmc1t) ? meta.bmc1t[0] : meta.bmc1t) || "",
            day1Description: (Array.isArray(meta.qw8va) ? meta.qw8va[0] : meta.qw8va) || "",
            day2Title: (Array.isArray(meta['4rh07']) ? meta['4rh07'][0] : meta['4rh07']) || "",
            day2Description: (Array.isArray(meta.zbjt5) ? meta.zbjt5[0] : meta.zbjt5) || "",
            day3Title: (Array.isArray(meta.ram1r) ? meta.ram1r[0] : meta.ram1r) || "",
            day3Description: (Array.isArray(meta.gycx9) ? meta.gycx9[0] : meta.gycx9) || "",
            day4Title: (Array.isArray(meta['2k4gy']) ? meta['2k4gy'][0] : meta['2k4gy']) || "",
            day4Description: (Array.isArray(meta.dyxd4) ? meta.dyxd4[0] : meta.dyxd4) || "",
            day5Title: (Array.isArray(meta.pen1b) ? meta.pen1b[0] : meta.pen1b) || "",
            day5Description: (Array.isArray(meta.ftll8) ? meta.ftll8[0] : meta.ftll8) || "",
        };

    } catch (error) {
        console.error("Error fetching workshop:", error);
        return null;
    }
}

export async function fetchWorkshopByName(name: string): Promise<Workshop | null> {
    // Fetch all workshops and find the one with matching name
    const allWorkshops = await fetchWorkshops();

    console.log(`fetchWorkshopByName: Looking for '${name}'`);
    console.log(`fetchWorkshopByName: Available names:`, allWorkshops.map(w => w.name).join(", "));

    const workshop = allWorkshops.find(w => w.name === name);

    if (!workshop) {
        console.log(`fetchWorkshopByName: Workshop '${name}' NOT FOUND. Trying case-insensitive match...`);
        // Fallback 1: Try case-insensitive comparison
        const looseMatch = allWorkshops.find(w => w.name?.toLowerCase() === name.toLowerCase());
        if (looseMatch) {
            console.log(`fetchWorkshopByName: Found '${looseMatch.name}' via case-insensitive match for '${name}'`);
            return looseMatch;
        }

        // Fallback 2: Try matching by ID (string conversion)
        console.log(`fetchWorkshopByName: Trying ID match for '${name}'...`);
        const idMatch = allWorkshops.find(w => String(w.id) === name);
        if (idMatch) {
            console.log(`fetchWorkshopByName: Found '${idMatch.name}' via ID match for '${name}'`);
            return idMatch;
        }
    }

    return workshop || null;
}

