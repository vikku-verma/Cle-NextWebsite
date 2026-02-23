"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { TopBar } from "@/components/shared/TopBar";
import { ConferenceNavbar } from "@/components/conference2026/main-page/ConferenceNavbar";
import { ConferenceFooter } from "@/components/conference2026/main-page/ConferenceFooter";
import { usePathname } from "next/navigation";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isConferencePage = pathname?.startsWith("/conference/international-legal-conference-2026");

    return (
        <div className="flex min-h-screen flex-col">
            {!isConferencePage && <TopBar />}
            {isConferencePage ? <ConferenceNavbar /> : <Navbar />}
            <main className="flex-1">{children}</main>
            {isConferencePage ? <ConferenceFooter /> : <Footer />}
        </div>
    );
}
