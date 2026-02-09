import { fetchWorkshops } from "@/lib/api/workshops";
import { WorkshopCard } from "@/components/products/workshops/WorkshopCard";
import { LAW_JOURNALS } from "@/lib/law-journals";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: {
        categorySlug: string;
    };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: CategoryPageProps) {
    const { categorySlug } = params;
    const category = LAW_JOURNALS.find(c => c.slug === categorySlug);

    if (!category) {
        return { title: 'Category Not Found | CLE' };
    }

    return {
        title: `${category.title} Workshops | CLE`,
        description: category.description
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categorySlug } = params;

    // 1. Validate Category from Static File
    const category = LAW_JOURNALS.find(c => c.slug === categorySlug);
    if (!category) {
        notFound();
    }

    // 2. Fetch All Workshops (Real API)
    const workshops = await fetchWorkshops();

    // 3. Filter Workshops for this Category
    const categoryWorkshops = workshops.filter(w => {
        const wSlug = w.categorySlug ? w.categorySlug.toLowerCase() : "";
        return wSlug === category.slug.toLowerCase() || wSlug === category.title.toLowerCase();
    });

    return (
        <main className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-6 mb-12">
                <Link
                    href="/products/workshops"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Categories
                </Link>

                {/* Category Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 border-b border-zinc-800 pb-12">
                    <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative">
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            {category.title}
                        </h1>
                        <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                            {category.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800 self-start">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-sm font-medium text-white">
                                {categoryWorkshops.length} Active Workshop{categoryWorkshops.length === 1 ? "" : "s"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Workshops Grid Section */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
                        Available Workshops
                    </h2>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
                </div>

                {/* Workshops Grid */}
                {categoryWorkshops.length === 0 ? (
                    <div className="text-center py-20 bg-zinc-900/30 rounded-3xl border border-zinc-800/50">
                        <h3 className="text-xl font-medium text-zinc-300">No active workshops</h3>
                        <p className="text-zinc-500 mt-2">
                            There are currently no scheduled workshops for this category. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryWorkshops.map((workshop, index) => (
                            <WorkshopCard
                                key={workshop.id}
                                workshop={workshop}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
