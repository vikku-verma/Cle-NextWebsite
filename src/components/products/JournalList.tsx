"use client";

import { useState } from "react";
import { LAW_JOURNALS } from "@/lib/law-journals";
import { JournalCard } from "@/components/products/JournalCard";
import { Input } from "@/components/ui/input";
import { LayoutGrid, List as ListIcon, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function JournalList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const filteredJournals = LAW_JOURNALS.filter((journal) =>
        journal.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 md:max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                        placeholder="Search journals..."
                        className="pl-9 bg-white border-slate-200 focus:border-amber-500 transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center bg-white/5 border border-slate-200 p-1 rounded-xl backdrop-blur-sm shadow-sm md:self-end">
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

            {/* Content Grid/List */}
            <div className={cn("min-h-[400px]")}>
                {filteredJournals.length > 0 ? (
                    viewMode === "grid" ? (
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <AnimatePresence mode="popLayout">
                                {filteredJournals.map((journal) => (
                                    <motion.div
                                        key={journal.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        layout
                                        transition={{ duration: 0.2 }}
                                    >
                                        <JournalCard journal={journal} viewMode="grid" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-t-lg border border-slate-200 shadow-sm bg-white">
                            <table className="w-full text-sm text-left text-slate-500">
                                <thead className="text-xs text-white uppercase bg-[#3b82f6]">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">SN</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Image</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Journals</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Issues</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Abbreviation</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Domain</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">e-ISSN</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Since</th>
                                        <th scope="col" className="px-4 py-3 font-bold border-r border-blue-400 last:border-0">Indexing</th>
                                        <th scope="col" className="px-4 py-3 font-bold">Plumx</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence mode="popLayout">
                                        {filteredJournals.map((journal, index) => (
                                            <motion.tr
                                                key={journal.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="bg-white border-b hover:bg-slate-50 transition-colors"
                                            >
                                                <td className="px-4 py-4 font-medium text-slate-900 border-r border-slate-100">{index + 1}</td>
                                                <td className="px-4 py-4 border-r border-slate-100">
                                                    <div className="w-12 h-16 overflow-hidden rounded shadow-sm border border-slate-100">
                                                        <img src={journal.image} alt={journal.title} className="w-full h-full object-cover" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 font-semibold text-slate-800 border-r border-slate-100 max-w-xs">{journal.title}</td>
                                                <td className="px-4 py-4 border-r border-slate-100">{journal.issues || 2}</td>
                                                <td className="px-4 py-4 border-r border-slate-100 uppercase">{journal.abbreviation || journal.slug}</td>
                                                <td className="px-4 py-4 border-r border-slate-100">{journal.domain || "Law"}</td>
                                                <td className="px-4 py-4 border-r border-slate-100 font-mono text-xs">{journal.eIssn || "2582-XXXX"}</td>
                                                <td className="px-4 py-4 border-r border-slate-100">{journal.since || "2018"}</td>
                                                <td className="px-4 py-4 border-r border-slate-100">
                                                    <div className="flex gap-1">
                                                        {index % 2 === 0 ? (
                                                            <div className="w-16 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center p-1" title="Google Scholar">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Scholar_logo.png" alt="Google Scholar" className="h-full object-contain opacity-80" />
                                                            </div>
                                                        ) : (
                                                            <span className="text-xs text-slate-400 italic">Indexed</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex justify-center">
                                                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                                            <div className="w-4 h-4 bg-purple-600 rounded-full animate-pulse" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    )
                ) : (
                    <div className="py-20 text-center text-slate-400">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                            <Search className="h-8 w-8 text-slate-300" />
                        </div>
                        <p className="text-xl">No journals found matching "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}
