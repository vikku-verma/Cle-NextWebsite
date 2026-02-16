
import React from "react";
import { WorkshopTableSkeleton } from "@/components/workshops/WorkshopSkeleton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Loading() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
            {/* Header Section Skeleton */}
            <section className="bg-[#0f172a] text-white py-12 relative overflow-hidden -mt-24 pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f59e0b_0%,transparent_40%)] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-6">
                        <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-amber-500 transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products/workshops" className="hover:text-amber-500 transition-colors">Workshops</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-amber-500">Loading...</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-stretch">
                        <div className="h-64 w-full bg-slate-800 rounded-xl animate-pulse" />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="h-4 w-32 bg-amber-500/20 rounded-full animate-pulse" />
                            <div className="h-10 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                            <div className="h-20 w-full bg-white/5 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <div className="h-10 w-64 bg-slate-200 rounded-lg animate-pulse mb-2" />
                    <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                </div>
                <WorkshopTableSkeleton />
            </section>
        </main>
    );
}
