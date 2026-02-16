
import React from "react";
import { CategoryGridSkeleton } from "@/components/workshops/WorkshopSkeleton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Loading() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
            {/* Header Section Skeleton */}
            <section className="bg-[#0f172a] text-white py-16 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f59e0b_0%,transparent_40%)] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mb-6">
                        <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-amber-500 transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-amber-500">Explore Workshops</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading leading-tight">
                                Explore Specialized <span className="text-amber-500">Workshops</span>
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Loading workshop categories...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6">
                <CategoryGridSkeleton />
            </div>
        </main>
    );
}
