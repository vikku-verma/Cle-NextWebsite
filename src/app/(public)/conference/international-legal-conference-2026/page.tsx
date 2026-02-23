import { ConferenceHero } from "@/components/conference2026/main-page/ConferenceHero";
import { ConferenceAbout } from "@/components/conference2026/main-page/ConferenceAbout";
import { ImportantDates } from "@/components/conference2026/main-page/ImportantDates";
import { ThemesGrid } from "@/components/conference2026/main-page/ThemesGrid";
import { ConferenceTestimonials } from "@/components/conference2026/main-page/ConferenceTestimonials";
import { ConferenceRegistrationCTA } from "@/components/conference2026/main-page/ConferenceRegistrationCTA";

export default function ConferencePage() {
    return (
        <main className="flex flex-col">
            <ConferenceHero />
            <ConferenceAbout />
            <ImportantDates />
            <ThemesGrid />
            <ConferenceTestimonials />
            <ConferenceRegistrationCTA />
        </main>
    );
}
