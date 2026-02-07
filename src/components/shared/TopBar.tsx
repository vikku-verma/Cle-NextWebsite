"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CurrencySwitcher } from "./CurrencySwitcher";

export function TopBar() {
    return (
        <div className="relative z-50 flex items-center justify-center bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">
                    🔥 Early Bird Offer
                </span>
                <span className="inline-block">
                    Get 10% OFF with code <span className="font-bold text-accent">ILAC26</span>. Valid until 15th Feb 2026.
                </span>
                <Link
                    href="/register"
                    className="group inline-flex items-center font-bold text-accent hover:underline ml-2"
                >
                    Register Here
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <div className="ml-4 pl-4 border-l border-white/20">
                    <CurrencySwitcher />
                </div>
            </div>
        </div>
    );
}
