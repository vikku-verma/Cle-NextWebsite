"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const themes = [
    { title: "Law, Policy and Humanities", desc: "Inter-disciplinary approach to contemporary legal socio-economic issues." },
    { title: "Constitutional & Administrative Law", desc: "Comparative constitutionalism and state governance reforms." },
    { title: "Criminal Law and Justice", desc: "Evolving paradigms in international criminal jurisdiction." },
    { title: "Corporate & Commercial Law", desc: "Cross-border insolvency, M&A regulations, and antitrust frameworks." },
    { title: "International Law and Relations", desc: "Treaty negotiations, sovereignty, and state responsibility." },
    { title: "Intellectual Property Rights", desc: "AI, bio-patenting, and global IP harmonization." },
    { title: "Environmental and Animal Law", desc: "Climate change litigation and sustainable development goals." },
    { title: "Alternative Dispute Resolution", desc: "Mediation, international arbitration, and ODR." },
    { title: "Human Rights and Humanitarian Law", desc: "Refugee crises, armed conflict regulations, and civil liberties." },
    { title: "Cyber Law & Information Technology", desc: "Data privacy, cyber warfare, and AI governance." },
    { title: "Family Law & Child Rights", desc: "International adoption, surrogacy laws, and marital disputes." },
    { title: "Labour and Employment Law", desc: "Gig economy labor rights and cross-border employment dynamics." },
    { title: "Health and Medical Law", desc: "Pandemic treaty negotiations, bioethics, and healthcare access." },
    { title: "Space and Aviation Law", desc: "Commercial space exploitation and satellite debris liability." },
    { title: "Sports and Entertainment Law", desc: "Esports regulations, broadcasting rights, and athlete contracts." }
];

export function ThemesList() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">

                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <BookOpen className="h-4 w-4" />
                        Explore Our 15 Tracks
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Thematic <span className="text-secondary italic font-normal">Tracks</span>
                    </motion.h2>
                    <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Authors are invited to submit original, unpublished research papers aligned with one of the following 15 specialized tracks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {themes.map((theme, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group p-8 rounded-3xl bg-[#FBFAF8] border border-border/60 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest">Track {(idx + 1).toString().padStart(2, '0')}</span>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                                {theme.title}
                            </h3>
                            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6 flex-grow">
                                {theme.desc}
                            </p>

                            <div className="mt-auto">
                                <button className="flex items-center text-sm font-sans font-bold text-foreground/70 group-hover:text-secondary transition-colors">
                                    Submit Abstract <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
