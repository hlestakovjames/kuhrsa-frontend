import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const updates = [
  {
    slug: "academic-professional-development",
    title: "Academic & Professional Development",
    category: "Academic Development",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    intro:
      "Explore academic and professional development opportunities designed to help KUHRSA members grow.",
    description:
      "Academic and professional development connects classroom learning with the skills, perspectives and experiences students need as they prepare for future careers.",
  },
  {
    slug: "student-academic-support",
    title: "Student Academic Support",
    category: "Academic Support",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    intro:
      "Explore initiatives that encourage academic collaboration, peer support and student development.",
    description:
      "Student Academic Support creates opportunities for members to share knowledge, collaborate and support one another throughout their studies.",
  },
  {
    slug: "career-preparation",
    title: "Career Preparation & Academic Growth",
    category: "Career Preparation",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    intro:
      "Explore ways academic development can support career preparation and professional growth.",
    description:
      "Career Preparation & Academic Growth brings academic development and career readiness together, helping students think intentionally about the transition from university into professional life.",
  },
];

export function generateStaticParams() {
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const update = updates.find(
    (item) => item.slug === slug,
  );

  if (!update) {
    return {};
  }

  return createShareMetadata({
    title: update.title,
    description: update.intro,
    path: `/academic/${update.slug}`,
    image: update.image,
    type: "article",
  });
}

export default async function AcademicUpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const update = updates.find(
    (item) => item.slug === slug,
  );

  if (!update) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={update.category}
        title={update.title}
        description={update.intro}
        image={update.image}
        imageAlt={update.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                  Academic Content
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                  {update.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65">
                  {update.description}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Academic Information
              </p>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                  Category
                </p>

                <p className="mt-1 font-bold text-[#0B2633]">
                  {update.category}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-black text-white transition hover:bg-[#CE26A4]"
              >
                Ask About This Update
              </Link>
            </aside>
          </div>

          <ShareButtons
            title={update.title}
            url={`/academic/${update.slug}`}
            label="Share this update"
          />
        </div>
      </article>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              More from KUHRSA Academic.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/academic/updates"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Updates
            </Link>

            <Link
              href="/academic/opportunities"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Opportunities
            </Link>

            <Link
              href="/academic/categories"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#F4FAFC]"
            >
              Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}