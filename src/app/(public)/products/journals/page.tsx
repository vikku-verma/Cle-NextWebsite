import { JournalList } from "@/components/products/JournalList";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";

export default function JournalsPage() {
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
                        <span className="text-amber-500">Law Journals</span>
                    </nav>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading leading-tight">
                            Knowledge <span className="text-amber-500">Library</span>
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Explore our curated collection of legal journals, books, and courses designed to enhance your legal expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dynamic Grid */}
            <div className="container mx-auto px-6">
                <JournalList />
            </div>

            {/* Helper Bar */}
            <div className="container mx-auto px-6 mt-16 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-500 text-sm italic">
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    Cant find your journal? <Link href="/contact" className="text-[#92400e] font-bold hover:underline not-italic">Contact our support team</Link>
                </div>
            </div>
        </main>
    );
}