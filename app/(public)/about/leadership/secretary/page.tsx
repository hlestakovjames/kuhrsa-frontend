import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function SecretaryPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Student Leadership"
        title="KUHRSA Secretary"
        description="Supporting effective communication, coordination and organizational continuity across the association."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kuhrsa/general/STD@HRSA.jpeg"
                  alt="KUHRSA student leadership"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  Position
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Secretary
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  KUHRSA Student Leadership
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Leadership Profile
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Keeping KUHRSA connected and organized.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                <p>
                  The KUHRSA Secretary supports the smooth administration and
                  communication of the association, helping ensure that
                  important information reaches student leaders and members
                  effectively.
                </p>

                <p>
                  The role contributes to the organization of meetings,
                  documentation, correspondence and other administrative
                  activities that help the association operate consistently.
                </p>

                <p>
                  Through accurate communication and proper documentation, the
                  Secretary helps preserve institutional knowledge and
                  strengthen continuity within KUHRSA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Role & Responsibilities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Supporting effective association administration.
            </h2>

            <p className="mt-5 leading-7 text-black/65">
              The Secretary provides an important administrative link between
              student leadership, members and the association&apos;s wider
              activities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Documentation",
                text: "Maintaining appropriate records and documentation of association activities and decisions.",
              },
              {
                title: "Communication",
                text: "Helping distribute important information and updates to student leaders and members.",
              },
              {
                title: "Meetings",
                text: "Supporting the preparation, coordination and documentation of association meetings.",
              },
              {
                title: "Continuity",
                text: "Helping preserve organizational knowledge and maintain administrative consistency.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 ring-1 ring-black/10"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {item.title}
                </h3>

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
                Leadership Focus
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Clear communication and reliable administration.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Strong administration helps student leadership remain
                coordinated, accountable and connected. The Secretary plays a
                central role in maintaining that foundation.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F9B6F2] p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                Member Experience
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Making information easier to access.
              </h2>

              <p className="mt-4 leading-7 text-black/60">
                Effective communication enables members to stay informed about
                meetings, activities, opportunities and important developments
                within KUHRSA.
              </p>
            </div>
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
                Meet the KUHRSA student leadership team.
              </h2>
            </div>

            <Link
              href="/about/leadership"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Back to Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}