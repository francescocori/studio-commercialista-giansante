import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { STUDIO } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(STUDIO.siteUrl),
  title: {
    default: `${STUDIO.name} — ${STUDIO.tagline}`,
    template: `%s | ${STUDIO.name}`,
  },
  description:
    "Studio Giansante, dottori commercialisti e consulenti a Pescara. Fiscale, contabilità, consulenza d'impresa e gestione del lavoro. Consulenza anche online.",
  openGraph: {
    siteName: STUDIO.name,
    locale: "it_IT",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${lora.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-dvh antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
