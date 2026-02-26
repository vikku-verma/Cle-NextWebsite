// Define exact pricing tiers to be shared between frontend (display) and backend (secure calculation)

export const PRICING_DATA = {
    author: {
        "Students": { inr: 1399, usd: 75 },
        "Research Scholar & Post-Doctoral": { inr: 1699, usd: 80 },
        "Faculty Member": { inr: 2199, usd: 85 },
        "Professional": { inr: 2599, usd: 120 },
    },
    attendee: {
        "Students": { inr: 999, usd: 65 },
        "Research Scholar & Post-Doctoral": { inr: 1199, usd: 70 },
        "Faculty Member": { inr: 1399, usd: 75 },
        "Professional": { inr: 2199, usd: 100 },
    }
} as const;

export type ParticipantCategory = keyof typeof PRICING_DATA.author;

export function calculateRegistrationPrice(
    region: "india" | "international",
    category: string,
    presentationType: "attendee" | "paper_presentation" | "poster_presentation",
    delegates: number
) {
    if (!category || delegates < 1) {
        return { amount: 0, currency: region === "india" ? "INR" : "USD" };
    }

    const isAuthor = presentationType === "paper_presentation" || presentationType === "poster_presentation";
    const pricingTier = isAuthor ? PRICING_DATA.author : PRICING_DATA.attendee;

    if (!(category in pricingTier)) {
        throw new Error("Invalid pricing category");
    }

    const safeCategory = category as ParticipantCategory;
    const basePrice = region === "india" ? pricingTier[safeCategory].inr : pricingTier[safeCategory].usd;
    const currency = region === "india" ? "INR" : "USD";

    return {
        amount: basePrice * delegates,
        currency,
    };
}
