"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Upload } from "lucide-react";
import Link from "next/link";

export function SubmitPaperCTA() {
    const deadlines = [
        { label: "Call for Abstracts", date: "25th December 2025" },
        { label: "Abstract Submission Deadline", date: "28th February 2026" },
        { label: "Full Paper Submission", date: "15th March 2026", highlight: true }
    ];

    return (
        <section className="py-24 bg-[#0F1115] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* Left: Text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                            <Upload className="h-4 w-4 text-primary" />
                            Submit Your Paper
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Share your research and <span className="text-primary italic font-normal">insights.</span>
                        </h2>

                        <p className="text-white/70 font-sans text-lg mb-10 leading-relaxed max-w-lg">
                            Present your work to a global audience of legal professionals, academicians, and policymakers. Selected papers will be published in our refereed journals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/conference/international-legal-conference-2026/registration">
                                <button className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 font-sans w-full sm:w-auto">
                                    Submit Abstract Now
                                </button>
                            </Link>
                            <Link href="/conference/international-legal-conference-2026/call-for-papers">
                                <button className="h-14 px-8 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-base transition-all font-sans flex items-center justify-center gap-2 w-full sm:w-auto">
                                    <FileText className="h-5 w-5 opacity-70" />
                                    Submission Guidelines
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Deadlines Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="h-6 w-6 text-primary" />
                            <h3 className="font-heading text-2xl font-bold text-white">Critical Deadlines</h3>
                        </div>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                            {deadlines.map((item, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Timeline dot */}
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0F1115] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${item.highlight ? 'bg-primary text-white shadow-[0_0_15px_rgba(138,90,43,0.5)]' : 'bg-white/10 text-white/50'
                                        }`}>
                                        <span className="font-heading text-sm font-bold">{idx + 1}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                                        <div className={`text-sm font-sans font-bold mb-1 ${item.highlight ? 'text-primary' : 'text-white/60'}`}>
                                            {item.date}
                                        </div>
                                        <div className="font-heading text-lg font-bold text-white">
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
