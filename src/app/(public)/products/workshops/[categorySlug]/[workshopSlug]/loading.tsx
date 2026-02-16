
import React from "react";
import { WorkshopDetailSkeleton } from "@/components/workshops/WorkshopSkeleton";

export default function Loading() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
            <WorkshopDetailSkeleton />
        </main>
    );
}
