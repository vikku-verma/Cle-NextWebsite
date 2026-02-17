import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background text-sm">
            <div className="container px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-8 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black font-serif">
                                C
                            </div>
                            <span className="font-heading text-xl font-black tracking-tighter text-foreground">CLE</span>
                        </Link>
                        <p className="max-w-xs text-muted-foreground leading-relaxed">
                            Advancing legal scholarship and professional development through excellence in research, publishing, and industry-leading education.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">Platform</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/products/journals" className="hover:text-primary">Journals</Link></li>
                            <li><Link href="/products/journals?filter=book" className="hover:text-primary">Books</Link></li>
                            <li><Link href="/products/workshops" className="hover:text-primary">Workshops</Link></li>
                            <li><Link href="/mentors" className="hover:text-primary">Mentorship</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">Resources</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="https://manuscript-engine.journalslibrary.com/conferences/entry/31140/" className="hover:text-primary">Submit Paper</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">Subscribe</h3>
                        <p className="text-muted-foreground">
                            Get the latest updates on legal research and events.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input placeholder="Enter your email" type="email" />
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
                    <p>© {new Date().getFullYear()} Centre of Legal Excellence. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
