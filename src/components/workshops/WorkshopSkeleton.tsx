
import React from "react";
import { cn } from "@/lib/utils";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-slate-200/60", className)}
            {...props}
        />
    );
};

export const CategoryGridSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-[400px]">
                    <Skeleton className="h-48 rounded-none" />
                    <div className="p-6 flex flex-col flex-1">
                        <Skeleton className="h-3 w-20 mb-4" />
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-6 w-1/2 mb-6" />
                        <Skeleton className="h-10 w-full mt-auto rounded-xl" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export const WorkshopTableSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr] gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-3 w-20" />
                ))}
            </div>
            <div className="divide-y divide-slate-100">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr_1fr] gap-4 px-6 py-6 items-center">
                        <Skeleton className="h-5 w-3/4" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-6 w-6 rounded-full" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-8 w-24 rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const WorkshopDetailSkeleton = () => {
    return (
        <div className="space-y-12">
            {/* Hero Skeleton */}
            <div className="bg-[#0f172a] -mt-24 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <Skeleton className="h-3 w-40 bg-white/10" />
                            <Skeleton className="h-4 w-24 bg-white/10 rounded-full" />
                            <Skeleton className="h-16 w-3/4 bg-white/10" />
                            <Skeleton className="h-16 w-1/2 bg-white/10" />
                            <div className="flex gap-4">
                                <Skeleton className="h-12 w-40 bg-white/10 rounded-lg" />
                                <Skeleton className="h-12 w-48 bg-white/10 rounded-lg" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Skeleton className="h-[400px] w-full max-w-md bg-white/10 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <Skeleton className="h-8 w-48 mb-6" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="h-8 w-60 mb-6" />
                            {[...Array(3)].map((_, i) => (
                                <Skeleton key={i} className="h-16 w-full rounded-xl" />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <Skeleton className="h-[300px] w-full rounded-2xl" />
                        <Skeleton className="h-[200px] w-full rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};
