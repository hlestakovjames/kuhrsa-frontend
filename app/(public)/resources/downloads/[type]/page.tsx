import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const typeData = {
  forms: {
    title: "Forms",
    eyebrow: "Downloads · Forms",
    description:
      "Access KUHRSA forms for applications, requests, membership and other association processes.",
  },
  documents: {
    title: "Documents",
    eyebrow: "Downloads · Documents",
    description:
      "Browse official KUHRSA documents and reference materials.",
  },
  guides: {
    title: "Guides",
    eyebrow: "Downloads · Guides",
    description:
      "Find practical guides and instructional materials published by KUHRSA.",
  },
  templates: {
    title: "Templates",
    eyebrow: "Downloads · Templates",
    description:
      "Access reusable KUHRSA templates and approved document formats.",
  },
  policies: {
    title: "Policies",
    eyebrow: "Downloads · Policies",
    description:
      "Review KUHRSA policies, procedures and governance-related materials.",
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

  const category = typeData[type as keyof typeof typeData];

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={category.eyebrow}
        title={category.title}
        description={category.description}
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt={`KUHRSA ${category.title.toLowerCase()}`}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                  {category.title}
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
                  KUHRSA materials will appear here.
                </h2>

                <p className="mt-4 leading-8 text-black/60">
                  This download category is ready for documents managed
                  through the KUHRSA resource system.
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-[#168DB8]">
                <span className="text-xl font-black">↓</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-black/10 bg-white p-6">
              <p className="text-sm font-bold text-[#0B2633]">
                No files published yet.
              </p>

              <p className="mt-2 text-sm leading-7 text-black/55">
                When KUHRSA documents are added through the resource
                management system, they will be listed in this area with
                their title, description and download action.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources/downloads"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
              >
                Back to Downloads
              </Link>

              <Link
                href="/resources"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#F4FAFC]"
              >
                Resources Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}