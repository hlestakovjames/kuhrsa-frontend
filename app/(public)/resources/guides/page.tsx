import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const sections = [
  {
    title: "Guides",
    description:
      "Practical guides designed to help members understand processes and access services.",
    href: "/resources/category/guides",
  },
  {
    title: "Official Documents",
    description:
      "Organizational documents and references published by KUHRSA.",
    href: "/resources/category/general",
  },
  {
    title: "Policies",
    description:
      "Policies and procedures relevant to the association and its members.",
    href: "/resources/category/policies",
  },
  {
    title: "Templates",
    description:
      "Reusable templates that may support association activities and member needs.",
    href: "/resources/category/forms",
  },
];

export default function GuidesDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides & documents"
        description="Explore practical guides, official documents, policies and reference materials."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Documents
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find the document you need.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {section.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}