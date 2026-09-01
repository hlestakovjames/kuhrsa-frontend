import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const articles = [
  {
    slug: "kuhrsa-student-community",
    title: "KUHRSA continues to build a stronger student community",
    category: "KUHRSA Updates",
    categorySlug: "kuhrsa-updates",
    date: "2026",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    intro:
      "Discover the initiatives, experiences and people contributing to a stronger KUHRSA community.",
    sections: [
      {
        heading: "Building connection",
        paragraphs: [
          "KUHRSA provides a platform through which students can connect around shared academic, professional and community interests.",
          "A strong student association is built through participation. Members bring different experiences, ideas and talents, creating opportunities for collaboration and shared growth.",
        ],
      },
      {
        heading: "Creating opportunities",
        paragraphs: [
          "Through programs, activities, mentorship and professional initiatives, KUHRSA continues to create spaces where students can learn and contribute.",
          "These opportunities help members move beyond simply being part of an association and become active contributors to the wider KUHRSA community.",
        ],
      },
      {
        heading: "Looking ahead",
        paragraphs: [
          "As KUHRSA continues to grow, its focus remains on creating meaningful experiences for Human Resource students while strengthening the association&apos;s community and professional identity.",
        ],
      },
    ],
  },

  {
    slug: "opportunities-beyond-classroom",
    title: "Creating opportunities beyond the classroom",
    category: "Professional Development",
    categorySlug: "professional-development",
    date: "2026",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    intro:
      "Explore the programs and experiences helping Human Resource students develop academically and professionally.",
    sections: [
      {
        heading: "Connecting learning with practice",
        paragraphs: [
          "University education provides an essential foundation, but professional development also requires practical exposure, communication and continuous learning.",
          "KUHRSA programs create opportunities for students to connect what they learn academically with the realities of the Human Resource profession.",
        ],
      },
      {
        heading: "Developing professional confidence",
        paragraphs: [
          "Workshops, professional discussions, networking opportunities and exposure to different perspectives can help students approach their future careers with greater confidence.",
          "These experiences also encourage students to identify areas where they want to strengthen their skills and knowledge.",
        ],
      },
      {
        heading: "Growing together",
        paragraphs: [
          "Professional development becomes stronger when students learn together, share experiences and support one another throughout their academic journey.",
        ],
      },
    ],
  },

  {
    slug: "student-leadership-future",
    title: "Student leadership and the future of KUHRSA",
    category: "Student Leadership",
    categorySlug: "student-leadership",
    date: "2026",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    intro:
      "Explore leadership, representation and student participation within the association.",
    sections: [
      {
        heading: "Leadership through participation",
        paragraphs: [
          "Student leadership is developed through responsibility, initiative, collaboration and a willingness to contribute.",
          "KUHRSA provides opportunities for students to take active roles in association initiatives while developing confidence and practical leadership abilities.",
        ],
      },
      {
        heading: "A stronger student voice",
        paragraphs: [
          "Leadership also creates opportunities for students to share ideas and contribute to discussions that affect the association and its members.",
          "A strong student voice depends on participation from the wider KUHRSA community.",
        ],
      },
    ],
  },

  {
    slug: "professional-connections",
    title: "Building stronger professional connections",
    category: "Professional Development",
    categorySlug: "professional-development",
    date: "2026",
    image: "/images/kuhrsa/general/HR.jpeg",
    intro:
      "Discover how students can build meaningful professional relationships and networks.",
    sections: [
      {
        heading: "The value of connection",
        paragraphs: [
          "Professional relationships can broaden a student&apos;s understanding of the HR profession and provide access to new perspectives and experiences.",
          "KUHRSA encourages members to build connections with peers, leaders, alumni and professionals wherever opportunities arise.",
        ],
      },
      {
        heading: "Learning through networks",
        paragraphs: [
          "Networking is not simply about collecting contacts. It is about building relationships through meaningful conversations, shared experiences and mutual support.",
        ],
      },
    ],
  },

  {
    slug: "kuhrsa-activities-opportunities",
    title: "KUHRSA activities creating new opportunities",
    category: "Activities",
    categorySlug: "activities",
    date: "2026",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    intro:
      "Explore student activities that create opportunities for participation, collaboration and growth.",
    sections: [
      {
        heading: "Participation matters",
        paragraphs: [
          "Activities give students opportunities to develop practical skills, collaborate with others and contribute their time and talents to the association.",
          "They also create experiences that complement academic and professional development.",
        ],
      },
      {
        heading: "A connected student experience",
        paragraphs: [
          "Through activities, members can build relationships, discover shared interests and become more actively involved in KUHRSA.",
        ],
      },
    ],
  },

  {
    slug: "mentorship-growth",
    title: "Growing together through mentorship",
    category: "Mentorship",
    categorySlug: "mentorship",
    date: "2026",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    intro:
      "Discover how mentorship can support academic, personal and professional development.",
    sections: [
      {
        heading: "Learning from experience",
        paragraphs: [
          "Mentorship creates opportunities for students to learn from people with different experiences and perspectives.",
          "It can help members ask questions, receive guidance and make more informed decisions about their development.",
        ],
      },
      {
        heading: "Sharing knowledge",
        paragraphs: [
          "Mentorship is also about giving back. Students can support one another by sharing knowledge, experiences and encouragement throughout their journey.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    return {};
  }

  return createShareMetadata({
    title: article.title,
    description: article.intro,
    path: `/news/${article.slug}`,
    image: article.image,
    type: "article",
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex(
    (item) => item.slug === slug,
  );

  const previousArticle =
    currentIndex > 0
      ? articles[currentIndex - 1]
      : null;

  const nextArticle =
    currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.categorySlug === article.categorySlug,
    )
    .slice(0, 2);

  const articleUrl = `/news/${article.slug}`;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.intro}
        image={article.image}
        imageAlt={article.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em]">
            <span className="text-[#168DB8]">
              {article.category}
            </span>

            <span className="text-black/30">•</span>

            <span className="text-black/40">
              {article.date}
            </span>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/9]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            {article.sections.map((section) => (
              <section
                key={section.heading}
                className="mb-10"
              >
                <h2 className="text-3xl font-black tracking-tight text-[#0B2633]">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5 text-base leading-8 text-black/65">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <ShareButtons
            title={article.title}
            url={articleUrl}
            label="Share this story"
          />
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-[#F4FAFC]">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Related News
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                More from {article.category}.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/news/${related.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {related.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {related.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {previousArticle ? (
              <Link
                href={`/news/${previousArticle.slug}`}
                className="rounded-[2rem] bg-[#BFF2F2] p-6 transition hover:-translate-y-1"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                  Previous Story
                </p>

                <h3 className="mt-2 text-xl font-black text-[#0B2633]">
                  {previousArticle.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle && (
              <Link
                href={`/news/${nextArticle.slug}`}
                className="rounded-[2rem] bg-[#F9B6F2] p-6 transition hover:-translate-y-1 sm:text-right"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#CE26A4]">
                  Next Story
                </p>

                <h3 className="mt-2 text-xl font-black text-[#0B2633]">
                  {nextArticle.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore more KUHRSA News.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/news"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                News Home
              </Link>

              <Link
                href="/news/categories"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Categories
              </Link>

              <Link
                href="/news/search"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Search News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}