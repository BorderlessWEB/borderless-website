import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BORDERLESS — Live, Invest, and Grow Without Borders",
  description:
    "BORDERLESS is an ecosystem that unites projects about conscious global living. Freedom, sustainability, smart investments, new luxury.",
  openGraph: {
    title: "BORDERLESS — Live, Invest, and Grow Without Borders",
    description:
      "An ecosystem for conscious global living — citizenship, investment, education, travel, marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
