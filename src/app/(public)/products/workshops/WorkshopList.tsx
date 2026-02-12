"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LayoutGrid, List as ListIcon, Star, Calendar, ArrowRight, User } from "lucide-react";
import { Workshop } from "@/lib/types";
import { LAW_JOURNALS } from "@/lib/law-journals";

interface WorkshopListProps {
    workshops: Workshop[];
}

export default function WorkshopList({ workshops, variant = "journal" }: { workshops: Workshop[], variant?: "journal" | "workshop" }) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <div className="container mx-auto px-6">
            {/* View Toggle */}
            <div className="flex justify-end mb-8">
                <div className="flex items-center bg-white/5 border border-slate-200 p-1 rounded-xl backdrop-blur-sm shadow-sm">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold ${viewMode === "grid"
                            ? "bg-[#92400e] text-white shadow-md"
                            : "text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        <LayoutGrid className="w-4 h-4" /> Grid
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold ${viewMode === "list"
                            ? "bg-[#92400e] text-white shadow-md"
                            : "text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        <ListIcon className="w-4 h-4" /> List
                    </button>
                </div>
            </div>

            {/* Content */}
            {workshops.length === 0 ? (
                <div className="text-center py-20 text-slate-400">
                    <p className="text-xl">No workshops found at the moment.</p>
                </div>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {workshops.map((workshop) => {
                        const journal = LAW_JOURNALS.find((j) => j.slug === workshop.categorySlug);

                        // Decide what to show based on variant
                        const isJournalView = variant === "journal";

                        const displayTitle = isJournalView ? (journal?.title || workshop.title) : workshop.title;
                        const displayDesc = isJournalView ? (journal?.description || workshop.description) : workshop.description;
                        const displayImage = isJournalView ? (journal?.image || workshop.image) : workshop.image;
                        //const displayTag = journal?.title ? journal.title.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 6) : "Workshop";

                        // Link destination
                        // Link destination
                        const linkHref = isJournalView
                            ? `/products/workshops/${workshop.categorySlug || 'general'}`
                            : `/products/workshops/${workshop.categorySlug || 'general'}/${workshop.id}`;

                        return (
                            <Link
                                key={workshop.id}
                                href={linkHref}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="h-48 relative overflow-hidden bg-slate-100">
                                    {displayImage ? (
                                        <img
                                            src={displayImage}
                                            alt={displayTitle}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <Star className="w-12 h-12" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
                                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0f172a] tracking-wider uppercase shadow-sm">
                                        {displayTag}
                                    </div> */}
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-2 flex items-center gap-2 text-xs text-[#92400e] font-bold uppercase tracking-wider">
                                        {workshop.workshopStartDate && !isJournalView && (
                                            <>
                                                <Calendar className="w-3 h-3" />
                                                <span>{new Date(workshop.workshopStartDate).toLocaleDateString()}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#92400e] transition-colors line-clamp-2">
                                        {displayTitle}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {displayDesc || "No description available."}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        {isJournalView ? (
                                            <span className="w-full text-center px-4 py-2 rounded-xl bg-slate-100 text-[#0f172a] text-sm font-bold group-hover:bg-[#92400e] group-hover:text-white transition-all">
                                                Explore Workshops
                                            </span>
                                        ) : (
                                            <>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-slate-400 font-semibold uppercase">Price</span>
                                                    <span className="text-sm font-bold text-[#0f172a]">
                                                        {workshop.pricing?.inr ? `₹${workshop.pricing.inr}` : (workshop.pricing?.usd ? `$${workshop.pricing.usd}` : "Free")}
                                                    </span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0f172a] group-hover:bg-[#92400e] group-hover:text-white transition-all shadow-sm">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="space-y-4">
                    {workshops.map((workshop) => {
                        const journal = LAW_JOURNALS.find((j) => j.slug === workshop.categorySlug);
                        const isJournalView = variant === "journal";

                        const displayTitle = isJournalView ? (journal?.title || workshop.title) : workshop.title;
                        const displayDesc = isJournalView ? (journal?.description || workshop.description) : workshop.description;
                        const displayImage = isJournalView ? (journal?.image || workshop.image) : workshop.image;
                        const displayTag = journal?.title || workshop.categorySlug || "Workshop";

                        const linkHref = isJournalView
                            ? `/products/workshops/${workshop.categorySlug || 'general'}`
                            : `/products/workshops/${workshop.categorySlug || 'general'}/${workshop.id}`;

                        return (
                            <Link
                                key={workshop.id}
                                href={linkHref}
                                className="group flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-900/30 transition-all"
                            >
                                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                                    {displayImage ? (
                                        <img
                                            src={displayImage}
                                            alt={displayTitle}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <Star className="w-8 h-8" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-black text-[#92400e] uppercase tracking-widest">
                                            {displayTag}
                                        </span>
                                        {!isJournalView && (
                                            <>
                                                <div className="w-1 h-1 rounded-full bg-slate-300" />
                                                {workshop.author && (
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                                        <User className="w-3 h-3" /> {workshop.author}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0f172a]">{displayTitle}</h3>
                                    <p className="text-slate-500 text-sm mt-1 line-clamp-1">
                                        {displayDesc}
                                    </p>
                                </div>
                                <div className="pr-4 text-right">
                                    {isJournalView ? (
                                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-amber-900/20 group-hover:text-[#92400e] transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-sm font-bold text-[#0f172a] mb-1">
                                                {workshop.pricing?.inr ? `₹${workshop.pricing.inr}` : (workshop.pricing?.usd ? `$${workshop.pricing.usd}` : "Free")}
                                            </div>
                                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-amber-900/20 group-hover:text-[#92400e] transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
