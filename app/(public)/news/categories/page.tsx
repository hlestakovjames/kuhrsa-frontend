import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Stories covering academic experiences, learning opportunities and developments relevant to KUHRSA members.",
  },
  {
    title: "Student Leadership",
    slug: "student-leadership",
    description:
      "Leadership stories, student representation, leadership initiatives and experiences within KUHRSA.",
  },
  {
    title: "Membership",
    slug: "membership",
    description:
      "Updates and stories about KUHRSA members, membership initiatives and member engagement.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Stories focused on career preparation, professional skills, networking and HR development.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Stories highlighting community engagement, social responsibility and KUHRSA outreach.",
  },
  {
    title: "KUHRSA Updates",
    slug: "kuhrsa-updates",
    description:
      "General association updates, milestones, announcements and developments.",
  },
];

export default function NewsCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News categories"
        description="Explore KUHRSA stories by the topics, initiatives and areas of interest that shape the association."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Browse by Topic
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find stories that matter to you.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories provide a structured way to explore KUHRSA news as
              the archive grows. Each category can develop into its own
              dedicated News space when the content volume requires it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/news/category/${category.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  View Stories →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                News Navigation
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633] md:text-4xl">
                Browse the rest of the News mini-site.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
                Move between the latest stories, featured content, the archive
                and News search as these modules are developed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/news/latest"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
              >
                Latest News
              </Link>

              <Link
                href="/news/featured"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Featured News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}