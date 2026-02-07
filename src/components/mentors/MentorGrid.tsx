"use client";

import useSWR from "swr";
import { Mentor } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PriceDisplay } from "@/components/shared/PriceDisplay";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function MentorGrid() {
    const { data: mentors, isLoading } = useSWR<Mentor[]>("/api/mentorships", fetcher);

    if (isLoading) {
        return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-[350px] w-full animate-pulse rounded-2xl bg-muted/20" />
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors?.map((mentor) => (
                <div
                    key={mentor.id}
                    className="group relative flex flex-col items-center text-center rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                    {/* Avatar */}
                    <div className="relative mb-4">
                        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-background shadow-sm">
                            <img src={mentor.image} alt={mentor.mentor_name} className="h-full w-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 rounded-full bg-background px-2 py-0.5 text-xs font-bold text-foreground shadow-sm border">
                            <Star className="h-3 w-3 fill-accent text-accent" /> {mentor.rating}
                        </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold">{mentor.mentor_name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{mentor.bio}</p>

                    <div className="my-4 flex flex-wrap justify-center gap-1.5">
                        {mentor.expertise.map((exp) => (
                            <span key={exp} className="inline-flex rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-foreground">
                                {exp}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto w-full pt-4 border-t">
                        <div className="flex items-center justify-between text-sm mb-4">
                            <span className="text-muted-foreground">{mentor.session_format}</span>
                            <span className="font-bold text-primary">
                                <PriceDisplay amount={parseInt(mentor.price.replace(/[^0-9]/g, '')) / 83.5} /> / session
                            </span>
                        </div>
                        <Button className="w-full gap-2" asChild>
                            <Link href={`/mentors/${mentor.id}`}>
                                <MessageSquare className="h-4 w-4" /> Book Session
                            </Link>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
