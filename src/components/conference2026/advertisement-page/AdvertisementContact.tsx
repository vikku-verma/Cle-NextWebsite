"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

export function AdvertisementContact() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">

                <div className="max-w-xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Advertising Space</h2>
                    <p className="text-muted-foreground font-sans text-lg">
                        Take advantage of this unique opportunity to elevate your brand and connect with leading professionals by advertising at CLE Conferences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                    {/* Contact Details Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-6">Contact Advertising Coordinator</h3>
                            <p className="text-muted-foreground font-sans mb-8">
                                Reach out to our team directly. We are happy to discuss customized packages to best suit your brand's unique needs.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-[#FBFAF8] rounded-2xl border border-border/50">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold font-sans">Email Us</h4>
                                    <a href="mailto:cle@celnet.in" className="text-muted-foreground hover:text-primary transition-colors font-sans block">
                                        cle@celnet.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-[#FBFAF8] rounded-2xl border border-border/50">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold font-sans">Call Us</h4>
                                    <a href="tel:+919218093700" className="text-muted-foreground hover:text-primary transition-colors font-sans block">
                                        +91 92180 93700
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-[#FBFAF8] rounded-2xl border border-border/50">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold font-sans">Headquarters</h4>
                                    <p className="text-muted-foreground font-sans">
                                        A-118, 1st Floor, Sector-63, <br />
                                        Noida-201301, U.P., India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-border/60 shadow-xl shadow-black/5">
                        <h3 className="font-heading text-2xl font-bold mb-8">Send an Inquiry</h3>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
