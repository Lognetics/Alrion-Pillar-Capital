import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FIRM } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
