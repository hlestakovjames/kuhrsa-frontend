import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const resources = [
  {
    title: "Academic Guidance",
    description:
      "Useful academic guidance and information to support students throughout their studies.",
  },
  {
    title: "Study & Learning Materials",
    description:
      "References, study materials and learning support resources for KUHRSA members.",
  },
  {
    title: "Academic Opportunities",
    description:
      "Information about scholarships, training, research and other academic opportunities.",
    href: "/academic/opportunities",
  },
  {
    title: "Important Academic Information",
    description:
      "Academic notices, dates and information that may be relevant to students.",
    href: "/academic/updates",
  },
];

export default function AcademicResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Academic resources"
        description="Explore useful materials and guidance supporting learning, academic development and student success."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA academic community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Academic Support
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Resources for your academic journey.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              This area provides a central place for useful academic materials,
              guidance and information for KUHRSA members.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                href={resource.href ?? "/academic"}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {resource.description}
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