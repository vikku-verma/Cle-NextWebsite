"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Landmark, Globe, Briefcase, FileCode, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const themes = [
    {
        title: "Environmental Law",
        description: "Strengthening Environmental Law for Sustainable Development",
        icon: Globe,
    },
    {
        title: "Human Rights",
        description: "Human Rights Protection and Evolving Legal Mechanisms",
        icon: Landmark,
    },
    {
        title: "Criminal Law",
        description: "Modern Perspectives on Crime, Justice, and Legal Reforms",
        icon: Scale,
    },
    {
        title: "Cyber Security",
        description: "Legal Responses to Cyber Threats and Data Protection",
        icon: Shield,
    },
    {
        title: "Corporate Governance",
        description: "Corporate Governance Standards and Cross-Border Legal Compliance",
        icon: Briefcase,
    },
    {
        title: "Intellectual Property",
        description: "Strengthening IP Regimes for Innovation and Knowledge Economy",
        icon: FileCode,
    }
];

export function ThemesGrid() {
    return (
        <section id="themes" className="py-20 bg-white relative overflow-hidden">
            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 text-secondary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <Layers className="h-3 w-3" />
                        Explore Research Areas
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Conference <span className="italic font-normal text-primary">Themes</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                    {themes.map((theme, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="p-8 rounded-2xl bg-[#FBFAF8] border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                        >
                            <div className="mb-6 h-12 w-12 rounded-xl bg-white border border-border/40 flex items-center justify-center text-primary">
                                <theme.icon className="h-6 w-6" />
                            </div>

                            <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight">
                                {theme.title}
                            </h3>

                            <p className="text-muted-foreground font-sans text-base leading-relaxed">
                                {theme.description}
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
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-10 rounded-full border-border/40 hover:bg-slate-50 font-bold text-base text-slate-600 hover:text-primary transition-all duration-300"
                    >
                        SEE MORE THEMES <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
