"use client";

import { useState } from "react";
import useSWR from "swr";
import { Product } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookOpen, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const categories = ["All", "Journal", "Book", "Course"];

export function ProductsGrid() {
    const { data: products, error, isLoading } = useSWR<Product[]>("/api/products", fetcher);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = products?.filter((product) => {
        const matchesSearch = product.product_name.toLowerCase().includes(search.toLowerCase()) ||
            product.about_product.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.product_category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-xl bg-card p-4 shadow-sm border">
                <div className="relative flex-1 md:max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search titles, topics..."
                        className="pl-9 bg-background"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={selectedCategory === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(cat)}
                            className="whitespace-nowrap rounded-full"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading && (
                    [...Array(6)].map((_, i) => (
                        <div key={i} className="h-[400px] w-full animate-pulse rounded-2xl bg-muted/20" />
                    ))
                )}

                <AnimatePresence>
                    {filteredProducts?.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            layout
                            className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={product.product_image}
                                    alt={product.product_name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 rounded-full bg-background/90 px-2 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
                                    {product.product_category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-2 flex gap-2">
                                    {product.keywords?.slice(0, 2).map(tag => (
                                        <span key={tag} className="inline-flex items-center rounded-md bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-heading text-xl font-bold leading-tight line-clamp-2 mb-2">
                                    <Link href={`/journals/${product.id}`} className="hover:text-primary transition-colors">
                                        {product.product_name}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                    {product.about_product}
                                </p>

                                <div className="mt-auto flex items-center justify-between border-t pt-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg text-primary">₹{product.price_in_inr}</span>
                                    </div>
                                    <Button size="sm" asChild>
                                        <Link href={`/journals/${product.id}`}>View Details</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredProducts?.length === 0 && !isLoading && (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        <p>No products found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
