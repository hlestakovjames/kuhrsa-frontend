import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categories = [
  {
    title: "Opinion",
    slug: "opinion",
    description: "Editorial viewpoints and thoughtful perspectives.",
  },
  {
    title: "Insights",
    slug: "insights",
    description: "Ideas, analysis and practical observations.",
  },
  {
    title: "Student Perspectives",
    slug: "student-perspectives",
    description: "Stories and reflections from student experiences.",
  },
  {
    title: "Interviews",
    slug: "interviews",
    description: "Conversations with students, leaders and professionals.",
  },
  {
    title: "Experiences",
    slug: "experiences",
    description: "Personal experiences and community stories.",
  },
  {
    title: "Guides & Advice",
    slug: "guides-advice",
    description: "Practical guidance for academic and professional growth.",
  },
  {
    title: "Features",
    slug: "features",
    description: "Long-form editorial features and special stories.",
  },
];

export default function BlogCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Categories"
        description="Browse KUHRSA Blog stories by editorial format and content type."
        image="/images/kuhrsa/general/HR_KSU.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8]">
                  Browse Category →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}