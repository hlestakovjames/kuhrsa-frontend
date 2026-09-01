"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/site/PageHero";

const announcements = [
  {
    title: "KUHRSA membership registration is open",
    category: "Membership",
    href: "/announcements/membership-registration",
  },
  {
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    href: "/announcements/member-information",
  },
  {
    title: "Academic support information for students",
    category: "Academic",
    href: "/announcements/academic-support",
  },
  {
    title: "Upcoming KUHRSA participation opportunities",
    category: "Activities",
    href: "/announcements/participation-opportunities",
  },
];

export default function AnnouncementSearchPage() {
  const [query, setQuery] = useState("");

  const filteredAnnouncements = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return announcements;
    }

    return announcements.filter((announcement) =>
      `${announcement.title} ${announcement.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Search announcements"
        description="Find KUHRSA notices and updates by keyword or category."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <label
            htmlFor="announcement-search"
            className="text-sm font-black uppercase tracking-[0.16em] text-[#168DB8]"
          >
            Search
          </label>

          <input
            id="announcement-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search announcements..."
            className="mt-3 w-full rounded-2xl border border-black/10 bg-[#F4FAFC] px-5 py-4 text-base outline-none transition focus:border-[#168DB8]"
          />

          <div className="mt-8 space-y-4">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <Link
                  key={announcement.href}
                  href={announcement.href}
                  className="group block rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {announcement.category}
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    {announcement.title}
                  </h2>

                  <span className="mt-4 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Notice →
                  </span>
                </Link>
              ))
            ) : (
              <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
                <h2 className="text-2xl font-black">
                  No announcements found.
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Try another keyword or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}