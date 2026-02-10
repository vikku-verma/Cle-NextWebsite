"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, Star, MapPin, Search, Filter, BookOpen, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

const journals = [
  {
    id: "jhrlp",
    name: "Journal of Human Rights Law and Practice",
    abbreviation: "JHRLP",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/5c0a9722-rights-law-and-practice-scaled.webp",
    description: "Journal of Human Rights Law and Practice throws light on the fundamental rights of a human being. In order to live with dignity, certain basic rights and freedom are necessary, which all human beings are entitled to. These basic rights are called Human Rights. Human rights belong to everyone, everywhere, regardless of nationality, sexuality, gender, race, religion or age. The foundation of modern human rights is the Universal Declaration of Human Rights (UDHR). This Journal of Human Rights Law and Practice invites research scholars, Practitioners, academicians and delegates who are interested in research work to have an eye view on both national and international perspectives related to Human Rights Law and the declarations that were adopted in 1948 by the United Nations General Assembly which have been integrated into national laws and international treaties in due course of time. The core values of the UDHR - human dignity, fairness, equality, non-discrimination - apply to everyone and everywhere."
  },
  {
    id: "jiprl",
    name: "Journal of Intellectual Property rights Law",
    abbreviation: "JIPRL",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/4c4d89b1-intellectual-property-rights-law-scaled.webp",
    description: "Deals with inventions, creations, and other intellectual and intangible types of property."
  },
  {
    id: "jcgibl",
    name: "Journal of Corporate Governance and International Business Law",
    abbreviation: "JCGIBL",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/edda8e42-corporate-governance-scaled.webp",
    description: "Deals with corporate governance and International business law."
  },
  {
    id: "jbil",
    name: "Journal of Banking and Insurance Law",
    abbreviation: "JBIL",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/7c2dffec-banking-insurance-law-scaled.webp",
    description: "Prepared under the aegis of eminent scholars, Legal experts, and attorneys."
  },
  {
    id: "njrel",
    name: "National Journal of Real Estate Law",
    abbreviation: "NJREL",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/0bdf25a3-real-estate-law-scaled.webp",
    description: "Involves anything dealing with real property (land) and ownership laws."
  },
  {
    id: "njel",
    name: "National Journal of Environmental law",
    abbreviation: "NJEL",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/912ed625-environmental-law-scaled.webp",
    description: "Covers reinforced plastics, polymer composites, and environmental research."
  },
  {
    id: "jtrf",
    name: "Journal of Taxation and Regulatory framework",
    abbreviation: "JTRF",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/05f036df-taxation-scaled.webp",
    description: "Explores challenges in the tax world contributed by law students and advocates."
  },
  {
    id: "jclj",
    name: "Journal of Constitutional Law and Jurisprudence",
    abbreviation: "JCLJ",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/82a2a4b0-constitutional-scaled.webp",
    description: "Deals with paramount law of the land and theoretical study of laws."
  }
];

const dummyWorkshops = [
  {
    id: "ws-101",
    title: "CRISPR-Cas Genome Editing: Tools & Techniques",
    description: "Empower Your Future with Precision Genome Editing. Master the entire workflow from guide RNA design to analyzing edited cells.",
    date: "Feb 14, 2026",
    instructor: "Dr. Sarah Chen",
    duration: "3 Days",
    level: "Moderate",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    slug: "crispr-cas-genome-editing",
    category: "Genetics"
  },
  {
    id: "ws-102",
    title: "Eco-Intelligence: AI for LCA & ESG Decision Systems",
    description: "From Manual Assessments to Intelligent Pipelines: Automating Carbon Accounting and Regulatory Compliance.",
    date: "Feb 28, 2026",
    instructor: "Gurpreet Kaur",
    duration: "3 Days",
    level: "Moderate",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    slug: "eco-intelligence-ai-lca",
    category: "AI & Law"
  },
  {
    id: "ws-103",
    title: "Advanced IP Litigation & Strategy",
    description: "Mastering the complexities of intellectual property disputes in the digital age.",
    date: "March 10, 2026",
    instructor: "Dr. Arvind Sharma",
    duration: "2 Days",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1589252106243-5ac26555ccfd?auto=format&fit=crop&q=80&w=1000",
    slug: "advanced-ip-litigation",
    category: "IP Law"
  },
  {
    id: "ws-104",
    title: "Blockchain for Legal Professionals",
    description: "Understanding smart contracts, decentralization, and the future of legal tech.",
    date: "March 22, 2026",
    instructor: "Michael Vane",
    duration: "1 Day",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    slug: "blockchain-legal",
    category: "Tech Law"
  },
  {
    id: "ws-105",
    title: "International Humanitarian Law Masterclass",
    description: "A deep dive into the laws of armed conflict and human rights protected by treaties.",
    date: "April 05, 2026",
    instructor: "Elena Rodriguez",
    duration: "5 Days",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
    slug: "ih-law-masterclass",
    category: "Human Rights"
  },
  {
    id: "ws-106",
    title: "Cyber Security Laws & Compliance",
    description: "Navigating the legal landscape of data protection and cyber warfare regulations.",
    date: "May 12, 2026",
    instructor: "James Wilson",
    duration: "2 Days",
    level: "Moderate",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    slug: "cyber-security-laws",
    category: "Cyber Law"
  }
];

