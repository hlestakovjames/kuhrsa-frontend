import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const leadershipLevels = [
  {
    level: "01",
    title: "Patron",
    description:
      "Provides institutional guidance, mentorship and support to the association.",
    image: "/images/kuhrsa/general/PATRON@HR.jpeg",
    href: "/about/leadership/patron",
  },
  {
    level: "02",
    title: "Vice Patron",
    description:
      "Supports institutional guidance and contributes to the professional development of the association.",
    image: "/images/kuhrsa/general/VICE@HR.jpeg",
    href: "/about/leadership/vice-patron",
  },
  {
    level: "03",
    title: "Student Leadership",
    description:
      "Coordinates student representation, activities, engagement and day-to-day association leadership.",
    image: "/images/kuhrsa/general/students_hrsa.jpeg",
    href: "/about/leadership",
  },
];

const studentLeadership = [
  {
    title: "Chairperson",
    description:
      "Provides overall student leadership and represents the interests of KUHRSA members.",
    href: "/about/leadership/chairperson",
  },
  {
    title: "Vice Chairperson",
    description:
      "Supports the Chairperson and contributes to coordination and member representation.",
    href: "/about/leadership/vice-chairperson",
  },
  {
    title: "Secretary",
    description:
      "Supports communication, documentation and administrative coordination.",
    href: "/about/leadership/secretary",
  },
  {
    title: "Organizing Secretary",
    description:
      "Supports planning and coordination of KUHRSA activities and student engagement.",
    href: "/about/leadership/organizing-secretary",
  },
];

const functionalAreas = [
  "Academic engagement",
  "Professional development",
  "Student activities",
  "Member engagement",
  "Communication",
  "Community participation",
];

export default function OrganizationalStructurePage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Organizational Structure"
        description="An overview of how KUHRSA leadership, student representation and association activities connect."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students and community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Our Structure
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              A structure designed to connect leadership and members.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              KUHRSA&apos;s organizational structure provides a clear
              relationship between institutional guidance, student leadership
              and the wider membership of the association.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {leadershipLevels.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#BFF2F8]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <span className="text-sm font-black text-[#F700BA]">
                    {item.level}
                  </span>

                  <h3 className="mt-3 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Leadership Flow
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              From guidance to student representation.
            </h2>
          </div>

          <div className="mt-12">
            <div className="flex flex-col items-center">
              <div className="rounded-[2rem] bg-[#0B2633] px-10 py-7 text-center text-white shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                  Institutional Guidance
                </p>

                <h3 className="mt-2 text-2xl font-black">Patron</h3>
              </div>

              <div className="h-12 w-px bg-[#168DB8]" />

              <div className="rounded-[2rem] bg-[#168DB8] px-10 py-7 text-center text-white shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                  Supporting Guidance
                </p>

                <h3 className="mt-2 text-2xl font-black">Vice Patron</h3>
              </div>

              <div className="h-12 w-px bg-[#168DB8]" />

              <div className="rounded-[2rem] bg-[#F700BA] px-10 py-7 text-center text-white shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                  Student Representation
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Student Leadership
                </h3>
              </div>

              <div className="h-12 w-px bg-[#168DB8]" />

              <div className="w-full rounded-[2rem] bg-white p-7 text-center ring-1 ring-black/10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  The Wider Association
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  KUHRSA Members
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-black/60">
                  Members participate in academic, professional, social and
                  association activities while contributing to the continued
                  growth of KUHRSA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Student Leadership
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                The team responsible for student representation.
              </h2>

              <p className="mt-5 leading-7 text-black/65">
                Student leaders work together to represent members, coordinate
                activities and support the objectives of the association.
              </p>

              <Link
                href="/about/leadership"
                className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
              >
                Meet the Leadership →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {studentLeadership.map((leader, index) => (
                <Link
                  key={leader.href}
                  href={leader.href}
                  className="group rounded-3xl bg-white p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-black text-[#F700BA]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-xl font-black">
                    {leader.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {leader.description}
                  </p>

                  <span className="mt-4 inline-block text-sm font-bold text-[#168DB8] transition group-hover:translate-x-1">
                    View Profile →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Functional Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Structure that supports the KUHRSA mission.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              Across its leadership and membership structure, KUHRSA supports
              activities and initiatives that contribute to student growth and
              professional development.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {functionalAreas.map((area, index) => (
              <div
                key={area}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-xl font-black">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Continue Exploring
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore KUHRSA governance.
              </h2>
            </div>

            <Link
              href="/about/governance"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              View Governance →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}