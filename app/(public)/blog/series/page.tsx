import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const series = [
  {
    title: "KUHRSA Leadership Stories",
    slug: "kuhrsa-leadership-stories",
    description:
      "Stories exploring leadership, participation, responsibility and student representation.",
  },
  {
    title: "Career Conversations",
    slug: "career-conversations",
    description:
      "Ideas and experiences around career preparation, networking and professional growth.",
  },
];

export default function BlogSeriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Editorial series"
        description="Follow recurring collections of connected KUHRSA Blog stories."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {series.map((item, index) => (
              <Link
                key={item.slug}
                href={`/blog/series/${item.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-black/60">
                  {item.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore Series →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}