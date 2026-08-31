import Link from "next/link";

const cards = [
  ["Latest News", "/news", "Official KUHRSA stories and developments."],
  ["Blog", "/blog", "Ideas, stories, insights and member voices."],
  ["Announcements", "/announcements", "Important notices and updates."],
  ["Events", "/events", "Upcoming and past KUHRSA events."],
  ["Activities", "/activities", "Programs, initiatives and ongoing work."],
  ["Academic", "/academic", "Academic updates, opportunities and support."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2BB9EC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/80">
              Kisii University Human Resource Students&apos; Association
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              KUHRSA connects people, ideas and opportunities.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              A public home for KUHRSA&apos;s community, stories, events, activities,
              academic information and resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/membership#join" className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white hover:bg-[#CE26A4]">
                Join KUHRSA
              </Link>
              <Link href="/about" className="rounded-full bg-white px-6 py-3 font-bold text-[#168DB8]">
                Explore KUHRSA
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/15 p-5 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Discover", "A structured public presence for KUHRSA."],
                ["Connect", "Move naturally between related content."],
                ["Participate", "Find events, activities and opportunities."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-white p-5">
                  <div className="text-sm font-black uppercase tracking-wide text-[#F700BA]">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-black/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">About KUHRSA</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">One organization, many ways to connect.</h2>
            <p className="mt-4 leading-7 text-black/65">
              The landing page introduces the wider KUHRSA ecosystem and sends visitors
              into the right mini-site rather than trying to duplicate every detail.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/about" className="font-bold text-[#CE26A4] hover:underline">Learn more about KUHRSA →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">Membership</p>
              <h2 className="mt-3 text-4xl font-black">Find your place in KUHRSA.</h2>
            </div>
            <Link href="/membership" className="font-bold text-[#168DB8] hover:underline">Explore Membership →</Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Why Join", "Discover the value and purpose of KUHRSA membership."],
              ["How to Join", "Understand the membership path and requirements."],
              ["Activate Membership", "Seasonal activation appears here only when enabled by an authorized administrator."],
            ].map(([title, text], index) => (
              <div key={title} className={`rounded-3xl p-7 ${index === 2 ? "bg-[#168DB8] text-white" : "bg-white"}`}>
                <h3 className="text-xl font-black">{title}</h3>
                <p className={`mt-3 text-sm leading-6 ${index === 2 ? "text-white/85" : "text-black/65"}`}>{text}</p>
                <Link
                  href={index === 2 ? "/activate-membership" : "/membership"}
                  className={`mt-5 inline-block font-bold ${index === 2 ? "text-white" : "text-[#F700BA]"}`}
                >
                  {index === 2 ? "Activation →" : "Explore →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#168DB8]">
        <div className="mx-auto max-w-7xl px-5 py-18 text-white lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Featured Blog</p>
              <h2 className="mt-3 text-4xl font-black">The editorial side of KUHRSA.</h2>
            </div>
            <Link href="/blog" className="font-bold text-white hover:underline">Enter the Blog →</Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Link href="/blog" className="rounded-[2rem] bg-white p-8 text-black transition hover:-translate-y-1">
              <div className="text-sm font-black uppercase tracking-wide text-[#F700BA]">Featured story</div>
              <h3 className="mt-4 text-3xl font-black">A full editorial experience inside KUHRSA.</h3>
              <p className="mt-4 max-w-2xl leading-7 text-black/65">
                This space will eventually hold featured stories, authors, categories,
                topics and contextual links back into KUHRSA.
              </p>
            </Link>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {["Latest stories", "Topics & categories"].map((label) => (
                <Link key={label} href="/blog" className="rounded-3xl bg-white/10 p-7 hover:bg-white/15">
                  <h3 className="font-black text-xl">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">Explore the Blog mini-site →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">Stay informed</p>
              <h2 className="mt-3 text-4xl font-black">The KUHRSA public ecosystem.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-black/60">
              Each doorway below will become a focused mini-site with its own structure
              and meaningful links to related KUHRSA content.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(([title, href, text], index) => (
              <Link
                key={href}
                href={href}
                className={`rounded-3xl p-7 transition hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "bg-[#F9B6F2]"
                    : index % 3 === 1
                    ? "bg-[#BFF2F8]"
                    : "bg-[#f4f4f4]"
                }`}
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">{text}</p>
                <span className="mt-5 inline-block font-bold text-[#168DB8]">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9B6F2]">
        <div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">Connect with KUHRSA</p>
              <h2 className="mt-3 text-4xl font-black">Have something to ask or explore?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-black/65">
                The public site closes the loop with direct ways to reach KUHRSA and continue the journey.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white">Contact KUHRSA</Link>
              <Link href="/membership#join" className="rounded-full bg-white px-6 py-3 font-bold text-[#CE26A4]">Join KUHRSA</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
