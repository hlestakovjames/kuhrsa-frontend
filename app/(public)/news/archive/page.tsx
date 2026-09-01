import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const archiveGroups = [
  {
    year: "2026",
    count: "Current",
    description:
      "Recent KUHRSA stories, updates and developments from the current association year.",
    href: "/news/search?year=2026",
  },
  {
    year: "2025",
    count: "Archive",
    description:
      "Previous KUHRSA stories and milestones from the preceding association year.",
    href: "/news/search?year=2025",
  },
  {
    year: "Earlier",
    count: "Archive",
    description:
      "Older stories and historical KUHRSA coverage as the digital archive grows.",
    href: "/news/search?period=earlier",
  },
];

const recentStories = [
  {
    title: "Student leadership and the future of KUHRSA",
    category: "Student Leadership",
    date: "2026",
    href: "/news/student-leadership-future",
  },
  {
    title: "Building stronger professional connections",
    category: "Professional Development",
    date: "2026",
    href: "/news/professional-connections",
  },
  {
    title: "KUHRSA activities creating new opportunities",
    category: "Activities",
    date: "2026",
    href: "/news/kuhrsa-activities-opportunities",
  },
  {
    title: "Growing together through mentorship",
    category: "Mentorship",
    date: "2026",
    href: "/news/mentorship-growth",
  },
];

export default function NewsArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News archive"
        description="Browse KUHRSA stories across different periods and follow the development of the association over time."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Browse the archive
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Stories preserved over time.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The KUHRSA News archive provides a growing record of association
              stories, initiatives, achievements and community moments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {archiveGroups.map((group) => (
              <Link
                key={group.year}
                href={group.href}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]">
                  {group.count}
                </span>

                <h3 className="mt-4 text-4xl font-black text-[#0B2633]">
                  {group.year}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {group.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                  Browse stories →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Recent archive
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Recent News
              </h2>
            </div>

            <Link
              href="/news/search"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Search News
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {recentStories.map((story, index) => (
              <Link
                key={story.href}
                href={story.href}
                className="group rounded-[2rem] bg-white p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                      <span className="text-[#168DB8]">
                        {story.category}
                      </span>

                      <span className="text-black/30">•</span>

                      <span className="text-black/40">
                        {story.date}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-black">
                      {story.title}
                    </h3>

                    <span className="mt-4 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Story →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                News
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the rest of the News mini-site.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/news/latest"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Latest News
              </Link>

              <Link
                href="/news/featured"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Featured
              </Link>

              <Link
                href="/news"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                News Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}