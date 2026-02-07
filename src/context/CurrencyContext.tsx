"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CurrencyCode = "USD" | "INR" | "EUR" | "GBP";

interface Currency {
    code: CurrencyCode;
    symbol: string;
    rate: number; // Rate relative to USD (1 USD = x CURRENCY)
}

interface CurrencyContextType {
    currency: Currency;
    availableCurrencies: Currency[];
    setCurrency: (code: CurrencyCode) => void;
    convertPrice: (amountInUsd: number) => number;
    formatPrice: (amountInUsd: number) => string;
    isLoading: boolean;
}

const defaultCurrencies: Record<CurrencyCode, Currency> = {
    USD: { code: "USD", symbol: "$", rate: 1 },
    INR: { code: "INR", symbol: "₹", rate: 83.5 }, // Mock rates
    EUR: { code: "EUR", symbol: "€", rate: 0.92 },
    GBP: { code: "GBP", symbol: "£", rate: 0.79 },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currentCode, setCurrentCode] = useState<CurrencyCode>("USD");
    const [isLoading, setIsLoading] = useState(true);

    // Load from localStorage or detect geo
    useEffect(() => {
        const initializeCurrency = async () => {
            setIsLoading(true);
            try {
                const stored = localStorage.getItem("cle_currency") as CurrencyCode;
                if (stored && defaultCurrencies[stored]) {
                    setCurrentCode(stored);
                } else {
                    // Simple mock geo-detection
                    // In prod: fetch('https://ipapi.co/json/')
                    setCurrentCode("USD"); // Default fallback
                }
            } catch (error) {
                console.error("Failed to initialize currency", error);
            } finally {
                setIsLoading(false);
            }
        };

        initializeCurrency();
    }, []);

    const setCurrency = (code: CurrencyCode) => {
        setCurrentCode(code);
        localStorage.setItem("cle_currency", code);
    };

    const convertPrice = (amountInUsd: number) => {
        return amountInUsd * defaultCurrencies[currentCode].rate;
    };

    const formatPrice = (amountInUsd: number) => {
        const converted = convertPrice(amountInUsd);

        // Formatting rules based on currency
        const formatOptions: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: currentCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        };

        // Remove decimals for INR if it's a whole number or large
        if (currentCode === 'INR') {
            formatOptions.minimumFractionDigits = 0;
            formatOptions.maximumFractionDigits = 0;
        }

        return new Intl.NumberFormat('en-US', formatOptions).format(converted);
    };

    const value = {
        currency: defaultCurrencies[currentCode],
        availableCurrencies: Object.values(defaultCurrencies),
        setCurrency,
        convertPrice,
        formatPrice,
        isLoading,
    };

    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
