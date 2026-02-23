import { RegistrationHero } from "@/components/conference2026/registration-page/RegistrationHero";
import { PricingTiers } from "@/components/conference2026/registration-page/PricingTiers";
import { RegistrationForm } from "@/components/conference2026/registration-page/RegistrationForm";

export default function ConferenceRegistrationPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <RegistrationHero />
            <PricingTiers />
            <RegistrationForm />
        </main>
    );
}
