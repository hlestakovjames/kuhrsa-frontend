import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  "academic-support": {
    title: "Academic Support",
    description:
      "Guidance, resources and initiatives supporting students academically.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  "professional-development": {
    title: "Professional Development",
    description:
      "Academic and professional growth opportunities for KUHRSA members.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  "scholarships-funding": {
    title: "Scholarships & Funding",
    description:
      "Scholarship, grant and financial-support opportunities for students.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  "training-certifications": {
    title: "Training & Certifications",
    description:
      "Training, certifications and skills-development opportunities.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  research: {
    title: "Research",
    description:
      "Research opportunities, information and academic engagement.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  "career-preparation": {
    title: "Career Preparation",
    description:
      "Academic and career resources supporting the transition beyond university.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
};

const updates = [
  {
    title: "Academic & Professional Development",
    slug: "academic-professional-development",
    category: "professional-development",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    title: "Student Academic Support",
    slug: "student-academic-support",
    category: "academic-support",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Career Preparation & Academic Growth",
    slug: "career-preparation",
    category: "career-preparation",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function AcademicCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category =
    categoryData[slug as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  const categoryUpdates = updates.filter(
    (update) => update.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Academic Category"
        title={category.title}
        description={category.description}
        image={category.image}
        imageAlt={category.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Category Content
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {category.title}.
              </h2>
            </div>

            <Link
              href="/academic/categories"
              className="inline-flex w-fit rounded-full bg-[#BFF2F8] px-6 py-3 font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
            >
              All Categories
            </Link>
          </div>

          {categoryUpdates.length > 0 ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {categoryUpdates.map((update) => (
                <Link
                  key={update.slug}
                  href={`/academic/${update.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black">
                      {update.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Update →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black">
                More academic content coming soon.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This category is ready for future KUHRSA academic content.
              </p>

              <Link
                href="/academic"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Academic
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}