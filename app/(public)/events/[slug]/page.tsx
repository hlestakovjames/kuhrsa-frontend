import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const events = [
  {
    slug: "kuhrsa-leadership-forum",
    title: "KUHRSA Leadership Forum",
    category: "Leadership",
    date: "Upcoming",
    time: "To be announced",
    location: "Kisii University",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    intro:
      "A leadership-focused KUHRSA experience designed to encourage participation, responsibility and student leadership development.",
    description:
      "The KUHRSA Leadership Forum provides a platform for students to engage with leadership ideas, experiences and opportunities within the association.",
  },
  {
    slug: "professional-development-session",
    title: "Professional Development Session",
    category: "Professional Development",
    date: "Upcoming",
    time: "To be announced",
    location: "Kisii University",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    intro:
      "A professional development experience focused on career preparation, skills and professional growth.",
    description:
      "This KUHRSA session is designed to help students connect academic learning with professional development and career preparation.",
  },
  {
    slug: "student-networking-session",
    title: "Student Networking Session",
    category: "Networking",
    date: "Upcoming",
    time: "To be announced",
    location: "Kisii University",
    image: "/images/kuhrsa/general/HR.jpeg",
    intro:
      "An opportunity for students to connect, exchange ideas and strengthen professional and academic relationships.",
    description:
      "The Student Networking Session creates a space where KUHRSA members can meet, interact and build meaningful relationships.",
  },
  {
    slug: "academic-career-dialogue",
    title: "Academic & Career Dialogue",
    category: "Academic",
    date: "Upcoming",
    time: "To be announced",
    location: "Kisii University",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    intro:
      "A conversation connecting academic development with career preparation and professional expectations.",
    description:
      "This dialogue brings together academic and career perspectives to help students better understand opportunities for their future development.",
  },
];

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const event = events.find(
    (item) => item.slug === slug,
  );

  if (!event) {
    return {};
  }

  return createShareMetadata({
    title: event.title,
    description: event.intro,
    path: `/events/${event.slug}`,
    image: event.image,
    type: "website",
  });
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find(
    (item) => item.slug === slug,
  );

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={event.category}
        title={event.title}
        description={event.intro}
        image={event.image}
        imageAlt={event.title}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  About the Event
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#0B2633]">
                  {event.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65">
                  {event.description}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Event Details
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Date
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {event.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Time
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {event.time}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Venue
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {event.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/40">
                    Category
                  </p>

                  <p className="mt-1 font-bold text-[#0B2633]">
                    {event.category}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-[#F700BA] px-5 py-3 text-sm font-black text-white transition hover:bg-[#CE26A4]"
              >
                Ask About This Event
              </Link>
            </aside>
          </div>

          <ShareButtons
            title={event.title}
            url={`/events/${event.slug}`}
            label="Share this event"
          />
        </div>
      </article>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              More from KUHRSA Events.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/events/upcoming"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              Upcoming Events
            </Link>

            <Link
              href="/events/calendar"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Event Calendar
            </Link>

            <Link
              href="/events/categories"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#F4FAFC]"
            >
              Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}