import React from "react";
import { cn } from "@/lib/utils";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-slate-200/60", className)}
            {...props}
        />
    );
};

export const BlogGridSkeleton = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm h-[400px]"
                >
                    <Skeleton className="h-48 rounded-none w-full" />
                    <div className="flex flex-1 flex-col p-6">
                        <div className="mb-4 flex items-center gap-4">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-6 w-3/4 mb-4" />
                        <div className="space-y-2 mb-6 flex-1">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-2/3" />
                        </div>
                        <Skeleton className="h-4 w-28 mt-auto" />
                    </div>
                </div>
            ))}
        </div>
    );
};
