import { LoadableImage } from "@/components/ui/LoadableImage";
import { PriceDropdown } from "@/components/products/workshops/PriceDropdown";
import { fetchWorkshopById } from "@/lib/api/workshops";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

interface WorkshopPageProps {
    params: {
        categorySlug: string;
        workshopId: string;
    };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
    const workshop = await fetchWorkshopById(params.workshopId);
    if (!workshop) {
        return {
            title: "Workshop Not Found | CLE",
        };
    }
    return {
        title: `${workshop.title} | CLE Workshop`,
        description: workshop.description ? workshop.description.slice(0, 160) : "Join this workshop on CLE.",
    };
}

export default async function WorkshopDetailPage({ params }: WorkshopPageProps) {
    const { categorySlug, workshopId } = params;
    const workshop = await fetchWorkshopById(workshopId);

    if (!workshop) {
        notFound();
    }

    const formattedDate = workshop.date
        ? (isNaN(new Date(workshop.date).getTime())
            ? workshop.date
            : new Date(workshop.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))
        : null;

    return (
        <main className="min-h-screen bg-black text-zinc-100 pb-20 pt-24">
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />
            <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
                {/* Breadcrumb - Minimal */}
                <Link
                    href={`/products/workshops/${categorySlug}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-yellow-500 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>Back to {categorySlug.toUpperCase()}</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Image Card (Small & Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-3xl opacity-0 lg:opacity-100 transition-opacity" />

                            <div className="relative aspect-[3/4] w-full group">
                                {/* Image Container - with overflow hidden for rounded corners */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                                    <LoadableImage
                                        src={workshop.image || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"}
                                        fallbackSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"
                                        alt={workshop.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                                </div>

                                {/* Floating Price Badge - Outside overflow:hidden container */}
                                <div className="absolute bottom-6 left-6 right-6 z-30">
                                    <div className="flex items-center justify-between backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/10 shadow-lg">
                                        <PriceDropdown
                                            pricing={workshop.pricing}
                                            defaultDisplayPrice={workshop.price || ""}
                                        />
                                        <button className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-lg transition-transform hover:scale-110 active:scale-95">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8 flex flex-col">

                        {/* Meta Badges */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 uppercase tracking-widest">
                                {categorySlug}
                            </span>
                            {formattedDate && (
                                <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-medium text-yellow-500 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {formattedDate}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-heading">
                            {workshop.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-zinc-800/50">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center shrink-0">
                                <User className="w-6 h-6 text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">Instructor</p>
                                <p className="text-white font-medium">{workshop.author}</p>
                            </div>
                        </div>

                        {/* Action Area for Mobile (Visible only on small screens) */}
                        <div className="lg:hidden mb-10">
                            <button className="w-full py-4 bg-[#7A5C2E] hover:bg-[#5F4520] text-white font-bold rounded-xl text-lg shadow-lg shadow-[#7A5C2E]/20 transition-all">
                                Register Now
                            </button>
                        </div>

                        {/* Description Prose */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-2xl font-bold text-white mb-4">About this Workshop</h3>
                            <div className="text-zinc-400 leading-relaxed space-y-4">
                                <div dangerouslySetInnerHTML={{ __html: workshop.description }} />
                                {!workshop.description && (
                                    <p className="italic opacity-50">No description provided.</p>
                                )}
                            </div>
                        </div>


                        {/* Important Dates Section */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Workshop Date Card */}
                            {(workshop.workshopStartDate || workshop.workshopEndDate) && (
                                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors group/card">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-[#7A5C2E]/10 group-hover/card:bg-[#7A5C2E]/20 transition-colors">
                                            <Calendar className="w-5 h-5 text-[#7A5C2E]" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">Registration Schedule</h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                                            <span className="text-zinc-500 text-sm">Starts On</span>
                                            <span className="text-white font-medium">
                                                {workshop.workshopStartDate ? new Date(workshop.workshopStartDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "TBA"}
                                            </span>
                                        </div>
                                        {workshop.workshopEndDate && (
                                            <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                                                <span className="text-zinc-500 text-sm">Ends On</span>
                                                <span className="text-white font-medium">
                                                    {new Date(workshop.workshopEndDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Registration Date Card */}
                            {(workshop.registrationStartDate || workshop.registrationEndDate) && (
                                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors group/card">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-[#7A5C2E]/10 group-hover/card:bg-[#7A5C2E]/20 transition-colors">
                                            <Clock className="w-5 h-5 text-[#7A5C2E]" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">Workshop Schedule</h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                                            <span className="text-zinc-500 text-sm">Opening Date</span>
                                            <span className="text-white font-medium">
                                                {workshop.registrationStartDate ? new Date(workshop.registrationStartDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "Open Now"}
                                            </span>
                                        </div>
                                        {workshop.registrationEndDate && (
                                            <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                                                <span className="text-zinc-500 text-sm">Closing Date</span>
                                                <span className="text-white font-medium">
                                                    {new Date(workshop.registrationEndDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* What you'll learn (Mockup/Placeholder if enabled later) */}
                        {/* 
                        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                            <h4 className="text-lg font-semibold text-white mb-4">You will learn</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[1,2,3,4].map((i) => (
                                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>Key takeaway point matches the workshop content.</span>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                        */}

                        {/* Register Button (Desktop) */}
                        <div className="hidden lg:block mt-12 pt-8 border-t border-zinc-800/50">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-zinc-500 text-sm">Limited seats available</span>
                                    <span className="text-white font-medium">Registration closes soon</span>
                                </div>
                                <button className="px-10 py-4 bg-[#7A5C2E] hover:bg-[#5F4520] text-white font-bold rounded-xl text-lg shadow-lg shadow-[#7A5C2E]/20 transition-all transform hover:scale-105 active:scale-95">
                                    Register Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
