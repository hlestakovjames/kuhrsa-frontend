import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const opportunities = [
  {
    title: "Scholarships & Funding",
    description:
      "Discover scholarship, grant and other financial-support opportunities as they become available.",
    href: "/academic/category/scholarships-funding",
  },
  {
    title: "Training & Certifications",
    description:
      "Explore learning opportunities that can strengthen academic and professional skills.",
    href: "/academic/category/training-certifications",
  },
  {
    title: "Research Opportunities",
    description:
      "Find opportunities for research engagement, academic inquiry and knowledge development.",
    href: "/academic/category/research",
  },
  {
    title: "Career Preparation",
    description:
      "Explore opportunities that connect academic development with career readiness.",
    href: "/academic/category/career-preparation",
  },
];

export default function AcademicOpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Academic opportunities"
        description="Explore opportunities that support learning, skills development, research and career preparation."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Opportunities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Discover ways to grow.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Opportunities can include scholarships, training, research,
              certifications, competitions and career-focused experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <Link
                key={opportunity.href}
                href={opportunity.href}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {opportunity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {opportunity.description}
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