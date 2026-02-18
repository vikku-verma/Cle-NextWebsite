
import { BlogPost, WPCategory, WPTag } from "@/lib/types";

const BLOG_API_URL = process.env.BLOG_API_URL;
const CATEGORIES_API_URL = process.env.CATEGORIES_API_URL;
const TAGS_API_URL = process.env.TAGS_API_URL;

const username = process.env.WP_USER;
const appPassword = process.env.WP_APP_PASSWORD;

function getAuthHeader(): Record<string, string> {
    if (username && appPassword) {
        return {
            'Authorization': 'Basic ' + Buffer.from(`${username}:${appPassword}`).toString('base64')
        };
    }
    return {};
}

export async function fetchBlogs({
    page = 1,
    per_page = 9,
    search,
    category,
    tag
}: {
    page?: number;
    per_page?: number;
    search?: string;
    category?: number;
    tag?: number;
} = {}): Promise<{ posts: BlogPost[]; totalPages: number }> {
    if (!BLOG_API_URL) {
        console.error("fetchBlogs: BLOG_API_URL is not defined");
        return { posts: [], totalPages: 0 };
    }

    try {
        const url = new URL(BLOG_API_URL);
        url.searchParams.append("_embed", "true");
        url.searchParams.append("page", page.toString());
        url.searchParams.append("per_page", per_page.toString());

        if (search) url.searchParams.append("search", search);
        if (category) url.searchParams.append("categories", category.toString());
        if (tag) url.searchParams.append("tags", tag.toString());

        const res = await fetch(url.toString(), {
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 } // ISR: Revalidate every 60 seconds
        });

        if (!res.ok) {
            console.error(`fetchBlogs: Failed to fetch: ${res.status} ${res.statusText}`);
            return { posts: [], totalPages: 0 };
        }

        const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "0");
        const posts = await res.json();

        return { posts, totalPages };
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return { posts: [], totalPages: 0 };
    }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!BLOG_API_URL) {
        console.error("fetchPostBySlug: BLOG_API_URL is not defined");
        return null;
    }

    try {
        const url = new URL(BLOG_API_URL);
        url.searchParams.append("_embed", "true");
        url.searchParams.append("slug", slug);

        const res = await fetch(url.toString(), {
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });

        if (!res.ok) return null;

        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}

export async function fetchCategories(): Promise<WPCategory[]> {
    if (!CATEGORIES_API_URL) {
        console.error("fetchCategories: CATEGORIES_API_URL is not defined");
        return [];
    }

    try {
        const url = new URL(CATEGORIES_API_URL);
        url.searchParams.append("per_page", "100");
        url.searchParams.append("hide_empty", "true"); // Only show categories with posts

        const res = await fetch(url.toString(), {
            headers: { ...getAuthHeader() },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export async function fetchTags(): Promise<WPTag[]> {
    if (!TAGS_API_URL) {
        console.error("fetchTags: TAGS_API_URL is not defined");
        return [];
    }

    try {
        const url = new URL(TAGS_API_URL);
        url.searchParams.append("per_page", "100");
        url.searchParams.append("hide_empty", "true");

        const res = await fetch(url.toString(), {
            headers: { ...getAuthHeader() },
            next: { revalidate: 3600 }
        });

        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
}
