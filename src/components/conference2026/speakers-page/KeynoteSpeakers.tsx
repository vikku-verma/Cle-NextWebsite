"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Placeholder data for speakers since the actual bios/images need to be populated later.
const speakers = [
    {
        name: "Hon. Justice Sarah Jenkins",
        role: "Supreme Court Justice",
        organization: "Global Justice Coalition",
        bio: "An esteemed jurist specializing in international human rights and cross-border constitutional disputes. Hon. Justice Jenkins brings over 30 years of judicial experience to the panel.",
        image: "https://i.pravatar.cc/300?img=44", // Temporary placeholder
    },
    {
        name: "Prof. David R. Chen",
        role: "Dean of Law",
        organization: "University of International Law",
        bio: "Leading academic voice in Technology and Cyber Law. Prof. Chen has authored over 50 peer-reviewed papers on AI governance and digital privacy frameworks.",
        image: "https://i.pravatar.cc/300?img=11",
    },
    {
        name: "Dr. Elena Rodriguez",
        role: "Senior Policy Advisor",
        organization: "United Nations (Legal Affairs)",
        bio: "Expert in international treaty negotiations and climate change litigation. Dr. Rodriguez actively drafts frameworks for sustainable global trade.",
        image: "https://i.pravatar.cc/300?img=32",
    },
    {
        name: "Marcus Thorne, Esq.",
        role: "Managing Partner",
        organization: "Thorne & Associates LLP",
        bio: "Renowned corporate litigator focusing on multi-jurisdictional mergers and anti-trust regulations in emerging markets.",
        image: "https://i.pravatar.cc/300?img=68",
    }
];

export function KeynoteSpeakers() {
    return (
        <section className="py-24 bg-[#FDFDFB] relative">
            <div className="container px-4 md:px-6">

                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Keynote <span className="text-primary italic font-normal">Speakers</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto mb-6" />
                    <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
                        Hear from globally recognized jurists, academicians, and policymakers shaping the future frontiers of law and governance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {speakers.map((speaker, idx) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary/5 group-hover:border-primary/20 transition-colors">
                                    {/* Using standard img for external pravatar placeholder to prevent Next.js config errors temporarily */}
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">{speaker.name}</h3>
                                <div className="font-sans text-sm font-semibold text-primary mb-1">{speaker.role}</div>
                                <div className="font-sans text-xs text-muted-foreground uppercase tracking-widest mb-4">{speaker.organization}</div>

                                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                                    {speaker.bio}
                                </p>

                                <div className="flex items-center gap-3 mt-auto">
                                    <Link href="#" className="h-8 w-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors">
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                    <Link href="#" className="h-8 w-8 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors">
                                        <Twitter className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
