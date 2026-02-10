import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { CurrencyProvider } from "@/context/CurrencyContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Centre of Legal Excellence (CLE)",
    template: "%s | CLE",
  },
  description: "Premier legal knowledge platform offering workshops, journals, and professional development for law students and professionals.",
  keywords: ["Law", "Legal Education", "Workshops", "Journals", "Legal Research", "Mentorship"],
  authors: [{ name: "CLE Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cle-platform.com", // Replace with actual domain
    title: "Centre of Legal Excellence (CLE)",
    description: "Premier legal knowledge platform offering workshops, journals, and professional development.",
    siteName: "Centre of Legal Excellence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre of Legal Excellence (CLE)",
    description: "Premier legal knowledge platform offering workshops, journals, and professional development.",
    creator: "@CLE_Platform", // Replace with actual handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        <CurrencyProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
