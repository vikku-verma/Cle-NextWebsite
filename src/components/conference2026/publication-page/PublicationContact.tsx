"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

export function PublicationContact() {
    return (
        <section className="py-24 bg-[#FBFAF8] relative border-t border-border/30">
            <div className="container px-4 md:px-6">

                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Contact for Publication Inquiries</h2>
                    <p className="text-muted-foreground font-sans text-lg">
                        If you have questions about the publication process or need assistance with your submission, contact our publications team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-2xl border border-border/50">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold font-sans">Email Us</h4>
                                <a href="mailto:publications@celnet.in" className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm">
                                    publications@celnet.in
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-2xl border border-border/50">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold font-sans">Call Us</h4>
                                <a href="tel:+919218093700" className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm">
                                    +91 92180 93700
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-2xl border border-border/50">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold font-sans">Address</h4>
                                <p className="text-muted-foreground font-sans text-sm">
                                    A-118, 1st Floor, Sector-63, <br />
                                    Noida-201301, U.P., India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-border/60 shadow-xl shadow-black/5">
                        <h3 className="font-heading text-2xl font-bold mb-8">Publication Inquiry Form</h3>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
