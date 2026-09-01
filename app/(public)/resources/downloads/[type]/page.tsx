import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const typeData = {
  forms: {
    title: "Forms",
    description:
      "Access KUHRSA forms and documents intended for applications, requests and member services.",
  },
  documents: {
    title: "Documents",
    description:
      "Browse official KUHRSA documents and reference materials.",
  },
  guides: {
    title: "Guides",
    description:
      "Find practical guides and instructional materials.",
  },
  templates: {
    title: "Templates",
    description:
      "Access reusable KUHRSA templates and document formats.",
  },
  policies: {
    title: "Policies",
    description:
      "Review published KUHRSA policies and procedures.",
  },
};

export function generateStaticParams() {
  return Object.keys(typeData).map((type) => ({
    type,
  }));
}

export default async function DownloadTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const category =
    typeData[type as keyof typeof typeData];

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title={category.title}
        description={category.description}
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt={category.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              {category.title}
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              More materials will be published here.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              This section is ready for documents managed through the KUHRSA
              resource system.
            </p>

            <Link
              href="/resources/downloads"
              className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Back to Downloads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}