import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const departments = [
  {
    name: "Academic Affairs",
    slug: "academic-affairs",
    description:
      "Supports academic coordination, student development and academic-focused initiatives.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    name: "Membership & Welfare",
    slug: "membership-welfare",
    description:
      "Supports membership engagement, member welfare and participation.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    name: "Programs & Professional Development",
    slug: "programs-professional-development",
    description:
      "Coordinates programs, professional development and student growth initiatives.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    name: "Communications & Publicity",
    slug: "communications-publicity",
    description:
      "Supports communication, public information, announcements and digital outreach.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  {
    name: "Events & Activities",
    slug: "events-activities",
    description:
      "Coordinates association events, activities and member engagement experiences.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  {
    name: "Administration",
    slug: "administration",
    description:
      "Supports organizational administration, coordination and internal operations.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
];

const departmentAreas = [
  {
    title: "Department Directory",
    description:
      "Browse departments and learn more about their roles and responsibilities.",
    href: "/departments/directory",
  },
  {
    title: "Department Contacts",
    description:
      "Find contact information and appropriate communication channels for departments.",
    href: "/departments/contacts",
  },
  {
    title: "Functions & Responsibilities",
    description:
      "Understand the responsibilities and areas of focus across KUHRSA departments.",
    href: "/departments/functions",
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Departments"
        title="How KUHRSA is organized."
        description="Explore the departments that support KUHRSA programs, membership, academic development, communication and association operations."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student leadership"
      />

      {/* Department Directory */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Department Directory
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Meet the areas behind KUHRSA.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Departments provide focused areas of responsibility that help
              organize the work of the association and support its members.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <Link
                key={department.slug}
                href={`/departments/${department.slug}`}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={department.image}
                    alt={department.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#0B2633]">
                    {department.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {department.description}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Department →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Department Areas */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Department Information
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Understand how departments work.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {departmentAreas.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {area.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Note */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Organizational Structure
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#0B2633] md:text-4xl">
              Departments can grow with KUHRSA.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The public directory is designed to accommodate additional
              departments, updated responsibilities and new contact
              information as the association develops.
            </p>

            <Link
              href="/about/organizational-structure"
              className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Organizational Structure
            </Link>
          </div>
        </div>
      </section>

      {/* Continue */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Departments
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the Departments directory.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/departments/directory"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Directory
              </Link>

              <Link
                href="/departments/contacts"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Contacts
              </Link>

              <Link
                href="/departments/functions"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Functions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}