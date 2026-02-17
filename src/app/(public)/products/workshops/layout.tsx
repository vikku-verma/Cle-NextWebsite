import React from "react";
import { fetchWorkshops } from "@/lib/api/workshops";
import { WorkshopsProvider } from "@/components/workshops/WorkshopsProvider";

export const dynamic = "force-dynamic";

export default async function WorkshopsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Fetch all workshops once at the layout level
    const workshops = await fetchWorkshops();

    return (
        <WorkshopsProvider initialWorkshops={workshops}>
            {children}
        </WorkshopsProvider>
    );
}
