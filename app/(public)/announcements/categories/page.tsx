import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Membership",
    slug: "membership",
    description:
      "Registration, renewal, membership and member-related notices.",
  },
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic information, student support and academic notices.",
  },
  {
    title: "KUHRSA Updates",
    slug: "kuhrsa-updates",
    description:
      "General association information and organizational updates.",
  },
  {
    title: "Events",
    slug: "events",
    description:
      "Important notices related to KUHRSA events and participation.",
  },
  {
    title: "Activities",
    slug: "activities",
    description:
      "Updates concerning KUHRSA activities and initiatives.",
  },
  {
    title: "Opportunities",
    slug: "opportunities",
    description:
      "Scholarships, training, career and other opportunities.",
  },
];

export default function AnnouncementCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Announcement categories"
        description="Browse KUHRSA notices by topic."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA academic community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/announcements/category/${category.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}