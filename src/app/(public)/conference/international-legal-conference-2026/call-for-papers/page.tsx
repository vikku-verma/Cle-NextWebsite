import { CallForPapersHero } from "@/components/conference2026/papers-page/CallForPapersHero";
import { SubmissionGuidelines } from "@/components/conference2026/papers-page/SubmissionGuidelines";
import { ThemesList } from "@/components/conference2026/papers-page/ThemesList";

export default function ConferenceCallForPapersPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <CallForPapersHero />
            <SubmissionGuidelines />
            <ThemesList />
        </main>
    );
}
