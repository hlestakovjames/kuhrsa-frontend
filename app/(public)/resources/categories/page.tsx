import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic support, learning materials and educational resources.",
  },
  {
    title: "Membership",
    slug: "membership",
    description:
      "Member information, forms and membership-related materials.",
  },
  {
    title: "Policies",
    slug: "policies",
    description:
      "Policies, procedures and governance-related documents.",
  },
  {
    title: "Guides",
    slug: "guides",
    description:
      "Practical guides and reference materials.",
  },
  {
    title: "Forms",
    slug: "forms",
    description:
      "Forms and documents intended for completion or submission.",
  },
  {
    title: "General",
    slug: "general",
    description:
      "General KUHRSA resources and organizational materials.",
  },
];

export default function ResourceCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resource categories"
        description="Browse KUHRSA resources by topic."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA members"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/resources/category/${category.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8]">
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