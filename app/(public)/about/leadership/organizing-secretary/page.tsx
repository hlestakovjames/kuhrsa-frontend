import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function OrganizingSecretaryPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Student Leadership"
        title="KUHRSA Organizing Secretary"
        description="Supporting the planning, coordination and delivery of KUHRSA activities and student engagement initiatives."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/STUDENTS.jpeg"
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
                  Organizing Secretary
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
                Turning KUHRSA ideas into meaningful activities.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  The KUHRSA Organizing Secretary supports the planning and
                  coordination of association activities, helping transform
                  ideas and priorities into well-organized student experiences.
                </p>

                <p>
                  The role contributes to the preparation of events, academic
                  engagements, professional activities and other initiatives
                  that bring KUHRSA members together.
                </p>

                <p>
                  By working closely with the wider student leadership team,
                  the Organizing Secretary helps promote participation,
                  collaboration and a vibrant KUHRSA community.
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
              Creating opportunities for students to connect and participate.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              Activities are an important part of building an active
              association. The Organizing Secretary helps coordinate the
              practical side of turning KUHRSA initiatives into successful
              experiences for members.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Planning",
                text: "Supporting the planning and preparation of KUHRSA activities and initiatives.",
              },
              {
                title: "Coordination",
                text: "Working with student leaders and members to coordinate activities effectively.",
              },
              {
                title: "Participation",
                text: "Encouraging members to participate actively in association programs and events.",
              },
              {
                title: "Execution",
                text: "Helping ensure that planned activities are organized and delivered effectively.",
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
                Building an active student community.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Well-organized activities create opportunities for students to
                learn, collaborate, network and develop beyond the classroom.
                The Organizing Secretary helps make those opportunities
                possible.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#BFF2F8] p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Student Engagement
              </p>

              <h2 className="mt-3 text-3xl font-black">
                From ideas to experiences.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Through planning and collaboration, the Organizing Secretary
                contributes to activities that strengthen relationships among
                members and create a more engaged KUHRSA community.
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