"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, BookOpen, Scale, FileText } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-background">
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-16 mb-12">
                <div className="container px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
                            <Scale className="h-3 w-3" />
                            Legal Documentation
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">Terms of Service</h1>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed">
                            Please read these terms and conditions carefully before using our website and services.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container px-6">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0 space-y-12">
                            {/* Introduction */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    This Website User Agreement and the Privacy Policy lays out the terms and conditions and rules, as maybe amended and supplemented, from time to time (hereinafter referred to as the "Agreement") which shall be applicable to the access and use of the website of Centre of Legal Excellence (Unit of Consortium eLearning Network Pvt Ltd), i.e. www.cle.celnet.in ("Website") by you, the visitor/ user ("User") of the Website.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">01</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Acceptance of Terms and Modification</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        1.1 Access of the Website by the User constitutes an acknowledgement and acceptance in full, of all the terms, conditions and notices as stated in this Agreement and without any modification and/or exception by the User of this Agreement. If the User does not agree with any part of such terms, conditions and notices as stated in this Agreement in any manner, the User must not access the Website.
                                    </p>
                                    <p>
                                        1.2 Centre of Legal Excellence (Unit of Consortium eLearning Network Pvt Ltd) reserves the right to change the terms, conditions and notices pursuant to which the Website is accessed by the User, without any notice or intimation of such change.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">02</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Limited User</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        2.1 The User agrees that given the nature of the Internet, even though the Website is targeted to Indian Residents only, it may be accessed in other parts of the world. The material/information on this Website is not intended for use by persons located in, or residents in countries that restrict the distribution of such material/information or by any person in any jurisdiction where distribution or use of such material/information or usage or access of Website will be contrary to law or any regulation.
                                    </p>
                                    <p>
                                        2.2 The User further agrees and undertakes not to reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, services or intellectual property obtained from the Website in any manner whatsoever.
                                    </p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">03</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Disclaimer of Warranties</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        3.1 Centre of Legal Excellence has endeavored to ensure that all the information provided by it on this Website is correct, but it neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data or information displayed on this Website.
                                    </p>
                                    <p>
                                        3.2 Centre of Legal Excellence shall not be held responsible for non‐availability of the Website at any point in time for any reason whatsoever. User understands and agrees that any material obtained from the Website is done entirely at his discretion and risk.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">04</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Links to Third Party Sites</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        4.1 The Website may contain links to other websites or may contain features of any nature of other websites on the Website ("Linked Sites"). The Linked Sites are not under the control of Centre of Legal Excellence and we are not responsible for the contents of any Linked Site.
                                    </p>
                                    <p>
                                        4.2 Centre of Legal Excellence will be making calls and sending SMS through a thrid-party platform after The User's registration in order to provide our service. The User's registration means acceptance of the service.
                                    </p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">05</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">User's Obligations</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        5.1 As a condition of access and use of the Website, the User warrants that he will not use the Website for any purpose that is unlawful or illegal under any law for the time being in force within or outside India or prohibited by this Agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">06</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Ownership and Proprietary Rights</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        6.1 The content of the Website and all copyrights, patents, trademarks, service marks, trade names and all other intellectual property rights therein are owned by Centre of Legal Excellence or validly licensed to us and are protected by applicable Indian and international copyright law.
                                    </p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">07</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Limitation of Liability</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        7.1 IN NO EVENT WILL THE CENTRE OF LEGAL EXCELLENCE OR ANY OF ITS AFFILIATES BE LIABLE TO THE USER FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES RESULTING FROM THE USER'S USE OF OR INABILITY TO USE THE WEBSITE.
                                    </p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="font-black text-lg">08</span>
                                    </div>
                                    <h2 className="text-2xl font-black font-heading text-slate-900">Governing Law</h2>
                                </div>
                                <div className="pl-13 space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        8.1 This Agreement shall be governed by and constructed in accordance with the laws of India. In the event any dispute in relation hereto is brought by the User, it shall be subject to the exclusive jurisdiction of the courts of Delhi, India.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Footer Note */}
                    <div className="mt-20 pt-8 border-t border-slate-200">
                        <div className="flex items-center gap-4 text-muted-foreground italic">
                            <Shield className="h-5 w-5 opacity-50" />
                            <p className="text-sm">
                                Center of Legal Excellence is committed to transparency and upholding the highest standards of legal research and ethics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
