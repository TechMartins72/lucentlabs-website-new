import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lucent Labs",
  description:
    "Lucent Labs specializes in developing cutting-edge decentralized applications, smart contracts, and blockchain solutions. We're committed to advancing the Cardano and Midnight ecosystems through innovation and community engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${montserrat.variable} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
