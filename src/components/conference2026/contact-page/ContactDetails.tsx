"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactDetails() {

    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-muted-foreground font-sans">
                                Reach out to us and we'll respond as soon as we can.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-sans text-foreground mb-1">Office Address</h3>
                                    <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                                        Centre of Legal Excellence<br />
                                        123 Legal District<br />
                                        New Delhi, 110001<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-sans text-foreground mb-1">Phone</h3>
                                    <p className="text-muted-foreground font-sans text-sm md:text-base">+91 123 456 7890</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-sans text-foreground mb-1">Email</h3>
                                    <p className="text-muted-foreground font-sans text-sm md:text-base">conference@cle.celnet.in</p>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <Clock className="h-5 w-5 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-sans text-foreground mb-1">Office Hours</h3>
                                    <ul className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed space-y-1">
                                        <li><span className="font-medium text-foreground">Monday – Friday:</span> 9:00 AM – 6:00 PM</li>
                                        <li><span className="font-medium text-foreground">Saturday:</span> 9:00 AM – 1:00 PM</li>
                                        <li className="text-red-500/80"><span className="font-medium text-foreground">Sunday:</span> Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 shadow-xl lg:mt-6"
                    >
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
