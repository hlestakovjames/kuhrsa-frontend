import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const activities = [
  {
    title: "Previous Student Mentorship Activities",
    category: "Mentorship",
    href: "/activities/previous-student-mentorship",
  },
  {
    title: "Previous Professional Engagement Activities",
    category: "Professional Development",
    href: "/activities/previous-professional-engagement",
  },
  {
    title: "Previous Academic Support Activities",
    category: "Academic",
    href: "/activities/previous-academic-support",
  },
  {
    title: "Previous Community Engagement Activities",
    category: "Community",
    href: "/activities/previous-community-engagement",
  },
];

export default function PastActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Past activities"
        description="Explore previous KUHRSA initiatives and experiences as the association builds a growing record of participation."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Activity History
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              What KUHRSA has done.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              This archive provides a foundation for preserving the association
              &apos;s activities and experiences over time.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {activities.map((activity, index) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="group flex items-center gap-5 rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {activity.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {activity.title}
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