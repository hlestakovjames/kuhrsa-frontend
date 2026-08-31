import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const focusAreas = [
  {
    title: "Peer Mentorship",
    text: "Creating opportunities for students to learn from one another, share experiences and support each other's academic and professional growth.",
  },
  {
    title: "Professional Guidance",
    text: "Connecting students with experienced leaders and HR professionals who can provide insight into professional development and career progression.",
  },
  {
    title: "Knowledge Sharing",
    text: "Encouraging members to exchange ideas, experiences and practical knowledge that can benefit the wider KUHRSA community.",
  },
];

const opportunities = [
  "Peer-to-peer mentorship",
  "Professional mentorship",
  "Career guidance",
  "Academic support",
  "Experience and knowledge sharing",
  "Mentorship forums and discussions",
];

export default function MentorshipProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Program"
        title="Mentorship"
        description="Connecting students with people, experiences and knowledge that can help them grow academically, professionally and personally."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA students supporting one another"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                About the Program
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Growth is stronger when we grow together.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              <p>
                The KUHRSA Mentorship Program provides a supportive environment
                where students can learn from peers, leaders and professionals
                with different experiences and perspectives.
              </p>

              <p>
                Mentorship encourages members to seek guidance, ask questions,
                share experiences and develop a clearer understanding of their
                academic and professional journey.
              </p>

              <p>
                By creating meaningful connections between students and
                mentors, the program promotes knowledge transfer, confidence,
                accountability and a culture of supporting one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Focus Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Guidance, connection and shared experience.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/65">
              Mentorship brings together different levels of experience so
              that members can learn from one another and make more informed
              decisions about their development.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[2rem] bg-white p-7 ring-1 ring-black/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BFF2F8] text-lg font-black text-[#168DB8]">
                  +
                </div>

                <h3 className="mt-6 text-2xl font-black">{area.title}</h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#BFF2F8]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kuhrsa/general/hrsa.students.jpeg"
                  alt="KUHRSA students learning together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Mentorship Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Learn from experience. Share what you know.
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65">
                Members can participate as mentors, mentees or both, helping
                build a culture where knowledge and experience are continuously
                shared across the KUHRSA community.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {opportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className="rounded-2xl bg-[#F4FAFC] p-4 text-sm font-semibold text-black/70 ring-1 ring-black/5"
                  >
                    <span className="mr-2 text-[#168DB8]">✓</span>
                    {opportunity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              A Culture of Support
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Someone&apos;s experience can become another student&apos;s
              advantage.
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              KUHRSA encourages members to build meaningful relationships,
              support one another and create a community where every student
              has an opportunity to learn and grow.
            </p>

            <Link
              href="/membership"
              className="mt-7 inline-flex rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Join KUHRSA
            </Link>
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
                Discover more KUHRSA programs.
              </h2>
            </div>

            <Link
              href="/programs"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633] hover:ring-1 hover:ring-white/30"
            >
              All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}