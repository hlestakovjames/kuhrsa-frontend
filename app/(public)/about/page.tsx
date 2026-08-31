import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const items = [
  [
    "History",
    "Key milestones and the development of KUHRSA.",
    "/about/history",
  ],
  [
    "Mission & Vision",
    "The direction and purpose of the association.",
    "/about/mission-vision",
  ],
  [
    "Core Values",
    "The principles that guide KUHRSA.",
    "/about/core-values",
  ],
  [
    "Objectives",
    "What KUHRSA is established to achieve.",
    "/about/objectives",
  ],
  [
    "Leadership",
    "Current leadership and office bearers.",
    "/about/leadership",
  ],
  [
    "Governance",
    "Governance, constitution and organizational framework.",
    "/about/governance",
  ],
  [
    "Organizational Structure",
    "How KUHRSA is organized.",
    "/about/organizational-structure",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="The story behind KUHRSA."
        description="Learn about the association, its purpose, history, leadership and the community it represents."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA students and community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Who We Are
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                A student association built around community, leadership and
                opportunity.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  The Kisii University Human Resource Students&apos;
                  Association (KUHRSA) is a student association that brings
                  together students with shared interests in human resource
                  management, professional development, leadership and
                  community engagement.
                </p>

                <p>
                  KUHRSA provides a platform through which students can
                  connect, participate in activities, access opportunities and
                  develop experiences beyond the classroom.
                </p>

                <p>
                  Through its programs, activities, leadership and
                  partnerships, the association seeks to strengthen the
                  student experience while creating meaningful connections
                  between students and the wider professional community.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                KUHRSA at a Glance
              </p>

              <div className="mt-7 grid gap-6">
                <div>
                  <p className="text-3xl font-black text-[#0B2633]">
                    KUHRSA
                  </p>
                  <p className="mt-1 text-sm text-black/55">
                    Kisii University Human Resource Students&apos; Association
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#0B2633]">
                    Students
                  </p>
                  <p className="mt-1 text-sm text-black/55">
                    A community focused on learning, leadership and growth.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#0B2633]">
                    Community
                  </p>
                  <p className="mt-1 text-sm text-black/55">
                    Connecting members through engagement and shared
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Explore KUHRSA
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Learn more about the association.
            </h2>

            <p className="mt-4 leading-7 text-black/65">
              Explore the history, values, leadership and organizational
              framework that shape KUHRSA.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {items.map(([title, text, href], index) => (
              <Link
                key={title}
                href={href}
                className={`rounded-3xl p-6 transition hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "bg-white ring-1 ring-black/10"
                    : index % 3 === 1
                      ? "bg-[#BFF2F8]"
                      : "bg-[#F9B6F2]"
                }`}
              >
                <h2 className="text-xl font-black">{title}</h2>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {text}
                </p>

                <span className="mt-5 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}