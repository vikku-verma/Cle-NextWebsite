import { CallForPapersHero } from "@/components/conference2026/papers-page/CallForPapersHero";
import { SubmissionGuidelines } from "@/components/conference2026/papers-page/SubmissionGuidelines";

export default function ConferenceCallForPapersPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <CallForPapersHero />
            <SubmissionGuidelines />
        </main>
    );
}
