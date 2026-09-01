import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const activities = [
  {
    title: "Student Mentorship",
    category: "Mentorship",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/activities/student-mentorship",
  },
  {
    title: "Career & Professional Engagement",
    category: "Professional Development",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/activities/career-professional-engagement",
  },
  {
    title: "Academic Support Initiatives",
    category: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/activities/academic-support-initiatives",
  },
  {
    title: "Community Engagement",
    category: "Community",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    href: "/activities/community-engagement",
  },
];

export default function CurrentActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Current activities"
        description="Explore ongoing KUHRSA initiatives and opportunities for students to participate, contribute and grow."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA students participating in activities"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Ongoing
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Activities currently in motion.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              These activities represent practical ways for KUHRSA members to
              engage with the association and with one another.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {activities.map((activity) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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

                  <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Explore Activity →
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