import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function JournalsPage() {
    return (
        <div className="container py-12 px-4 md:px-6">

            {/* Header */}
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Knowledge Library
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore our curated collection of legal journals, books, and courses.
                    </p>
                </div>
                <Button asChild className="gap-2">
                    <Link href="/start">
                        <Plus className="h-4 w-4" /> Publish Your Work
                    </Link>
                </Button>
            </div>

            {/* Dynamic Grid */}
            <ProductsGrid />

        </div>
    );
}
