import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const objectives = [
  {
    title: "Promote HR Knowledge",
    text: "Encourage students to deepen their understanding of Human Resources and its role in organizations and society.",
  },
  {
    title: "Develop Members' Skills",
    text: "Create opportunities for members to cultivate professional, interpersonal and leadership skills.",
  },
  {
    title: "Nurture Talent",
    text: "Identify, encourage and provide platforms for members to develop and showcase their abilities and talents.",
  },
  {
    title: "Encourage Professional Growth",
    text: "Connect students with experiences, opportunities and activities that prepare them for the HR profession.",
  },
  {
    title: "Promote Student Participation",
    text: "Encourage active involvement in KUHRSA activities, initiatives and programs.",
  },
  {
    title: "Strengthen Collaboration",
    text: "Build meaningful relationships among students, the university, HR professionals and other relevant stakeholders.",
  },
  {
    title: "Support Academic Excellence",
    text: "Encourage academic engagement, knowledge sharing and initiatives that contribute to student success.",
  },
  {
    title: "Contribute to University Development",
    text: "Provide opportunities for students to make meaningful contributions and discoveries that advance the university.",
  },
];

export default function ObjectivesPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Our Objectives"
        description="The key areas through which KUHRSA seeks to develop its members, promote the HR profession and contribute to the university community."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              What We Seek to Achieve
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Turning the KUHRSA mission into action.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              KUHRSA&apos;s objectives provide a practical framework for
              developing members, strengthening the HR profession and creating
              meaningful opportunities for students.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective, index) => (
              <article
                key={objective.title}
                className={`rounded-3xl p-7 ${
                  index % 4 === 0
                    ? "bg-[#BFF2F8]"
                    : index % 4 === 1
                      ? "bg-[#F9B6F2]"
                      : index % 4 === 2
                        ? "bg-[#F4FAFC] ring-1 ring-black/10"
                        : "bg-[#168DB8] text-white"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                    index % 4 === 3
                      ? "bg-white text-[#168DB8]"
                      : "bg-[#168DB8] text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {objective.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    index % 4 === 3 ? "text-white/80" : "text-black/60"
                  }`}
                >
                  {objective.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Our Direction
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Developing people. Strengthening the profession.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black/65">
              <p>
                KUHRSA brings together academic development, professional
                preparation, leadership and student engagement as part of a
                connected association experience.
              </p>

              <p>
                Through these objectives, members can find opportunities to
                develop their abilities while contributing to the growth of
                their peers, the HR profession and the wider university
                community.
              </p>
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
                Meet the people leading KUHRSA.
              </h2>
            </div>

            <Link
              href="/about/leadership"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              View Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}