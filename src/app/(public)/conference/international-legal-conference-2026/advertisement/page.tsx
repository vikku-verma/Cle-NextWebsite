import { AdvertisementHero } from "@/components/conference2026/advertisement-page/AdvertisementHero";
import { AdvertisementIntro } from "@/components/conference2026/advertisement-page/AdvertisementIntro";
import { AdvertisementWhy } from "@/components/conference2026/advertisement-page/AdvertisementWhy";
import { AdvertisementPackages } from "@/components/conference2026/advertisement-page/AdvertisementPackages";
import { AdvertisementStats } from "@/components/conference2026/advertisement-page/AdvertisementStats";
import { AdvertisementContact } from "@/components/conference2026/advertisement-page/AdvertisementContact";

export default function AdvertisementPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#FBFAF8]">
            <AdvertisementHero />
            <AdvertisementIntro />
            <AdvertisementWhy />
            <AdvertisementPackages />
            <AdvertisementStats />
            <AdvertisementContact />
        </main>
    );
}
