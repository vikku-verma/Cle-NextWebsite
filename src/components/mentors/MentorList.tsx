"use client";

import React, { useState, useMemo } from "react";
import { Search, Plus, Filter, Users } from "lucide-react";
import { MentorCard } from "./MentorCard";
import { Mentor } from "@/lib/types";

interface MentorListProps {
    initialMentors: Mentor[];
}

export function MentorList({ initialMentors }: MentorListProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMentors = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return initialMentors;

        return initialMentors.filter(mentor =>
            mentor.name.toLowerCase().includes(query) ||
            mentor.subject.toLowerCase().includes(query) ||
            mentor.skills.some(skill => skill.toLowerCase().includes(query)) ||
            mentor.keywords.some(kw => kw.toLowerCase().includes(query))
        );
    }, [searchQuery, initialMentors]);

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            {/* Header Section */}
            <header className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-10 border-b border-border">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground shadow-lg shadow-secondary/10">
                                <Users className="w-6 h-6" />
                            </div>
                            <h1 className="text-4xl font-extrabold text-foreground font-heading tracking-tight">
                                Mentor Directory
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            Management portal for workshop trainers, legal experts, and academic advisors.
                        </p>
                    </div>

                    {/* Search & Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative group flex-1 sm:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by name or skill..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
                            />
                        </div>

                    </div>
                </div>


            </header>

            {/* Grid Container */}
            <div className="container mx-auto px-6">
                {filteredMentors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredMentors.map((mentor) => (
                            <div key={mentor.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <MentorCard mentor={mentor} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-card rounded-[2rem] border-2 border-dashed border-border p-20 text-center">
                        <div className="w-20 h-20 bg-muted/50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">No Mentors Found</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            We couldn't find any mentors matching "{searchQuery}". Try a different skill or name.
                        </p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-8 px-6 py-3 bg-muted text-primary rounded-2xl text-sm font-black uppercase tracking-widest transition-colors hover:bg-muted/80"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
