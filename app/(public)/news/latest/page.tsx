import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const stories = [
  {
    title: "Student leadership and the future of KUHRSA",
    category: "Student Leadership",
    date: "Recent",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/news/student-leadership-future",
  },
  {
    title: "Building stronger professional connections",
    category: "Professional Development",
    date: "Recent",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/news/professional-connections",
  },
  {
    title: "KUHRSA activities creating new opportunities",
    category: "Activities",
    date: "Recent",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/news/kuhrsa-activities-opportunities",
  },
  {
    title: "Growing together through mentorship",
    category: "Mentorship",
    date: "Recent",
    image: "/images/kuhrsa/general/HR.jpeg",
    href: "/news/mentorship-growth",
  },
];

export default function LatestNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest news"
        description="Stay up to date with recent stories, updates and developments from KUHRSA."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Latest Stories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              What&apos;s happening at KUHRSA.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Explore recent stories covering student leadership, activities,
              professional development, mentorship and other areas of KUHRSA.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {stories.map((story) => (
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {story.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-black/40">
                      {story.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {story.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                News
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Browse more KUHRSA stories.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/news/featured"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
              >
                Featured News
              </Link>

              <Link
                href="/news/categories"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Categories
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