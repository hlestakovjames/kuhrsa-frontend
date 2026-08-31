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
      href: "/membership",
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
  ["Resources", "/resources", "Useful resources for KUHRSA members and students."],
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/membership"
              className="rounded-3xl bg-[#BFF2F8] p-7 transition hover:-translate-y-1"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Membership
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Become part of KUHRSA.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-black/65">
                Learn about membership, registration and the opportunities
                available through the association.
              </p>
              <span className="mt-5 inline-block font-bold text-[#168DB8]">
                Explore Membership →
              </span>
            </Link>

            <Link
              href="/activate-membership"
              className="rounded-3xl bg-[#168DB8] p-7 text-white transition hover:-translate-y-1"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/70">
                Membership Access
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Already registered?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                Activate your membership when the activation period is open.
              </p>
              <span className="mt-5 inline-block font-bold text-white">
                Activate Membership →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
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
              resources and opportunities through one connected public platform.
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
                <p className="mt-3 text-sm leading-6 text-black/65">{text}</p>
                <span className="mt-5 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
