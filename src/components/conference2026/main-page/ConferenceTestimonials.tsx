"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The International Legal Conference provided an exceptional platform to connect with global legal minds and discuss contemporary challenges in law.",
        author: "Dr. Sarah Johnson",
        title: "Professor of International Law"
    },
    {
        quote: "The diverse themes and high-quality presentations made this conference a valuable experience for my legal research and practice.",
        author: "Michael Chen",
        title: "Corporate Legal Counsel"
    },
    {
        quote: "I had the opportunity to present my research and receive valuable feedback from experts in the field. The publication opportunities were excellent.",
        author: "Priya Sharma",
        title: "PhD Researcher"
    }
];

export function ConferenceTestimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            <div className="container px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 text-primary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        Success Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        What Our <span className="italic font-normal text-primary">Participants Say</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                </div>

                <div className="grid gap-10 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-10 rounded-3xl bg-[#FDFDFB] border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col"
                        >
                            <Quote className="h-8 w-8 text-primary/20 mb-6" />

                            <p className="font-heading text-lg italic leading-relaxed text-foreground/80 mb-8 flex-1">
                                "{item.quote}"
                            </p>

                            <div>
                                <div className="font-heading font-bold text-foreground">
                                    {item.author}
                                </div>
                                <div className="font-sans text-sm text-muted-foreground mt-1">
                                    {item.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
