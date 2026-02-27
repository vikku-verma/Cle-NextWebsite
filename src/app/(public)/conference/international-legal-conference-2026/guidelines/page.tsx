import { GuidelinesHero } from "@/components/conference2026/guidelines-page/GuidelinesHero";
import { GuidelinesWelcome } from "@/components/conference2026/guidelines-page/GuidelinesWelcome";
import { GuidelinesParticipants } from "@/components/conference2026/guidelines-page/GuidelinesParticipants";
import { GuidelinesConduct } from "@/components/conference2026/guidelines-page/GuidelinesConduct";
import { GuidelinesPostEvent } from "@/components/conference2026/guidelines-page/GuidelinesPostEvent";
import { GuidelinesSupport } from "@/components/conference2026/guidelines-page/GuidelinesSupport";

export default function GuidelinesPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FBFAF8]">
            <GuidelinesHero />
            <GuidelinesWelcome />
            <GuidelinesParticipants />
            <GuidelinesConduct />
            <GuidelinesPostEvent />
            <GuidelinesSupport />
        </main>
    );
}
