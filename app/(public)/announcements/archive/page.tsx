import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const archiveItems = [
  {
    year: "2026",
    title: "KUHRSA membership registration is open",
    category: "Membership",
    href: "/announcements/membership-registration",
  },
  {
    year: "2026",
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    href: "/announcements/member-information",
  },
  {
    year: "2026",
    title: "Academic support information for students",
    category: "Academic",
    href: "/announcements/academic-support",
  },
];

export default function AnnouncementArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Announcement archive"
        description="Browse previous KUHRSA notices and official updates."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-4">
            {archiveItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-4 rounded-[2rem] bg-[#F4FAFC] p-6 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
              >
                <span className="w-fit rounded-full bg-[#BFF2F8] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                  {item.year}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    {item.title}
                  </h2>
                </div>

                <span className="font-bold text-[#F700BA] transition group-hover:translate-x-1">
                  View →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}