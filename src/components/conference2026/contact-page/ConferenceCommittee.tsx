"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const committeeMembers = [
    {
        name: "Dr. Rajiv Sharma",
        role: "Conference Chair",
        bio: "With over 25 years of experience in constitutional law and governance, Dr. Sharma leads the conference committee.",
        image: "" // Add image URL here when available
    },
    {
        name: "Prof. Sarah Mitchell",
        role: "Program Coordinator",
        bio: "An expert in technology law and intellectual property rights, Prof. Mitchell oversees the conference program.",
        image: ""
    },
    {
        name: "Ms. Priya Nair",
        role: "Registration Manager",
        bio: "Ms. Nair handles all registration-related queries and ensures a smooth registration process for participants.",
        image: ""
    },
    {
        name: "Mr. Amit Patel",
        role: "Sponsorship Coordinator",
        bio: "Mr. Patel manages sponsorship opportunities and partnerships for the conference.",
        image: ""
    }
];

function MemberCard({ member, index }: { member: any, index: number }) {
    const [imgError, setImgError] = useState(false);

    // Ignore placeholder links entirely
    const hasImage = member.image && !member.image.includes("via.placeholder.com");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="bg-[#FBFAF8] rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all group"
        >
            <div className={`h-28 w-28 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${hasImage && !imgError ? 'p-[2px] bg-primary/20 shadow-md' : 'border-[3px] border-primary/20 bg-primary/5 group-hover:border-primary'}`}>
                {hasImage && !imgError ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full rounded-full object-cover border-[3px] border-white bg-white"
                        loading="lazy"
                    />
                ) : (
                    <User className="h-12 w-12 text-primary/40 group-hover:text-primary transition-colors" />
                )}
            </div>

            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
            <p className="text-primary font-bold font-sans text-xs tracking-wider uppercase mb-4 pb-4 border-b border-border/50 w-full">{member.role}</p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {member.bio}
            </p>
        </motion.div>
    );
}

export function ConferenceCommittee() {
    return (
        <section className="py-24 bg-white border-y border-border/40">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                    >
                        Conference <span className="text-primary italic font-normal">Committee</span>
                    </motion.h2>
                    <div className="h-[1.5px] w-20 bg-primary/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {committeeMembers.map((member, index) => (
                        <MemberCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
