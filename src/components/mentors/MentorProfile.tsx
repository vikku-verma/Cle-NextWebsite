
"use client";

import React from "react";
import { Mentor } from "@/lib/types";
import {
    Building2,
    Mail,
    UserCircle,
    ScrollText,
    GraduationCap,
    Cpu,
    Eye,
    Hash,
    ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

interface MentorProfileProps {
    mentor: Mentor;
}

export function MentorProfile({ mentor }: MentorProfileProps) {
    const router = useRouter();

    return (
        <div className="bg-background min-h-screen pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 text-foreground">
            {/* Top Navigation Strip */}
            <div className="sticky top-0 z-30 w-full bg-card/80 backdrop-blur-md border-b border-border">
                <div className="container mx-auto px-6 h-16 flex items-center">
                    <button
                        onClick={() => router.push("/mentors")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary font-bold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Return to Directory
                    </button>
                    <div className="ml-auto flex items-center gap-3">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Profile Status</span>
                        <div className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                            mentor.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        )}>
                            {mentor.status}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="h-64 md:h-80 bg-gradient-to-r from-secondary to-primary" />
                <div className="container mx-auto px-6">
                    <div className="relative -mt-24 flex flex-col md:flex-row items-end gap-6 pb-8 border-b border-border">
                        {/* Profile Image */}
                        <div className="h-48 w-48 rounded-3xl overflow-hidden ring-[12px] ring-background shadow-2xl bg-card shrink-0">
                            {mentor.profilePic ? (
                                <img src={mentor.profilePic} alt={mentor.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                                    <UserCircle className="w-20 h-20" />
                                </div>
                            )}
                        </div>

                        {/* Title Info */}
                        <div className="flex-1 pb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                                {mentor.designation || mentor.dataType || "Advanced Mentor"}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                                {mentor.name}
                            </h1>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                    <Building2 className="w-4 h-4 text-primary" />
                                    {mentor.affiliation}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                    <Mail className="w-4 h-4 text-primary" />
                                    {mentor.email}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column (2/3) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Professional Bio */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-secondary border border-secondary/10">
                                    <UserCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Professional Bio</h2>
                            </div>
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                                    {mentor.bio}
                                </p>

                                <div className="mt-10">
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Hash className="w-4 h-4 text-primary" /> Skills & Technical Expertise
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-accent text-secondary rounded-xl text-sm font-bold border border-secondary/5"
                                            >
                                                #{skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Credentials */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-secondary border border-secondary/10">
                                    <ScrollText className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Legal & Corporate Credentials</h2>
                            </div>
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div className="p-4 rounded-2xl bg-background border border-border">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mb-2">GST Number</span>
                                        <code className="text-foreground font-bold font-mono tracking-wider">{mentor.gstNo}</code>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-background border border-border">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block mb-2">CIN Number</span>
                                        <code className="text-foreground font-bold font-mono tracking-wider">{mentor.cinNo}</code>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-6">Authorized Signature</span>
                                    <div className="h-32 w-64 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center border-2 border-dashed border-border rounded-2xl p-4">
                                        {mentor.signature ? (
                                            <img src={mentor.signature} alt="Signature" className="max-h-full max-w-full object-contain" />
                                        ) : (
                                            <span className="text-muted-foreground italic font-serif">Signature not uploaded</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Sidebar 1/3) */}
                    <div className="space-y-8">
                        {/* Academic Details */}
                        <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-primary" /> Academic Details
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Highest Qualification</p>
                                        <p className="text-foreground font-extrabold">{mentor.qualification}</p>
                                        <p className="text-xs text-muted-foreground font-medium">Batch of {mentor.passingYear}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Department</p>
                                        <p className="text-foreground font-extrabold">{mentor.department}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System Information */}
                        <div className="bg-secondary rounded-3xl p-8 text-secondary-foreground shadow-xl shadow-secondary/10">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-accent" /> System Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-3 border-b border-secondary-foreground/10">
                                    <span className="text-xs font-bold border-secondary-foreground/40 uppercase tracking-widest flex items-center gap-2">
                                        <Eye className="w-3 h-3" /> Visibility
                                    </span>
                                    <span className="text-sm font-bold">{mentor.visibility}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Preferred Feed</p>
                                    <p className="text-sm font-bold text-accent">{mentor.preferredFeed}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Employee Name</p>
                                    <p className="text-sm font-bold">{mentor.empName}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-2">Internal Keywords</p>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.keywords.map((kw, i) => (
                                            <span key={i} className="text-[10px] font-medium opacity-50">#{kw}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
