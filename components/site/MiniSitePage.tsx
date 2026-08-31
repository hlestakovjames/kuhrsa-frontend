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
      <section className="relative overflow-hidden bg-[#168DB8]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2BB9EC]/30 blur-2xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#F700BA]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/65">
            KUHRSA public site
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <article
              key={section}
              className="group rounded-3xl border border-black/8 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black ${
                  index % 3 === 0
                    ? "bg-[#BFF2F8] text-[#168DB8]"
                    : index % 3 === 1
                      ? "bg-[#F9B6F2] text-[#CE26A4]"
                      : "bg-[#2BB9EC] text-white"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="mt-6 text-2xl font-black tracking-tight text-[#0B2633]">
                {section}
              </h2>

              <p className="mt-3 text-sm leading-7 text-black/55">
                This section will be developed into a complete KUHRSA
                destination with structured content and member-focused
                functionality.
              </p>

              <div className="mt-6 font-bold text-[#168DB8] transition group-hover:text-[#CE26A4]">
                Explore →
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#0B2633] p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
            Continue exploring
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Related KUHRSA content
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            These connections will later be driven by structured CMS
            relationships rather than hard-coded content.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((href) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {href.replace("/", "") || "home"} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
