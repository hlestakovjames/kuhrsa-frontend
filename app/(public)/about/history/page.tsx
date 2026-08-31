import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Our History"
        description="Discover the journey, milestones and experiences that have shaped KUHRSA over time."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Our Journey
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Building a stronger student association.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              <p>
                KUHRSA&apos;s story is rooted in the desire to create a
                stronger platform for students to connect, participate and
                grow together.
              </p>

              <p>
                Over time, the association has developed through student
                leadership, academic engagement, activities and opportunities
                that bring members together beyond the classroom.
              </p>

              <p>
                Its journey continues to be shaped by the students and
                leaders who contribute their ideas, experiences and commitment
                to the association.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Milestones
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Key moments in the KUHRSA journey.
            </h2>

            <p className="mt-4 leading-7 text-black/65">
              As the association&apos;s historical record is developed, major
              milestones, leadership transitions and notable activities can be
              documented here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Foundation",
                text: "The establishment and early development of the association.",
              },
              {
                title: "Growth",
                text: "The expansion of student participation, activities and leadership.",
              },
              {
                title: "Looking Ahead",
                text: "Building an increasingly connected and active KUHRSA community.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 ring-1 ring-black/10"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>

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