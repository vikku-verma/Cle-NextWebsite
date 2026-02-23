"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export function ConferenceFooter() {
    return (
        <footer id="contact" className="w-full border-t bg-background text-sm">
            <div className="container px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-8 lg:grid-cols-4">

                    {/* Column 1: Conference & Brand */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black font-serif text-xs">
                                    CLE
                                </div>
                                <span className="font-heading text-xl font-black tracking-tighter text-foreground uppercase">CLE</span>
                            </Link>
                            <p className="max-w-xs text-muted-foreground leading-relaxed">
                                Advancing legal scholarship and professional development through excellence in research, publishing, and industry-leading education.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/40">
                            <h3 className="font-heading text-lg font-semibold text-foreground">Conference</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><Link href="#about" className="hover:text-primary transition-colors">About the Conference</Link></li>
                                <li><Link href="#themes" className="hover:text-primary transition-colors">Themes & Tracks</Link></li>
                                <li><Link href="#important-dates" className="hover:text-primary transition-colors">Speakers & Schedule</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Participation */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">Participation</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/conference/international-legal-conference-2026/registration" className="hover:text-primary transition-colors">Registration</Link></li>
                            <li><Link href="/conference/international-legal-conference-2026/registration" className="hover:text-primary transition-colors">Advertisement</Link></li>
                            <li><Link href="/conference/international-legal-conference-2026/call-for-papers" className="hover:text-primary transition-colors">Publication</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Guidelines */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">Guidelines</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/conference/international-legal-conference-2026/faq" className="hover:text-primary transition-colors">Resources</Link></li>
                            <li><Link href="/conference/international-legal-conference-2026/faq" className="hover:text-primary transition-colors">Refund & Policy</Link></li>
                            <li><Link href="/conference/international-legal-conference-2026/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Centre of Legal Excellence */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-heading text-lg font-semibold text-foreground">Centre of Legal Excellence</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><Link href="/about" className="hover:text-primary transition-colors">About CLE</Link></li>
                                <li><Link href="/products/journals" className="hover:text-primary transition-colors">Our Journals</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <div className="flex space-x-4">
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-12 border-t pt-8 text-center text-muted-foreground font-sans text-base font-bold">
                    <p>© 2025 Centre of Legal Excellence. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