export default function JournalWorkshopsPage() {
    const params = useParams();
    const journalId = params.journalId as string;
    const journal = journals.find(j => j.id === journalId);

    if (!journal) {
        return <div className="min-h-screen pt-32 text-center font-heading text-2xl font-bold">Journal Category Not Found</div>;
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section (Matching Screenshot) */}
            <section className="bg-[#0b0c0d] text-white pt-32 pb-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <Link 
                        href="/products/workshops" 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors mb-8 text-[10px] font-black uppercase tracking-[0.2em] group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Categories
                    </Link>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
                        {/* Journal Preview/Image */}
                        <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                           <div className="aspect-[4/3] relative">
                                <img 
                                    src={journal.image} 
                                    alt={journal.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-xl font-black font-heading leading-tight">{journal.name}</h2>
                                </div>
                           </div>
                        </div>

                        {/* Journal Info */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold mb-6 tracking-tight leading-tight">{journal.name}</h1>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-medium italic border-l-2 border-amber-500/30 pl-4">
                                {journal.description}
                            </p>
                            <div className="flex items-center gap-2 bg-amber-500/10 self-start px-6 py-2.5 rounded-full border border-amber-500/20">
                                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
                                    {dummyWorkshops.length} Active Workshops
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#0f172a] mb-4">Available Workshops</h2>
                        <div className="w-24 h-1.5 bg-amber-500 rounded-full mx-auto md:mx-0" />
                    </div>

                    <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-2xl bg-white p-2">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left bg-slate-50/50">
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Workshop Title</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Instructor</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Schedule</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Duration</th>
                                    <th className="px-8 py-8 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {dummyWorkshops.map((ws) => (
                                    <tr key={ws.id} className="group hover:bg-slate-50/30 transition-all duration-300">
                                        <td className="px-8 py-8">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-extrabold text-[#0f172a] group-hover:text-amber-600 transition-colors mb-2 leading-snug">{ws.title}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#94a3b8]">{ws.category || "General"}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-amber-600 font-['Plus_Jakarta_Sans'] font-black text-xs border-2 border-white shadow-md ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
                                                    {ws.instructor.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="text-sm font-extrabold text-slate-600">{ws.instructor}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                                                <Calendar className="w-4 h-4 text-amber-500" />
                                                {ws.date}
                                            </div>
                                        </td>
                                        <td className="px-8 py-8 text-sm font-bold text-[#0f172a]">
                                            <div className="bg-slate-100 px-3 py-1 rounded-full inline-block">
                                                {ws.duration}
                                            </div>
                                        </td>
                                        <td className="px-8 py-8 text-right">
                                            <Link 
                                                href={`/products/workshops/${journalId}/${ws.id}`}
                                                className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all active:scale-95"
                                            >
                                                View Details <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {dummyWorkshops.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center">
                                                <BookOpen className="w-12 h-12 text-slate-200 mb-4" />
                                                <p className="text-slate-400 font-bold italic">No active workshops found for this journal.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer section for more info */}
                    <div className="mt-16 bg-[#0f172a] rounded-[2rem] p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
                        <div className="relative z-10 flex-1">
                            <h3 className="text-2xl font-black text-white mb-2 font-heading">Subscribe to JHRLP Workshop Alerts</h3>
                            <p className="text-slate-400 text-sm font-medium">Never miss a specialized training session. Get notified when new workshops are listed.</p>
                        </div>
                        <div className="relative z-10">
                            <button className="bg-white text-[#0f172a] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-xl">
                                Notify Me
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
