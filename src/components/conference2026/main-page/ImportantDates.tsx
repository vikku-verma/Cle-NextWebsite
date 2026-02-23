"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const dates = [
    { label: "Announcement of Conference", date: "25th December 2025" },
    { label: "Call for Abstracts (Opening)", date: "25th December 2025" },
    { label: "Call for Abstracts (Closing)", date: "28th February 2026" },
    { label: "Submission of full length Paper", date: "15th March 2026" },
    { label: "Acceptance of Papers", date: "25th March 2026" },
    { label: "Submission of Presentation", date: "30th March 2026" },
    { label: "Submission of Camera Ready Papers", date: "10th April 2026" },
    { label: "Conference Dates", date: "16th-18th April 2026", highlight: true }
];

export function ImportantDates() {
    return (
        <section id="important-dates" className="py-24 bg-[#FBFAF8]">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        Important <span className="italic font-normal text-primary">Dates</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-[1.5px] w-20 bg-primary/30 mx-auto"
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-primary/20 md:border-none">
                        {dates.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative mb-12 flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className={`absolute left-[-11px] md:left-1/2 md:translate-x-[-50%] h-5 w-5 rounded-full border-4 border-[#FBFAF8] ${item.highlight ? "bg-primary scale-125 shadow-lg shadow-primary/30" : "bg-primary/40"
                                    }`} />

                                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <div className={`font-sans text-sm tracking-wider font-bold mb-1 ${item.highlight ? "text-primary" : "text-primary/60"
                                        }`}>
                                        {item.date}
                                    </div>
                                    <div className={`font-heading text-xl font-bold ${item.highlight ? "text-foreground" : "text-foreground/80"
                                        }`}>
                                        {item.label}
                                    </div>
                                </div>

                                <div className="hidden md:block w-[10%]" />
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
