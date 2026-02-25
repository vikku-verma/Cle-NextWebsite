import { ContactHero } from "@/components/conference2026/contact-page/ContactHero";
import { ContactDetails } from "@/components/conference2026/contact-page/ContactDetails";
import { ConferenceCommittee } from "@/components/conference2026/contact-page/ConferenceCommittee";
import { ContactFaq } from "@/components/conference2026/contact-page/ContactFaq";

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FBFAF8] pb-24">
            <ContactHero />
            <ContactDetails />
            <ConferenceCommittee />
            <ContactFaq />
        </main>
    );
}
