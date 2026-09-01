import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredEvents = [
  {
    title: "KUHRSA Leadership Forum",
    date: "Upcoming",
    category: "Leadership",
    location: "Kisii University",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/events/kuhrsa-leadership-forum",
  },
  {
    title: "Professional Development Session",
    date: "Upcoming",
    category: "Professional Development",
    location: "Kisii University",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/events/professional-development-session",
  },
];

const upcomingEvents = [
  {
    title: "KUHRSA Leadership Forum",
    date: "Upcoming",
    category: "Leadership",
    href: "/events/kuhrsa-leadership-forum",
  },
  {
    title: "Professional Development Session",
    date: "Upcoming",
    category: "Professional Development",
    href: "/events/professional-development-session",
  },
  {
    title: "Student Networking Session",
    date: "Upcoming",
    category: "Networking",
    href: "/events/student-networking-session",
  },
  {
    title: "Academic & Career Dialogue",
    date: "Upcoming",
    category: "Academic",
    href: "/events/academic-career-dialogue",
  },
];

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic discussions, learning sessions and events supporting students throughout their university journey.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Career, skills, networking and professional development opportunities for KUHRSA members.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description:
      "Leadership forums, training sessions and opportunities for student leadership development.",
  },
  {
    title: "Networking",
    slug: "networking",
    description:
      "Events designed to help students connect with peers, professionals, alumni and other stakeholders.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Community-focused events, outreach activities and opportunities for meaningful participation.",
  },
  {
    title: "Social",
    slug: "social",
    description:
      "Social events that encourage interaction, belonging and a stronger KUHRSA community.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Events"
        title="Connect, participate and grow together."
        description="Discover upcoming events, professional opportunities, academic sessions and community experiences organized through KUHRSA."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students attending an event"
      />

      {/* Featured Events */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Events
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Events worth looking forward to.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Explore selected KUHRSA events that bring members together for
              learning, leadership, networking and community engagement.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {featuredEvents.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {event.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-black/40">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-black/45">
                    {event.location}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Event →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        id="upcoming"
        className="bg-[#F4FAFC]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Upcoming
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                What&apos;s coming up.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Keep track of opportunities to learn, connect and participate
                in the KUHRSA community.
              </p>
            </div>

            <Link
              href="/events/calendar"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Event Calendar
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <Link
                key={event.href}
                href={event.href}
                className="group rounded-[2rem] bg-white p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                      <span className="text-[#168DB8]">
                        {event.category}
                      </span>

                      <span className="text-black/30">•</span>

                      <span className="text-black/40">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-black">
                      {event.title}
                    </h3>

                    <span className="mt-4 inline-block text-sm font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      View Event →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Event Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find events by interest.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              As the KUHRSA events calendar grows, categories will make it
              easier to discover experiences that match your interests.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/events/category/${category.slug}`}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore Events →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Navigation */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Events
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the Events mini-site.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/events/calendar"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Calendar
              </Link>

              <Link
                href="/events/past"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Past Events
              </Link>

              <Link
                href="/events"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Events Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}