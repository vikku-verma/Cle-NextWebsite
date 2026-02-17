import { z } from "zod";

export const ProductSchema = z.object({
    id: z.string().optional(), // Internal ID
    product_id: z.string().min(1, "Product ID is required").regex(/^[A-Za-z0-9-]+$/, "Alphanumeric and dashes only"),
    product_name: z.string().min(5, "Product Name must be at least 5 characters"),
    product_manager_name: z.string().min(1, "Manager Name is required"),
    product_manager_email: z.string().email("Invalid email address"),
    start_date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: "Invalid start date" }),
    end_date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: "Invalid end date" }),
    price_in_inr: z.coerce.number().min(0, "Price (INR) must be positive"),
    price_in_usd: z.coerce.number().min(0, "Price (USD) must be positive"),
    product_category: z.enum(["Journal", "Workshop", "Training Program", "Conference", "Mentorship", "Subscription"]),
    product_image: z.string().url("Invalid image URL"),
    about_product: z.string().min(20, "Please provide a detailed description"),
    keywords: z.array(z.string()).optional(),
}).refine((data) => {
    const start = new Date(data.start_date);
    const end = new Date(data.end_date);
    return end > start;
}, {
    message: "End date must be after start date",
    path: ["end_date"],
});

export const EventSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(5),
    description: z.string().min(10),
    date: z.string(),
    location: z.string(),
    ticket_price: z.number().min(0),
    capacity: z.number().int().positive(),
    banner_image: z.string().url().optional(),
    theme: z.string().optional(),
    speakers: z.array(z.object({
        name: z.string(),
        role: z.string(),
        image: z.string().optional(),
    })).optional(),
    agenda: z.array(z.object({
        time: z.string(),
        session: z.string(),
    })).optional(),
});

export const MentorshipSchema = z.object({
    id: z.string().optional(),
    mentor_name: z.string().min(2),
    expertise: z.array(z.string()),
    bio: z.string().min(20),
    hourly_rate: z.number().min(0).optional(),
    price: z.string(),
    session_format: z.string(),
    rating: z.number(),
    reviews_count: z.number(),
    availability: z.array(z.string()),
    image: z.string().url().optional(),
});

export type Product = z.infer<typeof ProductSchema>;
export type CLEEvent = z.infer<typeof EventSchema>;
