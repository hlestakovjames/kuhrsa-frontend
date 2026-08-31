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

const mainNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Programs", href: "/programs" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Activities", href: "/activities" },
  { label: "Academic", href: "/academic" },
  { label: "Contact", href: "/contact" },
];

const quickLinks: NavItem[] = [
  { label: "Announcements", href: "/announcements" },
  { label: "Resources", href: "/resources" },
  { label: "Departments", href: "/departments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Register", href: "/register" },
];

const siteNavigations: Record<string, SiteNavigation> = {
  "/about": {
    label: "About KUHRSA",
    items: [
      { label: "Who We Are", href: "/about" },
      { label: "History", href: "/about/history" },
      {
        label: "Mission & Vision",
        href: "/about/mission-vision",
      },
      {
        label: "Core Values",
        href: "/about/core-values",
      },
      {
        label: "Objectives",
        href: "/about/objectives",
      },
      {
        label: "Leadership",
        href: "/about/leadership",
      },
      {
        label: "Governance",
        href: "/about/governance",
      },
      {
        label: "Organizational Structure",
        href: "/about/organizational-structure",
      },
    ],
  },

  "/membership": {
    label: "Membership",
    items: [
      { label: "Membership Home", href: "/membership" },
      { label: "Why Membership", href: "/membership#why" },
      { label: "How to Join", href: "/membership#join" },
      { label: "Benefits", href: "/membership#benefits" },
    ],
  },

  "/programs": {
    label: "Programs",
    items: [
      {
        label: "All Programs",
        href: "/programs",
      },
      {
        label: "Academic & Professional Development",
        href: "/programs/academic",
      },
      {
        label: "Career Development",
        href: "/programs/career",
      },
      {
        label: "Leadership Development",
        href: "/programs/leadership",
      },
      {
        label: "Mentorship",
        href: "/programs/mentorship",
      },
      {
        label: "Community Engagement",
        href: "/programs/community",
      },
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
      {
        label: "Announcements Home",
        href: "/announcements",
      },
      {
        label: "Latest Notices",
        href: "/announcements#latest",
      },
      {
        label: "Important Updates",
        href: "/announcements#important",
      },
    ],
  },

  "/events": {
    label: "Events",
    items: [
      { label: "Events Home", href: "/events" },
      {
        label: "Upcoming Events",
        href: "/events#upcoming",
      },
      {
        label: "Past Events",
        href: "/events#past",
      },
      {
        label: "Event Calendar",
        href: "/events#calendar",
      },
    ],
  },

  "/activities": {
    label: "Activities",
    items: [
      {
        label: "Activities Home",
        href: "/activities",
      },
      {
        label: "Current Activities",
        href: "/activities#current",
      },
      {
        label: "Past Activities",
        href: "/activities#past",
      },
      {
        label: "Opportunities",
        href: "/activities#opportunities",
      },
    ],
  },

  "/academic": {
    label: "Academic",
    items: [
      { label: "Academic Home", href: "/academic" },
      {
        label: "Academic Updates",
        href: "/academic#updates",
      },
      {
        label: "Opportunities",
        href: "/academic#opportunities",
      },
      {
        label: "Academic Resources",
        href: "/academic#resources",
      },
    ],
  },

  "/resources": {
    label: "Resources",
    items: [
      {
        label: "Resources Home",
        href: "/resources",
      },
      {
        label: "Academic Resources",
        href: "/resources#academic",
      },
      {
        label: "Member Resources",
        href: "/resources#members",
      },
      {
        label: "Downloads",
        href: "/resources#downloads",
      },
    ],
  },

  "/departments": {
    label: "Departments",
    items: [
      {
        label: "Departments Home",
        href: "/departments",
      },
      {
        label: "Department Directory",
        href: "/departments#directory",
      },
      {
        label: "Department Contacts",
        href: "/departments#contacts",
      },
    ],
  },

  "/gallery": {
    label: "Gallery",
    items: [
      { label: "Gallery Home", href: "/gallery" },
      {
        label: "Events",
        href: "/gallery#events",
      },
      {
        label: "Activities",
        href: "/gallery#activities",
      },
      {
        label: "KUHRSA Community",
        href: "/gallery#community",
      },
    ],
  },

  "/contact": {
    label: "Contact",
    items: [
      {
        label: "Contact KUHRSA",
        href: "/contact",
      },
      {
        label: "Get in Touch",
        href: "/contact#contact",
      },
      {
        label: "Location",
        href: "/contact#location",
      },
    ],
  },
};

function getNavigation(pathname: string): SiteNavigation | null {
  const matchingPath = Object.keys(siteNavigations)
    .sort((a, b) => b.length - a.length)
    .find(
      (basePath) =>
        pathname === basePath ||
        pathname.startsWith(`${basePath}/`),
    );

  return matchingPath ? siteNavigations[matchingPath] : null;
}

function isActivePath(pathname: string, href: string) {
  const cleanHref = href.split("#")[0];

  return (
    pathname === cleanHref ||
    (cleanHref !== "/" &&
      pathname.startsWith(`${cleanHref}/`))
  );
}

function shouldWrapNavigationLabel(label: string) {
  return label.length > 20;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);

  const contextualNavigation = getNavigation(pathname);

  const navigationItems = contextualNavigation
    ? contextualNavigation.items
    : mainNavigation;

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#2BB9EC] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
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
          className="hidden flex-1 items-center justify-center gap-4 xl:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            const shouldWrap = shouldWrapNavigationLabel(item.label);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-center text-sm font-semibold transition ${
                  shouldWrap
                    ? "max-w-[220px] leading-5"
                    : "whitespace-nowrap"
                } ${
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

          {/* Quick Links */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setQuickLinksOpen((open) => !open)
              }
              className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-white"
              aria-expanded={quickLinksOpen}
              aria-haspopup="menu"
            >
              Quick Links

              <span
                className={`text-xs transition-transform ${
                  quickLinksOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {quickLinksOpen && (
              <div
                className="absolute right-0 top-full mt-4 w-56 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/10"
                role="menu"
              >
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setQuickLinksOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActivePath(pathname, item.href)
                        ? "bg-[#BFF2F8] text-[#168DB8]"
                        : "text-[#0B2633] hover:bg-[#F4FAFC] hover:text-[#168DB8]"
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/15 bg-[#2BB9EC] xl:hidden">
          <nav
            className="mx-auto max-w-7xl px-5 py-4 lg:px-8"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-white text-[#0B2633]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 border-t border-white/15 pt-4">
              <p className="px-4 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                Quick Links
              </p>

              <div className="space-y-1">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActivePath(pathname, item.href)
                        ? "bg-white text-[#168DB8]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-full bg-[#F700BA] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}