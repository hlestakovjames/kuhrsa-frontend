import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function PatronPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Leadership"
        title="Dr. Stellar Anyenga"
        description="Patron of the Kisii University Human Resource Students' Association."
        image="/images/kuhrsa/general/PATRON@HR.jpeg"
        imageAlt="Dr. Stellar Anyenga, KUHRSA Patron"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/PATRON@HR.jpeg"
                  alt="Dr. Stellar Anyenga"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  Position
                </p>

                <h2 className="mt-2 text-2xl font-black">Patron</h2>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  KUHRSA Patron
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Profile
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Guidance and institutional support.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  Dr. Stellar Anyenga serves as the Patron of KUHRSA,
                  providing guidance and institutional support to the
                  association and its members.
                </p>

                <p>
                  The patronage role provides an important connection between
                  the student association, its leadership and the wider
                  university environment.
                </p>

                <p>
                  Through mentorship and guidance, the role supports KUHRSA in
                  pursuing its objectives while encouraging students to
                  participate, develop their abilities and engage positively
                  with the Human Resource profession.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Role of the Patron
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Supporting students and the association.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              The Patron provides a source of guidance, mentorship and
              institutional perspective as KUHRSA carries out its activities
              and serves its members.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Guidance",
                text: "Providing direction and counsel to the association leadership.",
              },
              {
                title: "Mentorship",
                text: "Encouraging students in their academic and professional development.",
              },
              {
                title: "Support",
                text: "Supporting constructive initiatives that strengthen KUHRSA.",
              },
              {
                title: "Connection",
                text: "Helping strengthen the relationship between students and the university environment.",
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
                Leadership
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Student leadership matters.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                KUHRSA&apos;s student leaders work alongside the association&apos;s
                patronage and governance structures to serve members and
                advance the association&apos;s objectives.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9B6F2] p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                Continue Exploring
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Meet the KUHRSA leadership.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Explore the wider leadership structure and meet other
                representatives serving the association.
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