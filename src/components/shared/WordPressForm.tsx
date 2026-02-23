"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function WordPressForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear existing content to prevent duplicates
        containerRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://cle.celnet.in/frm_embed/contact-form";
        script.async = true;

        const handleLoad = () => {
            setIsLoading(false);
        };

        const handleError = () => {
            console.error("Failed to load WordPress Form");
            setIsLoading(false);
        };

        script.addEventListener("load", handleLoad);
        script.addEventListener("error", handleError);

        containerRef.current.appendChild(script);

        return () => {
            script.removeEventListener("load", handleLoad);
            script.removeEventListener("error", handleError);
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div className="relative min-h-[500px] w-full bg-card">
            {isLoading && (
                <div className="absolute inset-0 z-10 space-y-6 bg-card transition-opacity duration-300">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-32 w-full" />
                    </div>

                    <Skeleton className="h-11 w-full rounded-md" />
                </div>
            )}

            <div
                ref={containerRef}
                className="frm_forms"
            />
        </div>
    );
}
