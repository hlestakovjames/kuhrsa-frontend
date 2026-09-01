import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const announcements = [
  {
    title: "KUHRSA membership registration is open",
    category: "Membership",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/announcements/membership-registration",
  },
  {
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/announcements/member-information",
  },
  {
    title: "Academic support information for students",
    category: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/announcements/academic-support",
  },
  {
    title: "Upcoming KUHRSA participation opportunities",
    category: "Activities",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/announcements/participation-opportunities",
  },
];

export default function LatestAnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Latest notices"
        description="Stay up to date with the most recent KUHRSA announcements and official information."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA students"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Latest
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Recent KUHRSA notices.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Find the latest information published for members and the wider
              KUHRSA community.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {announcements.map((announcement) => (
              <Link
                key={announcement.href}
                href={announcement.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={announcement.image}
                    alt={announcement.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {announcement.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {announcement.title}
                  </h3>

                  <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Notice →
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