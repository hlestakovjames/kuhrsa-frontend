import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredActivities = [
  {
    title: "Student Mentorship",
    category: "Mentorship",
    status: "Ongoing",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/activities/student-mentorship",
  },
  {
    title: "Career & Professional Engagement",
    category: "Professional Development",
    status: "Ongoing",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/activities/career-professional-engagement",
  },
  {
    title: "Academic Support Initiatives",
    category: "Academic",
    status: "Ongoing",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/activities/academic-support-initiatives",
  },
];

const currentActivities = [
  {
    title: "Student Mentorship",
    category: "Mentorship",
    description:
      "Peer and leadership-based mentorship opportunities that encourage knowledge sharing, guidance and growth.",
    href: "/activities/student-mentorship",
  },
  {
    title: "Career & Professional Engagement",
    category: "Professional Development",
    description:
      "Initiatives that expose members to professional development, networking and career-oriented opportunities.",
    href: "/activities/career-professional-engagement",
  },
  {
    title: "Academic Support Initiatives",
    category: "Academic",
    description:
      "Activities that encourage academic collaboration, peer support and sharing of useful educational experiences.",
    href: "/activities/academic-support-initiatives",
  },
  {
    title: "Community Engagement",
    category: "Community",
    description:
      "Activities that encourage students to contribute to the wider university and community environment.",
    href: "/activities/community-engagement",
  },
];

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Activities supporting learning, academic collaboration and student development.",
  },
  {
    title: "Professional Development",
    slug: "professional-development",
    description:
      "Career, networking and professional growth activities for KUHRSA members.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description:
      "Activities that develop leadership, responsibility, representation and teamwork.",
  },
  {
    title: "Mentorship",
    slug: "mentorship",
    description:
      "Mentorship, peer guidance and knowledge-sharing activities.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Community engagement, outreach and social-impact activities.",
  },
  {
    title: "Social",
    slug: "social",
    description:
      "Activities that encourage interaction, belonging and a stronger student community.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Activities"
        title="Participation that makes KUHRSA active."
        description="Explore ongoing initiatives, student engagement, professional development and community activities that bring KUHRSA members together."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA students participating in activities"
      />

      {/* Featured Activities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Activities
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              What KUHRSA is doing now.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured activities highlight practical ways students can
              participate, contribute, learn and connect within the KUHRSA
              community.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredActivities.map((activity) => (
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
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {activity.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-[#CE26A4]">
                      {activity.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {activity.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Explore Activity →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities */}
      <section
        id="current"
        className="bg-[#F4FAFC]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Current Activities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Get involved.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                KUHRSA activities are designed to create opportunities for
                members to take part in the association beyond everyday
                administration.
              </p>
            </div>

            <Link
              href="/activities/categories"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Browse Categories
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {currentActivities.map((activity, index) => (
              <Link
                key={activity.href}
                href={activity.href}
                className="group rounded-[2rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {activity.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black text-[#0B2633]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {activity.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      View Activity →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Activity Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore activities by interest.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories give the Activities mini-site a clear structure as
              KUHRSA grows its initiatives and participation opportunities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/activities/category/${category.slug}`}
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
                  Explore Activities →
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
                Activities
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the Activities mini-site.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/activities/current"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Current Activities
              </Link>

              <Link
                href="/activities/past"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Past Activities
              </Link>

              <Link
                href="/activities"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Activities Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}