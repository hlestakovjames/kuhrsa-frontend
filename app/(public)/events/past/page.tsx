import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const pastEvents = [
  {
    title: "Previous KUHRSA Leadership Activities",
    category: "Leadership",
    period: "Past Event",
    href: "/events/previous-kuhrsa-leadership-activities",
  },
  {
    title: "Previous Professional Development Sessions",
    category: "Professional Development",
    period: "Past Event",
    href: "/events/previous-professional-development",
  },
  {
    title: "Previous Student Networking Sessions",
    category: "Networking",
    period: "Past Event",
    href: "/events/previous-networking-session",
  },
  {
    title: "Previous Academic Dialogues",
    category: "Academic",
    period: "Past Event",
    href: "/events/previous-academic-dialogue",
  },
];

export default function PastEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Past events"
        description="Look back at previous KUHRSA events, experiences and moments from the association community."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Event History
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Previous KUHRSA experiences.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The Events archive can grow into a record of KUHRSA activities,
              milestones and shared experiences over time.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {pastEvents.map((event, index) => (
              <Link
                key={event.href}
                href={event.href}
                className="group flex items-center gap-5 rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {event.category} • {event.period}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {event.title}
                  </h3>
                </div>

                <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                  View →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}