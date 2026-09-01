"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const resources = [
  {
    title: "Academic Resources",
    category: "Academic",
    href: "/resources/academic",
  },
  {
    title: "Member Resources",
    category: "Membership",
    href: "/resources/members",
  },
  {
    title: "Guides & Documents",
    category: "Documents",
    href: "/resources/guides",
  },
  {
    title: "Downloads",
    category: "Downloads",
    href: "/resources/downloads",
  },
];

export default function ResourceSearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return resources;
    }

    return resources.filter((resource) =>
      `${resource.title} ${resource.category}`
        .toLowerCase()
        .includes(value),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Search resources"
        description="Find KUHRSA resources by keyword or category."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA resources"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <label
            htmlFor="resource-search"
            className="text-sm font-black uppercase tracking-[0.16em] text-[#168DB8]"
          >
            Search
          </label>

          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources..."
            className="mt-3 w-full rounded-2xl border border-black/10 bg-[#F4FAFC] px-5 py-4 text-base outline-none transition focus:border-[#168DB8]"
          />

          <div className="mt-8 space-y-4">
            {results.length > 0 ? (
              results.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group block rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {resource.category}
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    {resource.title}
                  </h2>

                  <span className="mt-4 inline-block font-bold text-[#F700BA]">
                    Explore →
                  </span>
                </Link>
              ))
            ) : (
              <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
                <h2 className="text-2xl font-black">
                  No resources found.
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