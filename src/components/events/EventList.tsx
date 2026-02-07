"use client";

import useSWR from "swr";
import { CLEEvent } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
// import { Badge } from "@/components/ui/badge";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function EventList() {
    const { data: events, isLoading } = useSWR<CLEEvent[]>("/api/events", fetcher);

    if (isLoading) {
        return (
            <div className="grid gap-6 md:grid-cols-2">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="h-[250px] w-full animate-pulse rounded-2xl bg-muted/20" />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {events?.map((event) => (
                <div
                    key={event.id}
                    className="group relative grid overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg md:grid-cols-[2fr_3fr]"
                >
                    {/* Image/Banner Side */}
                    <div className="relative min-h-[200px] overflow-hidden bg-muted md:min-h-full">
                        <img
                            src={event.banner_image}
                            alt={event.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-sm font-bold shadow-sm backdrop-blur-sm rounded-md">
                            {event.theme || "Conference"}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col p-6 md:p-8">
                        <div className="mb-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5 bg-secondary/10 px-2.5 py-1 rounded-full text-secondary-foreground font-medium">
                                <CalendarDays className="h-4 w-4" /> {event.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" /> {event.location}
                            </span>
                        </div>

                        <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-2">
                            {event.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                            <div className="text-lg font-bold text-primary">
                                ₹{event.ticket_price}
                            </div>
                            <Button asChild>
                                <Link href={`/conferences/${event.id}`}>
                                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            {events?.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No upcoming events scheduled.</p>
            )}
        </div>
    );
}
