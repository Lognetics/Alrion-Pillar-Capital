import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FIRM } from "@/lib/site";

// Body / UI — a neo-grotesque close in character to BlackRock's BLK Fort.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display — Inter Tight gives the tight, thin large-headline feel of BLK Fort.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alrionpillarcapital.com"),
  title: {
    default: `${FIRM.name} — ${FIRM.tagline}`,
    template: `%s · ${FIRM.name}`,
  },
  description: FIRM.description,
  openGraph: {
    title: `${FIRM.name} — ${FIRM.tagline}`,
    description: FIRM.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
