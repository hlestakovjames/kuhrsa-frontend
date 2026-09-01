import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredAlbums = [
  {
    title: "KUHRSA Student Community",
    category: "KUHRSA Community",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/gallery/kuhrsa-student-community",
  },
  {
    title: "Student Leadership",
    category: "Leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/gallery/student-leadership",
  },
  {
    title: "Academic Community",
    category: "Academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/gallery/academic-community",
  },
];

const galleryAreas = [
  {
    title: "Events",
    description:
      "Browse visual memories from KUHRSA events, forums, sessions and other organized occasions.",
    href: "/gallery/events",
  },
  {
    title: "Activities",
    description:
      "Explore photos and visual stories from KUHRSA activities and ongoing initiatives.",
    href: "/gallery/activities",
  },
  {
    title: "KUHRSA Community",
    description:
      "Discover moments featuring students, members, leaders and the wider KUHRSA community.",
    href: "/gallery/community",
  },
];

const categories = [
  {
    title: "Events",
    slug: "events",
    description:
      "Albums from KUHRSA events and organized occasions.",
  },
  {
    title: "Activities",
    slug: "activities",
    description:
      "Visual memories from KUHRSA activities and initiatives.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description:
      "Leadership, representation and student leadership moments.",
  },
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic sessions, student development and learning-related moments.",
  },
  {
    title: "Community",
    slug: "community",
    description:
      "Students, members and KUHRSA community moments.",
  },
  {
    title: "General",
    slug: "general",
    description:
      "Other visual memories and general KUHRSA content.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Gallery"
        title="Moments that tell the KUHRSA story."
        description="Explore photos, albums and visual memories from KUHRSA events, activities, leadership and student life."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA student community"
      />

      {/* Featured Albums */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Albums
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore KUHRSA moments.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Featured albums bring together photos and visual memories from
              some of the association&apos;s most important experiences.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredAlbums.map((album) => (
              <Link
                key={album.href}
                href={album.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {album.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                    {album.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Open Album →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Areas */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Gallery Areas
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find the moments you want to see.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryAreas.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {area.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore Gallery →
                </span>
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
              Gallery Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Browse the visual archive.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories provide a scalable structure for organizing KUHRSA
              albums as the gallery grows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/gallery/category/${category.slug}`}
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
                  Browse Albums →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Archive CTA */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Gallery
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore the KUHRSA visual archive.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/gallery/events"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#11799F]"
              >
                Events
              </Link>

              <Link
                href="/gallery/activities"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Activities
              </Link>

              <Link
                href="/gallery/community"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}