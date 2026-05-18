"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Passport & Visas", href: "/passport-visas" },
  { label: "Investment", href: "/investment" },
  { label: "Education", href: "/education" },
  { label: "Travel", href: "/travel" },
  { label: "Collaboration", href: "/collaboration" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-burgundy">
              BORDERLESS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-dark hover:text-burgundy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <select
              className="text-sm bg-transparent border border-gray-mid rounded px-2 py-1 text-dark"
              defaultValue="EN"
            >
              <option>EN</option>
              <option>RU</option>
              <option>UA</option>
              <option>DE</option>
              <option>PT</option>
              <option>ES</option>
            </select>
            <Link
              href="#consultation"
              className="bg-burgundy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-burgundy/90 transition-colors"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-light pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-dark hover:text-burgundy transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#consultation"
                className="bg-burgundy text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Get Consultation
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
