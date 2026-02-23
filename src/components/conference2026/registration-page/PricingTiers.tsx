"use client";

import { motion } from "framer-motion";
import { Check, Info, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const authorPricing = [
    { category: "Students", inr: "1399 INR", usd: "75 USD" },
    { category: "Research Scholar & Post-Doctoral", inr: "1699 INR", usd: "80 USD" },
    { category: "Faculty Member", inr: "2199 INR", usd: "85 USD" },
    { category: "Professional", inr: "2599 INR", usd: "120 USD" }
];

const attendeePricing = [
    { category: "Students", inr: "999 INR", usd: "65 USD" },
    { category: "Research Scholar & Post-Doctoral", inr: "1199 INR", usd: "70 USD" },
    { category: "Faculty Member", inr: "1399 INR", usd: "75 USD" },
    { category: "Professional", inr: "2199 INR", usd: "100 USD" }
];

export function PricingTiers() {
    const scrollToForm = () => {
        document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-24 bg-[#FDFDFB] relative">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">

                {/* Header Note */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <Info className="h-4 w-4" />
                        Registration Fee
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Invest in Your <span className="text-primary italic font-normal">Professional Development</span>
                    </motion.h2>
                    <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-2xl mx-auto">
                        We offer competitive registration fees designed to provide value for all participants. Our pricing structure ensures accessibility while maintaining the high quality of our conference experience and content.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Author + Attendee Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl border border-primary/20 shadow-xl shadow-primary/5 overflow-hidden flex flex-col h-full"
                    >
                        <div className="bg-primary/5 p-8 border-b border-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <FileText className="h-24 w-24 text-primary" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">(Author + Attendee)</h3>
                                <div className="text-primary font-bold tracking-widest text-xs uppercase font-sans">Registration Fee</div>
                            </div>
                        </div>

                        <div className="p-0 sm:p-4 flex-grow">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-border/50 text-muted-foreground font-sans text-sm font-bold">
                                            <th className="py-4 px-4 sm:px-6 w-1/2">Participant Category</th>
                                            <th className="py-4 px-4 sm:px-6">INR</th>
                                            <th className="py-4 px-4 sm:px-6">USD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-sans text-sm font-semibold divide-y divide-border/30">
                                        {authorPricing.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-4 sm:px-6 text-foreground/80">{item.category}</td>
                                                <td className="py-4 px-4 sm:px-6 text-foreground">{item.inr}</td>
                                                <td className="py-4 px-4 sm:px-6 text-primary">{item.usd}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-border/50 mt-auto">
                            <p className="flex items-start gap-3 text-sm text-muted-foreground font-sans leading-relaxed">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span><strong>Note:</strong> The author fee covers both manuscript submission and the option to present via a poster.</span>
                            </p>
                            <Button
                                onClick={scrollToForm}
                                className="w-full mt-6 h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold font-sans shadow-lg shadow-primary/20"
                            >
                                Register as Author
                            </Button>
                        </div>
                    </motion.div>

                    {/* Attendee Only Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-3xl border border-border/60 shadow-lg hover:border-secondary/30 transition-all overflow-hidden flex flex-col h-full"
                    >
                        <div className="bg-secondary/5 p-8 border-b border-secondary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <User className="h-24 w-24 text-secondary" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Attendee Only</h3>
                                <div className="text-secondary font-bold tracking-widest text-xs uppercase font-sans">Registration Fee</div>
                            </div>
                        </div>

                        <div className="p-0 sm:p-4 flex-grow">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-border/50 text-muted-foreground font-sans text-sm font-bold">
                                            <th className="py-4 px-4 sm:px-6 w-1/2">Participant Category</th>
                                            <th className="py-4 px-4 sm:px-6">INR</th>
                                            <th className="py-4 px-4 sm:px-6">USD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-sans text-sm font-semibold divide-y divide-border/30">
                                        {attendeePricing.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-4 sm:px-6 text-foreground/80">{item.category}</td>
                                                <td className="py-4 px-4 sm:px-6 text-foreground">{item.inr}</td>
                                                <td className="py-4 px-4 sm:px-6 text-secondary">{item.usd}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-border/50 mt-auto">
                            <p className="flex items-start gap-3 text-sm text-muted-foreground font-sans leading-relaxed">
                                <Info className="h-5 w-5 text-secondary shrink-0" />
                                <span><strong>Note:</strong> Attendees may participate in the conference but cannot present, submit papers, or posters.</span>
                            </p>
                            <Button
                                onClick={scrollToForm}
                                className="w-full mt-6 h-12 bg-white border-2 border-border text-foreground hover:bg-gray-50 hover:border-secondary/50 rounded-xl font-bold font-sans transition-colors"
                            >
                                Register as Attendee
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Important Information Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-[#0F1115] text-white rounded-2xl p-8 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl opacity-50" />

                    <div className="relative z-10">
                        <h4 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                            <Info className="h-5 w-5 text-primary" /> Important Information
                        </h4>
                        <ul className="space-y-3 font-sans text-sm text-white/80">
                            <li className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                Affiliated colleges located in India will be charged in <strong>INR</strong>.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                                Affiliated colleges located outside India will be charged in <strong>USD</strong>.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#D09B5A] shrink-0" />
                                Early bird and bulk enrollment discount applied.
                            </li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
