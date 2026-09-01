import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";
import { blogPosts } from "@/lib/blog";

const relatedContent = [
  {
    title: "Student leadership and the future of KUHRSA",
    label: "News",
    href: "/news/student-leadership-future",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "KUHRSA Leadership Forum",
    label: "Events",
    href: "/events/kuhrsa-leadership-forum",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  {
    title: "Leadership Development",
    label: "Programs",
    href: "/programs/leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Academic & Professional Development",
    label: "Academic",
    href: "/academic/academic-professional-development",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    title: "Why Join KUHRSA",
    label: "Membership",
    href: "/membership/why-join",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Student Leadership",
    label: "Gallery",
    href: "/gallery/student-leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return createShareMetadata({
    title: post.title,
    description: post.intro,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        (item.topicSlug === post.topicSlug ||
          item.categorySlug === post.categorySlug),
    )
    .slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.intro}
        image={post.image}
        imageAlt={post.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em]">
            <span className="text-[#168DB8]">
              {post.category}
            </span>

            <span className="text-black/30">•</span>

            <span className="text-black/40">
              {post.date}
            </span>

            <span className="text-black/30">•</span>

            <span className="text-black/40">
              {post.readingTime}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-black/60">
            <span>
              By{" "}
              <strong className="text-[#0B2633]">
                {post.contributor}
              </strong>
            </span>

            <span>•</span>

            <span>{post.topic}</span>
          </div>

          {post.series && (
            <Link
              href={`/blog/series/${post.seriesSlug}`}
              className="mt-4 inline-flex rounded-full bg-[#F4FAFC] px-4 py-2 text-xs font-bold text-[#168DB8] ring-1 ring-black/10"
            >
              Series: {post.series}
            </Link>
          )}

          <div className="mt-10 overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-black/65"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related KUHRSA Content */}
          <section className="mt-16 border-t border-black/10 pt-12">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Related KUHRSA Content
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                Continue exploring this story.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                This story connects with related information and experiences
                across the wider KUHRSA website.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedContent.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-[1.75rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-lg font-black text-[#0B2633]">
                      {item.title}
                    </h3>

                    <span className="mt-4 inline-block text-sm font-bold text-[#F700BA]">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Blog Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 border-t border-black/10 pt-12">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Related Stories
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                More from the Blog.
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                        {relatedPost.category}
                      </p>

                      <h3 className="mt-3 text-xl font-black">
                        {relatedPost.title}
                      </h3>

                      <span className="mt-5 inline-block font-bold text-[#F700BA]">
                        Read Story →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <ShareButtons
            title={post.title}
            url={`/blog/${post.slug}`}
            label="Share this story"
          />
        </div>
      </article>
    </>
  );
}