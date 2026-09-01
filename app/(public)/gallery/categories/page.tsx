import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Events",
    slug: "events",
    description: "Albums from KUHRSA events and organized occasions.",
  },
  {
    title: "Activities",
    slug: "activities",
    description: "Visual memories from KUHRSA activities and initiatives.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description: "Student leadership and representation moments.",
  },
  {
    title: "Academic",
    slug: "academic",
    description: "Academic sessions and student development moments.",
  },
  {
    title: "Community",
    slug: "community",
    description: "Students, members and KUHRSA community moments.",
  },
  {
    title: "General",
    slug: "general",
    description: "Other KUHRSA visual memories.",
  },
];

export default function GalleryCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gallery categories"
        description="Browse KUHRSA albums by category."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/gallery/category/${category.slug}`}
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

                <span className="mt-6 inline-block font-bold text-[#168DB8]">
                  Browse Albums →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}