import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const functions = [
  {
    title: "Academic Affairs",
    responsibilities: [
      "Support academic initiatives.",
      "Encourage student academic development.",
      "Coordinate academic-focused information and engagement.",
    ],
  },
  {
    title: "Membership & Welfare",
    responsibilities: [
      "Support membership engagement.",
      "Promote member welfare.",
      "Assist members with relevant association services.",
    ],
  },
  {
    title: "Programs & Professional Development",
    responsibilities: [
      "Coordinate development programs.",
      "Support career-focused initiatives.",
      "Encourage professional growth and networking.",
    ],
  },
  {
    title: "Communications & Publicity",
    responsibilities: [
      "Coordinate public information.",
      "Support announcements and digital communication.",
      "Promote KUHRSA initiatives and activities.",
    ],
  },
  {
    title: "Events & Activities",
    responsibilities: [
      "Coordinate KUHRSA events.",
      "Support student activities.",
      "Encourage member participation.",
    ],
  },
  {
    title: "Administration",
    responsibilities: [
      "Support internal coordination.",
      "Maintain organizational processes.",
      "Assist with association administration.",
    ],
  },
];

export default function DepartmentFunctionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Functions & responsibilities"
        description="Understand the main areas of responsibility assigned across KUHRSA departments."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA academic community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {functions.map((department, index) => (
              <div
                key={department.title}
                className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {department.title}
                </h2>

                <div className="mt-5 space-y-3">
                  {department.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="flex gap-3 text-sm leading-7 text-black/60"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#168DB8]" />
                      <p>{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/about/organizational-structure"
              className="inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Organizational Structure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}