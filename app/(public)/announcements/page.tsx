import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredAnnouncements = [
  {
    title: "KUHRSA membership registration is open",
    category: "Membership",
    status: "Important",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/announcements/membership-registration",
  },
  {
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    status: "Latest",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/announcements/member-information",
  },
  {
    title: "Academic support information for students",
    category: "Academic",
    status: "Latest",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/announcements/academic-support",
  },
];

const latestAnnouncements = [
  {
    title: "KUHRSA membership registration is open",
    category: "Membership",
    description:
      "Important information about registration and joining the KUHRSA membership community.",
    href: "/announcements/membership-registration",
  },
  {
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    description:
      "Key information and notices relevant to current KUHRSA members.",
    href: "/announcements/member-information",
  },
  {
    title: "Academic support information for students",
    category: "Academic",
    description:
      "Information relating to academic support, development and student opportunities.",
    href: "/announcements/academic-support",
  },
  {
    title: "Upcoming KUHRSA participation opportunities",
    category: "Activities",
    description:
      "Stay informed about opportunities for students to participate in KUHRSA activities and initiatives.",
    href: "/announcements/participation-opportunities",
  },
];

const categories = [
  {
    title: "Membership",
    slug: "membership",
    description:
      "Registration, renewal, membership and member-related notices.",
  },
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic information, student support and important academic notices.",
  },
  {
    title: "KUHRSA Updates",
    slug: "kuhrsa-updates",
    description:
      "General association information, official notices and organizational updates.",
  },
  {
    title: "Events",
    slug: "events",
    description:
      "Important notices relating to KUHRSA events and participation.",
  },
  {
    title: "Activities",
    slug: "activities",
    description:
      "Updates concerning KUHRSA activities, initiatives and opportunities.",
  },
  {
    title: "Opportunities",
    slug: "opportunities",
    description:
      "Scholarships, training, career and other opportunities shared with members.",
  },
];

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Announcements"
        title="Important information, when it matters."
        description="Stay informed with official KUHRSA notices, timely updates, membership information and opportunities relevant to students."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA students"
      />

      {/* Featured Announcements */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Announcements
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Notices worth your attention.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured announcements highlight information that may require
              particular attention from KUHRSA members and the wider student
              community.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredAnnouncements.map((announcement) => (
              <Link
                key={announcement.href}
                href={announcement.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={announcement.image}
                    alt={announcement.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {announcement.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-[#CE26A4]">
                      {announcement.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight">
                    {announcement.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Notice →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section id="latest" className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Latest Notices
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                The latest from KUHRSA.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Keep up with recent official notices, updates and information
                published through the association.
              </p>
            </div>

            <Link
              href="/announcements/archive"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              View Archive
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {latestAnnouncements.map((announcement, index) => (
              <Link
                key={announcement.href}
                href={announcement.href}
                className="group rounded-[2rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {announcement.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black text-[#0B2633]">
                      {announcement.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {announcement.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Read Notice →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Updates */}
      <section id="important" className="bg-[#F9B6F2]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                Important Updates
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Stay aware of time-sensitive information.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Important notices can be highlighted here when an update needs
                particular visibility across the KUHRSA community.
              </p>
            </div>

            <Link
              href="/announcements/search"
              className="inline-flex w-fit rounded-full bg-[#0B2633] px-6 py-3 font-bold text-white transition hover:bg-[#168DB8]"
            >
              Search Announcements
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Announcement Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find notices by topic.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories make it easier to find announcements as the KUHRSA
              information system grows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/announcements/category/${category.slug}`}
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
                Announcements
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the Announcements mini-site.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/announcements/latest"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Latest Notices
              </Link>

              <Link
                href="/announcements/archive"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Archive
              </Link>

              <Link
                href="/announcements"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Announcements Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}