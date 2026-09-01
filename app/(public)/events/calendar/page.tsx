import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const calendarEvents = [
  {
    month: "Upcoming",
    title: "KUHRSA Leadership Forum",
    category: "Leadership",
    href: "/events/kuhrsa-leadership-forum",
  },
  {
    month: "Upcoming",
    title: "Professional Development Session",
    category: "Professional Development",
    href: "/events/professional-development-session",
  },
  {
    month: "Upcoming",
    title: "Student Networking Session",
    category: "Networking",
    href: "/events/student-networking-session",
  },
  {
    month: "Upcoming",
    title: "Academic & Career Dialogue",
    category: "Academic",
    href: "/events/academic-career-dialogue",
  },
];

export default function EventCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Event calendar"
        description="Keep track of KUHRSA events and discover opportunities to participate throughout the association calendar."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 md:p-10">
            <div className="flex flex-col gap-3 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  KUHRSA Calendar
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Upcoming schedule
                </h2>
              </div>

              <Link
                href="/events/upcoming"
                className="inline-flex w-fit rounded-full bg-[#168DB8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0B2633]"
              >
                Upcoming Events
              </Link>
            </div>

            <div className="mt-6 divide-y divide-black/10">
              {calendarEvents.map((event) => (
                <Link
                  key={event.href}
                  href={event.href}
                  className="group flex flex-col gap-3 py-6 transition md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {event.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {event.title}
                    </h3>
                  </div>

                  <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    {event.month} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/events/past"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Past Events
            </Link>

            <Link
              href="/events/categories"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}