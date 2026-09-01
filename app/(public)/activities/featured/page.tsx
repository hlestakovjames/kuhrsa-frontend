import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const activities = [
  {
    title: "Student Mentorship",
    category: "Mentorship",
    description:
      "An ongoing space for guidance, knowledge sharing and personal and professional growth.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/activities/student-mentorship",
  },
  {
    title: "Career & Professional Engagement",
    category: "Professional Development",
    description:
      "Activities focused on career awareness, professional skills and meaningful connections.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/activities/career-professional-engagement",
  },
  {
    title: "Academic Support Initiatives",
    category: "Academic",
    description:
      "Peer-oriented activities supporting learning, collaboration and academic development.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/activities/academic-support-initiatives",
  },
];

export default function FeaturedActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Featured activities"
        description="Explore selected KUHRSA activities highlighted for their relevance, participation and opportunities for member growth."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Activities worth exploring.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured activities bring attention to practical opportunities
              where KUHRSA members can learn, contribute and connect.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {activities.map((activity) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {activity.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {activity.description}
                  </p>

                  <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Activity →
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