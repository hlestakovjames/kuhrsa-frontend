import Link from "next/link";

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
      <section className="bg-[#2BB9EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-white lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/75">About</p>
          <h1 className="mt-3 text-5xl font-black">The story behind KUHRSA.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
            A first-pass structure for KUHRSA&apos;s institutional identity, history, leadership and governance.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, text, href], index) => (
            <Link key={title} href={`/about${href}`} className={`rounded-3xl p-6 ${index % 3 === 0 ? "bg-white ring-1 ring-black/10" : index % 3 === 1 ? "bg-[#BFF2F8]" : "bg-[#F9B6F2]"}`}>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
              <span className="mt-5 inline-block font-bold text-[#168DB8]">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
