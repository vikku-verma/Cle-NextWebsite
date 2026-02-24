"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Download, FileText, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ConferenceHero() {


    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F1115] pt-32 pb-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(138,90,43,0.06),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(46,76,125,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Main Title - Scaled for elegance */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        <span className="italic font-normal text-primary/90 block text-xl md:text-2xl lg:text-3xl mb-3 tracking-normal">
                            Future Frontiers in Law:
                        </span>
                        Governance, Technology, and Justice
                    </motion.h1>

                    {/* Conference Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col items-center gap-4 mb-10"
                    >
                        <h2 className="text-lg md:text-xl font-medium text-slate-400 tracking-[0.2em] uppercase font-sans">
                            International Legal Conference 2026
                        </h2>

                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <div className="flex items-center gap-3 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-white font-sans tracking-wide">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-base">16th-18th April 2026 | IST 02:00 PM</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 font-sans"
                        >
                            <Link href="/conference/international-legal-conference-2026/registration">Register Now</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 rounded-full border-white/50 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all hover:scale-105 font-sans"
                        >
                            <Link href="/conference/international-legal-conference-2026/themes">
                                Explore Themes <LayoutGrid className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <div className="w-full md:w-auto flex justify-center gap-6 mt-4 md:mt-0">
                            <a
                                href="https://cle.celnet.in/wp-content/uploads/formidable/11/WhatsApp-Image-2025-12-15-at-11.36.18-PM-150x150.avif"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-slate-200 hover:text-white transition-colors font-sans font-bold group py-2 text-sm drop-shadow-sm"
                            >
                                <FileText className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                                See Poster
                            </a>
                            <a
                                href="https://cle.celnet.in/wp-content/uploads/formidable/11/Future-Frontiers-in-Law-Governance-Technology-and-Justice-2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-slate-200 hover:text-white transition-colors font-sans font-bold group py-2 text-sm drop-shadow-sm"
                            >
                                <Download className="mr-2 h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                                Download Brochure
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Elegant Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1115] to-transparent pointer-events-none" />
        </section>
    );
}
