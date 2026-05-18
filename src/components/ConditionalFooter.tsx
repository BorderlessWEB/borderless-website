"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

// Collaboration page has its own black footer built into the page
export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/collaboration") return null;
  return <Footer />;
}
