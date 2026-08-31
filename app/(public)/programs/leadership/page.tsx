import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const focusAreas = [
  {
    title: "Student Leadership",
    text: "Encouraging members to take responsibility, contribute ideas and actively participate in the development of KUHRSA.",
  },
  {
    title: "Leadership Skills",
    text: "Developing communication, decision-making, teamwork, accountability and problem-solving abilities.",
  },
  {
    title: "Personal Growth",
    text: "Helping students build confidence, self-awareness and the ability to positively influence those around them.",
  },
];

const opportunities = [
  "Student leadership opportunities",
  "Leadership workshops and forums",
  "Team-building activities",
  "Public speaking and communication",
  "Peer leadership and collaboration",
  "Student-led initiatives",
];

export default function LeadershipProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Program"
        title="Leadership Development"
        description="Developing confident, responsible and capable student leaders who can make a meaningful contribution to KUHRSA, the university and society."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA students working together"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                About the Program
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Developing leaders who are ready to make a difference.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              <p>
                Leadership Development provides opportunities for KUHRSA
                members to discover and strengthen the leadership abilities
                needed to contribute effectively within the association and
                beyond.
              </p>

              <p>
                The program recognizes that leadership is developed through
                experience, responsibility, collaboration and continuous
                learning. Members are therefore encouraged to take initiative
                and participate actively in the life of the association.
              </p>

              <p>
                Through leadership opportunities and practical experiences,
                students can build the confidence and capabilities needed to
                become responsible professionals and future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Focus Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Leadership begins with participation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/65">
              KUHRSA creates an environment where students can develop
              leadership qualities through meaningful participation,
              collaboration and responsibility.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[2rem] bg-white p-7 ring-1 ring-black/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BFF2F8] text-lg font-black text-[#168DB8]">
                  +
                </div>

                <h3 className="mt-6 text-2xl font-black">{area.title}</h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Leadership Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Find opportunities to lead, serve and grow.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">
                Leadership does not begin with a title. It begins with the
                willingness to participate, take responsibility and help
                others succeed.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {opportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className="rounded-2xl bg-[#F4FAFC] p-4 text-sm font-semibold text-black/70 ring-1 ring-black/5"
                  >
                    <span className="mr-2 text-[#168DB8]">✓</span>
                    {opportunity}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#BFF2F8]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kuhrsa/general/students_hrsa.jpeg"
                  alt="KUHRSA students collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              The KUHRSA Leadership Spirit
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Lead with purpose. Serve with responsibility.
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Every member has an opportunity to contribute. KUHRSA encourages
              students to use their talents, ideas and abilities to strengthen
              the association and positively influence their community.
            </p>

            <Link
              href="/activities"
              className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Explore Activities
            </Link>
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
                Discover more KUHRSA programs.
              </h2>
            </div>

            <Link
              href="/programs"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}