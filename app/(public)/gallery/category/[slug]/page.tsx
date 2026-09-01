import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const categoryData = {
  events: {
    title: "Event Albums",
    description:
      "Visual memories from KUHRSA events and organized occasions.",
  },
  activities: {
    title: "Activity Albums",
    description:
      "Visual memories from KUHRSA activities and initiatives.",
  },
  leadership: {
    title: "Leadership Albums",
    description:
      "Albums featuring student leadership and representation.",
  },
  academic: {
    title: "Academic Albums",
    description:
      "Academic sessions, student development and learning-related memories.",
  },
  community: {
    title: "Community Albums",
    description:
      "Students, members and KUHRSA community moments.",
  },
  general: {
    title: "General Albums",
    description:
      "General KUHRSA visual memories.",
  },
};

const albums = [
  {
    title: "KUHRSA Student Community",
    slug: "kuhrsa-student-community",
    category: "community",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Student Leadership",
    slug: "student-leadership",
    category: "leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Academic Community",
    slug: "academic-community",
    category: "academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
  {
    title: "Community Engagement",
    slug: "community-engagement",
    category: "community",
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
  },
];

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default async function GalleryCategoryPage({
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

  const categoryAlbums = albums.filter(
    (album) => album.category === slug,
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery Category"
        title={category.title}
        description={category.description}
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt={category.title}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          {categoryAlbums.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2">
              {categoryAlbums.map((album) => (
                <Link
                  key={album.slug}
                  href={`/gallery/${album.slug}`}
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
                    <h2 className="text-2xl font-black">
                      {album.title}
                    </h2>

                    <span className="mt-5 inline-block font-bold text-[#F700BA]">
                      Open Album →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10">
              <h2 className="text-2xl font-black">
                More albums coming soon.
              </h2>

              <p className="mt-3 text-sm leading-7 text-black/60">
                This category is ready for future KUHRSA gallery content.
              </p>

              <Link
                href="/gallery"
                className="mt-6 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Back to Gallery
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}