import Link from "next/link";
import PageHero from "@/components/site/PageHero";

export default function MembershipPage() {
  const items = [
    "Why Join KUHRSA?",
    "Membership Benefits",
    "Eligibility",
    "Membership Categories",
    "How to Join",
    "Membership Requirements",
    "Member Responsibilities",
  ];

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Find your place in KUHRSA."
        description="Discover membership opportunities, benefits, eligibility and how to become part of the KUHRSA community."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students and members"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              href="/membership"
              key={item}
              className="rounded-3xl bg-[#BFF2F8] p-6 transition hover:-translate-y-1"
            >
              <h2 className="text-xl font-black">{item}</h2>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Membership content placeholder.
              </p>

              <span className="mt-5 inline-block font-bold text-[#168DB8]">
                Explore →
              </span>
            </Link>
          ))}
        </div>

        <div
          id="join"
          className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10"
        >
          <h2 className="text-3xl font-black">Ready to join?</h2>

          <p className="mt-3 max-w-2xl text-black/60">
            The join/application process will connect this public site to the
            membership workflow.
          </p>

          <Link
            href="/register"
            className="mt-6 inline-block rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
          >
            Register for Membership
          </Link>
        </div>

        <div className="mt-6 rounded-[2rem] bg-[#F9B6F2] p-8">
          <h2 className="text-3xl font-black">Already approved?</h2>

          <p className="mt-3 text-black/60">
            Access your membership account through the general KUHRSA login
            and activation flow.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
          >
            Member Login
          </Link>
        </div>
      </section>
    </>
  );
}