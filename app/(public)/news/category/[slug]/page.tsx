import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  academic: {
    title: "Academic News",
    description:
      "Stories covering academic experiences, learning opportunities and developments relevant to KUHRSA members.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  "student-leadership": {
    title: "Student Leadership News",
    description:
      "Stories covering student leadership, representation, leadership initiatives and experiences within KUHRSA.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  membership: {
    title: "Membership News",
    description:
      "Stories about KUHRSA members, membership initiatives and member engagement.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  "professional-development": {
    title: "Professional Development News",
    description:
      "Stories focused on career preparation, professional skills, networking and HR development.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  community: {
    title: "Community News",
    description:
      "Stories highlighting community engagement, social responsibility and KUHRSA outreach.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  "kuhrsa-updates": {
    title: "KUHRSA Updates",
    description:
      "General association updates, milestones, initiatives and developments.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  activities: {
    title: "Activities News",
    description:
      "Stories covering KUHRSA activities, participation and student engagement.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  mentorship: {
    title: "Mentorship News",
    description:
      "Stories and updates around mentorship, guidance and knowledge sharing.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
};

const stories = [
  {
    title: "KUHRSA continues to build a stronger student community",
    category: "kuhrsa-updates",
    categoryLabel: "KUHRSA Updates",
    excerpt:
      "Discover the initiatives, experiences and people contributing to a stronger KUHRSA community.",
    href: "/news/kuhrsa-student-community",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Creating opportunities beyond the classroom",
    category: "professional-development",
    categoryLabel: "Professional Development",
    excerpt:
      "Explore programs and experiences helping Human Resource students develop academically and professionally.",
    href: "/news/opportunities-beyond-classroom",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    title: "Student leadership and the future of KUHRSA",
    category: "student-leadership",
    categoryLabel: "Student Leadership",
    excerpt:
      "Explore leadership, representation and student participation within the association.",
    href: "/news/student-leadership-future",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Building stronger professional connections",
    category: "professional-development",
    categoryLabel: "Professional Development",
    excerpt:
      "Discover how students can build meaningful professional relationships and networks.",
    href: "/news/professional-connections",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  {
    title: "KUHRSA activities creating new opportunities",
    category: "activities",
    categoryLabel: "Activities",
    excerpt:
      "Explore student activities that create opportunities for participation, collaboration and growth.",
    href: "/news/kuhrsa-activities-opportunities",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  {
    title: "Growing together through mentorship",
    category: "mentorship",
    categoryLabel: "Mentorship",
    excerpt:
      "Discover how mentorship can support academic, personal and professional development.",
    href: "/news/mentorship-growth",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function NewsCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = categoryData[slug as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  const categoryStories = stories.filter(
    (story) => story.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="News Category"
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
                Category Stories
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Latest stories in {category.title}.
              </h2>
            </div>

            <Link
              href="/news/categories"
              className="inline-flex w-fit rounded-full bg-[#BFF2F8] px-6 py-3 font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
            >
              All Categories
            </Link>
          </div>

          {categoryStories.length > 0 ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {categoryStories.map((story) => (
                <Link
                  key={story.href}
                  href={story.href}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {story.categoryLabel}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {story.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/60">
                      {story.excerpt}
                    </p>

                    <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black text-[#0B2633]">
                More stories coming soon.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This category is ready for future KUHRSA News content.
              </p>

              <Link
                href="/news"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to News
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}