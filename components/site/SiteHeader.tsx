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
  { label: "Member Portal", href: "/login" },
  { label: "Leadership Portal", href: "/leadership" },
  { label: "Administration", href: "/administration" },
  { label: "Announcements", href: "/announcements" },
  { label: "Resources", href: "/resources" },
  { label: "Departments", href: "/departments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/resources/downloads" },
];

const siteNavigations: Record<string, SiteNavigation> = {
  "/about": {
    label: "About KUHRSA",
    items: [
      { label: "Who We Are", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "Objectives", href: "/about/objectives" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
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
      { label: "Why Join KUHRSA", href: "/membership/why-join" },
      {
        label: "Membership Categories",
        href: "/membership/categories",
      },
      { label: "Benefits", href: "/membership/benefits" },
      {
        label: "Membership Requirements",
        href: "/membership/requirements",
      },
      { label: "Membership Fees", href: "/membership/fees" },
      {
        label: "Membership Renewal",
        href: "/membership/renewal",
      },
      { label: "Member Support", href: "/membership/support" },
    ],
  },

  "/programs": {
    label: "Programs",
    items: [
      { label: "All Programs", href: "/programs" },
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
      {
        label: "News Home",
        href: "/news",
      },
      {
        label: "Latest News",
        href: "/news/latest",
      },
      {
        label: "Featured News",
        href: "/news/featured",
      },
      {
        label: "Categories",
        href: "/news/categories",
      },
      {
        label: "Archive",
        href: "/news/archive",
      },
      {
        label: "Search News",
        href: "/news/search",
      },
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
        href: "/announcements/latest",
      },
      {
        label: "Important Updates",
        href: "/announcements/important",
      },
      {
        label: "Categories",
        href: "/announcements/categories",
      },
      {
        label: "Archive",
        href: "/announcements/archive",
      },
      {
        label: "Search Announcements",
        href: "/announcements/search",
      },
    ],
  },

  "/events": {
    label: "Events",
    items: [
      {
        label: "Events Home",
        href: "/events",
      },
      {
        label: "Upcoming Events",
        href: "/events/upcoming",
      },
      {
        label: "Featured Events",
        href: "/events/featured",
      },
      {
        label: "Event Calendar",
        href: "/events/calendar",
      },
      {
        label: "Past Events",
        href: "/events/past",
      },
      {
        label: "Event Categories",
        href: "/events/categories",
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
        href: "/activities/current",
      },
      {
        label: "Featured Activities",
        href: "/activities/featured",
      },
      {
        label: "Activity Calendar",
        href: "/activities/calendar",
      },
      {
        label: "Past Activities",
        href: "/activities/past",
      },
      {
        label: "Activity Categories",
        href: "/activities/categories",
      },
    ],
  },

  "/academic": {
    label: "Academic",
    items: [
      {
        label: "Academic Home",
        href: "/academic",
      },
      {
        label: "Academic Updates",
        href: "/academic/updates",
      },
      {
        label: "Opportunities",
        href: "/academic/opportunities",
      },
      {
        label: "Academic Resources",
        href: "/academic/resources",
      },
      {
        label: "Academic Calendar",
        href: "/academic/calendar",
      },
      {
        label: "Academic Categories",
        href: "/academic/categories",
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
        href: "/resources/downloads",
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
      {
        label: "Gallery Home",
        href: "/gallery",
      },
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
  const [mobileQuickLinksOpen, setMobileQuickLinksOpen] =
    useState(false);
  const [mobileOpenSection, setMobileOpenSection] =
    useState<string | null>(null);

  const contextualNavigation = getNavigation(pathname);

  const navigationItems = contextualNavigation
    ? contextualNavigation.items
    : mainNavigation;

  const handleMobileClose = () => {
    setMenuOpen(false);
    setMobileOpenSection(null);
    setMobileQuickLinksOpen(false);
  };

  const toggleMobileSection = (label: string) => {
    setMobileOpenSection((current) =>
      current === label ? null : label,
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#2BB9EC] shadow-sm">
      {/* Desktop Top Layer */}
      <div className="hidden border-b border-white/15 bg-[#F700BA] xl:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setQuickLinksOpen((open) => !open)
              }
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white transition hover:text-[#0B2633]"
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
                className="absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/10"
                role="menu"
              >
                {quickLinks.map((item, index) => (
                  <div key={item.href}>
                    {index === 1 && (
                      <div className="my-2 border-t border-black/10 px-3 pt-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-black/40">
                          Authorized Access
                        </span>
                      </div>
                    )}

                    <Link
                      href={item.href}
                      target={
                        item.href === "/login"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href === "/login"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={() =>
                        setQuickLinksOpen(false)
                      }
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0B2633] transition hover:bg-[#F4FAFC] hover:text-[#168DB8]"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0B2633] px-5 py-2 text-xs font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#168DB8]"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Desktop Main Navigation */}
      <div className="hidden xl:block">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 py-3 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="KUHRSA home"
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

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-white 2xl:block">
                Student Association
              </span>
            </span>
          </Link>

          <nav
            className="flex min-w-0 flex-1 items-center justify-center gap-3"
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => {
              const isActive = isActivePath(
                pathname,
                item.href,
              );

              const shouldWrap = shouldWrapNavigationLabel(
                item.label,
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-center text-[13px] font-semibold transition ${
                    shouldWrap
                      ? "max-w-[180px] leading-4"
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
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="xl:hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="KUHRSA home"
            onClick={handleMobileClose}
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white/15"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span className="text-2xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/15 bg-[#2BB9EC]">
            <nav
              className="mx-auto max-w-7xl px-5 py-4"
              aria-label="Mobile navigation"
            >
              {/* Mobile Quick Links */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMobileQuickLinksOpen(
                      (open) => !open,
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  aria-expanded={mobileQuickLinksOpen}
                >
                  <span>Quick Links</span>

                  <span
                    className={`text-xs transition-transform ${
                      mobileQuickLinksOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {mobileQuickLinksOpen && (
                  <div className="mt-1 rounded-2xl bg-white/10 p-2">
                    {quickLinks.map((item, index) => (
                      <div key={item.href}>
                        {index === 1 && (
                          <div className="px-3 pb-1 pt-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                            Authorized Access
                          </div>
                        )}

                        <Link
                          href={item.href}
                          onClick={handleMobileClose}
                          className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Main Navigation */}
              <div className="mt-2 space-y-1">
                {mainNavigation.map((item) => {
                  const isActive = isActivePath(
                    pathname,
                    item.href,
                  );

                  const contextual =
                    siteNavigations[item.href];

                  const isSectionOpen =
                    mobileOpenSection === item.label;

                  return (
                    <div key={item.href}>
                      {contextual ? (
                        <>
                          <div className="flex items-center rounded-xl transition hover:bg-white/10">
                            <Link
                              href={item.href}
                              onClick={handleMobileClose}
                              className={`min-w-0 flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                isActive
                                  ? "text-[#0B2633]"
                                  : "text-white"
                              }`}
                            >
                              {item.label}
                            </Link>

                            <button
                              type="button"
                              onClick={() =>
                                toggleMobileSection(
                                  item.label,
                                )
                              }
                              className="px-4 py-3 text-white"
                              aria-label={`Show ${item.label} submenu`}
                              aria-expanded={
                                isSectionOpen
                              }
                            >
                              <span
                                className={`inline-block text-xs transition-transform ${
                                  isSectionOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              >
                                ▾
                              </span>
                            </button>
                          </div>

                          {isSectionOpen && (
                            <div className="ml-3 border-l border-white/20 pl-2">
                              {contextual.items.map(
                                (subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={
                                      handleMobileClose
                                    }
                                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium leading-5 transition ${
                                      isActivePath(
                                        pathname,
                                        subItem.href,
                                      )
                                        ? "bg-white text-[#0B2633]"
                                        : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleMobileClose}
                          className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                            isActive
                              ? "bg-white text-[#0B2633]"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Join Us */}
              <Link
                href="/register"
                onClick={handleMobileClose}
                className="mt-5 block rounded-full bg-[#0B2633] px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#168DB8]"
              >
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}