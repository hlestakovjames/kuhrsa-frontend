import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const downloadAreas = [
  {
    title: "Forms",
    slug: "forms",
    description:
      "Application forms, member forms and other documents intended for completion.",
  },
  {
    title: "Documents",
    slug: "documents",
    description:
      "Official KUHRSA documents and reference materials.",
  },
  {
    title: "Guides",
    slug: "guides",
    description:
      "Practical guides and instructional materials.",
  },
  {
    title: "Templates",
    slug: "templates",
    description:
      "Reusable documents and templates for appropriate KUHRSA use.",
  },
  {
    title: "Policies",
    slug: "policies",
    description:
      "Policies, procedures and governance-related materials.",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        description="Access forms, documents, guides, templates and policies published through KUHRSA."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA resources"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Download Centre
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find downloadable materials.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Browse downloadable resources by type. As the KUHRSA resource
              library grows, this section can become the central document
              repository.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {downloadAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/resources/downloads/${area.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {area.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Browse Downloads →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}