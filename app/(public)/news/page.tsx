import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredStories = [
  {
    title: "KUHRSA continues to build a stronger student community",
    excerpt:
      "Discover the latest initiatives, activities and opportunities shaping the KUHRSA student experience.",
    category: "KUHRSA Updates",
    date: "Latest",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/news/kuhrsa-student-community",
  },
  {
    title: "Creating opportunities beyond the classroom",
    excerpt:
      "Explore how KUHRSA programs support academic, professional and leadership development.",
    category: "Professional Development",
    date: "Featured",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/news/opportunities-beyond-classroom",
  },
];

const latestStories = [
  {
    title: "Student leadership and the future of KUHRSA",
    category: "Student Leadership",
    date: "Recent",
    href: "/news/student-leadership-future",
  },
  {
    title: "Building stronger professional connections",
    category: "Professional Development",
    date: "Recent",
    href: "/news/professional-connections",
  },
  {
    title: "KUHRSA activities creating new opportunities",
    category: "Activities",
    date: "Recent",
    href: "/news/kuhrsa-activities-opportunities",
  },
  {
    title: "Growing together through mentorship",
    category: "Mentorship",
    date: "Recent",
    href: "/news/mentorship-growth",
  },
];

const categories = [
  "KUHRSA Updates",
  "Academic",
  "Professional Development",
  "Student Leadership",
  "Membership",
  "Community",
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA News"
        title="Stories, updates and moments from KUHRSA."
        description="Stay informed about KUHRSA initiatives, student leadership, professional development, activities and the wider association community."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students and HR community"
      />

      {/* Featured */}
      <section
        id="featured"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Stories worth knowing.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              A selection of stories highlighting KUHRSA activities,
              initiatives and the people contributing to the association.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {featuredStories.map((story) => (
              <Link
                key={story.href}
                href={story.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {story.category}
                    </span>

                    <span className="text-black/30">
                      •
                    </span>

                    <span className="text-black/40">
                      {story.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {story.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {story.excerpt}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section
        id="latest"
        className="bg-[#F4FAFC]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Latest News
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                What&apos;s happening at KUHRSA.
              </h2>
            </div>

            <Link
              href="/news/archive"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Archive
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {latestStories.map((story, index) => (
              <Link
                key={story.href}
                href={story.href}
                className="group flex gap-5 rounded-[2rem] bg-white p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {story.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-black/40">
                    {story.date}
                  </p>

                  <span className="mt-4 inline-block text-sm font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="bg-[#BFF2F8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              News Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore stories by topic.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              As the KUHRSA news archive grows, categories will make it easier
              to discover stories around areas that matter to members.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/news/category/${category
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#0B2633] hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Archive & Search */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/news/archive"
              className="group rounded-[2rem] bg-[#0B2633] p-8 text-white transition hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
                Archive
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Browse the News Archive.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                Explore previous KUHRSA stories and follow the development of
                the association over time.
              </p>

              <span className="mt-6 inline-block font-bold text-[#F9B6F2] transition group-hover:translate-x-1">
                Browse Archive →
              </span>
            </Link>

            <Link
              href="/news/search"
              className="group rounded-[2rem] bg-[#F9B6F2] p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                Search
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                Find a specific story.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-black/60">
                Search KUHRSA news by keyword, topic or other available
                filters.
              </p>

              <span className="mt-6 inline-block font-bold text-[#CE26A4] transition group-hover:translate-x-1">
                Search News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Discover more from KUHRSA.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/events"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Events
              </Link>

              <Link
                href="/activities"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Activities
              </Link>

              <Link
                href="/blog"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}