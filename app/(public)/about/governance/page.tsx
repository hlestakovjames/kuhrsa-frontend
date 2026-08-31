import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const governanceAreas = [
  {
    title: "Constitution",
    description:
      "The constitutional framework that establishes KUHRSA, its purpose, leadership and responsibilities.",
  },
  {
    title: "Leadership",
    description:
      "A structured leadership system that provides direction, representation and accountability.",
  },
  {
    title: "Membership",
    description:
      "A membership framework that defines participation, responsibilities and the relationship between members and the association.",
  },
  {
    title: "Accountability",
    description:
      "Transparent decision-making and responsible management of association activities and resources.",
  },
];

const principles = [
  {
    number: "01",
    title: "Transparency",
    text: "Promoting openness and clarity in association decisions, activities and communication.",
  },
  {
    number: "02",
    title: "Accountability",
    text: "Encouraging leaders and members to take responsibility for their roles and commitments.",
  },
  {
    number: "03",
    title: "Representation",
    text: "Ensuring that the interests and aspirations of KUHRSA members are appropriately represented.",
  },
  {
    number: "04",
    title: "Participation",
    text: "Creating opportunities for members to contribute to the direction and activities of the association.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Governance"
        description="The framework through which KUHRSA is guided, organized and held accountable to its members."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#BFF2F8]">
              <Image
                src="/images/kuhrsa/general/hrsa.students.jpeg"
                alt="KUHRSA students"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Governance Framework
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Building a responsible and organized association.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  KUHRSA&apos;s governance framework provides the structure
                  through which the association operates, makes decisions and
                  serves its members.
                </p>

                <p>
                  It brings together constitutional principles, leadership
                  responsibilities, membership participation and appropriate
                  accountability mechanisms.
                </p>

                <p>
                  Good governance helps ensure that the association remains
                  focused on its objectives while creating an environment where
                  members can participate, contribute and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Governance Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              The pillars that support KUHRSA.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              KUHRSA governance connects several areas of association life to
              create a clear and effective organizational framework.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {governanceAreas.map((area, index) => (
              <article
                key={area.title}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-2xl font-black">{area.title}</h3>

                <p className="mt-3 max-w-xl leading-7 text-black/60">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Governance in Practice
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Principles that guide association leadership.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-black/65">
                Governance is not only about structures and rules. It is also
                about how leaders and members conduct themselves while working
                toward the objectives of the association.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#168DB8]">
                KUHRSA
              </p>

              <p className="mt-4 text-2xl font-black leading-9">
                A student association built around participation,
                responsibility and professional growth.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl bg-white p-7 ring-1 ring-black/10"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#0B2633] p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                  Organizational Framework
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  See how KUHRSA is structured.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/65">
                  Explore the relationship between KUHRSA leadership,
                  departments and the wider organizational structure of the
                  association.
                </p>
              </div>

              <Link
                href="/about/organizational-structure"
                className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                View Structure →
              </Link>
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
                Learn more about KUHRSA.
              </h2>
            </div>

            <Link
              href="/about"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Back to About
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}