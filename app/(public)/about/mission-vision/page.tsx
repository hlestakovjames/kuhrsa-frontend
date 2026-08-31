import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Mission & Vision"
        description="The purpose that guides KUHRSA and the future the association seeks to build."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <article className="rounded-[2rem] bg-[#BFF2F8] p-8 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Developing Talent for the HR Profession
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/70">
                To cultivate and promote the abilities, talents and skills of
                the members in the field of HR profession.
              </p>
            </article>

            {/* Vision */}
            <article className="rounded-[2rem] bg-[#F9B6F2] p-8 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Inspiring Potential, Advancing Our University
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/70">
                We are a model of HR association that inspires all students to
                reach their full potential where their contributions,
                discoveries advance our university.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              What Guides Us
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Turning our purpose into action.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              Our mission and vision provide a foundation for how KUHRSA
              develops members, promotes the HR profession, encourages
              discovery and creates opportunities for students to reach their
              potential.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Talent Development",
                text: "Creating opportunities for members to cultivate their abilities, talents and professional skills.",
              },
              {
                title: "Professional Growth",
                text: "Encouraging students to develop a strong foundation for their future careers in Human Resources.",
              },
              {
                title: "University Advancement",
                text: "Supporting contributions and discoveries that can positively advance the university community.",
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
                Discover what KUHRSA stands for.
              </h2>
            </div>

            <Link
              href="/about/core-values"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              View Core Values
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}