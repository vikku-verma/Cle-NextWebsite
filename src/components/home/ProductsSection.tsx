"use client";

import { Mic, BookOpen, Users, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
    {
        icon: Mic,
        title: "Conferences",
        description: "Attend global legal summits and network with industry leaders.",
        href: "/products/conferences",
        color: "bg-blue-500/10 text-blue-500",
        cta: "View Upcoming",
    },
    {
        icon: Users,
        title: "Membership",
        description: "Join the CLE community and access exclusive resources and networks.",
        href: "/membership",
        color: "bg-orange-500/10 text-orange-500",
        cta: "Join Now",
    },
    {
        icon: GraduationCap,
        title: "Mentorship",
        description: "Get guidance from experienced legal professionals and mentors.",
        href: "/mentors",
        color: "bg-green-500/10 text-green-500",
        cta: "Find Mentor",
    },
    {
        icon: BookOpen,
        title: "Workshops",
        description: "Hands-on, practice-focused legal learning with expert mentors.",
        href: "/products/workshops",
        color: "bg-yellow-500/10 text-yellow-500",
        cta: "Find Workshop",
    },
    {
        icon: FileText,
        title: "Journals",
        description: "Access high-impact legal research and publish your work.",
        href: "/products/journals",
        color: "bg-purple-500/10 text-purple-500",
        cta: "Browse Library",
    },
];

export function ProductsSection() {
    return (
        <section className="bg-muted/50 py-16 sm:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our Products
                        </h2>
                        <p className="mt-2 text-muted-foreground max-w-xl">
                            Explore the entire ecosystem of legal knowledge and professional development.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/products">View All Products</Link>
                    </Button>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {products.map((product) => (
                        <Link
                            key={product.title}
                            href={product.href}
                            className={`group relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${product.title === 'Journals' ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1 xl:col-start-auto lg:col-start-2 sm:col-start-1' : ''}`}
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <product.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                                {product.title}
                            </h3>
                            <p className="mt-2 mb-6 flex-1 text-sm text-muted-foreground">
                                {product.description}
                            </p>
                            <span className="text-sm font-medium text-primary hover:underline underline-offset-4">
                                {product.cta} →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
