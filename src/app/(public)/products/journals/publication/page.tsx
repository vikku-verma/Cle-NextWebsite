"use client";

import { Button } from "@/components/ui/button";
import { Check, FileText, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PublicationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 text-center">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mx-auto max-w-3xl space-y-4"
                    >
                        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                            Publish With Impact
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            Join a global community of legal scholars and have your work peer-reviewed by industry experts.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="https://manuscript-engine.journalslibrary.com/conferences/entry/31140/">Start Submission <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Guidelines */}
            <section className="container py-16 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    <div>
                        <h2 className="font-heading text-3xl font-bold mb-6">Submission Guidelines</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Format & Style</h3>
                                    <p className="text-muted-foreground">Manuscripts should be in standard legal citation format (Bluebook or OSCOLA). limits: 5000-8000 words.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Check className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Originality</h3>
                                    <p className="text-muted-foreground">Submissions must be original works not previously published or currently under review elsewhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Card */}
                    <div className="rounded-2xl border bg-card p-8 shadow-sm">
                        <h3 className="font-heading text-xl font-bold mb-6">Review Process</h3>
                        <div className="space-y-8 relative pl-6 border-l-2 border-muted">
                            <div className="relative">
                                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                                <h4 className="font-bold">1. Initial Screening</h4>
                                <p className="text-sm text-muted-foreground">Editorial team checks for relevance and basic quality requirements (1 week).</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                                <h4 className="font-bold">2. Peer Review</h4>
                                <p className="text-sm text-muted-foreground">Double-blind review by two subject matter experts (4-6 weeks).</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                                <h4 className="font-bold">3. Revisions & Acceptance</h4>
                                <p className="text-sm text-muted-foreground">Author addresses feedback; final decision provided by Editor-in-Chief.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                                <h4 className="font-bold">4. Publication</h4>
                                <p className="text-sm text-muted-foreground">Professional editing, formatting, and digital publication.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
