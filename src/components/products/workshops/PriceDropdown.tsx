"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PriceDropdownProps {
    pricing?: {
        inr?: number;
        usd?: number;
    };
    defaultDisplayPrice?: string; // Fallback string e.g. "82"
}

type Currency = "INR" | "USD";

export function PriceDropdown({ pricing, defaultDisplayPrice }: PriceDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>("INR");

    // Initialize currency based on what's available
    useEffect(() => {
        if (pricing?.inr && !pricing.usd) setSelectedCurrency("INR");
        else if (!pricing?.inr && pricing?.usd) setSelectedCurrency("USD");
        // default to INR if both or neither
    }, [pricing]);

    const hasInr = !!pricing?.inr;
    const hasUsd = !!pricing?.usd;
    const hasMultiple = hasInr && hasUsd;

    // Determine values to display
    const currentPrice = selectedCurrency === "INR" ? pricing?.inr : pricing?.usd;
    const displayValue = currentPrice ? (selectedCurrency === "INR" ? `₹${currentPrice}` : `$${currentPrice}`) : (defaultDisplayPrice ? `₹${defaultDisplayPrice}` : "Free");

    const toggleDropdown = () => {
        if (hasMultiple) setIsOpen(!isOpen);
    };

    const selectCurrency = (currency: Currency) => {
        setSelectedCurrency(currency);
        setIsOpen(false);
    };

    // If no pricing object, just show the fallback static text
    if (!pricing || (!hasInr && !hasUsd)) {
        return (
            <div className="flex flex-col">
                <span className="text-zinc-400 text-xs uppercase tracking-wider font-medium">Workshop Price</span>
                <span className="text-xl font-bold text-white">
                    {defaultDisplayPrice ? `₹${defaultDisplayPrice}` : "Free"}
                </span>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex flex-col">
                <span className="text-zinc-400 text-xs uppercase tracking-wider font-medium mb-1">Workshop Price</span>

                <button
                    onClick={toggleDropdown}
                    className={`flex items-center gap-2 text-xl font-bold text-white group ${hasMultiple ? 'cursor-pointer' : 'cursor-default'}`}
                >
                    <span className="flex items-center gap-2">
                        {selectedCurrency === "INR" ? "🇮🇳" : "🇺🇸"} {displayValue}
                    </span>
                    {hasMultiple && (
                        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-white`} />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-xl"
                    >
                        <div className="p-1">
                            {hasInr && (
                                <button
                                    onClick={() => selectCurrency("INR")}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCurrency === "INR" ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
                                >
                                    <span>🇮🇳</span> INR
                                </button>
                            )}
                            {hasUsd && (
                                <button
                                    onClick={() => selectCurrency("USD")}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCurrency === "USD" ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'}`}
                                >
                                    <span>🇺🇸</span> USD
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
