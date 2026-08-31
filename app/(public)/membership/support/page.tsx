import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const supportAreas = [
  {
    number: "01",
    title: "Membership Application",
    description:
      "Get assistance if you have questions about eligibility, registration or the information required during your membership application.",
  },
  {
    number: "02",
    title: "Membership Status",
    description:
      "Contact KUHRSA if you need clarification about your application, approval status or current membership status.",
  },
  {
    number: "03",
    title: "Renewal Assistance",
    description:
      "Get guidance when renewing your membership or when you encounter difficulties during the renewal process.",
  },
  {
    number: "04",
    title: "Payment Support",
    description:
      "Seek clarification about applicable fees, payment confirmation or membership payment records through official channels.",
  },
  {
    number: "05",
    title: "Account Assistance",
    description:
      "Get help with accessing your KUHRSA membership account or resolving account-related issues.",
  },
  {
    number: "06",
    title: "General Member Support",
    description:
      "Ask questions about membership participation, KUHRSA opportunities and other matters related to your membership.",
  },
];

const faqs = [
  {
    question: "How do I become a KUHRSA member?",
    answer:
      "Start by reviewing the membership requirements and then proceed to the official registration process.",
  },
  {
    question: "How do I know whether my membership is active?",
    answer:
      "Your membership status can be confirmed through the official KUHRSA membership process. As the member portal develops, status information can also be displayed within your account.",
  },
  {
    question: "What if I have a problem with my payment?",
    answer:
      "Keep your payment confirmation or reference and contact KUHRSA through an official support channel for assistance.",
  },
  {
    question: "Can my membership information be updated?",
    answer:
      "Yes. Members should keep their information accurate and may update relevant details through the official membership workflow when the functionality is available.",
  },
];

export default function MembershipSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Member support"
        description="Get guidance with membership applications, accounts, renewals, payments and other KUHRSA membership matters."
        image="/images/kuhrsa/general/hrsa.students.jpeg"
        imageAlt="KUHRSA student members"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            We're here to help
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            Support throughout your KUHRSA membership journey.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            Whether you are applying for membership, renewing an existing
            membership or managing your member account, KUHRSA support should
            provide a clear path to getting the help you need.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {area.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#0B2633] p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
                Need assistance?
              </p>

              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Contact KUHRSA through an official channel.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                For membership questions that cannot be resolved through the
                website or member account, contact KUHRSA using the official
                contact information provided by the association.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full bg-[#F700BA] px-6 py-3 text-center font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Contact KUHRSA
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              Common membership questions.
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/10"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-black text-[#0B2633]">
                  <span className="flex items-center justify-between gap-5">
                    {faq.question}

                    <span className="shrink-0 text-xl text-[#168DB8] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Link
            href="/membership"
            className="rounded-[2rem] bg-[#BFF2F8] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#168DB8]">
              Membership
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Membership Home
            </h3>

            <span className="mt-5 inline-block font-bold text-[#168DB8]">
              Explore membership →
            </span>
          </Link>

          <Link
            href="/membership/renewal"
            className="rounded-[2rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#CE26A4]">
              Existing member
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#0B2633]">
              Renew Membership
            </h3>

            <span className="mt-5 inline-block font-bold text-[#CE26A4]">
              View renewal guide →
            </span>
          </Link>

          <Link
            href="/login"
            className="rounded-[2rem] bg-[#0B2633] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#2BB9EC]">
              Member account
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Access Your Account
            </h3>

            <span className="mt-5 inline-block font-bold text-[#F9B6F2]">
              Member login →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}