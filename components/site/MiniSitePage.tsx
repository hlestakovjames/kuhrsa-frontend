import Link from "next/link";

export default function MiniSitePage({
  title,
  intro,
  sections,
  links,
}: {
  title: string;
  intro: string;
  sections: string[];
  links: string[];
}) {
  return (
    <>
      <section className="bg-[#2BB9EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-white lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/75">KUHRSA public site</p>
          <h1 className="mt-3 text-5xl font-black">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`rounded-3xl p-7 ${index % 3 === 0 ? "bg-white ring-1 ring-black/10" : index % 3 === 1 ? "bg-[#BFF2F8]" : "bg-[#F9B6F2]"}`}
            >
              <h2 className="text-2xl font-black">{section}</h2>
              <p className="mt-3 text-sm leading-6 text-black/60">
                Structural placeholder. This section will become its own destination during the refinement pass.
              </p>
              <div className="mt-5 font-bold text-[#168DB8]">Explore →</div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#168DB8] p-8 text-white">
          <h2 className="text-3xl font-black">Related KUHRSA content</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            These connections will later be driven by CMS relationships rather than hard-coded links.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((href) => (
              <Link key={href} href={href} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15">
                {href.replace("/", "") || "home"} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
