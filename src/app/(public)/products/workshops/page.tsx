import React from "react";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import { fetchWorkshops } from "@/lib/api/workshops";
import WorkshopList from "./WorkshopList";

import { LAW_JOURNALS } from "@/lib/law-journals";

export const dynamic = "force-dynamic";

export default async function ExploreWorkshopsPage() {
  const allWorkshops = await fetchWorkshops();

  // Create a Set of valid journal slugs for efficient lookup
  const validJournalSlugs = new Set(LAW_JOURNALS.map(j => j.slug.toLowerCase()));

  // Filter workshops that match any valid journal slug
  const workshops = allWorkshops.filter(w => validJournalSlugs.has(w.categorySlug.toLowerCase()));

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
                Select a workshop category below to view dedicated legal workshops, practical sessions, and expert-led training programs tailored to your field of interest.
              </p>
            </div>

            {/* View Mode Toggle is now inside WorkshopList */}
          </div>
        </div>
      </section>

      {/* Grid/List Content */}
      <WorkshopList workshops={workshops} variant="journal" />

      {/* Helper Bar */}
      <div className="container mx-auto px-6 mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-500 text-sm italic">
          <BookOpen className="w-4 h-4 text-amber-500" />
          Cant find your workshop? <Link href="/contact" className="text-[#92400e] font-bold hover:underline not-italic">Contact our support team</Link>
        </div>
      </div>
    </main>
  );
}
