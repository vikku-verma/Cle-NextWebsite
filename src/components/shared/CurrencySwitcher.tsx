"use client";

import { useCurrency } from "@/context/CurrencyContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function CurrencySwitcher() {
    const { currency, setCurrency, availableCurrencies, isLoading } = useCurrency();

    if (isLoading) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10">
                    <Globe className="h-3.5 w-3.5" />
                    <span className="text-xs font-bold">{currency.code}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[100px]">
                {availableCurrencies.map((c) => (
                    <DropdownMenuItem
                        key={c.code}
                        onClick={() => setCurrency(c.code)}
                        className="text-xs font-medium cursor-pointer"
                    >
                        <span className="mr-2 opacity-50">{c.symbol}</span>
                        {c.code}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
