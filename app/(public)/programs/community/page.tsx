import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const focusAreas = [
  {
    title: "Community Service",
    text: "Encouraging students to use their knowledge, talents and time to make a positive contribution to the communities around them.",
  },
  {
    title: "Social Responsibility",
    text: "Building awareness of the responsibilities students have toward their university, their communities and society.",
  },
  {
    title: "Student Participation",
    text: "Creating opportunities for members to work together, take initiative and contribute to meaningful community-focused activities.",
  },
];

const opportunities = [
  "Community outreach initiatives",
  "Volunteer opportunities",
  "Social responsibility activities",
  "Student-led community projects",
  "Awareness and educational campaigns",
  "Partnerships with communities and organizations",
];

export default function CommunityProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Program"
        title="Community Engagement"
        description="Empowering students to use their knowledge, skills and talents to contribute positively to the university and wider community."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA students participating in community engagement"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                About the Program
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Learning through service and contribution.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-black/65">
              <p>
                Community Engagement provides KUHRSA members with opportunities
                to connect their academic and professional development with
                meaningful service to others.
              </p>

              <p>
                The program encourages students to recognize that their
                education is not only about personal achievement, but also
                about developing the ability and willingness to contribute to
                the people and communities around them.
              </p>

              <p>
                Through outreach, volunteering and student-led initiatives,
                members can develop practical experience while creating
                positive social impact.
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
              Students making a difference.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/65">
              KUHRSA creates opportunities for students to develop a stronger
              sense of responsibility while contributing their abilities to
              causes and initiatives that matter.
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Engagement Opportunities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Turn your skills into meaningful action.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">
                Members can participate in different forms of community
                engagement depending on their interests, skills and available
                opportunities.
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

            <div className="relative overflow-hidden rounded-[2rem] bg-[#BFF2F8]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kuhrsa/general/students_hrsa.jpeg"
                  alt="KUHRSA students working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Our Community
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Strong students. Stronger communities.
            </h2>

            <p className="mt-5 text-base leading-8 text-black/65">
              Community engagement gives students the opportunity to put their
              abilities into practice, develop empathy and leadership, and
              contribute to positive change.
            </p>

            <Link
              href="/activities"
              className="mt-7 inline-flex rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Explore Activities
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