import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const activities = [
  {
    slug: "student-mentorship",
    title: "Student Mentorship",
    category: "Mentorship",
    status: "Ongoing",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    intro:
      "An ongoing KUHRSA activity focused on guidance, knowledge sharing and student development.",
    description:
      "Student Mentorship creates opportunities for students to learn from one another, share experiences and receive guidance throughout their academic and professional journey.",
  },
  {
    slug: "career-professional-engagement",
    title: "Career & Professional Engagement",
    category: "Professional Development",
    status: "Ongoing",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    intro:
      "An activity focused on career awareness, professional skills and meaningful connections.",
    description:
      "Career & Professional Engagement connects KUHRSA members with opportunities to strengthen professional awareness, develop practical skills and build useful networks.",
  },
  {
    slug: "academic-support-initiatives",
    title: "Academic Support Initiatives",
    category: "Academic",
    status: "Ongoing",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    intro:
      "Academic activities designed to encourage collaboration, learning and peer support.",
    description:
      "Academic Support Initiatives encourage students to share knowledge, collaborate academically and support one another throughout their studies.",
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    category: "Community",
    status: "Ongoing",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    intro:
      "Activities that encourage KUHRSA members to contribute to the wider community.",
    description:
      "Community Engagement provides opportunities for students to participate in initiatives that strengthen social responsibility, collaboration and community connection.",
  },
];

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const activity = activities.find(
    (item) => item.slug === slug,
  );

  if (!activity) {
    return {};
  }

  return createShareMetadata({
    title: activity.title,
    description: activity.intro,
    path: `/activities/${activity.slug}`,
    image: activity.image,
    type: "website",
  });
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const activity = activities.find(
    (item) => item.slug === slug,
  );

  if (!activity) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={activity.category}
        title={activity.title}
        description={activity.intro}
        image={activity.image}
        imageAlt={activity.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                  About the Activity
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                  {activity.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65">
                  {activity.description}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Activity Details
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Category
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {activity.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Status
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {activity.status}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-black text-white transition hover:bg-[#CE26A4]"
              >
                Ask About This Activity
              </Link>
            </aside>
          </div>

          <ShareButtons
            title={activity.title}
            url={`/activities/${activity.slug}`}
            label="Share this activity"
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
              More from KUHRSA Activities.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/activities/current"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Current Activities
            </Link>

            <Link
              href="/activities/categories"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Categories
            </Link>

            <Link
              href="/activities"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#F4FAFC]"
            >
              Activities Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}