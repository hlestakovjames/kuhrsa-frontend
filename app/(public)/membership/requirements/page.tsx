import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const requirements = [
  {
    number: "01",
    title: "Eligibility",
    description:
      "Applicants should meet the eligibility criteria established by KUHRSA and the relevant university requirements for membership.",
  },
  {
    number: "02",
    title: "Student Information",
    description:
      "Applicants should provide accurate academic and personal information required to establish their membership record.",
  },
  {
    number: "03",
    title: "Valid Contact Details",
    description:
      "A valid phone number and email address should be provided so that KUHRSA can communicate important membership information.",
  },
  {
    number: "04",
    title: "Membership Application",
    description:
      "Applicants should complete the official KUHRSA membership application and provide all requested information.",
  },
  {
    number: "05",
    title: "Supporting Information",
    description:
      "Where required, applicants may need to provide relevant academic or identification information for verification.",
  },
  {
    number: "06",
    title: "Membership Fee",
    description:
      "Where a membership fee applies, the applicant should complete the required payment through the officially approved payment process.",
  },
];

const checklist = [
  "Confirm that you are eligible for KUHRSA membership.",
  "Prepare your required academic and personal information.",
  "Use accurate contact details.",
  "Complete the official membership application.",
  "Provide any required supporting information.",
  "Complete the applicable membership payment.",
];

export default function MembershipRequirementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership requirements"
        description="Understand what you may need before applying for KUHRSA membership and prepare for a smooth registration process."
        image="/images/kuhrsa/general/KISIIHR.jpeg"
        imageAlt="KUHRSA and HR students"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
            Before you apply
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] md:text-4xl">
            Prepare your information and start with confidence.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60">
            Membership requirements help KUHRSA maintain accurate member
            records and ensure that applications can be processed efficiently.
            Specific requirements may be updated as the association&apos;s
            membership policies develop.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((requirement) => (
            <article
              key={requirement.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                {requirement.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-[#0B2633]">
                {requirement.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                {requirement.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#0B2633] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2BB9EC]">
              Quick checklist
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              What to have ready
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Having these items ready can make the registration process
              simpler and faster.
            </p>

            <ul className="mt-7 space-y-4">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-white/80"
                >
                  <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[#F700BA]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-[#BFF2F8] p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Important note
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
              Requirements can change.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
              The requirements presented here provide general guidance for
              prospective members. KUHRSA may introduce additional
              requirements, verification steps or documentation as its
              membership system and policies develop.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
              The official registration process will provide the definitive
              requirements applicable at the time of application.
            </p>

            <Link
              href="/membership/fees"
              className="mt-7 inline-block rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
            >
              View Membership Fees
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#F9B6F2] p-8 md:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                Ready?
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                Begin your KUHRSA membership application.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
                Once you have confirmed your eligibility and prepared the
                required information, you can proceed to the membership
                registration process.
              </p>
            </div>

            <Link
              href="/register"
              className="rounded-full bg-[#F700BA] px-6 py-3 text-center font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Register for Membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}