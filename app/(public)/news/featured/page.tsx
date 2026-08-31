import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredStories = [
  {
    title: "KUHRSA continues to build a stronger student community",
    excerpt:
      "Discover the initiatives, experiences and people contributing to a stronger KUHRSA community.",
    category: "KUHRSA Updates",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/news/kuhrsa-student-community",
  },
  {
    title: "Creating opportunities beyond the classroom",
    excerpt:
      "Explore the programs and experiences helping Human Resource students develop academically and professionally.",
    category: "Professional Development",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/news/opportunities-beyond-classroom",
  },
];

const highlights = [
  {
    title: "Student Leadership",
    description:
      "Stories highlighting student leaders, representation and leadership development across KUHRSA.",
    href: "/news/category/student-leadership",
  },
  {
    title: "Professional Development",
    description:
      "Featured stories around skills, networking, career preparation and professional growth.",
    href: "/news/category/professional-development",
  },
  {
    title: "Membership",
    description:
      "Stories about members, membership initiatives and opportunities within KUHRSA.",
    href: "/news/category/membership",
  },
];

export default function FeaturedNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Featured news"
        description="A curated selection of KUHRSA stories, milestones and developments worth exploring."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Stories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Stories we want you to see.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured stories bring attention to important moments,
              initiatives and experiences across the KUHRSA community.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
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
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {story.category}
                  </p>

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

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore stories by area.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Link
                key={highlight.href}
                href={highlight.href}
                className="group rounded-[2rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {highlight.title}
                </h3>

                <p className="mt-3 leading-7 text-black/60">
                  {highlight.description}
                </p>

                <span className="mt-5 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
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
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Find more KUHRSA news.
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
                href="/news/categories"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}