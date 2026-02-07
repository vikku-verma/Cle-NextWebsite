"use client";

import { Workshop } from "@/lib/types";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight } from "lucide-react";

interface WorkshopCardProps {
    workshop: Workshop;
    index: number;
    fallbackImage?: string; // New prop for category image fallback
}

export function WorkshopCard({ workshop, index, fallbackImage }: WorkshopCardProps) {
    // Determine image source: API image -> Category Fallback -> Unsplash Generic
    const imageSource = workshop.image || fallbackImage || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-colors"
        >
            <div className="relative h-48 overflow-hidden bg-zinc-950">
                <img
                    src={imageSource}
                    alt={workshop.title || "Workshop"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                        // Final safety net fallback
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000";
                    }}
                />
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-800">
                    <span className="text-yellow-500 font-bold text-sm">
                        {workshop.price ? `₹${workshop.price}` : "Free"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-5">
                <div className="flex items-center gap-3 mb-3 text-xs text-zinc-400">
                    {workshop.date && (
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {/* Parse date safely */}
                            <span>{isNaN(new Date(workshop.date).getTime()) ? workshop.date : new Date(workshop.date).toLocaleDateString()}</span>
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-500 transition-colors">
                    {workshop.title}
                </h3>

                <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {/* Remove HTML tags if description comes as HTML */}
                    {workshop.description?.replace(/<[^>]*>?/gm, '') || "No description available for this workshop."}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                            <User className="w-3 h-3 text-zinc-500" />
                        </div>
                        <span className="text-xs text-zinc-400 font-medium truncate max-w-[100px]">{workshop.author}</span>
                    </div>

                    <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all">
                        Details <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
