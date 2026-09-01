import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const importantAnnouncements = [
  {
    title: "KUHRSA membership registration is open",
    category: "Membership",
    description:
      "Important information about registering and joining the KUHRSA membership community.",
    href: "/announcements/membership-registration",
  },
  {
    title: "Important information for KUHRSA members",
    category: "KUHRSA Updates",
    description:
      "Key information and notices relevant to current KUHRSA members.",
    href: "/announcements/member-information",
  },
];

export default function ImportantAnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Important updates"
        description="Review announcements that require particular attention from the KUHRSA community."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA student leadership"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-5">
            {importantAnnouncements.map((announcement, index) => (
              <Link
                key={announcement.href}
                href={announcement.href}
                className="group block rounded-[2rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B2633] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#CE26A4]">
                      {announcement.category}
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-[#0B2633]">
                      {announcement.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {announcement.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#0B2633] transition group-hover:translate-x-1">
                      Read Important Notice →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}