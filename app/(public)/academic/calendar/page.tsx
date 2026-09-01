import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const dates = [
  {
    label: "Academic & Professional Development",
    status: "Current",
    href: "/academic/academic-professional-development",
  },
  {
    label: "Student Academic Support",
    status: "Current",
    href: "/academic/student-academic-support",
  },
  {
    label: "Career Preparation & Academic Growth",
    status: "Current",
    href: "/academic/career-preparation",
  },
];

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Academic calendar"
        description="Keep track of important academic information, milestones and opportunities relevant to the KUHRSA community."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA academic community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 md:p-10">
            <div className="border-b border-black/10 pb-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Important Dates
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Academic schedule
              </h2>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This calendar is structured to accommodate future KUHRSA
                academic notices, deadlines and important student dates.
              </p>
            </div>

            <div className="mt-3 divide-y divide-black/10">
              {dates.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between"
                >
                  <h3 className="text-xl font-black text-[#0B2633]">
                    {item.label}
                  </h3>

                  <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    {item.status} →
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