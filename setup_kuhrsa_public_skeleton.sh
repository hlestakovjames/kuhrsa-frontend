#!/usr/bin/env bash
set -euo pipefail

cd ~/kuhrsa/frontend

mkdir -p \
  "app/(public)/about" \
  "app/(public)/membership" \
  "app/(public)/news" \
  "app/(public)/announcements" \
  "app/(public)/events" \
  "app/(public)/activities" \
  "app/(public)/academic" \
  "app/(public)/resources" \
  "app/(public)/departments" \
  "app/(public)/gallery" \
  "app/(public)/contact" \
  "app/blog" \
  "components/site"

cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUHRSA",
  description: "Kisii University Human Resource Students' Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
EOF

cat > components/site/SiteHeader.tsx <<'EOF'
import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Membership", "/membership"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Announcements", "/announcements"],
  ["Events", "/events"],
  ["Activities", "/activities"],
  ["Academic", "/academic"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-[#168DB8]">
          KUHRSA
        </Link>

        <nav className="hidden flex-1 justify-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black transition hover:text-[#168DB8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border-2 border-[#168DB8] px-4 py-2 text-sm font-bold text-[#168DB8] md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/membership#join"
            className="rounded-full bg-[#F700BA] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
          >
            Join KUHRSA
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-black/5 xl:hidden">
        <nav className="mx-auto flex min-w-max gap-5 px-5 py-3" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
EOF

cat > components/site/SiteFooter.tsx <<'EOF'
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#168DB8] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-2xl font-black">KUHRSA</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
            Connecting KUHRSA members through information, engagement and a strong public presence.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            {[
              ["About", "/about"],
              ["Membership", "/membership"],
              ["News", "/news"],
              ["Blog", "/blog"],
              ["Events", "/events"],
              ["Activities", "/activities"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Discover</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            {[
              ["Announcements", "/announcements"],
              ["Academic", "/academic"],
              ["Resources", "/resources"],
              ["Departments", "/departments"],
              ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Connect</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <Link href="/contact" className="hover:text-white">Contact KUHRSA</Link>
            <Link href="/membership#join" className="hover:text-white">Join KUHRSA</Link>
            <Link href="/login" className="hover:text-white">Login</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/75">
        © {new Date().getFullYear()} KUHRSA. All rights reserved.
      </div>
    </footer>
  );
}
EOF

cat > "app/(public)/layout.tsx" <<'EOF'
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
EOF

cat > "app/(public)/page.tsx" <<'EOF'
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
EOF

cat > "app/blog/layout.tsx" <<'EOF'
import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-black/10 bg-[#168DB8] text-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/blog" className="text-2xl font-black tracking-tight">
              KUHRSA BLOG
            </Link>
            <Link href="/" className="text-sm font-bold text-white/85 hover:text-white">
              ← Back to KUHRSA
            </Link>
          </div>
          <nav className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-white/90">
            <Link href="/blog">Home</Link>
            <Link href="/blog#latest">Latest</Link>
            <Link href="/blog#topics">Topics</Link>
            <Link href="/blog#categories">Categories</Link>
            <Link href="/blog#contributors">Contributors</Link>
            <Link href="/blog#archive">Archive</Link>
            <span className="rounded-full bg-white/15 px-3 py-1">Search</span>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/10 bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 lg:px-8">
          <div className="font-black">KUHRSA BLOG</div>
          <Link href="/" className="text-sm text-white/75 hover:text-white">Return to KUHRSA</Link>
        </div>
      </footer>
    </div>
  );
}
EOF

cat > "app/blog/page.tsx" <<'EOF'
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#2BB9EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-white lg:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-white/75">KUHRSA editorial</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Stories, ideas and perspectives from the KUHRSA community.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            The Blog is a full publication experience inside the KUHRSA public site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Link href="/blog" className="rounded-[2rem] bg-[#168DB8] p-8 text-white">
            <div className="text-sm font-black uppercase tracking-wide text-[#F9B6F2]">Featured</div>
            <h2 className="mt-4 text-4xl font-black">Featured editorial story placeholder</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/85">
              This will become the primary featured story, with related content connecting into events,
              activities, academics, departments, resources and gallery content.
            </p>
          </Link>
          <div className="grid gap-6">
            <div id="categories" className="rounded-3xl bg-[#BFF2F8] p-7">
              <h3 className="text-2xl font-black">Categories</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">Academic Life · Career · Leadership · Student Life · Opinion</p>
            </div>
            <div id="topics" className="rounded-3xl bg-[#F9B6F2] p-7">
              <h3 className="text-2xl font-black">Topics</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">Editorial topics and discovery collections will live here.</p>
            </div>
          </div>
        </div>

        <div id="latest" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black">Latest</h2>
            <span className="text-sm font-semibold text-black/50">Posts will be CMS-driven later</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["Story placeholder", "Story placeholder", "Story placeholder"].map((title, i) => (
              <article key={i} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-black text-[#F700BA]">CATEGORY</div>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Editorial excerpt placeholder for the final blog content model.
                </p>
                <Link href="/blog" className="mt-5 inline-block font-bold text-[#168DB8]">Read story →</Link>
              </article>
            ))}
          </div>
        </div>

        <div id="contributors" className="mt-14 rounded-[2rem] bg-[#f4f4f4] p-8">
          <h2 className="text-3xl font-black">Contributors</h2>
          <p className="mt-3 max-w-2xl text-black/60">
            Author and contributor profiles will become a deeper Blog mini-site experience.
          </p>
        </div>

        <div id="archive" className="mt-6 rounded-[2rem] border border-black/10 p-8">
          <h2 className="text-3xl font-black">Archive</h2>
          <p className="mt-3 max-w-2xl text-black/60">
            Date-based and category-based discovery will live here.
          </p>
        </div>
      </section>
    </>
  );
}
EOF

cat > "app/(public)/about/page.tsx" <<'EOF'
import Link from "next/link";

export default function AboutPage() {
  const items = [
    ["About KUHRSA", "Who we are, what we represent and the role we play.", "/about"],
    ["History", "Key milestones and the development of KUHRSA.", "/about#history"],
    ["Mission & Vision", "The direction and purpose of the association.", "/about#mission"],
    ["Core Values", "The principles that guide KUHRSA.", "/about#values"],
    ["Objectives", "What KUHRSA is established to achieve.", "/about#objectives"],
    ["Leadership", "Current leadership and office bearers.", "/about#leadership"],
    ["Governance", "Governance, constitution and organizational framework.", "/about#governance"],
    ["Organizational Structure", "How KUHRSA is organized.", "/about#structure"],
  ];

  return <SectionPage title="About KUHRSA" intro="The institutional story, identity, leadership and governance of KUHRSA." items={items} accent="cyan" />;
}

function SectionPage({
  title,
  intro,
  items,
  accent,
}: {
  title: string;
  intro: string;
  items: string[][];
  accent: "cyan" | "magenta";
}) {
  return (
    <>
      <section className={accent === "cyan" ? "bg-[#2BB9EC]" : "bg-[#F700BA]"}>
        <div className="mx-auto max-w-7xl px-5 py-20 text-white lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/75">KUHRSA public site</p>
          <h1 className="mt-3 text-5xl font-black">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([label, text, href]) => (
            <Link key={label} href={href} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <h2 className="text-xl font-black">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
              <span className="mt-5 inline-block font-bold text-[#168DB8]">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
EOF

# Shared simple section pages
cat > "app/(public)/membership/page.tsx" <<'EOF'
import Link from "next/link";

export default function MembershipPage() {
  const items = ["Why Join KUHRSA?", "Membership Benefits", "Eligibility", "Membership Categories", "How to Join", "Membership Requirements", "Member Responsibilities"];
  return (
    <>
      <section className="bg-[#168DB8] text-white"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Membership</p><h1 className="mt-3 text-5xl font-black">Find your place in KUHRSA.</h1><p className="mt-5 max-w-2xl text-lg text-white/90">Public membership information, without exposing private fee or account details.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{items.map((item) => <Link href="/membership" key={item} className="rounded-3xl bg-[#BFF2F8] p-6"><h2 className="font-black text-xl">{item}</h2><p className="mt-3 text-sm text-black/60">Membership content placeholder.</p><span className="mt-5 inline-block font-bold text-[#168DB8]">Explore →</span></Link>)}</div>
      <div id="join" className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10"><h2 className="text-3xl font-black">Ready to join?</h2><p className="mt-3 max-w-2xl text-black/60">The join/application process will connect this public site to the membership workflow.</p><button className="mt-6 rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white">Join KUHRSA</button></div>
      <div className="mt-6 rounded-[2rem] bg-[#F9B6F2] p-8"><h2 className="text-3xl font-black">Already approved?</h2><p className="mt-3 text-black/60">Seasonal activation is shown here only when enabled by an authorized administrator.</p><Link href="/activate-membership" className="mt-6 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white">Activate Membership</Link></div></section>
    </>
  );
}
EOF

cat > "app/(public)/news/page.tsx" <<'EOF'
import Link from "next/link";
export default function NewsPage() {
  return <MiniSitePage title="News" intro="Official KUHRSA reporting and organizational stories." sections={["News Home", "Featured", "Latest", "Categories", "Archive"]} links={["/events", "/activities", "/blog", "/departments"]} />;
}
EOF

cat > "app/(public)/announcements/page.tsx" <<'EOF'
export default function AnnouncementsPage() {
  return <MiniSitePage title="Announcements" intro="Important KUHRSA notices, updates and time-sensitive information." sections={["Announcements Home", "Important", "Latest", "Archived"]} links={["/events", "/membership", "/resources"]} />;
}
EOF

cat > "app/(public)/events/page.tsx" <<'EOF'
export default function EventsPage() {
  return <MiniSitePage title="Events" intro="Discover upcoming, current and past KUHRSA events." sections={["Events Home", "Upcoming", "Calendar", "Past"]} links={["/activities", "/blog", "/news", "/gallery"]} />;
}
EOF

cat > "app/(public)/activities/page.tsx" <<'EOF'
export default function ActivitiesPage() {
  return <MiniSitePage title="Activities" intro="Explore KUHRSA initiatives, programs and ongoing engagement." sections={["Activities Home", "Ongoing", "Completed"]} links={["/events", "/blog", "/departments", "/resources"]} />;
}
EOF

cat > "app/(public)/academic/page.tsx" <<'EOF'
export default function AcademicPage() {
  return <MiniSitePage title="Academic" intro="Academic updates, opportunities, important dates and support." sections={["Academic Home", "Updates", "Opportunities", "Important Dates", "Academic Resources"]} links={["/blog", "/resources", "/events"]} />;
}
EOF

cat > "app/(public)/resources/page.tsx" <<'EOF'
export default function ResourcesPage() {
  return <MiniSitePage title="Resources" intro="Documents, forms, downloads, guidelines and reference material." sections={["Resources Home", "Documents", "Forms", "Downloads", "Guidelines", "Policies"]} links={["/academic", "/departments", "/membership", "/events"]} />;
}
EOF

cat > "app/(public)/departments/page.tsx" <<'EOF'
export default function DepartmentsPage() {
  return <MiniSitePage title="Departments" intro="Explore KUHRSA departments and the work happening across them." sections={["Departments Home", "Department Profiles", "Leadership", "Activities", "Events", "News", "Blog", "Resources", "Gallery"]} links={["/activities", "/events", "/news", "/blog", "/gallery"]} />;
}
EOF

cat > "app/(public)/gallery/page.tsx" <<'EOF'
export default function GalleryPage() {
  return <MiniSitePage title="Gallery" intro="A visual archive of KUHRSA events, activities, people and moments." sections={["Gallery Home", "Albums", "Photos", "Videos"]} links={["/events", "/activities", "/departments", "/blog"]} />;
}
EOF

cat > "app/(public)/contact/page.tsx" <<'EOF'
export default function ContactPage() {
  return <MiniSitePage title="Contact" intro="Find KUHRSA contact information and ways to reach the association." sections={["Contact Home", "Contact Information", "Locations", "Contact Form"]} links={["/about", "/membership"]} />;
}
EOF

cat > "app/(public)/news/page.tsx.tmp" <<'EOF'
EOF
rm -f "app/(public)/news/page.tsx.tmp"

# Mini-site helper injected as local component inside each page via duplication-safe file.
cat > components/site/MiniSitePage.tsx <<'EOF'
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
EOF

# Add imports to mini-site pages.
python - <<'PY'
from pathlib import Path
for name in ["news","announcements","events","activities","academic","resources","departments","gallery","contact"]:
    p = Path(f"app/(public)/{name}/page.tsx")
    text = p.read_text()
    if "MiniSitePage" not in text.splitlines()[0]:
        text = 'import MiniSitePage from "@/components/site/MiniSitePage";\n' + text
    p.write_text(text)
PY

# Rewrite About without relying on the local helper.
cat > "app/(public)/about/page.tsx" <<'EOF'
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
EOF

# Ensure Tailwind-compatible global baseline.
cat > app/globals.css <<'EOF'
@import "tailwindcss";

:root {
  --kuhrsa-cyan: #2BB9EC;
  --kuhrsa-deep-blue: #168DB8;
  --kuhrsa-magenta: #F700BA;
  --kuhrsa-deep-magenta: #CE26A4;
  --kuhrsa-light-cyan: #BFF2F8;
  --kuhrsa-light-pink: #F9B6F2;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #ffffff;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}
EOF

# Add temporary routes required by the shell.
mkdir -p "app/login" "app/activate-membership"
cat > "app/login/page.tsx" <<'EOF'
export default function LoginPage() {
  return <main className="min-h-screen bg-[#BFF2F8] px-5 py-20"><div className="mx-auto max-w-xl rounded-[2rem] bg-white p-8 shadow-sm"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">Authentication</p><h1 className="mt-3 text-4xl font-black">Login</h1><p className="mt-4 text-black/60">Login structure placeholder. Authentication will be connected to the KUHRSA backend later.</p></div></main>;
}
EOF

cat > "app/activate-membership/page.tsx" <<'EOF'
export default function ActivateMembershipPage() {
  return <main className="min-h-screen bg-[#F9B6F2] px-5 py-20"><div className="mx-auto max-w-xl rounded-[2rem] bg-white p-8 shadow-sm"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">Membership activation</p><h1 className="mt-3 text-4xl font-black">Activate Membership</h1><p className="mt-4 text-black/60">Activation structure placeholder. Availability will be controlled by an authorized administrator.</p></div></main>;
}
EOF

echo "KUHRSA frontend skeleton created."
echo "Run: npm run build"
echo "Then: npm run dev"
