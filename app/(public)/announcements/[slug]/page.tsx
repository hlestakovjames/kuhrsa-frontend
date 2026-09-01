import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const announcements = [
  {
    slug: "membership-registration",
    title: "KUHRSA membership registration is open",
    category: "Membership",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    intro:
      "Important information about registering and joining the KUHRSA membership community.",
    description:
      "KUHRSA membership provides students with an opportunity to participate in the association, connect with other members and engage in academic, professional and community initiatives.",
  },
  {
    slug: "member-information",
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    intro:
      "Key information and notices relevant to current KUHRSA members.",
    description:
      "Members are encouraged to stay connected with official KUHRSA information so that they can remain informed about association activities, opportunities and important developments.",
  },
  {
    slug: "academic-support",
    title: "Academic support information for students",
    category: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    intro:
      "Information relating to academic support, development and student opportunities.",
    description:
      "KUHRSA continues to encourage academic collaboration and support among students by connecting members with useful information, resources and development opportunities.",
  },
  {
    slug: "participation-opportunities",
    title: "Upcoming KUHRSA participation opportunities",
    category: "Activities",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    intro:
      "Stay informed about opportunities for students to participate in KUHRSA activities and initiatives.",
    description:
      "Participation allows KUHRSA members to contribute to the association while gaining practical experience, building relationships and strengthening the wider student community.",
  },
];

export function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const announcement = announcements.find(
    (item) => item.slug === slug,
  );

  if (!announcement) {
    return {};
  }

  return createShareMetadata({
    title: announcement.title,
    description: announcement.intro,
    path: `/announcements/${announcement.slug}`,
    image: announcement.image,
    type: "article",
  });
}

export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const announcement = announcements.find(
    (item) => item.slug === slug,
  );

  if (!announcement) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={announcement.category}
        title={announcement.title}
        description={announcement.intro}
        image={announcement.image}
        imageAlt={announcement.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                <Image
                  src={announcement.image}
                  alt={announcement.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                  Official Announcement
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                  {announcement.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65">
                  {announcement.description}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Notice Details
              </p>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                  Category
                </p>

                <p className="mt-1 font-bold text-[#0B2633]">
                  {announcement.category}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-black text-white transition hover:bg-[#CE26A4]"
              >
                Ask About This Notice
              </Link>
            </aside>
          </div>

          <ShareButtons
            title={announcement.title}
            url={`/announcements/${announcement.slug}`}
            label="Share this announcement"
          />
        </div>
      </article>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              More from KUHRSA Announcements.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/announcements/latest"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Latest Notices
            </Link>

            <Link
              href="/announcements/categories"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Categories
            </Link>

            <Link
              href="/announcements/archive"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
            >
              Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}