import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const contributors = [
  {
    name: "KUHRSA Editorial Team",
    slug: "kuhrsa-editorial-team",
    description:
      "The editorial team responsible for developing and curating KUHRSA Blog content.",
    role: "Editorial Team",
  },
];

export default function ContributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Contributors"
        description="Meet the people and teams behind KUHRSA Blog stories."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {contributors.map((contributor, index) => (
              <Link
                key={contributor.slug}
                href={`/blog/contributor/${contributor.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                  {contributor.role}
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#0B2633]">
                  {contributor.name}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {contributor.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                  View Contributor →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}