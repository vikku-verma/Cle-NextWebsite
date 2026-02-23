"use client";

import { motion } from "framer-motion";
import { Telescope, MessageSquare, ShieldAlert, GraduationCap, ArrowRightLeft } from "lucide-react";

export function AboutObjectives() {
    const objectives = [
        {
            icon: Telescope,
            title: "Promote Multidisciplinary Legal Research",
            desc: "Encourage legal scholarship that integrates constitutional, commercial, digital, environmental, health, and social justice perspectives to address global challenges."
        },
        {
            icon: MessageSquare,
            title: "Foster Dialogue Between Stakeholders",
            desc: "Provide a common platform for academic scholars, practicing lawyers, judiciary members, corporate leaders, and regulators to share experiences and discuss legal reforms."
        },
        {
            icon: ShieldAlert,
            title: "Highlight Contemporary Legal Challenges",
            desc: "Explore the legal dimensions of emerging issues such as cybercrime, data protection, AI regulation, gig economy rights, fintech law, ESG compliance, and environmental litigation."
        },
        {
            icon: GraduationCap,
            title: "Encourage Young Scholars & Researchers",
            desc: "Offer opportunities for students, early-career researchers, and legal interns to present their work, receive feedback, and interact with experts."
        },
        {
            icon: ArrowRightLeft,
            title: "Strengthen the Bridge Between Law & Policy",
            desc: "Address the gap between legal frameworks and effective implementation by discussing regulatory bottlenecks, institutional reforms, and policy interventions."
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Conference <span className="text-secondary italic font-normal">Objectives</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-secondary/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {objectives.map((obj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#FBFAF8] p-8 rounded-2xl border border-border/50 hover:border-secondary/20 hover:shadow-md transition-all duration-300"
                        >
                            <div className="h-14 w-14 bg-secondary/5 text-secondary rounded-xl flex items-center justify-center mb-6 border border-secondary/10">
                                <obj.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-4 leading-snug">{obj.title}</h3>
                            <p className="text-muted-foreground font-sans text-sm leading-relaxed">{obj.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
