import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const events = [
  {
    title: "KUHRSA Leadership Forum",
    category: "Leadership",
    date: "Upcoming",
    location: "Kisii University",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/events/kuhrsa-leadership-forum",
  },
  {
    title: "Professional Development Session",
    category: "Professional Development",
    date: "Upcoming",
    location: "Kisii University",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/events/professional-development-session",
  },
  {
    title: "Student Networking Session",
    category: "Networking",
    date: "Upcoming",
    location: "Kisii University",
    image: "/images/kuhrsa/general/HR.jpeg",
    href: "/events/student-networking-session",
  },
  {
    title: "Academic & Career Dialogue",
    category: "Academic",
    date: "Upcoming",
    location: "Kisii University",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/events/academic-career-dialogue",
  },
];

export default function UpcomingEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events"
        description="Discover upcoming KUHRSA events and find opportunities to learn, connect and participate."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Coming Up
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Join the next KUHRSA experiences.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Upcoming events give members opportunities to engage with
              academic, professional, leadership, networking and community
              activities.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {events.map((event) => (
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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

                  <h3 className="mt-3 text-2xl font-black">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-black/45">
                    {event.location}
                  </p>

                  <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Event →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/events/calendar"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Event Calendar
            </Link>

            <Link
              href="/events/categories"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Event Categories
            </Link>

            <Link
              href="/events"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
            >
              Events Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}