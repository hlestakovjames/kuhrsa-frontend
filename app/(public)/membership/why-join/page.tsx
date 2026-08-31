import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const reasons = [
  {
    title: "Grow Your HR Skills",
    description:
      "Develop practical knowledge and professional skills that complement your academic training in Human Resource Management.",
  },
  {
    title: "Build Professional Connections",
    description:
      "Connect with fellow HR students, university stakeholders, professionals and other members who share an interest in the HR profession.",
  },
  {
    title: "Discover Opportunities",
    description:
      "Stay connected to opportunities for learning, leadership, mentorship, career development and professional exposure.",
  },
  {
    title: "Develop Leadership",
    description:
      "Take part in initiatives that encourage responsibility, teamwork, communication and leadership among HR students.",
  },
  {
    title: "Share Ideas and Talents",
    description:
      "Use your abilities, talents and skills to contribute to KUHRSA activities and help create a stronger student community.",
  },
  {
    title: "Contribute to the University",
    description:
      "Participate in activities and initiatives whose contributions, ideas and discoveries can positively advance the university community.",
  },
];

export default function WhyJoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Why join KUHRSA?"
        description="KUHRSA provides a platform for Human Resource students to develop their abilities, build meaningful connections and prepare for a fulfilling professional journey."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA students together"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            More than membership
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            A community for growth, leadership and professional development.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            KUHRSA brings students together around a shared interest in Human
            Resource Management and professional development. Membership
            creates opportunities to learn, participate, lead and contribute
            while building experiences that extend beyond the classroom.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#0B2633]">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
                Your KUHRSA journey
              </p>

              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Learn. Participate. Lead. Contribute.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Whether you are looking to strengthen your HR knowledge,
                discover new opportunities, develop leadership experience or
                contribute your talents, KUHRSA gives you a platform to take
                an active role in the student HR community.
              </p>

              <Link
                href="/register"
                className="mt-7 inline-block rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Join KUHRSA
              </Link>
            </div>

            <div className="flex items-center justify-center bg-[#168DB8] p-10">
              <div className="max-w-xs text-center">
                <p className="text-5xl font-black text-white">KUHRSA</p>

                <p className="mt-4 text-sm font-semibold leading-6 text-white/80">
                  Connecting HR students through opportunity, participation
                  and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/membership/categories"
            className="rounded-[2rem] bg-[#BFF2F8] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]">
              Next
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Membership Categories
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Explore the membership categories available within KUHRSA.
            </p>

            <span className="mt-5 inline-block font-bold text-[#168DB8]">
              Explore categories →
            </span>
          </Link>

          <Link
            href="/membership/benefits"
            className="rounded-[2rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#CE26A4]">
              Explore
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Membership Benefits
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              See the practical and professional benefits of becoming a
              KUHRSA member.
            </p>

            <span className="mt-5 inline-block font-bold text-[#CE26A4]">
              View benefits →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}