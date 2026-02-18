export interface Workshop {
    id: string | number;
    name?: string; // Raw name from API for URL routing
    categorySlug: string; // Mapped from 'name'
    data: WordPressFormEntry; // Raw data from API for flexibility
    // Normalized fields for UI
    title: string;
    description: string;
    date?: string;
    price?: string;
    author?: string;
    image?: string;
    time?: string;
    pricing?: {
        inr?: number;
        usd?: number;
    };
    workshopStartDate?: string;
    workshopEndDate?: string;
    registrationStartDate?: string;
    registrationEndDate?: string;
    // New fields for table display
    workshopHeading?: string; // from meta.n9958
    mentorName?: string; // from meta['1btvm']
    schedule?: string; // from meta['37m4n']
    duration?: string; // from meta.xsu59
    tagline?: string; // from meta.sodgf
    registrationEndDateRaw?: string; // from meta.ryr77 for countdown timer
    programStartDate?: string; // from meta['37m4n'] for status badge
    programEndDate?: string; // from meta.ca8o8 for status badge
    aboutCourse?: string; // from meta['6c22m'] for About This Course section
    workshopObjectives?: string; // from meta.q3b72 for Workshop Objectives section
    // Workshop Structure fields (5 days max)
    day1Title?: string; // from meta.bmc1t
    day1Description?: string; // from meta.qw8va
    day2Title?: string; // from meta['4rh07']
    day2Description?: string; // from meta.zbjt5
    day3Title?: string; // from meta.ram1r
    day3Description?: string; // from meta.gycx9
    day4Title?: string; // from meta['2k4gy']
    day4Description?: string; // from meta.dyxd4
    day5Title?: string; // from meta.pen1b
    day5Description?: string; // from meta.ftll8
    heroImage?: string; // from meta.mrq1c
    level?: string; // from meta.h03zq
    fees?: FeeStructure[]; // from meta.mb8ge
}

export interface FeeStructure {
    category: string; // jyrux
    inr: string; // pdu4i
    usd: string; // ysfzk
}

// WordPress/Formidable Forms API response structure
export interface WordPressFormEntry {
    id: string | number;
    name?: string;
    item_name?: string;
    created_at?: string;
    meta?: Record<string, string | string[] | number | undefined>;
}

export interface WorkshopCategory {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    isNew?: boolean;
    issues?: number;
    abbreviation?: string;
    domain?: string;
    eIssn?: string;
    since?: string;
    indexing?: string;
    plumx?: boolean;
}

export interface Mentor {
    id: string | number;
    mentorId: string;
    empId: string;
    visibility: "Public" | "Private";
    name: string;
    email: string;
    phone: string;
    profilePic: string;
    signature: string;
    bio: string;
    qualification: string;
    passingYear: string;
    affiliation: string;
    department: string;
    gstNo: string;
    cinNo: string;
    skills: string[];
    subject: string;
    dataType: string;
    status: "Active" | "Inactive";
    keywords: string[];
    preferredFeed: string;
    empName: string;
    slug: string;
    designation: string;
}

export type Product = {
    id?: string;
    product_id: string;
    product_name: string;
    product_manager_name: string;
    product_manager_email: string;
    start_date: string;
    end_date: string;
    price_in_inr: number;
    price_in_usd: number;
    product_category: "Journal" | "Workshop" | "Training Program" | "Conference" | "Mentorship" | "Subscription";
    product_image: string;
    about_product: string;
    keywords?: string[];
};

export type CLEEvent = {
    id?: string;
    title: string;
    description: string;
    date: string;
    location: string;
    ticket_price: number;
    capacity: number;
    banner_image?: string;
    theme?: string;
    speakers?: {
        name: string;
        role: string;
        image?: string;
    }[];
    agenda?: {
        time: string;
        session: string;
    }[];
};

export interface BlogPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: "open" | "closed";
    ping_status: "open" | "closed";
    sticky: boolean;
    template: string;
    format: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
    meta: any;
    categories: number[];
    tags: number[];
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        author?: Array<{
            name: string;
            avatar_urls?: Record<string, string>;
        }>;
        "wp:term"?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

export interface WPCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "category";
    parent: number;
    meta: any;
}

export interface WPTag {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "post_tag";
    meta: any;
}
