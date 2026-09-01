import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

const contributors = {
  "kuhrsa-editorial-team": {
    name: "KUHRSA Editorial Team",
    role: "Editorial Team",
    description:
      "The KUHRSA Editorial Team develops and curates stories, insights and perspectives for the Blog.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
};

export function generateStaticParams() {
  return Object.keys(contributors).map((slug) => ({
    slug,
  }));
}

export default async function ContributorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const contributor =
    contributors[slug as keyof typeof contributors];

  if (!contributor) {
    notFound();
  }

  const posts = blogPosts.filter(
    (post) => post.contributorSlug === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Blog Contributor"
        title={contributor.name}
        description={contributor.description}
        image={contributor.image}
        imageAlt={contributor.name}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              {contributor.role}
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Stories by {contributor.name}.
            </h2>
          </div>

          {posts.length > 0 ? (
            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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

                    <h3 className="mt-3 text-xl font-black text-[#0B2633]">
                      {post.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA]">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black">
                More stories coming soon.
              </h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
}