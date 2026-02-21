import React from "react";
import { BlogGridSkeleton } from "@/components/blog/BlogSkeleton";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-4">
                        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                            Legal Insights & News
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Stay updated with the latest trends, analysis, and thought leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters & Search - Static version for loading */}
            <section className="container py-8 px-4 md:px-6 border-b">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <Filter className="h-4 w-4" /> Filters:
                        </span>
                        <Button variant="secondary" size="sm" disabled>
                            All
                        </Button>
                        <div className="h-8 w-20 animate-pulse rounded-md bg-slate-200/60" />
                        <div className="h-8 w-24 animate-pulse rounded-md bg-slate-200/60" />
                        <div className="h-8 w-16 animate-pulse rounded-md bg-slate-200/60" />
                    </div>

                    <div className="flex w-full md:w-auto gap-2">
                        <Input
                            placeholder="Search articles..."
                            className="bg-background max-w-[300px]"
                            disabled
                        />
                        <Button type="button" size="icon" disabled>
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Blog Grid Skeleton */}
            <section className="container py-16 px-4 md:px-6">
                <BlogGridSkeleton />
            </section>
        </div>
    );
}
