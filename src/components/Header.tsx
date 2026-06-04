"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/passport-visas", label: "Passport/visas" },
  { href: "/investment", label: "Investment" },
  { href: "/education", label: "Education" },
  { href: "/travel", label: "Travel" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  function isActive(href: string) {
    if (href === "/") return isHome;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 lg:py-5 px-4 lg:px-0">
        {/* Logo */}
        <Link href="/">
          <span
            className={`f-nav-active tracking-[3px] transition-colors ${
              isHome ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            BORDERLESS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[25px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`f-nav transition-colors ${
                isActive(item.href)
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

/* ── Mobile slide-out menu ── */

import { useState, useEffect } from "react";

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className="lg:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white/70 hover:text-white p-1"
        aria-label="Menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 top-0 z-40 bg-black/95 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        >
          <nav
            className="flex flex-col items-center justify-center h-full gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`f-nav-active tracking-[3px] text-lg ${
                pathname === "/" ? "text-white" : "text-white/50"
              }`}
            >
              BORDERLESS
            </Link>
            <div className="w-12 h-[1px] bg-white/20 my-2" />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`f-nav text-lg transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
