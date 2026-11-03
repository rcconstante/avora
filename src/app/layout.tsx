import type { Metadata } from "next";
import { DM_Sans, Great_Vibes, Instrument_Serif } from "next/font/google";
import "./globals.css";
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});
const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Avora — Somewhere Special",
  description:
    "Discover exceptional hotels, private retreats, and unique stays. A little closer to somewhere special.",
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${script.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
