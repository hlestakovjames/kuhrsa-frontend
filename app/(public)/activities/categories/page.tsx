import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Activities supporting learning, academic collaboration and student development.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Career, networking and professional growth activities.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description:
      "Activities focused on leadership, representation and responsibility.",
  },
  {
    title: "Mentorship",
    slug: "mentorship",
    description:
      "Peer guidance, mentorship and knowledge-sharing opportunities.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Outreach, engagement and community-oriented activities.",
  },
  {
    title: "Social",
    slug: "social",
    description:
      "Activities that encourage interaction, belonging and community.",
  },
];

export default function ActivityCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Activity categories"
        description="Explore KUHRSA activities by area of interest."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Browse by Category
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Discover activities by interest.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/activities/category/${category.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore Activities →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}