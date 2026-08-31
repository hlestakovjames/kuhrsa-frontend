import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const steps = [
  {
    number: "01",
    title: "Check Your Membership",
    description:
      "Confirm your current membership status and ensure that your KUHRSA member information is accurate.",
  },
  {
    number: "02",
    title: "Start Renewal",
    description:
      "Use the official KUHRSA membership workflow to initiate your renewal when your membership period approaches its end.",
  },
  {
    number: "03",
    title: "Confirm Your Details",
    description:
      "Review your personal, academic and contact information and update any details that may have changed.",
  },
  {
    number: "04",
    title: "Complete Payment",
    description:
      "Where a renewal fee applies, complete payment through the officially approved KUHRSA payment channel.",
  },
  {
    number: "05",
    title: "Receive Confirmation",
    description:
      "Your renewal should be recorded against your membership account once the required verification and payment steps are completed.",
  },
];

const reminders = [
  "Keep your KUHRSA account information up to date.",
  "Renew through official KUHRSA channels.",
  "Keep your payment confirmation where applicable.",
  "Check your membership status after renewal.",
];

export default function MembershipRenewalPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership renewal"
        description="Keep your KUHRSA membership active by following the official renewal process and maintaining accurate member information."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            Stay connected
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            Keep your KUHRSA membership active.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            Renewal allows eligible members to maintain their connection with
            KUHRSA and continue participating in association opportunities.
            The exact renewal period, fee and requirements will depend on the
            official membership policies in place at the time.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#0B2633] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
              Renewal reminders
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              A few things to remember.
            </h2>

            <ul className="mt-7 space-y-4">
              {reminders.map((reminder) => (
                <li
                  key={reminder}
                  className="flex gap-3 text-sm leading-6 text-white/75"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F700BA]" />
                  <span>{reminder}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-[#BFF2F8] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Membership status
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              Your account will become the centre of membership management.
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              As the KUHRSA membership platform develops, members will be able
              to use their accounts to view membership information, renewal
              status, payment records and other relevant details.
            </p>

            <Link
              href="/login"
              className="mt-7 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
            >
              Member Login
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#F9B6F2] p-8 md:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                Need help?
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                Having trouble with your membership?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
                If you have questions about your membership status, renewal,
                payment or account, contact KUHRSA for assistance.
              </p>
            </div>

            <Link
              href="/membership/support"
              className="rounded-full bg-[#F700BA] px-6 py-3 text-center font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Member Support
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/membership/fees"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Membership Fees
          </Link>

          <Link
            href="/membership/requirements"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Requirements
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