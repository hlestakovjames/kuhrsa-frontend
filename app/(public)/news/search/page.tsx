"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/site/PageHero";

const stories = [
  {
    title: "KUHRSA continues to build a stronger student community",
    category: "KUHRSA Updates",
    year: "2026",
    excerpt:
      "Discover the initiatives, experiences and people contributing to a stronger KUHRSA community.",
    href: "/news/kuhrsa-student-community",
  },
  {
    title: "Creating opportunities beyond the classroom",
    category: "Professional Development",
    year: "2026",
    excerpt:
      "Explore programs and experiences helping Human Resource students develop academically and professionally.",
    href: "/news/opportunities-beyond-classroom",
  },
  {
    title: "Student leadership and the future of KUHRSA",
    category: "Student Leadership",
    year: "2026",
    excerpt:
      "Explore stories around student leadership, representation and the future direction of the association.",
    href: "/news/student-leadership-future",
  },
  {
    title: "Building stronger professional connections",
    category: "Professional Development",
    year: "2026",
    excerpt:
      "Discover how KUHRSA encourages students to build professional relationships and broaden their networks.",
    href: "/news/professional-connections",
  },
  {
    title: "KUHRSA activities creating new opportunities",
    category: "Activities",
    year: "2026",
    excerpt:
      "Explore student activities that create opportunities for participation, collaboration and growth.",
    href: "/news/kuhrsa-activities-opportunities",
  },
  {
    title: "Growing together through mentorship",
    category: "Mentorship",
    year: "2026",
    excerpt:
      "Discover how mentorship can support academic, personal and professional development.",
    href: "/news/mentorship-growth",
  },
];

const categories = [
  "All Categories",
  "KUHRSA Updates",
  "Academic",
  "Professional Development",
  "Student Leadership",
  "Membership",
  "Community",
  "Activities",
  "Mentorship",
];

export default function NewsSearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");

  const filteredStories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return stories.filter((story) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        story.title.toLowerCase().includes(normalizedQuery) ||
        story.excerpt.toLowerCase().includes(normalizedQuery) ||
        story.category.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        category === "All Categories" ||
        story.category === category;

      const matchesYear =
        year === "All Years" || story.year === year;

      return matchesQuery && matchesCategory && matchesYear;
    });
  }, [query, category, year]);

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Search KUHRSA news"
        description="Find KUHRSA stories by keyword, category or year."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 md:p-8">
            <div className="grid gap-5 md:grid-cols-[1fr_auto_auto] md:items-end">
              <div>
                <label
                  htmlFor="news-search"
                  className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]"
                >
                  Search
                </label>

                <input
                  id="news-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search KUHRSA news..."
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-[#0B2633] outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#BFF2F8]"
                />
              </div>

              <div>
                <label
                  htmlFor="news-category"
                  className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]"
                >
                  Category
                </label>

                <select
                  id="news-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B2633] outline-none focus:border-[#168DB8] focus:ring-2 focus:ring-[#BFF2F8]"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="news-year"
                  className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]"
                >
                  Year
                </label>

                <select
                  id="news-year"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  className="mt-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B2633] outline-none focus:border-[#168DB8] focus:ring-2 focus:ring-[#BFF2F8]"
                >
                  <option>All Years</option>
                  <option>2026</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Results
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#0B2633]">
                {filteredStories.length}{" "}
                {filteredStories.length === 1
                  ? "story"
                  : "stories"}{" "}
                found
              </h2>
            </div>

            {(query || category !== "All Categories" || year !== "All Years") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All Categories");
                  setYear("All Years");
                }}
                className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="mt-8 space-y-4">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <Link
                  key={story.href}
                  href={story.href}
                  className="group block rounded-[2rem] bg-white p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                        <span className="text-[#168DB8]">
                          {story.category}
                        </span>

                        <span className="text-black/30">•</span>

                        <span className="text-black/40">
                          {story.year}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-black text-[#0B2633]">
                        {story.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-black/60">
                        {story.excerpt}
                      </p>
                    </div>

                    <span className="shrink-0 font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
                <h3 className="text-2xl font-black text-[#0B2633]">
                  No stories found.
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Try a different keyword or remove one of the filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}