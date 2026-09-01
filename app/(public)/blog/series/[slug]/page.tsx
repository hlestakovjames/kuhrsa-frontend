import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

const series = {
  "kuhrsa-leadership-stories": {
    title: "KUHRSA Leadership Stories",
    description:
      "Stories exploring leadership, participation, responsibility and student representation.",
  },
  "career-conversations": {
    title: "Career Conversations",
    description:
      "Ideas and experiences around career preparation, networking and professional growth.",
  },
};

export function generateStaticParams() {
  return Object.keys(series).map((slug) => ({
    slug,
  }));
}

export default async function BlogSeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentSeries =
    series[slug as keyof typeof series];

  if (!currentSeries) {
    notFound();
  }

  const posts = blogPosts.filter(
    (post) => post.seriesSlug === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Blog Series"
        title={currentSeries.title}
        description={currentSeries.description}
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt={currentSeries.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          {posts.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {post.category}
                    </p>

                    <h2 className="mt-3 text-xl font-black">
                      {post.title}
                    </h2>

                    <span className="mt-5 inline-block font-bold text-[#F700BA]">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h2 className="text-2xl font-black">
                More stories coming soon.
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}