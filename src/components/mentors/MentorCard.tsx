
"use client";

import React from "react";
import { Mentor } from "@/lib/types";
import { User, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

interface MentorCardProps {
    mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
    const isActive = mentor.status === "Active";
    const [imgError, setImgError] = React.useState(false);

    return (
        <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            {/* Top Section with Image and Status */}
            <div className="relative h-44 bg-muted/30 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />

                {/* Status Pill */}
                <div className={cn(
                    "absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border",
                    isActive
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                )}>
                    {isActive ? (
                        <ShieldCheck className="w-3 h-3" />
                    ) : (
                        <AlertCircle className="w-3 h-3" />
                    )}
                    {mentor.status}
                </div>

                {/* Mentor Image */}
                <div className="relative">
                    <div className="h-24 w-24 rounded-2xl overflow-hidden ring-4 ring-background shadow-xl bg-card">
                        {(mentor.profilePic && !imgError) ? (
                            <NextImage
                                src={mentor.profilePic}
                                alt={mentor.name}
                                fill
                                unoptimized
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="96px"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                                <User className="w-10 h-10" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1 bg-card text-left">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {mentor.name}
                    </h3>
                </div>

                {/* Area of Interest Tags */}
                <div className="flex flex-wrap justify-start gap-2 mb-6">
                    {mentor.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[10px] font-bold text-muted-foreground bg-accent px-2 py-1 rounded-md uppercase tracking-wider"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-border">
                    <Link
                        href={`/mentors/${mentor.slug}`}
                        className="w-full inline-block py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/90 hover:shadow-lg transition-all duration-300 text-center"
                    >
                        Full Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}
