"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CalendarDays, ArrowRight, Star, Landmark } from "lucide-react";
import { scheduleData, speakersData } from "@/lib/data/conference-data";

function EventCard({ event, isOdd }: { event: any, isOdd: boolean }) {
    return (
        <div className={`relative flex items-center justify-between md:justify-normal ${isOdd ? 'md:flex-row-reverse' : ''} group`}>
            {/* Timeline Node */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FBFAF8] bg-primary/10 text-primary shadow shrink-0 md:order-1 ${isOdd ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} z-10 transition-colors group-hover:bg-primary group-hover:text-white`}>
                <Clock className="w-4 h-4" />
            </div>

            {/* Event Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-shadow group-hover:border-primary/20">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-sans font-bold text-sm text-primary tracking-wide">
                        {event.time}
                    </span>
                    {event.type === 'plenary' && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-secondary/10 text-secondary py-1 px-2 rounded-full font-sans">
                            Keynote / Plenary
                        </span>
                    )}
                    {event.type === 'break' && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-muted text-muted-foreground py-1 px-2 rounded-full font-sans">
                            Break
                        </span>
                    )}
                    {event.type === 'session' && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-green-50 text-green-600 py-1 px-2 rounded-full font-sans">
                            Technical Session
                        </span>
                    )}
                </div>

                <h4 className="font-heading text-lg font-bold text-foreground mb-1 leading-tight">
                    {event.title}
                </h4>

                {event.speaker && (
                    <div className="text-sm font-sans text-muted-foreground font-semibold mb-1">
                        <span className="text-secondary">{event.speaker}</span>
                    </div>
                )}

                {event.organization && (
                    <div className="text-[11px] font-sans text-muted-foreground mb-4 leading-relaxed italic">
                        {event.organization}
                    </div>
                )}

                {event.location && (
                    <div className="flex items-center text-xs text-muted-foreground font-sans mt-3">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {event.location}
                    </div>
                )}

                {event.speakerId && (
                    <div className="mt-4 pt-4 border-t border-dashed border-border/60">
                        <Link
                            href={`/conference/international-legal-conference-2026/speakers/${event.speakerId}`}
                            className="inline-flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-opacity group/link"
                        >
                            View Profile <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export function DetailedSchedule() {
    const [activeDay, setActiveDay] = useState(scheduleData[0].id);

    return (
        <section className="py-24 bg-white relative border-t border-border/40">
            <div className="container px-4 md:px-6">

                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase font-sans"
                    >
                        <CalendarDays className="h-4 w-4" />
                        Conference Itinerary
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                    >
                        Detailed <span className="text-primary italic font-normal">Schedule</span>
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Day Selector Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {scheduleData.map((day) => (
                            <button
                                key={day.id}
                                onClick={() => setActiveDay(day.id)}
                                className={`px-6 py-3 rounded-xl font-sans font-bold text-sm md:text-base border transition-all duration-300 ${activeDay === day.id
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                    : "bg-white text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"
                                    }`}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="mb-1">{day.date.split(':')[0]}</span> {/* e.g., Day 1 */}
                                    <span className="text-xs font-normal opacity-80">{day.date.split(':')[1]?.trim()}</span> {/* e.g., April 16, 2026 */}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Schedule Content */}
                    <AnimatePresence mode="wait">
                        {scheduleData.map((day) => {
                            if (activeDay !== day.id) return null;

                            const chairEvents = day.events.filter(e => e.speakerId && e.type === 'session');
                            const themeEvents = day.events.filter(e => e.speakerId && e.type === 'technical');
                            const timelineEvents = day.events.filter(e => !e.speakerId);

                            // Group theme events by their specific theme title
                            const groupedThemeEvents = themeEvents.reduce((acc, event) => {
                                const themeTitle = event.title || "General Theme";
                                if (!acc[themeTitle]) acc[themeTitle] = [];
                                acc[themeTitle].push(event);
                                return acc;
                            }, {} as Record<string, typeof themeEvents>);

                            return (
                                <motion.div
                                    key={day.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-[#FBFAF8] rounded-3xl p-6 md:p-10 border border-border/50 shadow-sm"
                                >
                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center pb-6 border-b border-border/50">
                                        {day.title}
                                    </h3>

                                    {/* Session Chairs Card Layout */}
                                    {chairEvents.length > 0 && (
                                        <div className="mb-14">
                                            <h4 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                                <Star className="w-5 h-5 text-primary" /> Session Chairs
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                {chairEvents.map((event: any, idx) => (
                                                    <div key={idx} className="relative bg-white rounded-2xl border border-primary/10 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full items-center text-center p-8">
                                                        {/* Top Accent Bar */}
                                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#8b4513]"></div>

                                                        {event.image && (
                                                            <div className="relative mb-6">
                                                                <div className="w-24 h-24 rounded-full p-1 bg-[#8b4513] group-hover:scale-110 transition-transform duration-300">
                                                                    <img
                                                                        src={event.image}
                                                                        alt={event.speaker}
                                                                        className="w-full h-full rounded-full object-cover border-4 border-white"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#8b4513] mb-2">
                                                            Session Chair
                                                        </span>
                                                        <h4 className="font-heading text-xl font-bold text-foreground mb-2 leading-tight">
                                                            {event.speaker}
                                                        </h4>

                                                        <div className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                                            {/* @ts-ignore */}
                                                            {event.organization || event.title}
                                                        </div>

                                                        {event.speakerId && (
                                                            <div className="mt-auto w-full pt-6 border-t border-border/40">
                                                                <Link
                                                                    href={`/conference/international-legal-conference-2026/speakers/${event.speakerId}`}
                                                                    className="inline-flex w-full justify-center items-center gap-1.5 text-[#8b4513] font-bold text-xs uppercase tracking-wider hover:opacity-80 py-2 rounded-lg transition-colors group/link"
                                                                >
                                                                    View Full Profile <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Theme/Keynote Speakers Layout */}
                                    {Object.entries(groupedThemeEvents).length > 0 && (
                                        <div className="mb-14 space-y-12">
                                            {Object.entries(groupedThemeEvents).map(([themeName, events]) => (
                                                <div key={themeName} className="relative">
                                                    <h4 className="font-heading text-lg md:text-xl font-bold text-secondary mb-8 flex items-start gap-3 bg-secondary/5 p-5 rounded-2xl border border-secondary/10 shadow-sm">
                                                        <Landmark className="w-6 h-6 shrink-0 mt-0.5" />
                                                        <span className="leading-snug">{themeName}</span>
                                                    </h4>
                                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        {events.map((event: any, idx) => (
                                                            <div key={idx} className="relative bg-white rounded-2xl border border-primary/10 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full items-center text-center p-8">
                                                                {/* Top Accent Bar */}
                                                                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#8b4513]"></div>

                                                                {event.image && (
                                                                    <div className="relative mb-6">
                                                                        <div className="w-24 h-24 rounded-full p-1 bg-[#8b4513] group-hover:scale-110 transition-transform duration-300">
                                                                            <img
                                                                                src={event.image}
                                                                                alt={event.speaker}
                                                                                className="w-full h-full rounded-full object-cover border-4 border-white"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#8b4513] mb-2">
                                                                    Theme Speaker
                                                                </span>
                                                                <h4 className="font-heading text-xl font-bold text-foreground mb-2 leading-tight">
                                                                    {event.speaker}
                                                                </h4>

                                                                <div className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                                                    {/* @ts-ignore */}
                                                                    {event.organization || event.title}
                                                                </div>

                                                                {event.speakerId && (
                                                                    <div className="mt-auto w-full pt-6 border-t border-border/40">
                                                                        <Link
                                                                            href={`/conference/international-legal-conference-2026/speakers/${event.speakerId}`}
                                                                            className="inline-flex w-full justify-center items-center gap-1.5 text-[#8b4513] font-bold text-xs uppercase tracking-wider hover:opacity-80 py-2 rounded-lg transition-colors group/link"
                                                                        >
                                                                            View Full Profile <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                                                                        </Link>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Traditional Timeline Layout */}
                                    {timelineEvents.length > 0 && (
                                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                            {timelineEvents.map((event, idx) => (
                                                <EventCard key={idx} event={event} isOdd={idx % 2 !== 0} />
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

