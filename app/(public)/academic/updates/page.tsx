import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const updates = [
  {
    title: "Academic & Professional Development",
    category: "Academic Development",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/academic/academic-professional-development",
  },
  {
    title: "Student Academic Support",
    category: "Academic Support",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/academic/student-academic-support",
  },
  {
    title: "Career Preparation & Academic Growth",
    category: "Career Preparation",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/academic/career-preparation",
  },
];

export default function AcademicUpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title="Academic updates"
        description="Stay informed about academic developments, student support initiatives and opportunities relevant to KUHRSA members."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA academic community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Latest Updates
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Academic information for students.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Explore updates that can help KUHRSA members stay connected to
              academic development, support and preparation opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {updates.map((update) => (
              <Link
                key={update.href}
                href={update.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {update.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {update.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Update →
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