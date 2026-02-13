"use client";

import { WorkshopCategory } from "@/lib/law-journals";
import { ArrowRight, BookOpen, Calendar, Star, User } from "lucide-react";
import Link from "next/link";

interface JournalCardProps {
    journal: WorkshopCategory;
    viewMode: "grid" | "list";
}

export function JournalCard({ journal, viewMode }: JournalCardProps) {
    const externalLink = journal.abbreviation
        ? `https://journals.stmjournals.com/${journal.abbreviation.toLowerCase()}`
        : "https://journals.stmjournals.com";

    if (viewMode === "grid") {
        return (
            <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <Link href={`/journals/${journal.slug}`} className="block h-48 relative overflow-hidden bg-slate-100 shrink-0">
                    <img
                        src={journal.image}
                        alt={journal.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0f172a] tracking-wider uppercase shadow-sm">
                        Vol. {journal.id}
                    </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                    <div className="mb-2 flex items-center gap-2 text-xs text-[#92400e] font-bold uppercase tracking-wider">
                        <BookOpen className="w-3 h-3" />
                        <span>Legal Journal</span>
                    </div>
                    <Link href={`/journals/${journal.slug}`}>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#92400e] transition-colors line-clamp-2">
                            {journal.title}
                        </h3>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {journal.description}
                    </p>

                    <div className="mt-auto">
                        <a
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#92400e] text-white text-xs font-black uppercase tracking-widest hover:bg-[#78350f] transition-all shadow-lg shadow-amber-900/10"
                        >
                            Visit Portal
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // List View
    return (
        <div className="group flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-900/30 transition-all">
            <Link href={`/journals/${journal.slug}`} className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </Link>
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
                <Link href={`/journals/${journal.slug}`}>
                    <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#92400e] transition-colors line-clamp-1">{journal.title}</h3>
                </Link>
                <p className="text-slate-500 text-sm mt-1 line-clamp-1 italic">
                    {journal.description.substring(0, 100)}...
                </p>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px]">
                <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#92400e] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#78350f] transition-all"
                >
                    Visit Portal
                    <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
}
