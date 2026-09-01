import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic discussions, learning sessions and events supporting student development.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Career, skills, networking and professional growth opportunities.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description:
      "Leadership forums, training and student leadership experiences.",
  },
  {
    title: "Networking",
    slug: "networking",
    description:
      "Opportunities to connect with students, professionals, alumni and other stakeholders.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Community engagement, outreach and participation-focused events.",
  },
  {
    title: "Social",
    slug: "social",
    description:
      "Social experiences designed to strengthen belonging and community.",
  },
];

export default function EventCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Event categories"
        description="Explore KUHRSA events by the areas of interest and activity that matter to members."
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
              Find events that match your interests.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories give the Events mini-site a scalable structure that
              can grow as KUHRSA develops more activities and experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/events/category/${category.slug}`}
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
                  View Events →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}