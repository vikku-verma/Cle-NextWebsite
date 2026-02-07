"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
    {
        id: 1,
        title: "The Future of AI in Legal Practice",
        excerpt: "Exploring how artificial intelligence is reshaping contract analysis and legal research.",
        author: "Dr. Sarah Jenkins",
        date: "March 15, 2026",
        category: "Legal Tech",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Understanding New Cyber Law Amendments",
        excerpt: "A comprehensive guide to the recent changes in international cyber law frameworks.",
        author: "Adv. Rajesh Kumar",
        date: "March 10, 2026",
        category: "Cyber Law",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Sustainable Law Firms: A Green Initiative",
        excerpt: "How top law firms are adopting sustainable practices to reduce their carbon footprint.",
        author: "Elena Rodriguez",
        date: "March 05, 2026",
        category: "Practice Management",
        image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80"
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-3xl space-y-4"
                    >
                        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                            Legal Insights & News
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Stay updated with the latest trends, analysis, and thought leadership from the Centre of Legal Excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="container py-16 px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 rounded-md bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <CalendarDays className="h-3 w-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="h-3 w-3" /> {post.author}
                                    </span>
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <Button variant="link" className="w-fit p-0 h-auto" asChild>
                                    <Link href={`/blog/${post.id}`}>
                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="border-t bg-muted/20 py-16">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="font-heading text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get the latest legal insights delivered directly to your inbox. No spam, just knowledge.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
