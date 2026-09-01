import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const resources = [
  {
    title: "Academic Guidance",
    description:
      "Useful guidance and information to support students through their academic journey.",
  },
  {
    title: "Study & Learning Resources",
    description:
      "Materials and references that can complement learning and peer collaboration.",
  },
  {
    title: "Career Resources",
    description:
      "Resources connecting academic development with career preparation and professional growth.",
  },
  {
    title: "Downloads",
    description:
      "Access academic documents, guides and other downloadable materials when published.",
  },
];

export default function AcademicResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Academic resources"
        description="Find useful resources, guidance and materials that support academic and professional development."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Resources
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Tools for your academic journey.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                href="/resources"
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
                  Explore Resources →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}