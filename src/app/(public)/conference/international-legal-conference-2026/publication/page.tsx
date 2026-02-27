import { PublicationHero } from "@/components/conference2026/publication-page/PublicationHero";
import { PublicationIntro } from "@/components/conference2026/publication-page/PublicationIntro";
import { PublicationChannels } from "@/components/conference2026/publication-page/PublicationChannels";
import { PublicationDetails } from "@/components/conference2026/publication-page/PublicationDetails";
import { PublicationSupport } from "@/components/conference2026/publication-page/PublicationSupport";
import { PublicationGuidelines } from "@/components/conference2026/publication-page/PublicationGuidelines";
import { PublicationContact } from "@/components/conference2026/publication-page/PublicationContact";

export default function PublicationPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FBFAF8]">
            <PublicationHero />
            <PublicationIntro />
            <PublicationChannels />
            <PublicationDetails />
            <PublicationSupport />
            <PublicationGuidelines />
            <PublicationContact />
        </main>
    );
}
