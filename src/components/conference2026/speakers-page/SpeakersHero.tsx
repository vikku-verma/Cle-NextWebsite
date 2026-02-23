"use client";

import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";
import { ConferenceBreadcrumb } from "@/components/conference2026/main-page/ConferenceBreadcrumb";

export function SpeakersHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F1115]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(138,90,43,0.06),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(46,76,125,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <ConferenceBreadcrumb pageName="Speakers & Schedule" />
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
                    >
                        <UsersRound className="h-4 w-4 text-primary" />
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 font-sans">
                            Global Legal Minds
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Speakers <span className="font-sans text-3xl md:text-4xl text-white/50">&amp;</span> <br />
                        <span className="italic font-normal text-primary">Conference Schedule</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Discover the thought leaders driving the global legal dialogue and plan your itinerary for the three-day International Legal Conference 2026.
                    </motion.p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1115] to-transparent pointer-events-none" />
        </section>
    );
}
