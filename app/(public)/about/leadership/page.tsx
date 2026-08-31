import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const leadershipProfiles = [
  {
    name: "Dr. Stellar Anyenga",
    role: "Patron",
    image: "/images/kuhrsa/general/PATRON@HR.jpeg",
    href: "/about/leadership/patron",
    description:
      "Provides guidance, mentorship and institutional support to the association and its members.",
  },
  {
    name: "Christopher Yego, CHRP",
    role: "Vice Patron",
    image: "/images/kuhrsa/general/VICE@HR.jpeg",
    href: "/about/leadership/vice-patron",
    description:
      "Supports the association's leadership, professional development initiatives and engagement with the HR profession.",
  },
];

const studentLeaders = [
  {
    name: "KUHRSA Chairperson",
    role: "Student Leadership",
    image: "/images/kuhrsa/general/students_hrsa.jpeg",
    href: "/about/leadership/chairperson",
  },
  {
    name: "KUHRSA Vice Chairperson",
    role: "Student Leadership",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/about/leadership/vice-chairperson",
  },
  {
    name: "KUHRSA Secretary",
    role: "Student Leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/about/leadership/secretary",
  },
  {
    name: "KUHRSA Organizing Secretary",
    role: "Student Leadership",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/about/leadership/organizing-secretary",
  },
];

const responsibilities = [
  {
    title: "Mentorship",
    text: "Supporting students through guidance, professional insight and encouragement.",
  },
  {
    title: "Representation",
    text: "Promoting the interests and aspirations of KUHRSA members.",
  },
  {
    title: "Development",
    text: "Encouraging academic, professional and personal growth.",
  },
  {
    title: "Continuity",
    text: "Helping maintain institutional knowledge across leadership transitions.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Leadership"
        description="Meet the people who provide guidance, mentorship and leadership support to KUHRSA and its members."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA leadership and students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Leadership at KUHRSA
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Guidance, mentorship and student leadership.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              KUHRSA&apos;s leadership structure brings together experienced
              guidance, professional mentorship and student representation to
              support the association&apos;s mission and objectives.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {leadershipProfiles.map((profile) => (
              <Link
                key={profile.href}
                href={profile.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative aspect-square overflow-hidden bg-[#BFF2F8] md:aspect-auto md:min-h-[330px]">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                      {profile.role}
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-tight">
                      {profile.name}
                    </h3>

                    <p className="mt-5 leading-7 text-black/60">
                      {profile.description}
                    </p>

                    <span className="mt-7 font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Student Leadership
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              The students who drive KUHRSA forward.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Student leadership provides the connection between KUHRSA
              members, association activities and the wider university
              community. The leadership team works together to represent
              members and turn the association&apos;s objectives into
              meaningful action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studentLeaders.map((leader) => (
              <Link
                key={leader.href}
                href={leader.href}
                className="group overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#BFF2F8]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
                    {leader.role}
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-tight">
                    {leader.name}
                  </h3>

                  <span className="mt-4 inline-block text-sm font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Profile →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[2rem] bg-white p-8 ring-1 ring-black/10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#168DB8]">
                Leadership Structure
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Explore how KUHRSA is organized.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60">
                Learn how student leadership connects with the association&apos;s
                wider governance and organizational framework.
              </p>
            </div>

            <Link
              href="/about/organizational-structure"
              className="inline-flex w-fit shrink-0 rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Structure
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Leadership Responsibilities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Supporting a stronger KUHRSA.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilities.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {item.text}
                </p>
              </article>
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
                Understand the KUHRSA governance framework.
              </h2>
            </div>

            <Link
              href="/about/governance"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              View Governance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}