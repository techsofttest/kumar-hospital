import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Hospital | Stroke, Neuro Rehabilitation & Pain Care",
  description:
    "Kumar Hospital provides specialist Stroke & Neuro Rehabilitation, Back & Neck Pain care, physiotherapy, advanced rehabilitation and non-surgical pain-management services in Kerala.",
  keywords: [
    "Kumar Hospital",
    "Stroke Rehabilitation",
    "Neuro Rehabilitation",
    "Back Pain",
    "Neck Pain",
    "Pain Management",
    "Physiotherapy",
    "Kochi",
    "Kerala",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${sansFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}