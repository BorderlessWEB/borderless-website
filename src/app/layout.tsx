import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BORDERLESS — Live, Invest, and Grow Without Borders",
  description:
    "BORDERLESS is an ecosystem that unites projects about conscious global living.",
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
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
