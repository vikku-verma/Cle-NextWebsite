"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Workshop } from "@/lib/types";

interface WorkshopsContextType {
    workshops: Workshop[];
    setWorkshops: (workshops: Workshop[]) => void;
}

const WorkshopsContext = createContext<WorkshopsContextType | undefined>(undefined);

export function WorkshopsProvider({
    children,
    initialWorkshops = []
}: {
    children: ReactNode;
    initialWorkshops?: Workshop[];
}) {
    const [workshops, setWorkshops] = useState<Workshop[]>(initialWorkshops);

    // Synchronize if initialWorkshops change (e.g. on server-side refresh)
    useEffect(() => {
        if (initialWorkshops.length > 0) {
            setWorkshops(initialWorkshops);
        }
    }, [initialWorkshops]);

    return (
        <WorkshopsContext.Provider value={{ workshops, setWorkshops }}>
            {children}
        </WorkshopsContext.Provider>
    );
}

export function useWorkshops() {
    const context = useContext(WorkshopsContext);
    if (context === undefined) {
        throw new Error("useWorkshops must be used within a WorkshopsProvider");
    }
    return context;
}
