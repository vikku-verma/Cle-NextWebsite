"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Mentor } from "@/lib/types";

interface MentorsContextType {
    mentors: Mentor[];
}

const MentorsContext = createContext<MentorsContextType | undefined>(undefined);

export function MentorsProvider({
    children,
    initialMentors
}: {
    children: ReactNode;
    initialMentors: Mentor[];
}) {
    return (
        <MentorsContext.Provider value={{ mentors: initialMentors }}>
            {children}
        </MentorsContext.Provider>
    );
}

export function useMentors() {
    const context = useContext(MentorsContext);
    if (context === undefined) {
        throw new Error("useMentors must be used within a MentorsProvider");
    }
    return context;
}
