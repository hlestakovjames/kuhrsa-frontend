import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function VicePatronPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Leadership"
        title="Christopher Yego, CHRP"
        description="Vice Patron of the Kisii University Human Resource Students' Association."
        image="/images/kuhrsa/general/VICE@HR.jpeg"
        imageAlt="Christopher Yego, KUHRSA Vice Patron"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/VICE@HR.jpeg"
                  alt="Christopher Yego, CHRP"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  Position
                </p>

                <h2 className="mt-2 text-2xl font-black">Vice Patron</h2>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  KUHRSA Vice Patron
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Profile
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Professional guidance for future HR leaders.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  Christopher Yego, CHRP, serves as the Vice Patron of KUHRSA,
                  supporting the association&apos;s leadership and its
                  commitment to developing students in the Human Resource
                  profession.
                </p>

                <p>
                  The Vice Patron role provides an additional layer of
                  professional guidance and mentorship, helping connect
                  students with the expectations, opportunities and
                  responsibilities of the HR profession.
                </p>

                <p>
                  Through professional engagement and student support, the
                  role contributes to an environment where KUHRSA members can
                  develop their abilities, talents and skills.
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
              Professional Mentorship
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Connecting students with the HR profession.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              KUHRSA exists not only as a student association, but also as a
              platform through which members can develop professionally. The
              Vice Patron supports this connection through guidance,
              mentorship and professional perspective.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Mentorship",
                text: "Encouraging students to learn from professional experience and develop their potential.",
              },
              {
                title: "Professional Growth",
                text: "Supporting the development of skills relevant to the Human Resource profession.",
              },
              {
                title: "Guidance",
                text: "Providing constructive direction to student leadership and members.",
              },
              {
                title: "Engagement",
                text: "Encouraging meaningful interaction between students and the HR profession.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 ring-1 ring-black/10"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>

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
                KUHRSA & HR
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Preparing students for professional practice.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Through academic engagement, professional development and
                mentorship, KUHRSA provides members with opportunities to
                strengthen their understanding of the Human Resource
                profession.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Continue Exploring
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Meet the KUHRSA leadership.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Return to the leadership page to explore the association&apos;s
                wider leadership structure.
              </p>

              <Link
                href="/about/leadership"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
              >
                Back to Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}