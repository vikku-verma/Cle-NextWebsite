import { FAQHero } from "@/components/conference2026/faq-page/FAQHero";
import { FAQAccordion } from "@/components/conference2026/faq-page/FAQAccordion";

export default function ConferenceFAQPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <FAQHero />
            <FAQAccordion />
        </main>
    );
}
