import { SpeakersHero } from "@/components/conference2026/speakers-page/SpeakersHero";

import { DetailedSchedule } from "@/components/conference2026/speakers-page/DetailedSchedule";

export default function ConferenceSpeakersSchedulePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <SpeakersHero />
            <DetailedSchedule />
        </main>
    );
}
