import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  academic: {
    title: "Academic Resources",
    description:
      "Academic support, learning materials and educational resources.",
  },
  membership: {
    title: "Membership Resources",
    description:
      "Useful information and materials for KUHRSA members.",
  },
  policies: {
    title: "Policies",
    description:
      "Policies, procedures and governance-related resources.",
  },
  guides: {
    title: "Guides",
    description:
      "Practical guides and reference materials.",
  },
  forms: {
    title: "Forms",
    description:
      "Forms and documents for applications, requests and other processes.",
  },
  general: {
    title: "General Resources",
    description:
      "General KUHRSA documents and reference materials.",
  },
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category =
    categoryData[slug as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Resource Category"
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
              Resources will appear here.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              This category is ready to receive resources managed through the
              KUHRSA platform.
            </p>

            <Link
              href="/resources/categories"
              className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}