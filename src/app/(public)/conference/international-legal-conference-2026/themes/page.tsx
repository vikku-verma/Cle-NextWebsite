import { ThemesHero } from "@/components/conference2026/themes-page/ThemesHero";
import { DetailedTracks } from "@/components/conference2026/themes-page/DetailedTracks";
import { SubmitPaperCTA } from "@/components/conference2026/themes-page/SubmitPaperCTA";

export const metadata = {
    title: "Themes & Tracks - International Legal Conference 2026",
    description: "Explore the 15 specialized legal tracks covering Public Law, Private Law, Technology Law, Commercial Law, and Environmental Law.",
};

export default function ThemesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <ThemesHero />
            <DetailedTracks />
            <SubmitPaperCTA />
        </main>
    );
}
