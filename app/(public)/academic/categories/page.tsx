import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Academic Support",
    slug: "academic-support",
    description:
      "Guidance, support initiatives and resources for students.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Academic and professional growth opportunities.",
  },
  {
    title: "Scholarships & Funding",
    slug: "scholarships-funding",
    description:
      "Scholarships, grants and financial-support opportunities.",
  },
  {
    title: "Training & Certifications",
    slug: "training-certifications",
    description:
      "Training, certifications and skills-development opportunities.",
  },
  {
    title: "Research",
    slug: "research",
    description:
      "Research opportunities and academic inquiry.",
  },
  {
    title: "Career Preparation",
    slug: "career-preparation",
    description:
      "Resources and opportunities supporting career readiness.",
  },
];

export default function AcademicCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Academic categories"
        description="Browse KUHRSA academic content by area of interest."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Browse
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore by academic interest.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/academic/category/${category.slug}`}
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