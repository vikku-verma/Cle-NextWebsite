"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";

export function SubmissionGuidelines() {
    return (
        <section className="py-24 bg-[#FDFDFB] relative border-b border-border/40">
            <div className="container px-4 md:px-6">

                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Submission <span className="text-primary italic font-normal">Guidelines</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto mb-6" />
                    <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
                        Please review the following academic standards and formatting requirements carefully before submitting your abstract or full manuscript.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* formatting constraints */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm"
                    >
                        <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-4">Formatting Rules</h3>
                        <ul className="space-y-3">
                            {[
                                "Abstract length: 300 - 500 words",
                                "Full Paper: 4,000 - 8,000 words",
                                "Font: Times New Roman, 12pt",
                                "Line Spacing: 1.5 lines",
                                "Citation Style: OSCOLA (4th Ed.)",
                                "Document Format: .doc or .docx only"
                            ].map((rule, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-sans text-muted-foreground">{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Important dates context */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm"
                    >
                        <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-4">Critical Deadlines</h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-secondary/30 pl-4 py-1">
                                <span className="block text-xs font-bold font-sans text-secondary uppercase tracking-widest mb-1">Abstract Submission</span>
                                <span className="text-sm font-sans text-foreground">February 28, 2026</span>
                            </div>
                            <div className="border-l-2 border-secondary/30 pl-4 py-1">
                                <span className="block text-xs font-bold font-sans text-secondary uppercase tracking-widest mb-1">Acceptance Notification</span>
                                <span className="text-sm font-sans text-foreground">March 15, 2026</span>
                            </div>
                            <div className="border-l-2 border-secondary/30 pl-4 py-1">
                                <span className="block text-xs font-bold font-sans text-secondary uppercase tracking-widest mb-1">Full Paper Submission</span>
                                <span className="text-sm font-sans text-foreground">April 10, 2026</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Publication note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm"
                    >
                        <div className="h-12 w-12 bg-[#8A5A2B]/10 rounded-2xl flex items-center justify-center mb-6 text-[#8A5A2B]">
                            <AlertCircle className="h-6 w-6" />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-4">Publication Policy</h3>
                        <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
                            All accepted abstracts will be published in the Conference Proceedings with an ISBN number.
                        </p>
                        <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                            Full papers selected after the double-blind peer review process will be published in one of CLE's 15 thematic law journals based on relevance and quality. Co-authorship is limited to a maximum of three authors per paper.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
