import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const topics = [
  {
    title: "Student Life",
    slug: "student-life",
    description: "Stories about university life, participation and belonging.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description: "Leadership, responsibility and student representation.",
  },
  {
    title: "Career & Professional Growth",
    slug: "career-professional-growth",
    description: "Career preparation, networking and professional development.",
  },
  {
    title: "Academic Life",
    slug: "academic-life",
    description: "Learning, academic development and student success.",
  },
  {
    title: "Technology & Innovation",
    slug: "technology-innovation",
    description: "Technology, digital transformation and new ideas.",
  },
  {
    title: "Human Resource Insights",
    slug: "human-resource-insights",
    description: "Perspectives connected to HR and professional practice.",
  },
  {
    title: "Community",
    slug: "community",
    description: "Community engagement, collaboration and shared experiences.",
  },
];

export default function BlogTopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Topics"
        description="Explore the ideas and themes that shape KUHRSA conversations."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/blog/topic/${topic.slug}`}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {topic.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {topic.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8]">
                  Explore Topic →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}