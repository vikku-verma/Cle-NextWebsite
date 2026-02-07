export interface Workshop {
    id: string | number;
    categorySlug: string; // Mapped from 'name'
    data: any; // Raw data from API for flexibility
    // Normalized fields for UI
    title: string;
    description: string;
    date?: string;
    price?: string;
    author?: string;
    image?: string;
}

export interface WorkshopCategory {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    isNew?: boolean;
}
