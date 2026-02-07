"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
    amount: number | "Custom"; // Amount in USD base
    className?: string;
}

export function PriceDisplay({ amount, className }: PriceDisplayProps) {
    const { formatPrice, isLoading } = useCurrency();

    if (amount === "Custom") {
        return <span className={className}>Custom</span>;
    }

    if (isLoading) {
        return <span className={cn("animate-pulse bg-muted/40 text-transparent rounded select-none", className)}>00.00</span>;
    }

    return <span className={className}>{formatPrice(amount)}</span>;
}
