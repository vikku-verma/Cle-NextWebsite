"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function ConferenceRegistrationCTA() {


    return (
        <section id="registration" className="py-24 bg-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(138,90,43,0.4),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_50%)]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <Sparkles className="h-3 w-3 text-primary" />
                        Join the Global Legal Dialogue
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
                    >
                        Register for <span className="text-primary italic font-normal">International Legal Conference 2026</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-white/80 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join us for three days of insightful discussions, networking, and knowledge sharing with the world's leading legal minds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            className="h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 group font-sans"
                            asChild
                        >
                            <Link href="/conference/international-legal-conference-2026/registration">
                                Register Now <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
