import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

export default function LatestBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Latest stories"
        description="Explore the newest stories, perspectives and ideas published on the KUHRSA Blog."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {post.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-black/40">
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-[#0B2633]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-black/60">
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