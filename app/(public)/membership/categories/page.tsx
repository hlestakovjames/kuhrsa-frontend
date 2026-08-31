import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    number: "01",
    title: "Student Members",
    description:
      "Students pursuing Human Resource Management and related studies who meet the requirements for membership in KUHRSA.",
    points: [
      "Participate in KUHRSA activities",
      "Access member opportunities and programs",
      "Contribute ideas, talents and skills",
    ],
  },
  {
    number: "02",
    title: "Active Members",
    description:
      "Members who are actively participating in KUHRSA activities, programs, professional development and association initiatives.",
    points: [
      "Participate in association activities",
      "Support KUHRSA programs and initiatives",
      "Take part in member engagement opportunities",
    ],
  },
  {
    number: "03",
    title: "Alumni Members",
    description:
      "Former KUHRSA student members who have completed their studies and wish to maintain a connection with the association and its community.",
    points: [
      "Maintain links with the KUHRSA community",
      "Support current students where appropriate",
      "Share professional experience and insights",
    ],
  },
  {
    number: "04",
    title: "Honorary Members",
    description:
      "Individuals recognized by KUHRSA for distinguished support, contribution or service to the association, HR education or the university community.",
    points: [
      "Recognized for outstanding contribution",
      "Support the association's broader mission",
      "Provide experience, guidance or professional insight",
    ],
  },
];

export default function MembershipCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership categories"
        description="KUHRSA membership can bring together students, alumni and other individuals who contribute to the growth of the association and the Human Resource profession."
        image="/images/kuhrsa/general/students_hrsa.jpeg"
        imageAlt="KUHRSA students together"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            Who can belong?
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            A membership community built around HR development.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            KUHRSA brings together members at different stages of their
            academic and professional journey. Each category supports
            participation, connection and contribution while maintaining the
            association's student-focused purpose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                  {category.number}
                </div>

                <span className="rounded-full bg-[#F4FAFC] px-3 py-1 text-xs font-bold text-[#168DB8]">
                  KUHRSA
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black text-[#0B2633]">
                {category.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                {category.description}
              </p>

              <div className="mt-6 border-t border-black/10 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#0B2633]">
                  Participation
                </p>

                <ul className="mt-4 space-y-3">
                  {category.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-black/60"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F700BA]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#BFF2F8] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Important
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                Membership categories may evolve with KUHRSA.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
                The association may define, revise or introduce membership
                categories in accordance with its constitution, policies and
                organizational needs. Specific eligibility and approval rules
                will be applied through the official membership process.
              </p>
            </div>

            <Link
              href="/membership/requirements"
              className="inline-block rounded-full bg-[#168DB8] px-6 py-3 text-center font-bold text-white transition hover:bg-[#11799F]"
            >
              View Requirements
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/membership/benefits"
            className="rounded-[2rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#CE26A4]">
              Next
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Membership Benefits
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Discover what members can gain through active participation in
              KUHRSA.
            </p>

            <span className="mt-5 inline-block font-bold text-[#CE26A4]">
              Explore benefits →
            </span>
          </Link>

          <Link
            href="/register"
            className="rounded-[2rem] bg-[#0B2633] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#2BB9EC]">
              Ready?
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Apply for Membership
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Begin the KUHRSA membership registration process.
            </p>

            <span className="mt-5 inline-block font-bold text-[#F9B6F2]">
              Register now →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}