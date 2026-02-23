"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ConferenceTopBar() {
    return (
        <div className="relative z-[110] flex items-center justify-center bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground sm:px-6 lg:px-8 font-sans">
            <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground flex items-center gap-1 shadow-sm">
                    <span className="animate-pulse">🔥</span> Early Bird Offer
                </span>
                <span className="inline-block tracking-wide">
                    Get 10% OFF with code <span className="font-bold text-accent">ILAC26</span>. Valid until 15th Feb 2026.
                </span>
                <Link
                    href="/conference/international-legal-conference-2026/registration"
                    className="group inline-flex items-center font-bold text-accent hover:text-white transition-colors ml-2 underline decoration-accent/30 underline-offset-4"
                >
                    Register Here
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </div>
    );
}
