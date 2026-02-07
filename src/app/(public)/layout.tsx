import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { TopBar } from "@/components/shared/TopBar";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <TopBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
