"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CalendarDays } from "lucide-react";

// Updated schedule data based on your requirements
const scheduleData = [
    {
        id: "day1",
        date: "Day 1: April 16, 2026",
        title: "Inauguration & Plenary",
        events: [
            { time: "09:00 AM - 10:00 AM", title: "Registration & Welcome Tea", location: "Main Atrium", type: "break" },
            { time: "10:00 AM - 11:30 AM", title: "Inaugural Ceremony & Keynote Address", location: "Grand Hall A", type: "plenary", speaker: "Hon. Justice Sarah Jenkins" },
            { time: "11:30 AM - 11:45 AM", title: "Networking Break", location: "Lounge", type: "break" },
            { time: "11:45 AM - 01:15 PM", title: "Plenary Session I: Global Governance in the Digital Age", location: "Grand Hall A", type: "plenary", speaker: "Prof. David R. Chen" },
            { time: "01:15 PM - 02:15 PM", title: "Lunch", location: "Dining Pavilion", type: "break" },
            { time: "02:15 PM - 04:00 PM", title: "Technical Sessions (Tracks 1-5)", location: "Rooms 101-105", type: "technical" },
            { time: "04:00 PM - 04:30 PM", title: "High Tea", location: "Main Atrium", type: "break" },
        ]
    },
    {
        id: "day2",
        date: "Day 2: April 17, 2026",
        title: "Technical Tracks & Policy Discussions",
        events: [
            { time: "09:30 AM - 11:00 AM", title: "Plenary Session II: Climate Change & International Treaties", location: "Grand Hall A", type: "plenary", speaker: "Dr. Elena Rodriguez" },
            { time: "11:00 AM - 11:30 AM", title: "Tea Break", location: "Lounge", type: "break" },
            { time: "11:30 AM - 01:30 PM", title: "Technical Sessions (Tracks 6-10)", location: "Rooms 201-205", type: "technical" },
            { time: "01:30 PM - 02:30 PM", title: "Networking Lunch", location: "Dining Pavilion", type: "break" },
            { time: "02:30 PM - 04:30 PM", title: "Technical Sessions (Tracks 11-15)", location: "Rooms 301-305", type: "technical" },
            { time: "07:00 PM onwards", title: "Gala Dinner & CLE Awards Night", location: "Crystal Ballroom", type: "social" },
        ]
    },
    {
        id: "day3",
        date: "Day 3: April 18, 2026",
        title: "Roundtables & Valedictory",
        events: [
            { time: "10:00 AM - 11:30 AM", title: "Industry Roundtable: The Future of Corporate Litigation", location: "Grand Hall B", type: "plenary", speaker: "Marcus Thorne, Esq." },
            { time: "11:30 AM - 12:00 PM", title: "Tea Break", location: "Lounge", type: "break" },
            { time: "12:00 PM - 01:30 PM", title: "Poster Presentations & Interactive Sessions", location: "Exhibition Center", type: "technical" },
            { time: "01:30 PM - 02:30 PM", title: "Lunch", location: "Dining Pavilion", type: "break" },
            { time: "02:30 PM - 04:00 PM", title: "Valedictory Ceremony & Certificate Distribution", location: "Grand Hall A", type: "plenary" },
        ]
    }
];

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
                        {scheduleData.map((day) => (
                            activeDay === day.id && (
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

                                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                        {day.events.map((event, idx) => (
                                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                                                {/* Timeline Node */}
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FBFAF8] bg-primary/10 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-primary group-hover:text-white">
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
                                                    </div>

                                                    <h4 className="font-heading text-lg font-bold text-foreground mb-2 leading-tight">
                                                        {event.title}
                                                    </h4>

                                                    {event.speaker && (
                                                        <div className="mb-3 text-sm font-sans text-muted-foreground font-semibold">
                                                            By: <span className="text-secondary">{event.speaker}</span>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center text-xs text-muted-foreground font-sans mt-3">
                                                        <MapPin className="h-3.5 w-3.5 mr-1" />
                                                        {event.location}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
