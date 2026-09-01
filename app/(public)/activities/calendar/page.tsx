import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const activities = [
  {
    period: "Ongoing",
    title: "Student Mentorship",
    category: "Mentorship",
    href: "/activities/student-mentorship",
  },
  {
    period: "Ongoing",
    title: "Career & Professional Engagement",
    category: "Professional Development",
    href: "/activities/career-professional-engagement",
  },
  {
    period: "Ongoing",
    title: "Academic Support Initiatives",
    category: "Academic",
    href: "/activities/academic-support-initiatives",
  },
  {
    period: "Ongoing",
    title: "Community Engagement",
    category: "Community",
    href: "/activities/community-engagement",
  },
];

export default function ActivityCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Activity calendar"
        description="Keep track of ongoing and future KUHRSA activity opportunities."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA activity"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 md:p-10">
            <div className="border-b border-black/10 pb-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                KUHRSA Activity Schedule
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Participation calendar
              </h2>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Activity dates and schedules can be expanded here as KUHRSA
                moves to a fully managed activity calendar.
              </p>
            </div>

            <div className="mt-3 divide-y divide-black/10">
              {activities.map((activity) => (
                <Link
                  key={activity.href}
                  href={activity.href}
                  className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {activity.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-[#0B2633]">
                      {activity.title}
                    </h3>
                  </div>

                  <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    {activity.period} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}