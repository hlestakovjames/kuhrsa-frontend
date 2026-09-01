import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

export default function BlogArchivePage() {
  const years = [...new Set(blogPosts.map((post) => post.date))];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Archive"
        description="Browse KUHRSA Blog stories by publication year."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-5">
            {years.map((year) => {
              const count = blogPosts.filter(
                (post) => post.date === year,
              ).length;

              return (
                <div
                  key={year}
                  className="flex flex-col gap-4 rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      Publication Year
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                      {year}
                    </h2>

                    <p className="mt-1 text-sm text-black/55">
                      {count} {count === 1 ? "story" : "stories"}
                    </p>
                  </div>

                  <Link
                    href={`/blog/latest`}
                    className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
                  >
                    Browse Stories
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}