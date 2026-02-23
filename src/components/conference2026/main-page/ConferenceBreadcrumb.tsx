"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export function ConferenceBreadcrumb({ pageName }: { pageName: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white/70 font-sans tracking-[0.1em] uppercase shadow-sm"
        >
            <Link
                href="/conference/international-legal-conference-2026"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
                <Home className="h-3.5 w-3.5" />
                Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <span className="text-white/90">{pageName}</span>
        </motion.div>
    );
}
