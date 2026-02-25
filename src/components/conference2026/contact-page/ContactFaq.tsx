"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ContactFaq() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                        >
                            Frequently Asked <span className="text-primary italic font-normal">Questions</span>
                        </motion.h2>
                        <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 md:p-10 border border-border/40 shadow-sm"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-border/40 px-2">
                                <AccordionTrigger className="font-heading text-lg font-bold hover:text-primary transition-colors text-left py-5">
                                    How do I register for the conference?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6">
                                    You can register for the conference by visiting the Registration page on our website. Select the appropriate registration category, fill in your details, and complete the payment process. You will receive a confirmation email upon successful registration.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-border/40 px-2">
                                <AccordionTrigger className="font-heading text-lg font-bold hover:text-primary transition-colors text-left py-5">
                                    What is the submission process for papers?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6">
                                    To submit a paper, first prepare your abstract according to the guidelines provided on the Submission Guidelines page. Then, create an account on our submission portal and submit your abstract before the deadline. If your abstract is accepted, you will be invited to submit the full paper.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-border/40 px-2">
                                <AccordionTrigger className="font-heading text-lg font-bold hover:text-primary transition-colors text-left py-5">
                                    Are there sponsorship opportunities available?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6">
                                    Yes, we offer various sponsorship opportunities for organizations interested in supporting the conference. Please visit the Sponsorship page or contact our Sponsorship Coordinator at sponsorship@cle.celnet.in for more information.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-border/40 px-2 border-b-0">
                                <AccordionTrigger className="font-heading text-lg font-bold hover:text-primary transition-colors text-left py-5">
                                    Will the conference be held in-person or virtually?
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6">
                                    The International Legal Conference 2026 will be held in a hybrid format, allowing participants to attend either in-person or virtually. More details about the venue and virtual platform will be announced soon.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
