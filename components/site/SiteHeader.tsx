"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["About", "/about"],
  ["Membership", "/membership"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Announcements", "/announcements"],
  ["Events", "/events"],
  ["Activities", "/activities"],
  ["Academic", "/academic"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="KUHRSA home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#168DB8] text-sm font-black tracking-tight text-white shadow-sm">
            K
          </span>

          <span>
            <span className="block text-xl font-black tracking-tight text-[#168DB8]">
              KUHRSA
            </span>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-black/45 sm:block">
              Student Association
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black/75 transition hover:text-[#168DB8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <div className="hidden items-center xl:flex">
          <Link
            href="/login"
            className="rounded-full border-2 border-[#168DB8] px-4 py-2 text-sm font-bold text-[#168DB8] transition hover:bg-[#168DB8] hover:text-white"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-[#0B2633] transition hover:border-[#168DB8] hover:text-[#168DB8] xl:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-white xl:hidden">
          <nav
            className="mx-auto max-w-7xl px-5 py-5 lg:px-8"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-black/75 transition hover:bg-[#F4FAFC] hover:text-[#168DB8]"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-4 border-t border-black/10 pt-4">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-full bg-[#168DB8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#11799D]"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
