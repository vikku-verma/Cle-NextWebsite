"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/conference/international-legal-conference-2026#home" },
    { name: "About", href: "/conference/international-legal-conference-2026/about" },
    { name: "Themes", href: "/conference/international-legal-conference-2026/themes" },
    // { name: "Dates", href: "/conference/international-legal-conference-2026/dates" },
    { name: "Registration fees", href: "/conference/international-legal-conference-2026/registration" },
    { name: "Speakers", href: "/conference/international-legal-conference-2026/speakers" },
    { name: "Contact", href: "/conference/international-legal-conference-2026/contact" },
];

export function ConferenceNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes("#")) {
            const path = href.split("#")[0];
            const hash = href.split("#")[1];

            // If it's an anchor on the same page (or just an ID)
            if (!path || window.location.pathname === path) {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                }
            } else {
                // Let the native Link navigation happen for different pages
                setIsOpen(false);
            }
        } else {
            // Normal link (like /about)
            setIsOpen(false);
        }
    };

    return (
        <nav className={cn(
            "sticky top-0 z-[100] w-full transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-background py-5"
        )}>
            <div className="container flex items-center justify-between px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black font-serif shadow-lg shadow-primary/20">
                        C
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-lg font-black tracking-tighter text-foreground leading-none uppercase">
                            ILC 2026
                        </span>
                        <span className="font-heading text-[10px] font-bold tracking-[0.2em] text-primary leading-none mt-1 uppercase">
                            Conference Portal
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 font-bold"
                        asChild
                    >
                        <Link href="/conference/international-legal-conference-2026/registration">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="lg:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-white border-b shadow-xl lg:hidden"
                    >
                        <div className="container flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full bg-primary text-white rounded-xl py-6 text-lg font-bold"
                                asChild
                            >
                                <Link href="/conference/international-legal-conference-2026/registration" onClick={() => setIsOpen(false)}>
                                    Register Now
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
