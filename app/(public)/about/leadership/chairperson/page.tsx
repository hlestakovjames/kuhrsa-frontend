import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function ChairpersonPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Student Leadership"
        title="KUHRSA Chairperson"
        description="The student leader responsible for providing direction, representation and coordination across the association."
        image="/images/kuhrsa/general/students_hrsa.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/students_hrsa.jpeg"
                  alt="KUHRSA student leadership"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  Position
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Chairperson
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  KUHRSA Student Leadership
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Leadership Profile
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Leading the student voice of KUHRSA.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  The KUHRSA Chairperson provides overall student leadership
                  and serves as a central representative of the association
                  and its members.
                </p>

                <p>
                  The role brings together the student leadership team,
                  coordinates association priorities and helps ensure that
                  KUHRSA activities remain aligned with the interests and
                  aspirations of its members.
                </p>

                <p>
                  The Chairperson also works with the association&apos;s
                  patronage, university stakeholders and student leaders to
                  encourage meaningful participation and strengthen the HR
                  student community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Role & Responsibilities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Providing direction and representation.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              The Chairperson helps translate the objectives of KUHRSA into
              coordinated student leadership, engagement and action.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Representation",
                text: "Representing KUHRSA members and communicating their interests through appropriate channels.",
              },
              {
                title: "Coordination",
                text: "Coordinating student leadership and helping align association activities with agreed priorities.",
              },
              {
                title: "Leadership",
                text: "Providing direction to the student leadership team and encouraging effective collaboration.",
              },
              {
                title: "Engagement",
                text: "Promoting active participation in academic, professional and association activities.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 ring-1 ring-black/10"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Leadership Focus
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Building a connected HR student community.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                The Chairperson&apos;s leadership should foster collaboration,
                student participation, professional development and a strong
                sense of community among KUHRSA members.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9B6F2] p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                Leadership Perspective
              </p>

              <h2 className="mt-3 text-3xl font-black">
                A voice for members. A link between students and leadership.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                The Chairperson represents the student leadership perspective
                while helping create opportunities for members to learn,
                participate and grow.
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
                Meet the KUHRSA student leadership team.
              </h2>
            </div>

            <Link
              href="/about/leadership"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Back to Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}