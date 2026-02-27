import { FAQHero } from "@/components/conference2026/faq-page/FAQHero";
import { FAQWelcome } from "@/components/conference2026/faq-page/FAQWelcome";
import { FAQAccordion } from "@/components/conference2026/faq-page/FAQAccordion";
import { FAQContact } from "@/components/conference2026/faq-page/FAQContact";

export default function ConferenceFAQPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FBFAF8]">
            <FAQHero />
            <FAQWelcome />
            <FAQAccordion />
            <FAQContact />
        </main>
    );
}
