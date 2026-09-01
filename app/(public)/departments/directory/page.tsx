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

export default function DepartmentDirectoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Department directory"
        description="Explore the departments that support KUHRSA's programs, membership, academic development, communication and operations."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student leadership"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="text-2xl font-black text-[#0B2633]">
                    {department.name}
                  </h2>

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
    </>
  );
}