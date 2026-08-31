import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const items = [
  ["About KUHRSA", "Who we are, what we represent and the role we play.", "#overview"],
  ["History", "Key milestones and the development of KUHRSA.", "#history"],
  ["Mission & Vision", "The direction and purpose of the association.", "#mission"],
  ["Core Values", "The principles that guide KUHRSA.", "#values"],
  ["Objectives", "What KUHRSA is established to achieve.", "#objectives"],
  ["Leadership", "Current leadership and office bearers.", "#leadership"],
  ["Governance", "Governance, constitution and organizational framework.", "#governance"],
  ["Organizational Structure", "How KUHRSA is organized.", "#structure"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="The story behind KUHRSA."
        description="Discover KUHRSA's identity, history, leadership, governance and the role it plays in connecting students."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA students at Kisii University"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, text, href], index) => (
            <Link
              key={title}
              href={`/about${href}`}
              className={`rounded-3xl p-6 transition hover:-translate-y-1 ${
                index % 3 === 0
                  ? "bg-white ring-1 ring-black/10"
                  : index % 3 === 1
                    ? "bg-[#BFF2F8]"
                    : "bg-[#F9B6F2]"
              }`}
            >
              <h2 className="text-xl font-black">{title}</h2>

              <p className="mt-3 text-sm leading-6 text-black/60">
                {text}
              </p>

              <span className="mt-5 inline-block font-bold text-[#168DB8]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}