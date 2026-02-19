"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { SubscriptionProduct } from "@/services/subscriptionService";

interface WishlistContextType {
    items: SubscriptionProduct[];
    addToWishlist: (product: SubscriptionProduct) => void;
    removeFromWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<SubscriptionProduct[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("wishlist");
            if (stored) {
                try {
                    setItems(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse wishlist", e);
                }
            }
            setIsLoaded(true);
        }
    }, []);

    // Save to local storage whenever items change
    useEffect(() => {
        if (isLoaded && typeof window !== "undefined") {
            localStorage.setItem("wishlist", JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addToWishlist = (product: SubscriptionProduct) => {
        setItems((prev) => {
            if (prev.some((item) => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId: number) => {
        setItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId: number) => {
        return items.some((item) => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
