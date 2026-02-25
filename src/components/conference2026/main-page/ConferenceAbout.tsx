"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
    {
        icon: "🌍",
        title: "Global Platform",
        description: "Connect with legal professionals, academicians, and policymakers from around the world to discuss the evolving landscape of legal systems.",
    },
    {
        icon: "🔬",
        title: "15 Specialized Tracks",
        description: "Explore critical areas of law ranging from environmental and human rights to cyber security, intellectual property, and labour reforms.",
    },
    {
        icon: "📚",
        title: "Publication Opportunities",
        description: "Present your research and get published in our 15 specialized legal journals, reaching a global audience of legal professionals.",
    }
];

export function ConferenceAbout() {
    return (
        <section id="about" className="py-24 bg-[#FDFDFB] relative overflow-hidden">
            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 text-primary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <BookOpen className="h-3 w-3" />
                        Conference Overview
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                    >
                        About the <span className="text-primary italic font-normal">Conference</span>
                    </motion.h2>

                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                </div>

                <div className="grid gap-8 md:grid-cols-3 mb-16">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="text-3xl mb-6">
                                {item.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed font-sans text-base">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Link href="/conference/international-legal-conference-2026/about">
                        <Button
                            size="lg"
                            className="px-10 rounded-full border-border/40 hover:bg-slate-50 font-bold text-black/90 hover:text-primary hover:border-2 hover:border-primary transition-all duration-300"
                        >
                            EXPLORE MORE <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
