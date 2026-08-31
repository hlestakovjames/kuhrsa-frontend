import Link from "next/link";
import HeroSlider, { type HeroSlide } from "@/components/site/HeroSlider";

const heroSlides: HeroSlide[] = [
  {
    image: "/images/kuhrsa/general/HR.jpeg",
    eyebrow: "KUHRSA",
    title: "Connecting students, leaders and opportunities.",
    description:
      "A student association built around community, engagement and growth.",
    cta: {
      label: "Explore KUHRSA",
      href: "/about",
    },
  },
  {
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    eyebrow: "Our Community",
    title: "Together in learning and leadership.",
    description:
      "Discover the people and community that make KUHRSA what it is.",
    cta: {
      label: "About KUHRSA",
      href: "/about",
    },
  },
  {
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    eyebrow: "Membership",
    title: "Be part of the KUHRSA community.",
    description:
      "Connect with fellow students and take part in the association.",
    cta: {
      label: "Register",
      href: "/register",
    },
  },
  {
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    eyebrow: "Activities",
    title: "Stay connected and involved.",
    description:
      "Follow KUHRSA activities, events and opportunities throughout the year.",
    cta: {
      label: "View Activities",
      href: "/activities",
    },
  },
  {
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    eyebrow: "KUHRSA Community",
    title: "Your association. Your community.",
    description:
      "Find information, opportunities and ways to participate.",
    cta: {
      label: "View Events",
      href: "/events",
    },
  },
];

const cards = [
  ["Latest News", "/news", "Official KUHRSA stories and developments."],
  ["Announcements", "/announcements", "Important notices and updates."],
  ["Events", "/events", "Upcoming and past KUHRSA events."],
  ["Activities", "/activities", "Programs, initiatives and ongoing work."],
  ["Academic", "/academic", "Academic updates, opportunities and support."],
  [
    "Resources",
    "/resources",
    "Useful resources for KUHRSA members and students.",
  ],
];

const quickLinks = [
  ["Announcements", "/announcements"],
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      {/* Membership */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl bg-[#BFF2F8] p-7 lg:p-9">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Membership
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Become part of KUHRSA.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65">
                Learn about membership, registration and the opportunities
                available through the association.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="rounded-full bg-[#168DB8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#11799D]"
                >
                  Register
                </Link>

                <Link
                  href="/membership"
                  className="rounded-full border-2 border-[#168DB8] px-5 py-3 text-sm font-bold text-[#168DB8] transition hover:bg-white"
                >
                  Learn About Membership
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0B2633] p-7 text-white lg:p-9">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
                Member Access
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Already a member?
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Access your member account or activate your membership from
                the KUHRSA access page.
              </p>

              <Link
                href="/login"
                className="mt-6 inline-flex rounded-full bg-[#F700BA] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Member Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-y border-black/5 bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Quick Links
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight">
                Explore KUHRSA
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B2633] transition hover:border-[#168DB8] hover:text-[#168DB8]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              KUHRSA
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              One association, many ways to connect.
            </h2>

            <p className="mt-4 leading-7 text-black/65">
              Explore KUHRSA news, events, activities, academic information,
              resources and opportunities through one connected public
              platform.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(([title, href, text], index) => (
              <Link
                key={href}
                href={href}
                className={`rounded-3xl p-7 transition hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "bg-white ring-1 ring-black/10"
                    : index % 3 === 1
                      ? "bg-[#BFF2F8]"
                      : "bg-[#F9B6F2]"
                }`}
              >
                <h3 className="text-2xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/65">
                  {text}
                </p>

                <span className="mt-5 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                Connect with KUHRSA
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Have something to ask or explore?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                Find your way to the right KUHRSA destination or get in touch
                with the association.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Contact KUHRSA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}