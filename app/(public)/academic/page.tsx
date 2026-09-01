import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredUpdates = [
  {
    title: "Academic & Professional Development",
    category: "Academic Update",
    status: "Current",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/academic/academic-professional-development",
  },
  {
    title: "Student Academic Support",
    category: "Academic Support",
    status: "Current",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/academic/student-academic-support",
  },
  {
    title: "Career Preparation & Academic Growth",
    category: "Opportunities",
    status: "Current",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/academic/career-preparation",
  },
];

const academicAreas = [
  {
    title: "Academic Updates",
    description:
      "Follow important academic information, student-focused updates and developments relevant to KUHRSA members.",
    href: "/academic/updates",
  },
  {
    title: "Opportunities",
    description:
      "Discover scholarships, training, competitions, professional opportunities and other academic growth pathways.",
    href: "/academic/opportunities",
  },
  {
    title: "Academic Resources",
    description:
      "Access useful academic materials, guidance and resources that support student learning and development.",
    href: "/academic/resources",
  },
  {
    title: "Important Dates",
    description:
      "Keep track of academic milestones, deadlines, activities and other dates that matter to students.",
    href: "/academic/calendar",
  },
];

const categories = [
  {
    title: "Academic Support",
    slug: "academic-support",
    description:
      "Resources, guidance and initiatives that support students academically.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Academic and professional growth opportunities for KUHRSA members.",
  },
  {
    title: "Scholarships & Funding",
    slug: "scholarships-funding",
    description:
      "Scholarships, grants and financial support opportunities for students.",
  },
  {
    title: "Training & Certifications",
    slug: "training-certifications",
    description:
      "Training programs, certifications and skill-development opportunities.",
  },
  {
    title: "Research",
    slug: "research",
    description:
      "Research-oriented opportunities, information and student engagement.",
  },
  {
    title: "Career Preparation",
    slug: "career-preparation",
    description:
      "Academic and career preparation resources for the transition beyond university.",
  },
];

export default function AcademicPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Academic"
        title="Learn, develop and prepare for what comes next."
        description="Explore academic updates, opportunities, resources and important information supporting the KUHRSA student community."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students and academic community"
      />

      {/* Featured Academic Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Academic Content
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Academic information worth knowing.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Explore selected academic content designed to keep KUHRSA members
              informed and connected to opportunities for growth.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredUpdates.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {item.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-[#CE26A4]">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Areas */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Academic Hub
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find what you need.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The Academic mini-site brings together key information,
              opportunities and resources in one place.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {academicAreas.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-[2rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0B2633]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {area.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Categories */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Academic Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore by interest.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories give KUHRSA a scalable way to organize academic
              content as the platform grows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/academic/category/${category.slug}`}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Continue */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Academic
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the Academic mini-site.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/academic/updates"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Updates
              </Link>

              <Link
                href="/academic/opportunities"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Opportunities
              </Link>

              <Link
                href="/academic/resources"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}