"use client";

import { useState, useMemo, useEffect } from "react";
import { Workshop, WorkshopCategory } from "@/lib/types";
import { CategoryCard } from "./CategoryCard";
import { Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
// Added Button import if needed, though mostly using native <button> in the snippet provided by user. 
// I'll stick to the user's snippet logic but ensure imports are correct.

interface WorkshopsContainerProps {
    workshops: Workshop[];
    categories: WorkshopCategory[];
}

export function WorkshopsContainer({ workshops, categories }: WorkshopsContainerProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [showNewOnly, setShowNewOnly] = useState(false);



    // 1. Identify which categories are valid (have at least one workshop matching slug/name)
    const validCategorySlugs = useMemo(() => {
        const activeSlugs = new Set<string>();
        workshops.forEach(w => {
            // User Requirement: "Compare workshop.name with category.slug or category.name"
            if (w.categorySlug) {
                activeSlugs.add(w.categorySlug.toLowerCase());
            }
        });
        return activeSlugs;
    }, [workshops]);

    // 2. Filter categories to display
    const displayedCategories = useMemo(() => {
        // Start with ALL static categories
        let filtered = categories;

        // A. Filter by API presence (Logic: Render only those categories that match workshop name)
        filtered = filtered.filter(cat => {
            const catSlug = cat.slug.toLowerCase();
            const catTitle = cat.title.toLowerCase();
            // Check if the API has any workshop with this name/slug
            return validCategorySlugs.has(catSlug) || validCategorySlugs.has(catTitle);
        });

        // B. Filter by Search Query (Client-side interaction)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(cat =>
                cat.title.toLowerCase().includes(query) ||
                cat.description.toLowerCase().includes(query)
            );
        }

        // C. Filter by "New" Toggle
        if (showNewOnly) {
            filtered = filtered.filter(cat => cat.isNew);
        }

        return filtered;
    }, [categories, validCategorySlugs, searchQuery, showNewOnly]);


    // Calculate counts for display
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        workshops.forEach(w => {
            if (w.categorySlug) {
                const key = w.categorySlug.toLowerCase();
                counts[key] = (counts[key] || 0) + 1;
            }
        });
        return counts;
    }, [workshops]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* --- Hero Section (Simplified from OldStyle) --- */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2c241b] to-[#0f172a] text-white py-20 px-6 md:py-32 md:px-12 mb-12">
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Professional Law Journals
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Hands-on training programs designed to upskill legal professionals.
                    </p>
                </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-6 pb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="relative w-full md:w-96 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-[#7A5C2E] transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-zinc-700 rounded-xl leading-5 bg-card/50 text-foreground placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#7A5C2E] focus:border-[#7A5C2E] sm:text-sm transition-all shadow-lg"
                        />
                    </div>

                    <div className="flex items-center gap-4 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-800">
                        <button
                            onClick={() => setShowNewOnly(false)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!showNewOnly ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            All Categories
                        </button>
                        <button
                            onClick={() => setShowNewOnly(true)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${showNewOnly ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            New Categories
                        </button>
                    </div>
                </div>

                {displayedCategories.length === 0 ? (
                    <div className="text-center py-20 bg-muted/30 rounded-3xl border border-border/50">
                        <Filter className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-muted-foreground">No categories found</h3>
                        <p className="text-zinc-500 mt-2">
                            {workshops.length === 0
                                ? "We couldn't fetch any active workshops."
                                : "Workshops were fetched, but none matched your search filters."}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {displayedCategories.map((category, index) => (
                                <CategoryCard
                                    key={category.id}
                                    category={{
                                        ...category,
                                        count: categoryCounts[category.slug.toLowerCase()] || categoryCounts[category.slug.toLowerCase()] || 0
                                    }}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}
