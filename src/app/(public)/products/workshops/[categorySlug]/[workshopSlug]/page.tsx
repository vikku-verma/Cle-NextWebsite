import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { fetchWorkshopByName } from "@/lib/api/workshops";
import { notFound } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer";
import { getWorkshopStatus } from "@/lib/utils/date";

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
    console.log(`WorkshopDetailPage [${params.workshopSlug}]: Fetched Data:`, JSON.stringify(workshop, null, 2));
    const tagline = workshop.tagline || workshop.description;

    // Get workshop status using utility function
    const status = getWorkshopStatus(workshop.programStartDate, workshop.programEndDate);

    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-16 relative overflow-hidden -mt-24 pt-24">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/90" />

                <div className="container mx-auto px-6 relative z-10">
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
                        <span className="text-[#92400e]">{workshopName}</span>
                    </nav>

                    {/* Workshop Status Badge */}
                    <div className={`inline-block ${status.className} text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-lg`}>
                        {status.text}
                    </div>

                    {/* Workshop Name */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading leading-[1.1] max-w-4xl text-white">
                        {workshopName}
                    </h1>

                    {/* Tagline */}
                    <p className="text-[#cbd5e1] text-lg md:text-xl mb-10 max-w-3xl leading-relaxed italic border-l-4 border-[#f59e0b] pl-6 font-medium">
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
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Level</p>
                                        <p className="text-sm font-semibold text-[#0f172a]">Moderate</p>
                                    </div>
                                    {workshop.duration && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Duration</p>
                                            <p className="text-sm font-semibold text-[#0f172a]">{workshop.duration}</p>
                                        </div>
                                    )}
                                    {workshop.schedule && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Time</p>
                                            <p className="text-sm font-semibold text-[#0f172a]">{workshop.schedule}</p>
                                        </div>
                                    )}
                                    {workshop.registrationEndDateRaw && (
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Deadline</p>
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
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm uppercase tracking-wider font-bold text-slate-400">Student</span>
                                        <span className="text-2xl font-black text-[#f59e0b]">₹1799</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
