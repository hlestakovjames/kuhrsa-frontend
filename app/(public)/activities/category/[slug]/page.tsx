import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  academic: {
    title: "Academic Activities",
    description:
      "Activities supporting learning, academic collaboration and student development.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  "professional-development": {
    title: "Professional Development Activities",
    description:
      "Career, networking and professional growth activities for KUHRSA members.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  leadership: {
    title: "Leadership Activities",
    description:
      "Activities designed to develop leadership, representation and responsibility.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  mentorship: {
    title: "Mentorship Activities",
    description:
      "Mentorship, peer guidance and knowledge-sharing opportunities.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  community: {
    title: "Community Activities",
    description:
      "Community engagement, outreach and social-impact activities.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  social: {
    title: "Social Activities",
    description:
      "Activities encouraging interaction, belonging and community.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
};

const activities = [
  {
    title: "Student Mentorship",
    slug: "student-mentorship",
    category: "mentorship",
    categoryLabel: "Mentorship",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Career & Professional Engagement",
    slug: "career-professional-engagement",
    category: "professional-development",
    categoryLabel: "Professional Development",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    title: "Academic Support Initiatives",
    slug: "academic-support-initiatives",
    category: "academic",
    categoryLabel: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    title: "Community Engagement",
    slug: "community-engagement",
    category: "community",
    categoryLabel: "Community",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function ActivityCategoryPage({
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

  const categoryActivities = activities.filter(
    (activity) => activity.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Activity Category"
        title={category.title}
        description={category.description}
        image={category.image}
        imageAlt={category.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Category Activities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {category.title} across KUHRSA.
              </h2>
            </div>

            <Link
              href="/activities/categories"
              className="inline-flex w-fit rounded-full bg-[#BFF2F8] px-6 py-3 font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
            >
              All Categories
            </Link>
          </div>

          {categoryActivities.length > 0 ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {categoryActivities.map((activity) => (
                <Link
                  key={activity.slug}
                  href={`/activities/${activity.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {activity.categoryLabel}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {activity.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      View Activity →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black">
                More activities coming soon.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This category is ready for future KUHRSA activity content.
              </p>

              <Link
                href="/activities"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Activities
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}