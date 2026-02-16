"use client";

import React from "react";
import { MentorList } from "@/components/mentors/MentorList";
import { useMentors } from "@/components/mentors/MentorsProvider";

export default function MentorsPage() {
    const { mentors } = useMentors();

    return <MentorList initialMentors={mentors} />;
}
