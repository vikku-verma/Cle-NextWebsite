import { AboutHero } from "@/components/conference2026/about-page/AboutHero";
import { AboutDetails } from "@/components/conference2026/about-page/AboutDetails";
import { AboutObjectives } from "@/components/conference2026/about-page/AboutObjectives";
import { AboutTeam } from "@/components/conference2026/about-page/AboutTeam";

export default function ConferenceAboutPage() {
    return (
        <main className="flex flex-col">
            <AboutHero />
            <AboutDetails />
            <AboutObjectives />
            <AboutTeam />
        </main>
    );
}
