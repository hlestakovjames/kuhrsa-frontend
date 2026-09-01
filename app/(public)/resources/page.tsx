import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredResources = [
  {
    title: "Academic Resources",
    category: "Academic",
    description:
      "Useful materials, guidance and references supporting students throughout their academic journey.",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    href: "/resources/academic",
  },
  {
    title: "Member Resources",
    category: "Membership",
    description:
      "Information and materials designed to help KUHRSA members participate and stay connected.",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/resources/members",
  },
  {
    title: "Guides & Documents",
    category: "Documents",
    description:
      "Guides, reference materials and official documents published for the KUHRSA community.",
    image: "/images/kuhrsa/general/HR.jpeg",
    href: "/resources/guides",
  },
];

const resourceAreas = [
  {
    title: "Academic Resources",
    description:
      "Study guidance, academic support information and useful references for students.",
    href: "/resources/academic",
  },
  {
    title: "Member Resources",
    description:
      "Resources supporting membership, participation, engagement and member services.",
    href: "/resources/members",
  },
  {
    title: "Guides & Documents",
    description:
      "Official guides, reference documents and informational materials.",
    href: "/resources/guides",
  },
  {
    title: "Downloads",
    description:
      "Access downloadable forms, documents, templates, policies and other published materials.",
    href: "/resources/downloads",
  },
];

const categories = [
  {
    title: "Academic",
    slug: "academic",
    description:
      "Academic support, guidance and learning-related materials.",
  },
  {
    title: "Membership",
    slug: "membership",
    description:
      "Membership information, forms and useful member materials.",
  },
  {
    title: "Policies",
    slug: "policies",
    description:
      "Policies, procedures and governance-related documents.",
  },
  {
    title: "Guides",
    slug: "guides",
    description:
      "Practical guides and reference materials.",
  },
  {
    title: "Forms",
    slug: "forms",
    description:
      "Forms and documents that members may need to complete or download.",
  },
  {
    title: "General",
    slug: "general",
    description:
      "General KUHRSA resources and reference materials.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Resources"
        title="Information and tools in one place."
        description="Explore academic materials, member resources, guides, official documents and downloadable resources for the KUHRSA community."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA students"
      />

      {/* Featured Resources */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Resources
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Resources worth exploring.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Start with some of the most useful resource areas available to
              KUHRSA members and the wider student community.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {resource.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {resource.description}
                  </p>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Areas */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Resource Hub
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find the right resource.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The Resources mini-site keeps useful information organized so
              that students and members can quickly find what they need.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resourceAreas.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-[2rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BFF2F8] text-sm font-black text-[#168DB8]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0B2633]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {area.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </div>
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
              Resource Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Browse by category.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Categories give the Resources area a scalable structure as more
              documents, guides and materials are published.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/resources/category/${category.slug}`}
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
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads CTA */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                Downloads
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Need a form, document or guide?
              </h2>

              <p className="mt-4 leading-8 text-white/65">
                Visit the dedicated Downloads area for materials published by
                KUHRSA.
              </p>
            </div>

            <Link
              href="/resources/downloads"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Browse Downloads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}