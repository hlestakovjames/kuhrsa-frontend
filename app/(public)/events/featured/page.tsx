import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredEvents = [
  {
    title: "KUHRSA Leadership Forum",
    category: "Leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/events/kuhrsa-leadership-forum",
  },
  {
    title: "Professional Development Session",
    category: "Professional Development",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/events/professional-development-session",
  },
];

export default function FeaturedEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Featured events"
        description="Explore selected KUHRSA events highlighted for their relevance, impact and opportunities for member participation."
        image="/images/kuhrsa/general/STD@HRSA.jpeg"
        imageAlt="KUHRSA event"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Events to keep on your radar.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured events bring attention to experiences that support
              leadership, professional growth, academic development and
              connection.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {featuredEvents.map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {event.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {event.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    View Event →
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