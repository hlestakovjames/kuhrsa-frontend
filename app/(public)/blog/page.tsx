import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const featuredPosts = [
  {
    title: "What student leadership really means",
    category: "Student Perspectives",
    topic: "Leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    href: "/blog/student-leadership-really-means",
  },
  {
    title: "Building professional connections while at university",
    category: "Career & Professional Growth",
    topic: "Career",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
    href: "/blog/building-professional-connections",
  },
  {
    title: "Finding your place in the KUHRSA community",
    category: "Student Life",
    topic: "Student Life",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    href: "/blog/finding-your-place-kuhrsa",
  },
];

const editorialSections = [
  {
    number: "01",
    title: "Latest Stories",
    description:
      "Read the newest articles, reflections and perspectives published through the KUHRSA Blog.",
    href: "/blog/latest",
  },
  {
    number: "02",
    title: "Featured Stories",
    description:
      "Explore selected stories highlighted for their relevance and value to the KUHRSA community.",
    href: "/blog/featured",
  },
  {
    number: "03",
    title: "Editor's Picks",
    description:
      "Discover stories specially selected by the KUHRSA editorial team.",
    href: "/blog/editors-picks",
  },
  {
    number: "04",
    title: "Contributors",
    description:
      "Meet the people behind KUHRSA's stories, perspectives and editorial content.",
    href: "/blog/contributors",
  },
];

const topics = [
  {
    label: "Student Life",
    href: "/blog/topic/student-life",
  },
  {
    label: "Leadership",
    href: "/blog/topic/leadership",
  },
  {
    label: "Career & Professional Growth",
    href: "/blog/topic/career-professional-growth",
  },
  {
    label: "Academic Life",
    href: "/blog/topic/academic-life",
  },
  {
    label: "Technology & Innovation",
    href: "/blog/topic/technology-innovation",
  },
  {
    label: "Human Resource Insights",
    href: "/blog/topic/human-resource-insights",
  },
  {
    label: "Community",
    href: "/blog/topic/community",
  },
];

const categories = [
  {
    label: "Opinion",
    href: "/blog/category/opinion",
  },
  {
    label: "Insights",
    href: "/blog/category/insights",
  },
  {
    label: "Student Perspectives",
    href: "/blog/category/student-perspectives",
  },
  {
    label: "Interviews",
    href: "/blog/category/interviews",
  },
  {
    label: "Experiences",
    href: "/blog/category/experiences",
  },
  {
    label: "Guides & Advice",
    href: "/blog/category/guides-advice",
  },
  {
    label: "Features",
    href: "/blog/category/features",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="KUHRSA Blog"
        title="Ideas, experiences and perspectives from the KUHRSA community."
        description="Explore stories, reflections, insights and student perspectives that go beyond official KUHRSA reporting."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA student community"
      />

      {/* Featured Stories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Featured Stories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Stories worth spending time with.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              The KUHRSA Blog is the editorial side of the public website —
              focused on ideas, experiences, perspectives and deeper stories.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em]">
                    <span className="text-[#168DB8]">
                      {post.category}
                    </span>

                    <span className="text-black/30">•</span>

                    <span className="text-[#CE26A4]">
                      {post.topic}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                    {post.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA] transition group-hover:translate-x-1">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Sections */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {editorialSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {section.number}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {section.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Topics
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Follow the conversations that matter.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Explore recurring themes across student life, leadership,
              careers, academic development, technology and community.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#F4FAFC]"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Discover different kinds of stories.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-[1.5rem] bg-[#F4FAFC] px-6 py-5 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8]"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Ecosystem */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
            KUHRSA Content Ecosystem
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Blog stories can connect readers to the wider KUHRSA experience.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/65">
            A story can link naturally to related News, Events, Activities,
            Academic information, Programs, Membership, Departments and
            Gallery albums.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              ["News", "/news"],
              ["Events", "/events"],
              ["Activities", "/activities"],
              ["Academic", "/academic"],
              ["Programs", "/programs"],
              ["Membership", "/membership"],
              ["Departments", "/departments"],
              ["Gallery", "/gallery"],
            ].map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-5 py-3 font-bold transition ${
                  index % 3 === 0
                    ? "bg-white text-[#0B2633]"
                    : index % 3 === 1
                      ? "bg-[#168DB8] text-white"
                      : "bg-[#F700BA] text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}