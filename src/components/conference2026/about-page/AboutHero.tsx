"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { ConferenceBreadcrumb } from "@/components/conference2026/main-page/ConferenceBreadcrumb";

export function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0F1115]">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(138,90,43,0.06),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(46,76,125,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <ConferenceBreadcrumb pageName="About the Conference" />


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        About the <br />
                        <span className="italic font-normal text-primary">Conference</span>
                    </motion.h1>

                    <motion.div
                        className="flex justify-center gap-4 text-sm font-sans"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <Link href="/conference/international-legal-conference-2026" className="text-muted-foreground hover:text-white transition-colors">
                            &larr; Back to Conference Home
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Elegant fade to the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1115] to-transparent pointer-events-none" />
        </section>
    );
}
