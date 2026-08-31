import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const values = [
  {
    title: "Integrity",
    text: "We promote honesty, accountability and responsible leadership in all our activities.",
  },
  {
    title: "Inclusivity",
    text: "We value every member and strive to create a community where students can participate and belong.",
  },
  {
    title: "Leadership",
    text: "We encourage students to develop leadership skills and take responsibility for positive change.",
  },
  {
    title: "Excellence",
    text: "We encourage high standards in academic engagement, leadership and association activities.",
  },
  {
    title: "Collaboration",
    text: "We believe that stronger outcomes come from students, leaders and partners working together.",
  },
  {
    title: "Service",
    text: "We encourage meaningful contribution to the student community and the wider society.",
  },
];

export default function CoreValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="About KUHRSA"
        title="Our Core Values"
        description="The principles that shape how KUHRSA serves, represents and connects its student community."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student community"
      />
      

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              What We Stand For
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Principles that guide KUHRSA.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              Our values provide a common foundation for the way we engage
              students, approach leadership, organize activities and build a
              stronger association.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`rounded-3xl p-7 ${
                  index % 3 === 0
                    ? "bg-[#BFF2F8]"
                    : index % 3 === 1
                      ? "bg-[#F9B6F2]"
                      : "bg-[#F4FAFC] ring-1 ring-black/10"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#168DB8] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-2xl font-black">{value.title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {value.text}
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
                See what KUHRSA seeks to achieve.
              </h2>
            </div>

            <Link
              href="/about/objectives"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              View Objectives
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}