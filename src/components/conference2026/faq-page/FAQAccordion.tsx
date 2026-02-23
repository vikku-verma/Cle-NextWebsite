"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, FileText, Map } from "lucide-react";

const faqs = [
    {
        question: "Is there an early bird discount?",
        answer: "Yes, an early bird discount of 10% is available for all registrations completed before February 15, 2026. Use the code ILAC26 during checkout."
    },
    {
        question: "Are travel and accommodation included in the fee?",
        answer: "No, the registration fee covers conference access, lunches, high tea, the gala dinner, and conference materials/proceedings. Delegates are responsible for their own travel and accommodation."
    },
    {
        question: "Can I participate virtually?",
        answer: "Yes, we offer a hybrid model. International delegates and those unable to travel can opt for the virtual pass, which provides live streaming access to all plenary and technical sessions."
    },
    {
        question: "What is the cancellation and refund policy?",
        answer: "Cancellations made before March 1, 2026, will receive a 50% refund. Cancellations made after this date are strictly non-refundable due to venue commitments."
    },
    {
        question: "Will my paper be published?",
        answer: "All accepted abstracts will be included in the Conference Proceedings (with ISBN). Selected full papers will undergo a double-blind peer review for publication in one of CLE's 15 flagship journals."
    },
    {
        question: "Do you provide visa invitation letters?",
        answer: "Yes, upon successful registration and payment, international delegates can request a formal Letter of Invitation to assist with their visa application process."
    }
];

export function FAQAccordion() {
    return (
        <section className="py-24 bg-[#FDFDFB] relative">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

                    {/* Resources Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="sticky top-32">
                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-heading text-3xl font-bold text-foreground mb-8"
                            >
                                Essential <span className="text-primary italic font-normal">Resources</span>
                            </motion.h2>

                            <div className="space-y-4">
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                                >
                                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-heading font-bold text-sm text-foreground">Official Brochure</div>
                                        <div className="font-sans text-xs text-muted-foreground">PDF (2.4 MB)</div>
                                    </div>
                                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/60 hover:border-secondary/30 hover:shadow-md transition-all group"
                                >
                                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                        <Map className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-heading font-bold text-sm text-foreground">Venue & Travel Guide</div>
                                        <div className="font-sans text-xs text-muted-foreground">PDF (1.8 MB)</div>
                                    </div>
                                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </motion.a>
                            </div>

                            <div className="mt-12 p-6 rounded-3xl bg-primary text-white text-center">
                                <h3 className="font-heading font-bold text-lg mb-2">Still have questions?</h3>
                                <p className="font-sans text-sm text-white/80 mb-6">Our delegate support team is available 24/7 to assist you.</p>
                                <a href="mailto:conference2026@cle.edu" className="inline-block bg-white text-primary font-bold font-sans text-sm py-2 px-6 rounded-full hover:bg-white/90 transition-colors">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion Main Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm"
                        >
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border/50 py-2">
                                        <AccordionTrigger className="font-heading text-left text-lg font-bold text-foreground hover:text-primary transition-colors data-[state=open]:text-primary">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pt-2 pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
