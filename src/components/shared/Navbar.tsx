"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, GraduationCap, Users, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useWishlist } from "@/context/WishlistContext";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { items } = useWishlist();

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-[72px] items-center justify-between px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black font-serif shadow-lg shadow-primary/20">
                        C
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-lg font-black tracking-tighter text-foreground leading-none">
                            CENTRE FOR
                        </span>
                        <span className="font-heading text-sm font-bold tracking-[0.2em] text-primary leading-none mt-1">
                            LEGAL EXCELLENCE
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* Products Mega Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary hover:bg-primary/90 p-6 no-underline outline-none focus:shadow-md transition-colors"
                                                    href="/products/journals"
                                                >
                                                    <BookOpen className="h-6 w-6 text-white" />
                                                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                        Journals
                                                    </div>
                                                    <p className="text-sm leading-tight text-white/90">
                                                        Access high-impact legal research and publish your work.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/products/journals/publication"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10"
                                                >
                                                    <div className="text-sm font-medium leading-none">Publication</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Submit research papers for review.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/products/journals/subscription"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10"
                                                >
                                                    <div className="text-sm font-medium leading-none">Subscription</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Subscribe to our premium journals.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/conference/international-legal-conference-2026"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10"
                                                    target="_blank"
                                                >
                                                    <div className="text-sm font-medium leading-none">Conferences</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Attend global legal summits.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/products/workshops"
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10"
                                                >
                                                    <div className="text-sm font-medium leading-none">Workshops</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Hands-on legal training programs.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center space-x-4 lg:flex">
                    <Button variant="ghost" size="icon" asChild className="relative" title="Wishlist">
                        <Link href="/wishlist">
                            <Heart className="h-5 w-5" />
                            {items.length > 0 && (
                                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                            )}
                            <span className="sr-only">Wishlist</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" asChild className="hidden xl:flex">
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6" asChild>
                        <Link href="/membership">Join Membership</Link>
                    </Button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="flex items-center gap-4 lg:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t bg-background lg:hidden">
                    <div className="container flex flex-col space-y-4 py-6 px-6">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">
                            About Us
                        </Link>

                        <div className="py-2 space-y-3">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Products</span>
                            <div className="pl-4 border-l-2 space-y-3">
                                <Link href="/products/journals" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-primary">
                                    Journals
                                </Link>
                                <Link href="/products/journals/publication" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">
                                    Submit Paper
                                </Link>
                                <Link href="/products/conferences" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-primary">
                                    Conferences
                                </Link>
                                <Link href="/products/workshops" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-primary">
                                    Workshops
                                </Link>
                            </div>
                        </div>

                        <Link href="/blog" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">
                            Blog
                        </Link>
                        <Link href="/wishlist" onClick={() => setIsOpen(false)} className="flex items-center text-sm font-medium hover:text-primary">
                            Wishlist
                            {items.length > 0 && (
                                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                                    {items.length}
                                </span>
                            )}
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">
                            Contact Us
                        </Link>

                        <div className="pt-4">
                            <Button className="w-full bg-primary text-primary-foreground rounded-full" asChild>
                                <Link href="/membership">Join Membership</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
