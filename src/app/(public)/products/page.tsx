"use client";

import { Mic, BookOpen, FileText, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
    {
        title: "Workshops",
        description: "Hands-on, practice-focused legal learning with expert mentors. Master complex legal frameworks through interactive sessions.",
        href: "/products/workshops",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
        stats: "15+ Active Workshops"
    },
    {
        title: "Law Journals",
        description: "Access high-impact legal research and publish your work in internationally recognized journals.",
        href: "/products/journals",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
        stats: "1000+ Research Papers"
    },
    {
        title: "Conferences",
        description: "Attend global legal summits and network with industry leaders. Participate in discussions that shape the future of law.",
        href: "/products/conferences",
        icon: Mic,
        image: "https://images.unsplash.com/photo-1475721027185-da09b8374d61?auto=format&fit=crop&q=80&w=1000",
        stats: "Global Summits"
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#F4F2EE] pt-24 pb-20">
            {/* Hero Section */}
            <div className="bg-[#0f172a] text-white py-16 mb-12">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mb-6">
                        <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-amber-500">Products</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading">
                        Our Intellectual Ecosystem
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        Explore our comprehensive offerings designed to empower legal professionals, researchers, and students.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid gap-12">
                    {products.map((product, index) => (
                        <div 
                            key={product.title}
                            className={`flex flex-col lg:flex-row gap-8 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Part */}
                            <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-bold">
                                        <product.icon className="w-4 h-4" />
                                        {product.stats}
                                    </div>
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-start">
                                <h2 className="text-3xl font-extrabold text-[#0f172a] mb-6 font-heading">
                                    {product.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>
                                <Button asChild className="bg-[#8A5A2B] hover:bg-[#6F4822] text-white rounded-xl px-8 py-6 h-auto text-lg group/btn shadow-lg shadow-amber-900/10">
                                    <Link href={product.href} className="flex items-center gap-2">
                                        Explore {product.title} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Section */}
            <div className="container mx-auto px-6 mt-24">
                <div className="bg-[#EEE9DF] rounded-3xl p-12 text-center border border-[#D6D0C6]">
                    <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">Need Personalized Assistance?</h3>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        Cant find what you are looking for? Our team is here to help you navigate our legal excellence programs.
                    </p>
                    <Button variant="outline" asChild className="rounded-xl border-[#8A5A2B] text-[#8A5A2B] hover:bg-[#8A5A2B] hover:text-white transition-all px-8 py-6 h-auto text-lg">
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
