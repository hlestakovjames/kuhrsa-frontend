import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import PageHero from "@/components/site/PageHero";
import ShareButtons from "@/components/site/ShareButtons";
import { createShareMetadata } from "@/lib/seo/shareMetadata";

const albums = [
  {
    slug: "kuhrsa-student-community",
    title: "KUHRSA Student Community",
    category: "Community",
    cover: "/images/kuhrsa/general/STUDENTS.jpeg",
    description:
      "A visual collection capturing students, participation and moments from the wider KUHRSA community.",
    photos: [
      "/images/kuhrsa/general/STUDENTS.jpeg",
      "/images/kuhrsa/general/STD@KISII.jpeg",
      "/images/kuhrsa/general/hrsa.students.jpeg",
      "/images/kuhrsa/general/HR.jpeg",
    ],
  },
  {
    slug: "student-leadership",
    title: "Student Leadership",
    category: "Leadership",
    cover: "/images/kuhrsa/general/STD@HRSA.jpeg",
    description:
      "Visual memories highlighting student leadership, representation and participation.",
    photos: [
      "/images/kuhrsa/general/STD@HRSA.jpeg",
      "/images/kuhrsa/general/STUDENTS.jpeg",
      "/images/kuhrsa/general/HR.jpeg",
    ],
  },
  {
    slug: "academic-community",
    title: "Academic Community",
    category: "Academic",
    cover: "/images/kuhrsa/general/HR_KSU.jpeg",
    description:
      "Moments from the academic and student development side of KUHRSA.",
    photos: [
      "/images/kuhrsa/general/HR_KSU.jpeg",
      "/images/kuhrsa/general/hrsa.students.jpeg",
      "/images/kuhrsa/general/STUDENTS.jpeg",
    ],
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    category: "Community",
    cover: "/images/kuhrsa/general/STD@KISII.jpeg",
    description:
      "Visual moments from KUHRSA community engagement and participation.",
    photos: [
      "/images/kuhrsa/general/STD@KISII.jpeg",
      "/images/kuhrsa/general/STUDENTS.jpeg",
      "/images/kuhrsa/general/HR.jpeg",
    ],
  },
];

export function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    return {};
  }

  return createShareMetadata({
    title: album.title,
    description: album.description,
    path: `/gallery/${album.slug}`,
    image: album.cover,
    type: "website",
  });
}

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={album.category}
        title={album.title}
        description={album.description}
        image={album.cover}
        imageAlt={album.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {album.photos.map((photo, index) => (
              <div
                key={`${photo}-${index}`}
                className="group overflow-hidden rounded-[1.75rem] bg-[#F4FAFC]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={photo}
                    alt={`${album.title} photo ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <ShareButtons
            title={album.title}
            url={`/gallery/${album.slug}`}
            label="Share this album"
          />
        </div>
      </section>

      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gallery"
              className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
            >
              Gallery Home
            </Link>

            <Link
              href="/gallery/categories"
              className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
            >
              Categories
            </Link>

            <Link
              href="/gallery/community"
              className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white"
            >
              Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}