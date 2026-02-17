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
  metadataBase: new URL("https://cle-platform.com"),
  title: {
    default: "Centre of Legal Excellence (CLE)",
    template: "%s | Centre of Legal Excellence",
  },
  description: "CLE is a premier legal knowledge platform offering expert-led workshops, high-impact law journals, and professional mentorship for law students and professionals globally.",
  keywords: ["Law", "Legal Education", "Workshops", "Journals", "Legal Research", "Mentorship", "Legal Excellence", "Law Students"],
  authors: [{ name: "CLE Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Centre of Legal Excellence (CLE)",
    description: "Premier legal knowledge platform offering workshops, journals, and professional development.",
    siteName: "Centre of Legal Excellence",
    images: [
      {
        url: "/og-image.jpg", // Make sure this exists or will be added
        width: 1200,
        height: 630,
        alt: "Centre of Legal Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre of Legal Excellence (CLE)",
    description: "Premier legal knowledge platform offering workshops, journals, and professional development.",
    creator: "@CLE_Platform",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
            defaultTheme="system"
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
