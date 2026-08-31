import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function ViceChairpersonPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Student Leadership"
        title="KUHRSA Vice Chairperson"
        description="Supporting the Chairperson and strengthening coordination, representation and member engagement across the association."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/hrsa.students.jpeg"
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
                  Vice Chairperson
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
                Supporting leadership and strengthening member engagement.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  The KUHRSA Vice Chairperson supports the Chairperson in
                  providing effective student leadership and representing the
                  interests of association members.
                </p>

                <p>
                  The role contributes to the coordination of student
                  activities, leadership initiatives and member engagement,
                  helping ensure that KUHRSA remains an active and connected
                  student association.
                </p>

                <p>
                  The Vice Chairperson also provides continuity and additional
                  leadership capacity, working collaboratively with other
                  student leaders to advance the association&apos;s objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9B6F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
              Role & Responsibilities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Strengthening the student leadership team.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              The Vice Chairperson works closely with the Chairperson and
              fellow student leaders to maintain effective coordination,
              communication and participation across KUHRSA.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Support",
                text: "Supporting the Chairperson in carrying out student leadership responsibilities.",
              },
              {
                title: "Coordination",
                text: "Helping coordinate association initiatives, activities and student leadership priorities.",
              },
              {
                title: "Representation",
                text: "Promoting the interests and participation of KUHRSA members.",
              },
              {
                title: "Continuity",
                text: "Providing additional leadership capacity and supporting continuity within the association.",
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
                Collaboration that keeps KUHRSA moving.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Effective student leadership depends on collaboration. The
                Vice Chairperson helps connect leadership priorities with the
                needs, ideas and participation of KUHRSA members.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Student Community
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Encouraging students to participate.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Through collaboration and engagement, the Vice Chairperson
                contributes to an environment where students can participate
                actively in academic, professional and association
                activities.
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