import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const contacts = [
  {
    department: "Academic Affairs",
    purpose: "Academic matters and student development.",
  },
  {
    department: "Membership & Welfare",
    purpose: "Membership, welfare and member support.",
  },
  {
    department: "Programs & Professional Development",
    purpose: "Programs, career and professional development.",
  },
  {
    department: "Communications & Publicity",
    purpose: "Public information, communication and digital outreach.",
  },
  {
    department: "Events & Activities",
    purpose: "Events, activities and participation.",
  },
  {
    department: "Administration",
    purpose: "Association coordination and administration.",
  },
];

export default function DepartmentContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Department contacts"
        description="Find the appropriate KUHRSA department for different areas of support and communication."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <Link
                key={contact.department}
                href={`/departments/${[
                  "academic-affairs",
                  "membership-welfare",
                  "programs-professional-development",
                  "communications-publicity",
                  "events-activities",
                  "administration",
                ][index]}`}
                className="group flex flex-col gap-4 rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-black text-[#0B2633]">
                    {contact.department}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-black/60">
                    {contact.purpose}
                  </p>
                </div>

                <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                  View →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#BFF2F8] p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Need help?
            </p>

            <h2 className="mt-3 text-2xl font-black text-[#0B2633]">
              Not sure which department to contact?
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Start with the KUHRSA contact page and the association can direct
              your enquiry to the appropriate area.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Contact KUHRSA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}