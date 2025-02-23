import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import { NavigationPanel } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Isaac Kwok",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable}`}>
        {children}
        <NavigationPanel />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
