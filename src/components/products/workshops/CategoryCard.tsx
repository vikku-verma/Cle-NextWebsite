"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkshopCategory } from "@/lib/types";

interface CategoryCardProps {
    category: WorkshopCategory & { count?: number };
    index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
    // Helper for truncation
    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50 flex flex-col h-full"
        >
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-bold group-hover:text-[#7A5C2E] transition-colors">
                        {category.title}
                    </h3>
                    {category.count !== undefined && (
                        <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded-full">
                            {category.count}
                        </span>
                    )}
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {truncateText(category.description, 20)}
                </p>

                <Link href={`/products/workshops/${category.slug}`} className="w-full mt-auto">
                    <Button
                        className="w-full bg-[#7A5C2E] hover:bg-[#5F4520] text-white font-medium"
                    >
                        View Workshops <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
