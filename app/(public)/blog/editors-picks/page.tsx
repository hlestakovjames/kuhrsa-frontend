import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

export default function EditorsPicksPage() {
  const editorPicks = blogPosts.filter((post) => post.editorPick);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Editor's picks"
        description="A hand-selected collection of stories from the KUHRSA editorial team."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 lg:grid-cols-2">
            {editorPicks.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-[#F9B6F2] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#CE26A4]">
                    Editor&apos;s Pick
                  </span>

                  <h2 className="mt-5 text-3xl font-black text-[#0B2633]">
                    {post.title}
                  </h2>

                  <p className="mt-4 leading-8 text-black/60">
                    {post.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}