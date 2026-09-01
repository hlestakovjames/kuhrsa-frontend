import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

const categories = [
  "opinion",
  "insights",
  "student-perspectives",
  "interviews",
  "experiences",
  "guides-advice",
  "features",
];

export function generateStaticParams() {
  return categories.map((slug) => ({ slug }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!categories.includes(slug)) {
    notFound();
  }

  const posts = blogPosts.filter(
    (post) => post.categorySlug === slug,
  );

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <PageHero
        eyebrow="Blog Category"
        title={title}
        description={`Explore KUHRSA Blog stories published under ${title.toLowerCase()}.`}
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt={title}
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
                      {post.topic}
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

              <Link
                href="/blog"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Blog
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}