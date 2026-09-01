import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const albums = [
  {
    title: "KUHRSA Student Community",
    description:
      "Student engagement, participation and community moments.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/gallery/kuhrsa-student-community",
  },
  {
    title: "Community Engagement",
    description:
      "Visual memories from KUHRSA activities and community participation.",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    href: "/gallery/community-engagement",
  },
];

export default function GalleryActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Activities"
        description="Browse visual memories from KUHRSA activities and ongoing initiatives."
        image="/images/kuhrsa/general/STD@KISII.jpeg"
        imageAlt="KUHRSA activity"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 md:grid-cols-2">
            {albums.map((album) => (
              <Link
                key={album.href}
                href={album.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-black">{album.title}</h2>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {album.description}
                  </p>

                  <span className="mt-5 inline-block font-bold text-[#F700BA]">
                    Open Album →
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