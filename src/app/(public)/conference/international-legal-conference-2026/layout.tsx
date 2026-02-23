import type { Metadata } from "next";
import { ConferenceTopBar } from "@/components/conference2026/main-page/ConferenceTopBar";

export const metadata: Metadata = {
    title: "International Legal Conference 2026",
    description: "Future Frontiers in Law: Governance, Technology, and Justice",
    keywords: [
        "Legal Conference 2026",
        "International Law Event",
        "Call for Papers",
        "Legal Research Publication"
    ]
};

export default function ConferenceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="ilc2026-wrapper bg-[#F4F2EE] min-h-screen flex flex-col">
            <ConferenceTopBar />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
