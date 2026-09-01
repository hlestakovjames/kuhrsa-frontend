import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  membership: {
    title: "Membership Announcements",
    description:
      "Registration, renewal and member-related KUHRSA announcements.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  academic: {
    title: "Academic Announcements",
    description:
      "Academic information, support and opportunities for students.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  "kuhrsa-updates": {
    title: "KUHRSA Updates",
    description:
      "General association information and organizational notices.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  events: {
    title: "Event Announcements",
    description:
      "Important information about KUHRSA events and participation.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  activities: {
    title: "Activity Announcements",
    description:
      "Information about KUHRSA activities and engagement opportunities.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  opportunities: {
    title: "Opportunity Announcements",
    description:
      "Scholarships, training, career and other opportunities.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
};

const announcements = [
  {
    title: "KUHRSA membership registration is open",
    slug: "membership-registration",
    category: "membership",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Important information for KUHRSA members",
    slug: "member-information",
    category: "kuhrsa-updates",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Academic support information for students",
    slug: "academic-support",
    category: "academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    title: "Upcoming KUHRSA participation opportunities",
    slug: "participation-opportunities",
    category: "activities",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function AnnouncementCategoryPage({
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

  const categoryAnnouncements = announcements.filter(
    (announcement) => announcement.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Announcement Category"
        title={category.title}
        description={category.description}
        image={category.image}
        imageAlt={category.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Category
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {category.title}.
              </h2>
            </div>

            <Link
              href="/announcements/categories"
              className="inline-flex w-fit rounded-full bg-[#BFF2F8] px-6 py-3 font-bold text-[#168DB8]"
            >
              All Categories
            </Link>
          </div>

          {categoryAnnouncements.length > 0 ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {categoryAnnouncements.map((announcement) => (
                <Link
                  key={announcement.slug}
                  href={`/announcements/${announcement.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black">
                      {announcement.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA]">
                      Read Notice →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black">
                More announcements coming soon.
              </h3>

              <Link
                href="/announcements"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Announcements
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}