import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

export default function FeaturedBlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Featured stories"
        description="Explore stories selected for their relevance, depth and value to the KUHRSA community."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student leadership"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {post.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-8 text-black/60">
                    {post.intro}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#F700BA]">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}