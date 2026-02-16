import React from "react";
import { fetchMentors } from "@/lib/api/mentors";
import { MentorsProvider } from "@/components/mentors/MentorsProvider";

export default async function MentorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const mentors = await fetchMentors();

    return (
        <MentorsProvider initialMentors={mentors}>
            {children}
        </MentorsProvider>
    );
}
