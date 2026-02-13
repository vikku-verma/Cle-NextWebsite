
import Link from "next/link";
import { ChevronRight, Download, CheckIcon } from "lucide-react";
import { fetchWorkshopByName } from "@/lib/api/workshops";
import { notFound } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer";
import { formatDateRange, getWorkshopStatus } from "@/lib/utils/date";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface PageProps {
    params: {
        categorySlug: string;
        workshopSlug: string;
    };
}

export default async function WorkshopDetailPage({ params }: PageProps) {
    const { categorySlug, workshopSlug } = params;

    // Fetch workshop by name
    const workshop = await fetchWorkshopByName(workshopSlug);

    if (!workshop) {
        notFound();
    }

    const workshopName = workshop.workshopHeading || workshop.title;

    const tagline = workshop.tagline || workshop.description;

    // Get workshop status using utility function
    const status = getWorkshopStatus(workshop.programStartDate, workshop.programEndDate);

    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-12 md:py-20 relative overflow-hidden -mt-24 pt-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/90" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Content */}
                        <div>
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-8">
                                <Link href="/" className="hover:text-[#92400e] transition-colors">
                                    Home
                                </Link>
                                <ChevronRight className="w-3 h-3" />
                                <Link href="/products/workshops" className="hover:text-[#92400e] transition-colors">
                                    Workshops
                                </Link>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-[#92400e] line-clamp-1">{workshopName}</span>
                            </nav>

                            {/* Workshop Status Badge */}
                            <div className={`inline - block ${status.className} text - white text - [10px] font - black uppercase tracking - widest px - 4 py - 1.5 rounded - full mb - 8 shadow - lg`}>
                                {status.text}
                            </div>

                            {/* Workshop Name */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading leading-[1.1] text-white">
                                {workshopName}
                            </h1>

                            {/* Tagline */}
                            <p className="text-[#cbd5e1] text-lg md:text-xl mb-10 leading-relaxed italic border-l-4 border-[#f59e0b] pl-6 font-medium">
                                {tagline}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                <button className="bg-gradient-to-r from-[#92400e] to-[#78350f] text-white px-10 py-4 rounded-lg font-['Plus_Jakarta_Sans'] font-extrabold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-amber-900/30">
                                    Secure Your Spot
                                </button>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-lg font-['Plus_Jakarta_Sans'] font-extrabold text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center gap-2">
                                    <Download className="w-4 h-4" /> Download Brochure
                                </button>
                            </div>

                            {/* Countdown Timer */}
                            {(workshop.registrationEndDateRaw || true) && (
                                <div>
                                    <CountdownTimer
                                        endDate={workshop.registrationEndDateRaw || new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString()}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative flex justify-center items-center h-full">
                            {workshop.heroImage ? (
                                <div className="relative h-[80%] w-auto max-w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={workshop.heroImage}
                                        alt={workshopName}
                                        className="h-full w-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ) : (
                                // Fallback if no image is provided
                                <div className="h-[80%] w-full rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <p className="text-slate-500 font-medium">No Image Available</p>
                                </div>
                            )}

                            {/* Decorative Elements behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#f59e0b]/20 to-[#92400e]/20 rounded-full filter blur-[80px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About This Course Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - About & Objectives */}
                    <div className="lg:col-span-2">
                        {/* About This Course */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-extrabold text-[#0f172a] font-heading mb-6">
                                About This Course
                            </h2>
                            {workshop.aboutCourse && (
                                <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                                    {workshop.aboutCourse}
                                </div>
                            )}
                        </div>


                        {/* Workshop Objectives */}
                        {workshop.workshopObjectives && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-extrabold text-[#0f172a] font-heading italic">
                                    Workshop Objectives
                                </h3>
                                <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                                    {workshop.workshopObjectives}
                                </div>
                            </div>
                        )}

                        {/* Workshop Structure */}
                        {(() => {
                            // Build array of days from API data
                            const days = [
                                { title: workshop.day1Title, description: workshop.day1Description },
                                { title: workshop.day2Title, description: workshop.day2Description },
                                { title: workshop.day3Title, description: workshop.day3Description },
                                { title: workshop.day4Title, description: workshop.day4Description },
                                { title: workshop.day5Title, description: workshop.day5Description },
                            ].filter(day => day.title && day.title.trim() !== '');

                            if (days.length === 0) return null;

                            return (
                                <div>
                                    <h3 className="text-2xl font-extrabold text-[#0f172a] font-heading mb-6">
                                        Workshop Structure
                                    </h3>
                                    <div className="space-y-4">
                                        {days.map((day, index) => (
                                            <details
                                                key={index}
                                                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all duration-300 overflow-hidden"
                                            >
                                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-slate-400 font-medium text-sm">
                                                            Day {index + 1}:
                                                        </span>
                                                        <span className="text-[#0f172a] font-bold text-base">
                                                            {day.title}
                                                        </span>
                                                    </div>
                                                    <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300 ease-out text-2xl">
                                                        +
                                                    </span>
                                                </summary>
                                                {day.description && day.description.trim() !== '' && (
                                                    <div className="mt-4 pt-4 border-t border-slate-200 text-slate-600 text-sm leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-2 duration-300">
                                                        {day.description}
                                                    </div>
                                                )}
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>

                    {/* Right Column - Workshop Details Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Workshop Details Card */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                                <h3 className="text-xl font-extrabold text-[#0f172a] font-heading mb-6">
                                    Workshop Details
                                </h3>
                                <div className="space-y-5">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Mode</p>
                                        <p className="text-sm font-semibold text-[#0f172a]">Virtual / Online</p>
                                    </div>
                                    {workshop.level && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Level</p>
                                            <p className="text-sm font-semibold text-[#0f172a]">{workshop.level}</p>
                                        </div>
                                    )}
                                    {workshop.duration && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Duration</p>
                                            <p className="text-sm font-semibold text-[#0f172a]">{workshop.duration}</p>
                                        </div>
                                    )}
                                    {(workshop.programStartDate || workshop.programEndDate) && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Schedule</p>
                                            <p className="text-sm font-semibold text-[#0f172a]">
                                                {formatDateRange(workshop.programStartDate, workshop.programEndDate)}
                                            </p>
                                        </div>
                                    )}
                                    {workshop.registrationEndDateRaw && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Registration Deadline</p>
                                            <p className="text-sm font-semibold text-red-600">{workshop.registrationEndDateRaw}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Fee Structure Card */}
                            <div className="bg-[#0f172a] rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-extrabold text-white font-heading mb-6 text-center">
                                    Fee Structure
                                </h3>
                                <div className="space-y-4">
                                    {workshop.fees && workshop.fees.length > 0 ? (
                                        workshop.fees.map((fee, index) => (
                                            <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0">
                                                <span className="text-sm uppercase tracking-wider font-bold text-slate-400">{fee.category}</span>
                                                <div className="text-right">
                                                    <Select defaultValue="inr">
                                                        <SelectTrigger className="w-[140px] h-8 bg-slate-800 border-slate-700 text-white text-xs">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                                                            <SelectItem value="inr" className="text-xs focus:bg-slate-700 focus:text-white cursor-pointer">
                                                                <span className="flex items-center gap-2">
                                                                    <span>🇮🇳</span>
                                                                    <span className="font-bold">₹{fee.inr}</span>
                                                                </span>
                                                            </SelectItem>
                                                            {fee.usd && (
                                                                <SelectItem value="usd" className="text-xs focus:bg-slate-700 focus:text-white cursor-pointer">
                                                                    <span className="flex items-center gap-2">
                                                                        <span>🇺🇸</span>
                                                                        <span className="font-bold">${fee.usd}</span>
                                                                    </span>
                                                                </SelectItem>
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm uppercase tracking-wider font-bold text-slate-400">Standard</span>
                                            <span className="text-2xl font-black text-[#f59e0b]">
                                                {workshop.price ? `₹${workshop.price}` : "Contact for Pricing"}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* What You Will Gain Card */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                                <h3 className="text-xl font-extrabold text-[#0f172a] font-heading mb-6">
                                    What you will gain?
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Live & recorded sessions",
                                        "e-Certificate upon completion",
                                        "Post-workshop query support",
                                        "Publish your Manuscript"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckIcon className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
