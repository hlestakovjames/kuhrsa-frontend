import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const programs = [
  {
    id: "academic",
    title: "Academic & Professional Development",
    description:
      "Initiatives designed to strengthen students' academic knowledge and develop practical skills relevant to the Human Resource profession.",
    image: "/images/kuhrsa/general/students_hrsa.jpeg",
  },
  {
    id: "career",
    title: "Career Development",
    description:
      "Programs that help members prepare for professional life through career guidance, workplace readiness and exposure to the HR profession.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    id: "leadership",
    title: "Leadership Development",
    description:
      "Opportunities that encourage students to develop leadership abilities, confidence, responsibility and effective communication.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    id: "mentorship",
    title: "Mentorship",
    description:
      "A platform for students to learn from peers, leaders and professionals while receiving guidance throughout their academic and professional journey.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    id: "community",
    title: "Community Engagement",
    description:
      "Initiatives that encourage students to use their knowledge, skills and talents to contribute positively to the university and wider community.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Programs"
        title="Growing students beyond the classroom."
        description="KUHRSA programs create opportunities for members to develop professionally, discover their potential and contribute meaningfully to the university community."
        image="/images/kuhrsa/general/students_hrsa.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Programs that turn participation into growth.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/65">
              KUHRSA provides structured opportunities through which Human
              Resource students can strengthen their abilities, explore
              professional interests, build relationships and prepare for
              life beyond university.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.id}
                id={program.id}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#168DB8]">
                    KUHRSA Program
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {program.description}
                  </p>

                  <Link
                    href={`/programs/${program.id}`}
                    className="mt-6 inline-flex items-center font-bold text-[#168DB8] transition hover:text-[#0B2633]"
                  >
                    Explore program
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Beyond Programs
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Get involved in the KUHRSA community.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black/65">
                Programs work alongside KUHRSA activities, events and academic
                opportunities to give members a complete student experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/activities"
                  className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
                >
                  Explore Activities
                </Link>

                <Link
                  href="/events"
                  className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
                >
                  View Events
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kuhrsa/general/HR.jpeg"
                  alt="KUHRSA students participating in association activities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                KUHRSA
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Discover. Participate. Grow.
              </h2>
            </div>

            <Link
              href="/membership"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}