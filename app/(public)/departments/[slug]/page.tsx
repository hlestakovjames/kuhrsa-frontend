import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/site/PageHero";

const departments = [
  {
    slug: "academic-affairs",
    name: "Academic Affairs",
    description:
      "Supports academic coordination, student development and academic-focused initiatives within KUHRSA.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    responsibilities: [
      "Support academic initiatives.",
      "Encourage student academic development.",
      "Coordinate academic-focused information and engagement.",
    ],
  },
  {
    slug: "membership-welfare",
    name: "Membership & Welfare",
    description:
      "Supports membership engagement, welfare and participation across the KUHRSA community.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    responsibilities: [
      "Support membership engagement.",
      "Promote member welfare.",
      "Assist members with relevant association services.",
    ],
  },
  {
    slug: "programs-professional-development",
    name: "Programs & Professional Development",
    description:
      "Coordinates programs, professional development and student growth initiatives.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    responsibilities: [
      "Coordinate development programs.",
      "Support career-focused initiatives.",
      "Encourage professional growth and networking.",
    ],
  },
  {
    slug: "communications-publicity",
    name: "Communications & Publicity",
    description:
      "Supports communication, public information, announcements and digital outreach.",
    image: "/images/kuhrsa/general/HR.jpeg",
    responsibilities: [
      "Coordinate public information.",
      "Support announcements and digital communication.",
      "Promote KUHRSA initiatives and activities.",
    ],
  },
  {
    slug: "events-activities",
    name: "Events & Activities",
    description:
      "Coordinates association events, activities and member engagement experiences.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    responsibilities: [
      "Coordinate KUHRSA events.",
      "Support student activities.",
      "Encourage member participation.",
    ],
  },
  {
    slug: "administration",
    name: "Administration",
    description:
      "Supports organizational administration, coordination and internal operations.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    responsibilities: [
      "Support internal coordination.",
      "Maintain organizational processes.",
      "Assist with association administration.",
    ],
  },
];

export function generateStaticParams() {
  return departments.map((department) => ({
    slug: department.slug,
  }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const department = departments.find(
    (item) => item.slug === slug,
  );

  if (!department) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="KUHRSA Department"
        title={department.name}
        description={department.description}
        image={department.image}
        imageAlt={department.name}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image
              src={department.image}
              alt={department.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Responsibilities
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                What this department does.
              </h2>

              <div className="mt-6 space-y-4">
                {department.responsibilities.map((responsibility) => (
                  <div
                    key={responsibility}
                    className="flex gap-3 text-base leading-8 text-black/65"
                  >
                    <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#168DB8]" />
                    <p>{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Department
              </p>

              <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                {department.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Department information can later be connected to the KUHRSA
                administration system for live leadership and contact details.
              </p>

              <Link
                href="/departments/contacts"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-black text-white transition hover:bg-[#CE26A4]"
              >
                Department Contacts
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/departments"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
            >
              Departments Home
            </Link>

            <Link
              href="/departments/directory"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
            >
              Directory
            </Link>

            <Link
              href="/departments/functions"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white"
            >
              Functions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}