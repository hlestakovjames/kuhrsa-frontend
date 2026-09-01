import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  academic: {
    title: "Academic Events",
    description:
      "Explore academic discussions, learning sessions and experiences supporting student development.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  "professional-development": {
    title: "Professional Development Events",
    description:
      "Discover career, networking and professional growth opportunities through KUHRSA.",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  leadership: {
    title: "Leadership Events",
    description:
      "Explore leadership forums, training sessions and experiences supporting student leadership.",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  networking: {
    title: "Networking Events",
    description:
      "Connect with peers, professionals, alumni and other members of the wider KUHRSA community.",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  community: {
    title: "Community Events",
    description:
      "Explore community engagement, outreach and participation-focused KUHRSA experiences.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
  social: {
    title: "Social Events",
    description:
      "Discover social experiences that encourage connection, belonging and community.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
};

const events = [
  {
    title: "KUHRSA Leadership Forum",
    slug: "kuhrsa-leadership-forum",
    category: "leadership",
    categoryLabel: "Leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Professional Development Session",
    slug: "professional-development-session",
    category: "professional-development",
    categoryLabel: "Professional Development",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    title: "Student Networking Session",
    slug: "student-networking-session",
    category: "networking",
    categoryLabel: "Networking",
    image: "/images/kuhrsa/general/HR.jpeg",
  },
  {
    title: "Academic & Career Dialogue",
    slug: "academic-career-dialogue",
    category: "academic",
    categoryLabel: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function EventCategoryPage({
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

  const categoryEvents = events.filter(
    (event) => event.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Event Category"
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
                Category Events
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {category.title} across KUHRSA.
              </h2>
            </div>

            <Link
              href="/events/categories"
              className="inline-flex w-fit rounded-full bg-[#BFF2F8] px-6 py-3 font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
            >
              All Categories
            </Link>
          </div>

          {categoryEvents.length > 0 ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {categoryEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {event.categoryLabel}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {event.title}
                    </h3>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      View Event →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h3 className="text-2xl font-black">
                More events coming soon.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This category is ready for future KUHRSA Events content.
              </p>

              <Link
                href="/events"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Events
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}