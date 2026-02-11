import React from "react";
import Link from "next/link";
import { ChevronRight, Filter } from "lucide-react";
import { fetchWorkshops } from "@/lib/api/workshops";
import WorkshopList from "../WorkshopList";
import { LAW_JOURNALS } from "@/lib/law-journals";

export const dynamic = "force-dynamic";

interface PageProps {
    params: {
        categorySlug: string;
    };
}

export default async function JournalWorkshopsPage({ params }: PageProps) {
    const allWorkshops = await fetchWorkshops();
    const { categorySlug } = params;

    // Filter workshops by categorySlug
    const workshops = allWorkshops.filter(
        (w) => w.categorySlug.toLowerCase() === categorySlug.toLowerCase()
    );

    const journal = LAW_JOURNALS.find((j) => j.slug === categorySlug.toLowerCase());
    const title = journal?.title || "Workshops";

    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
            {/* Header Section */}
            <section className="bg-[#0f172a] text-white py-12 relative overflow-hidden -mt-24 pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f59e0b_0%,transparent_40%)] opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-6">
                        <Link href="/" className="hover:text-amber-500 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-amber-500 transition-colors">
                            Products
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link
                            href="/products/workshops"
                            className="hover:text-amber-500 transition-colors"
                        >
                            Workshops
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-amber-500">{journal?.slug ? journal.slug.toUpperCase() : "Journal"}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-stretch">
                        {/* Journal Image */}
                        <div className="relative group rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                            {journal?.image ? (
                                <>
                                    <img
                                        src={journal.image}
                                        alt={title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-900">
                                    <span className="text-xs uppercase tracking-widest font-bold">No Image Available</span>
                                </div>
                            )}
                        </div>

                        {/* Journal Info */}
                        <div className="flex flex-col justify-center h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest w-fit mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                Official Journal Partner
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 font-heading leading-tight tracking-tight text-white">
                                {title}
                            </h1>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 border-l-2 border-amber-500/30 pl-4">
                                {journal?.description || "Browse upcoming workshops, training sessions, and events organized by this journal."}
                            </p>

                            <div className="flex items-center gap-8 mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-white">{workshops.length}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Active Workshops</span>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-white">Online</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Delivery Mode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Available Workshops Table */}
            <section className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] font-heading mb-2">
                        Available Workshops
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                </div>

                {workshops.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                        <p className="text-slate-500 text-lg">No workshops available at the moment.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        {/* Table Header */}
                        <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr] gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                Workshop Title
                            </div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                Instructor
                            </div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                Schedule
                            </div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                Duration
                            </div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                Actions
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-slate-100">
                            {workshops.map((workshop) => (
                                <div
                                    key={workshop.id}
                                    className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr] gap-4 px-6 py-6 hover:bg-slate-50 transition-colors items-center"
                                >
                                    {/* Workshop Title */}
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] text-base mb-1">
                                            {workshop.workshopHeading || workshop.title}
                                        </h3>
                                    </div>

                                    {/* Instructor */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                                            {workshop.mentorName ? workshop.mentorName.charAt(0).toUpperCase() : 'G'}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-700">
                                            {workshop.mentorName || workshop.author || 'Guest'}
                                        </span>
                                    </div>

                                    {/* Schedule */}
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium">
                                            {workshop.schedule || workshop.workshopStartDate || 'TBA'}
                                        </span>
                                    </div>

                                    {/* Duration */}
                                    <div className="text-sm font-bold text-slate-700">
                                        {workshop.duration || 'N/A'}
                                    </div>

                                    {/* Actions */}
                                    <div>
                                        <Link
                                            href={`/products/workshops/${categorySlug}/${workshop.name || workshop.id}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-xs font-black uppercase tracking-wider rounded-lg hover:bg-amber-500 transition-all"
                                        >
                                            View Details
                                            <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
