import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const focusAreas = [
  {
    title: "Professional Knowledge",
    text: "Strengthening students' understanding of Human Resource practice and the wider professional environment.",
  },
  {
    title: "Practical Skills",
    text: "Creating opportunities for members to develop practical abilities that complement their academic learning.",
  },
  {
    title: "Continuous Learning",
    text: "Encouraging students to pursue knowledge, professional development and lifelong learning.",
  },
];

const opportunities = [
  "Professional talks and learning sessions",
  "Skills development workshops",
  "HR-related discussions and forums",
  "Academic and professional networking",
  "Exposure to current HR practices",
  "Peer learning and knowledge sharing",
];

export default function AcademicProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Program"
        title="Academic & Professional Development"
        description="Creating opportunities for Human Resource students to strengthen their knowledge, practical abilities and professional readiness."
        image="/images/kuhrsa/general/students_hrsa.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                About the Program
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Learning that extends beyond the classroom.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              <p>
                Academic and Professional Development is designed to
                complement the academic journey of KUHRSA members by creating
                opportunities to connect classroom knowledge with the realities
                of the Human Resource profession.
              </p>

              <p>
                Through learning sessions, professional discussions, workshops
                and knowledge-sharing opportunities, students can develop a
                broader understanding of HR practice while building skills that
                support their future careers.
              </p>

              <p>
                The program also encourages members to remain curious,
                collaborative and committed to continuous personal and
                professional development.
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
              Building knowledge, skills and professional confidence.
            </h2>
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
                Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Ways members can learn and grow.
              </h2>

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
                  src="/images/kuhrsa/general/hrsa.students.jpeg"
                  alt="KUHRSA students learning and engaging together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
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
                Explore more KUHRSA opportunities.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/programs"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633] hover:ring-1 hover:ring-white/30"
              >
                All Programs
              </Link>

              <Link
                href="/events"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}