"use client";

import { WorkshopCategory } from "@/lib/law-journals";
import { ArrowRight, BookOpen, Calendar, Star, User } from "lucide-react";
import Link from "next/link";

interface JournalCardProps {
    journal: WorkshopCategory;
    viewMode: "grid" | "list";
}

export function JournalCard({ journal, viewMode }: JournalCardProps) {
    if (viewMode === "grid") {
        return (
            <Link
                href={`/journals/${journal.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full"
            >
                <div className="h-48 relative overflow-hidden bg-slate-100 shrink-0">
                    <img
                        src={journal.image}
                        alt={journal.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0f172a] tracking-wider uppercase shadow-sm">
                        Vol. {journal.id}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="mb-2 flex items-center gap-2 text-xs text-[#92400e] font-bold uppercase tracking-wider">
                        <BookOpen className="w-3 h-3" />
                        <span>Legal Journal</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#92400e] transition-colors line-clamp-2">
                        {journal.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {journal.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <span className="w-full text-center px-4 py-2 rounded-xl bg-slate-100 text-[#0f172a] text-sm font-bold group-hover:bg-[#92400e] group-hover:text-white transition-all">
                            Read Journal
                        </span>
                    </div>
                </div>
            </Link>
        );
    }

    // List View
    return (
        <Link
            href={`/journals/${journal.slug}`}
            className="group flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-900/30 transition-all"
        >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-[#92400e] uppercase tracking-widest">
                        Legal Journal
                    </span>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        Vol. {journal.id}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#92400e] transition-colors line-clamp-1">{journal.title}</h3>
                <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                    {journal.description}
                </p>
            </div>
            <div className="pr-4 text-right">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-amber-900/20 group-hover:text-[#92400e] transition-all">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
