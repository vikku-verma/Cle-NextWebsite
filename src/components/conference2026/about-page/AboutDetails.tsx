"use client";

import { motion } from "framer-motion";
import { Scale, Milestone, Globe } from "lucide-react";

export function AboutDetails() {
    return (
        <section className="py-24 bg-[#FDFDFB] relative">
            <div className="container px-4 md:px-6">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase font-sans">
                            <Scale className="h-4 w-4" />
                            Our Vision
                        </div>

                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Future Frontiers in Law: <br />
                            <span className="text-primary italic font-normal">Governance, Technology, and Justice</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
                            <p>
                                The International Legal Conference 2026 is a multidisciplinary platform that brings together academicians, legal practitioners, scholars, policy makers, corporate professionals, and students to engage in meaningful dialogue on the evolving landscape of legal systems.
                            </p>
                            <p>
                                This event, curated around the thematic areas represented by 15 specialized legal journals of STM Journals, aims to foster cross-sectoral knowledge exchange, address legal challenges in contemporary society, and explore transformative solutions rooted in justice, equity, and sustainable governance.
                            </p>
                            <p>
                                Spanning critical areas of law—ranging from environmental, human rights, criminal justice, cyber security, and family law to intellectual property, corporate regulation, taxation, and labour reforms—this conference seeks to bridge theory with practice, and legal heritage with technological innovation.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href="/conference/international-legal-conference-2026/registration"
                                className="inline-block bg-primary text-white font-bold font-sans px-8 py-4 rounded-full text-base shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                Register Now - International Legal Conference
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 group"
                    >
                        {/* Decorative background elements behind the image visually */}
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

                        <img
                            src="https://cle.celnet.in/wp-content/uploads/2025/12/hero-legal-innovation-scaled.avif"
                            alt="Legal Innovation and Governance"
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />

                        {/* Elegant overlay gradient at the bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
