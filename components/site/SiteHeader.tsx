"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type SiteNavigation = {
  label: string;
  items: NavItem[];
};

const globalNavigation: SiteNavigation = {
  label: "KUHRSA",
  items: [
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
  ].map(([label, href]) => ({ label, href })),
};

const siteNavigations: Record<string, SiteNavigation> = {
  "/about": {
    label: "About KUHRSA",
    items: [
      { label: "About KUHRSA", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Structure", href: "/about#structure" },
    ],
  },

  "/membership": {
    label: "Membership",
    items: [
      { label: "Membership Home", href: "/membership" },
      { label: "Why Membership", href: "/membership#why" },
      { label: "How to Join", href: "/membership#join" },
      { label: "Benefits", href: "/membership#benefits" },
      { label: "Activate Membership", href: "/activate-membership" },
    ],
  },

  "/news": {
    label: "News",
    items: [
      { label: "News Home", href: "/news" },
      { label: "Latest News", href: "/news#latest" },
      { label: "Featured", href: "/news#featured" },
    ],
  },

  "/blog": {
    label: "Blog",
    items: [
      { label: "Blog Home", href: "/blog" },
      { label: "Latest Stories", href: "/blog#latest" },
      { label: "Featured", href: "/blog#featured" },
      { label: "Topics", href: "/blog#topics" },
      { label: "Categories", href: "/blog#categories" },
    ],
  },

  "/announcements": {
    label: "Announcements",
    items: [
      { label: "Announcements Home", href: "/announcements" },
      { label: "Latest Notices", href: "/announcements#latest" },
      { label: "Important Updates", href: "/announcements#important" },
    ],
  },

  "/events": {
    label: "Events",
    items: [
      { label: "Events Home", href: "/events" },
      { label: "Upcoming Events", href: "/events#upcoming" },
      { label: "Past Events", href: "/events#past" },
      { label: "Event Calendar", href: "/events#calendar" },
    ],
  },

  "/activities": {
    label: "Activities",
    items: [
      { label: "Activities Home", href: "/activities" },
      { label: "Current Activities", href: "/activities#current" },
      { label: "Past Activities", href: "/activities#past" },
      { label: "Opportunities", href: "/activities#opportunities" },
    ],
  },

  "/academic": {
    label: "Academic",
    items: [
      { label: "Academic Home", href: "/academic" },
      { label: "Academic Updates", href: "/academic#updates" },
      { label: "Opportunities", href: "/academic#opportunities" },
      { label: "Academic Resources", href: "/academic#resources" },
    ],
  },

  "/resources": {
    label: "Resources",
    items: [
      { label: "Resources Home", href: "/resources" },
      { label: "Academic Resources", href: "/resources#academic" },
      { label: "Member Resources", href: "/resources#members" },
      { label: "Downloads", href: "/resources#downloads" },
    ],
  },

  "/departments": {
    label: "Departments",
    items: [
      { label: "Departments Home", href: "/departments" },
      { label: "Department Directory", href: "/departments#directory" },
      { label: "Department Contacts", href: "/departments#contacts" },
    ],
  },

  "/gallery": {
    label: "Gallery",
    items: [
      { label: "Gallery Home", href: "/gallery" },
      { label: "Events", href: "/gallery#events" },
      { label: "Activities", href: "/gallery#activities" },
      { label: "KUHRSA Community", href: "/gallery#community" },
    ],
  },

  "/contact": {
    label: "Contact",
    items: [
      { label: "Contact KUHRSA", href: "/contact" },
      { label: "Get in Touch", href: "/contact#contact" },
      { label: "Location", href: "/contact#location" },
    ],
  },
};

function getNavigation(pathname: string): SiteNavigation {
  if (pathname === "/") {
    return globalNavigation;
  }

  const matchingPath = Object.keys(siteNavigations)
    .sort((a, b) => b.length - a.length)
    .find(
      (basePath) =>
        pathname === basePath || pathname.startsWith(`${basePath}/`)
    );

  return matchingPath
    ? siteNavigations[matchingPath]
    : globalNavigation;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = getNavigation(pathname);

  const isGlobalNavigation = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#2BB9EC] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="KUHRSA home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm">
            <Image
              src="/images/kuhrsa_logo.jpeg"
              alt="KUHRSA official logo"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </div>

          <span>
            <span className="block text-xl font-black tracking-tight text-[#0B2633]">
              KUHRSA
            </span>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:block">
              Student Association
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          {navigation.items.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition ${
                  isActive
                    ? "text-[#0B2633]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 rounded-full bg-[#0B2633]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login */}
        <div className="hidden items-center xl:flex">
          <Link
            href="/login"
            className="rounded-full bg-[#F700BA] px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#CE26A4]"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/15 xl:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 top-0 z-40 bg-black/35 xl:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-[380px] flex-col bg-[#2BB9EC] shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white">
              <Image
                src="/images/kuhrsa_logo.jpeg"
                alt="KUHRSA official logo"
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </div>

            <div>
              <div className="text-lg font-black tracking-tight text-[#0B2633]">
                KUHRSA
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                Student Association
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-2xl leading-none text-white transition hover:bg-white/15"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        {/* Current Mini-site */}
        <div className="border-b border-white/15 px-6 py-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2633]">
            {isGlobalNavigation ? "Main Navigation" : "Current Section"}
          </p>

          <h2 className="mt-1 text-2xl font-black text-white">
            {navigation.label}
          </h2>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-4"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1">
            {navigation.items.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white text-[#0B2633]"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Bottom Actions */}
        <div className="border-t border-white/15 px-5 py-5">
          {!isGlobalNavigation && (
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="mb-3 flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              ← KUHRSA Home
            </Link>
          )}

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#CE26A4]"
          >
            Login
          </Link>
        </div>
      </aside>
    </header>
  );
}
