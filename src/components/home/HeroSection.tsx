"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="inline-block text-sm font-semibold tracking-wider text-secondary uppercase">
                                A unit of the Consortium of e-Learning Network
                            </span>
                            <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
                                Centre for <span className="text-secondary">Legal Excellence</span>
                            </h1>
                            <p className="max-w-[600px] text-xl text-muted-foreground leading-relaxed">
                                Bridging the gap between legal theory and practice. We bring together scholars, practitioners, and students to foster innovation in legal education.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[160px]" asChild>
                                <Link href="/products">
                                    Explore Products
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-muted min-w-[160px]" asChild>
                                <Link href="/membership">
                                    Join Membership
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Highlight Event Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md rounded-2xl border bg-card p-2 shadow-2xl shadow-primary/10">
                            <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 sm:py-12">
                                {/* Decoration */}
                                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
                                <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-32 w-32 rounded-full bg-secondary/40 blur-xl" />

                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
                                            Upcoming Conference
                                        </span>
                                        <span className="text-xs font-medium text-primary-foreground/80">
                                            ILC2026
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-heading text-2xl font-bold leading-tight">
                                            Future Frontiers in Law: Governance, Technology, and Justice
                                        </h3>
                                        <p className="text-sm text-primary-foreground/80">
                                            A multidisciplinary platform for academicians, practitioners, and policymakers.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2 pt-2">
                                        <div className="flex items-center text-sm">
                                            <Calendar className="mr-2 h-4 w-4 text-accent" />
                                            <span>December 13, 2025</span>
                                        </div>
                                        {/* Add location if available, otherwise just date is fine per requirements */}
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href="https://cle.celnet.in/conference/international-legal-conference-2026/"
                                            target="_blank"
                                            className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80"
                                        >
                                            Explore Conference
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
