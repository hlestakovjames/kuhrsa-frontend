import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const resources = [
  {
    title: "Membership Information",
    description:
      "Understand membership categories, benefits, requirements and renewal.",
    href: "/membership",
  },
  {
    title: "Membership Guidance",
    description:
      "Useful information to help members navigate KUHRSA membership services.",
    href: "/membership/support",
  },
  {
    title: "Member Documents",
    description:
      "Access forms, guides and other materials prepared for members.",
    href: "/resources/category/membership",
  },
  {
    title: "Downloads",
    description:
      "Find downloadable materials published for members and the wider KUHRSA community.",
    href: "/resources/downloads",
  },
];

export default function MemberResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Member resources"
        description="Find useful information, guidance and materials designed to support KUHRSA members."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA members"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {resource.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {resource.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}