"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, LayoutGrid, List as ListIcon, BookOpen, ArrowRight } from "lucide-react";

const journals = [
  {
    id: "jhrlp",
    name: "Journal of Human Rights Law and Practice",
    abbreviation: "JHRLP",
    image: "https://journals.stmjournals.com/wp-content/uploads/2025/05/5c0a9722-rights-law-and-practice-scaled.webp",
    description: "Aims to throw light on the fundamental rights of a human beings."
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

export default function ExploreWorkshopsPage() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-[#0f172a] text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#f59e0b_0%,transparent_40%)] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-amber-500 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-500">Explore Workshops</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading leading-tight">
                Explore Specialized <span className="text-amber-500">Workshops</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Select a journal category below to view dedicated legal workshops, practical sessions, and expert-led training programs tailored to your field of interest.
              </p>
            </div>
            
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl backdrop-blur-sm shadow-inner group">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold ${viewMode === "grid" ? "bg-amber-500 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
              >
                <LayoutGrid className="w-4 h-4" /> Grid
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold ${viewMode === "list" ? "bg-amber-500 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
              >
                <ListIcon className="w-4 h-4" /> List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid/List Content */}
      <div className="container mx-auto px-6">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {journals.map((journal) => (
              <Link 
                key={journal.id}
                id={journal.id}
                href={`/products/workshops/${journal.id}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={journal.image} 
                    alt={journal.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0f172a] tracking-wider uppercase shadow-sm">
                    {journal.abbreviation}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {journal.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                    {journal.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8A5A2B] uppercase tracking-tighter">View Workshops</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0f172a] group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {journals.map((journal) => (
              <Link 
                key={journal.id}
                id={journal.id}
                href={`/products/workshops/${journal.id}`}
                className="group flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={journal.image} alt={journal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{journal.abbreviation}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Workshops</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{journal.name}</h3>
                </div>
                <div className="pr-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-500 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Helper Bar */}
      <div className="container mx-auto px-6 mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-500 text-sm italic">
          <BookOpen className="w-4 h-4 text-amber-500" />
          Cant find your journal? <Link href="/contact" className="text-amber-600 font-bold hover:underline not-italic">Contact our support team</Link>
        </div>
      </div>
    </main>
  );
}
