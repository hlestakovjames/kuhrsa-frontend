import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const benefits = [
  {
    number: "01",
    title: "Professional Development",
    description:
      "Gain opportunities to strengthen your understanding of Human Resource Management and develop skills that support your future career.",
  },
  {
    number: "02",
    title: "Learning Opportunities",
    description:
      "Participate in talks, workshops, forums, training sessions and other initiatives designed to complement classroom learning.",
  },
  {
    number: "03",
    title: "Networking",
    description:
      "Build meaningful connections with fellow students, HR professionals, alumni and other members of the wider KUHRSA community.",
  },
  {
    number: "04",
    title: "Leadership Experience",
    description:
      "Develop leadership, teamwork, communication and organizational skills through active participation in KUHRSA initiatives.",
  },
  {
    number: "05",
    title: "Career Exposure",
    description:
      "Discover opportunities that can broaden your understanding of the HR profession and help you prepare for the workplace.",
  },
  {
    number: "06",
    title: "Community Participation",
    description:
      "Contribute your talents, ideas and abilities to activities that strengthen the KUHRSA community and support the university.",
  },
  {
    number: "07",
    title: "Mentorship & Guidance",
    description:
      "Benefit from opportunities to learn from experienced students, alumni, professionals and other members of the HR community.",
  },
  {
    number: "08",
    title: "A Stronger Student Voice",
    description:
      "Be part of a collective platform through which HR students can share ideas, participate in initiatives and contribute to positive change.",
  },
];

export default function MembershipBenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership benefits"
        description="KUHRSA membership creates opportunities to learn, connect, lead and contribute while developing experiences that extend beyond the classroom."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student members"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            What you gain
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            Membership is an opportunity to grow with others.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            KUHRSA membership is designed to complement your academic journey
            by creating opportunities for professional development, leadership,
            networking and meaningful participation in the HR student
            community.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {benefit.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#0B2633]">
          <div className="grid lg:grid-cols-[1fr_0.65fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
                Active participation
              </p>

              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                The more you participate, the more you gain.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Membership provides the platform, but your participation turns
                that platform into experience. Take part in programs,
                activities, leadership opportunities and professional
                initiatives to make the most of your KUHRSA journey.
              </p>

              <Link
                href="/programs"
                className="mt-7 inline-block rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Explore KUHRSA Programs
              </Link>
            </div>

            <div className="flex items-center justify-center bg-[#168DB8] p-10">
              <div className="text-center">
                <p className="text-5xl font-black text-white">LEARN</p>
                <p className="mt-1 text-3xl font-black text-[#BFF2F8]">
                  CONNECT
                </p>
                <p className="mt-1 text-4xl font-black text-[#F9B6F2]">
                  LEAD
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/membership/requirements"
            className="rounded-[2rem] bg-[#BFF2F8] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]">
              Next
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Membership Requirements
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Find out what you need before starting your membership
              application.
            </p>

            <span className="mt-5 inline-block font-bold text-[#168DB8]">
              View requirements →
            </span>
          </Link>

          <Link
            href="/register"
            className="rounded-[2rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#CE26A4]">
              Ready to join?
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Become a KUHRSA Member
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Start your membership registration and become part of the
              KUHRSA community.
            </p>

            <span className="mt-5 inline-block font-bold text-[#CE26A4]">
              Register now →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}