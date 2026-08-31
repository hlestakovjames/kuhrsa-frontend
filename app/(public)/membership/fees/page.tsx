import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const feePoints = [
  {
    number: "01",
    title: "Official Fee",
    description:
      "Any applicable membership fee will be determined and communicated through the official KUHRSA membership process.",
  },
  {
    number: "02",
    title: "Approved Payment",
    description:
      "Payments should only be made through payment channels officially provided or approved by KUHRSA.",
  },
  {
    number: "03",
    title: "Payment Confirmation",
    description:
      "Members should retain the relevant payment confirmation or reference for membership verification where required.",
  },
  {
    number: "04",
    title: "Transparent Records",
    description:
      "Membership payments should be properly recorded against the relevant member application or membership account.",
  },
];

export default function MembershipFeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership fees"
        description="Information about applicable membership fees, payment procedures and how membership payments will be handled through the official KUHRSA process."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student members"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            Membership costs
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            Clear, official and accountable membership payments.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            Membership fees, where applicable, are part of the official KUHRSA
            membership process. The association can update its fee structure
            based on its approved policies, membership requirements and
            organizational needs.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#0B2633] p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
                Current fee information
              </p>

              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Check the official registration process for the applicable
                amount.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                KUHRSA&apos;s official membership registration workflow will provide
                the applicable fee, payment instructions and confirmation
                requirements at the time of application.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 px-7 py-6 text-center ring-1 ring-white/10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">
                Membership fee
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                Official rate
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Confirm during registration
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {feePoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {point.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#BFF2F8] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Payment guidance
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              Use only official payment channels.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              Members and prospective members should avoid sending membership
              payments to personal or unofficial accounts. Payment
              instructions should come from KUHRSA&apos;s authorized membership
              process.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/60">
              As the KUHRSA membership system develops, payment confirmation
              can be linked directly to the member&apos;s application and account.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F9B6F2] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#CE26A4]">
              Need assistance?
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              Questions about membership payment?
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              If you need clarification about fees, payment confirmation or
              your membership application, contact KUHRSA through the official
              support channels.
            </p>

            <Link
              href="/membership/support"
              className="mt-7 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
            >
              Member Support
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#0B2633]">
              Ready to apply?
            </h2>

            <p className="mt-2 text-sm text-black/60">
              Continue to the official KUHRSA membership registration process.
            </p>
          </div>

          <Link
            href="/register"
            className="rounded-full bg-[#F700BA] px-6 py-3 text-center font-bold text-white transition hover:bg-[#CE26A4]"
          >
            Register for Membership
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/membership/benefits"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Benefits
          </Link>

          <Link
            href="/membership/renewal"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Membership Renewal
          </Link>

          <Link
            href="/membership/support"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Member Support
          </Link>
        </div>
      </section>
    </>
  );
}