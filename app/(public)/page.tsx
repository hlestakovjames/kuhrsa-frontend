import Image from "next/image";
import Link from "next/link";

import HeroSlider, {
  type HeroSlide,
} from "@/components/site/HeroSlider";

const heroSlides: HeroSlide[] = [
  {
    image: "/images/kuhrsa/general/HR.jpeg",
    eyebrow: "KUHRSA",
    title: "Connecting students, leaders and opportunities.",
    description:
      "A student association built around community, engagement, academic development and growth.",
    cta: {
      label: "Register",
      href: "/register",
    },
  },
  {
    image: "/images/kuhrsa/general/STD@KISII.jpeg",
    eyebrow: "Our Community",
    title: "Together in learning, leadership and participation.",
    description:
      "Discover the people, experiences and opportunities that make KUHRSA a connected student community.",
    cta: {
      label: "Explore KUHRSA",
      href: "/about",
    },
  },
  {
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
    eyebrow: "Membership",
    title: "Be part of the KUHRSA community.",
    description:
      "Explore membership, benefits, requirements and opportunities available through the association.",
    cta: {
      label: "Explore Membership",
      href: "/membership",
    },
  },
  {
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
    eyebrow: "Engagement",
    title: "Stay connected and involved.",
    description:
      "Follow KUHRSA news, events, activities and opportunities throughout the year.",
    cta: {
      label: "Explore Activities",
      href: "/activities",
    },
  },
  {
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
    eyebrow: "KUHRSA Community",
    title: "Your association. Your community. Your opportunities.",
    description:
      "Find information, resources and meaningful ways to participate in KUHRSA.",
    cta: {
      label: "Join KUHRSA",
      href: "/register",
    },
  },
];

const programs = [
  {
    title: "Academic & Professional Development",
    href: "/programs/academic",
  },
  {
    title: "Career Development",
    href: "/programs/career",
  },
  {
    title: "Leadership Development",
    href: "/programs/leadership",
  },
  {
    title: "Mentorship",
    href: "/programs/mentorship",
  },
  {
    title: "Community Engagement",
    href: "/programs/community",
  },
];

const blogStories = [
  {
    title: "What student leadership really means",
    category: "Student Perspectives",
    href: "/blog/student-leadership-really-means",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Building professional connections while at university",
    category: "Career & Professional Growth",
    href: "/blog/building-professional-connections",
    image: "/images/kuhrsa/general/hrsa.students.jpeg",
  },
  {
    title: "Finding your place in the KUHRSA community",
    category: "Student Life",
    href: "/blog/finding-your-place-kuhrsa",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
];

const departments = [
  {
    title: "Department Directory",
    description:
      "Explore KUHRSA departments and find the right organizational area.",
    href: "/departments/directory",
  },
  {
    title: "Department Functions",
    description:
      "Understand the responsibilities and work of different departments.",
    href: "/departments/functions",
  },
  {
    title: "Department Contacts",
    description:
      "Find department-specific contact and communication information.",
    href: "/departments/contacts",
  },
];

const resources = [
  {
    title: "Academic Resources",
    description:
      "Find materials and information supporting academic development.",
    href: "/resources/academic",
  },
  {
    title: "Member Resources",
    description:
      "Access useful information prepared for KUHRSA members.",
    href: "/resources/members",
  },
  {
    title: "Guides & Documents",
    description:
      "Browse practical guides, documents and reference materials.",
    href: "/resources/guides",
  },
  {
    title: "Downloads",
    description:
      "Access forms, documents, templates, guides and policies.",
    href: "/resources/downloads",
  },
];

const galleryAlbums = [
  {
    title: "KUHRSA Student Community",
    category: "Community",
    href: "/gallery/community",
    image: "/images/kuhrsa/general/STUDENTS.jpeg",
  },
  {
    title: "Student Leadership",
    category: "Leadership",
    href: "/gallery/category/leadership",
    image: "/images/kuhrsa/general/STD@HRSA.jpeg",
  },
  {
    title: "Academic Community",
    category: "Academic",
    href: "/gallery/category/academic",
    image: "/images/kuhrsa/general/HR_KSU.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSlider slides={heroSlides} />

      {/* 2. Quick Introduction */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/kuhrsa/general/STD@KISII.jpeg"
                alt="KUHRSA student community"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 rounded-2xl bg-[#0B2633] px-5 py-4 text-white shadow-lg">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-white/50">
                KUHRSA
              </p>

              <p className="mt-1 text-sm font-bold">
                Community • Learning • Leadership
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Quick Introduction
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
              Who we are and what we do.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/65">
              KUHRSA connects students around academic development,
              professional growth, leadership, participation and community.
              The public platform brings together information, opportunities
              and association experiences in one connected space.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#F4FAFC] p-6">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Who KUHRSA Is
                </p>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  A student association serving as a platform for connection,
                  representation and development.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#BFF2F8] p-6">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  What KUHRSA Does
                </p>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Supports student participation, academic development,
                  professional growth and community engagement.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
            >
              About KUHRSA →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Membership CTA */}
      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#168DB8]">
                Membership
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Membership gives you a place to connect, participate and grow.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-black/60">
                Learn why membership matters, understand the available
                categories and discover the benefits of being part of KUHRSA.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="rounded-full bg-[#168DB8] px-6 py-3 font-black text-white transition hover:bg-[#0B2633]"
                >
                  Register
                </Link>

                <Link
                  href="/membership/benefits"
                  className="rounded-full bg-[#F4FAFC] px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
                >
                  Key Benefits
                </Link>

                <Link
                  href="/membership/categories"
                  className="rounded-full bg-[#F9B6F2] px-6 py-3 font-bold text-[#0B2633]"
                >
                  Membership Categories
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0B2633] p-8 text-white lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/50">
                Already a Member?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Access your KUHRSA account.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Sign in to access member services and your membership account.
              </p>

              <Link
                href="/login"
                className="mt-7 inline-flex rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
              >
                Member Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest News */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Latest News
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                What is happening across KUHRSA.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Official news and developments from the association.
              </p>
            </div>

            <Link
              href="/news"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
            >
              View All News →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href="/news/featured"
              className="group overflow-hidden rounded-[2rem] bg-[#168DB8] text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px]">
                  <Image
                    src="/images/kuhrsa/general/STD@HRSA.jpeg"
                    alt="KUHRSA student leadership"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/65">
                    Featured News
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    Stay informed about the association.
                  </h3>

                  <p className="mt-4 leading-7 text-white/80">
                    Explore official KUHRSA reporting and developments.
                  </p>

                  <span className="mt-7 inline-block font-bold text-[#F9B6F2]">
                    Explore News →
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-5">
              <Link
                href="/news/latest"
                className="rounded-[1.5rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Latest News
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                  Browse the newest KUHRSA stories.
                </h3>

                <span className="mt-5 inline-block font-bold text-[#F700BA]">
                  Latest News →
                </span>
              </Link>

              <Link
                href="/news/featured"
                className="rounded-[1.5rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#CE26A4]">
                  Featured News
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                  Explore highlighted KUHRSA stories.
                </h3>

                <span className="mt-5 inline-block font-bold text-[#CE26A4]">
                  Featured News →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Upcoming Events */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Upcoming Events
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Take part in what is coming next.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Discover upcoming KUHRSA events and plan your participation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/events/upcoming"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Upcoming Events
              </Link>

              <Link
                href="/events/calendar"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
              >
                Event Calendar
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/events/featured"
              className="rounded-[2rem] bg-[#F9B6F2] p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#CE26A4]">
                Featured Event
              </p>

              <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                Discover featured KUHRSA experiences.
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Explore highlighted events and opportunities to participate.
              </p>
            </Link>

            <Link
              href="/events/upcoming"
              className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                Upcoming
              </p>

              <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                See upcoming events.
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Find events you can attend and participate in.
              </p>
            </Link>

            <Link
              href="/events/calendar"
              className="rounded-[2rem] bg-[#BFF2F8] p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                Calendar
              </p>

              <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                Plan ahead.
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Use the event calendar to see KUHRSA activities over time.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Activities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Activities
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Stay involved beyond the classroom.
              </h2>

              <p className="mt-5 leading-8 text-black/60">
                Follow current activities, featured initiatives and ongoing
                opportunities for participation across KUHRSA.
              </p>

              <Link
                href="/activities"
                className="mt-7 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Explore Activities →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Link
                href="/activities/current"
                className="rounded-[2rem] bg-[#BFF2F8] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Current Activities
                </p>

                <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                  What KUHRSA is doing now.
                </h3>
              </Link>

              <Link
                href="/activities/featured"
                className="rounded-[2rem] bg-[#F9B6F2] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#CE26A4]">
                  Featured Activity
                </p>

                <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                  Discover highlighted initiatives.
                </h3>
              </Link>

              <Link
                href="/activities/calendar"
                className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Activity Calendar
                </p>

                <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                  Plan around KUHRSA activities.
                </h3>
              </Link>

              <Link
                href="/activities/categories"
                className="rounded-[2rem] bg-white p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Categories
                </p>

                <h3 className="mt-4 text-2xl font-black text-[#0B2633]">
                  Find activities by area.
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Academic */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-[#0B2633] p-8 text-white lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/50">
                Academic
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Support your academic journey.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Access academic updates, opportunities, resources and
                important information relevant to KUHRSA students.
              </p>

              <Link
                href="/academic"
                className="mt-8 inline-flex rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white"
              >
                Explore Academic →
              </Link>
            </div>

            <div className="grid gap-5">
              <Link
                href="/academic/updates"
                className="rounded-[1.75rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Academic Updates
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                  Stay current with academic information.
                </h3>
              </Link>

              <Link
                href="/academic/opportunities"
                className="rounded-[1.75rem] bg-[#BFF2F8] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Opportunities
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                  Discover opportunities for growth.
                </h3>
              </Link>

              <Link
                href="/academic/resources"
                className="rounded-[1.75rem] bg-[#F9B6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#CE26A4]">
                  Academic Resources
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                  Find useful academic materials.
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Programs */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Programs
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
              Opportunities designed for growth.
            </h2>

            <p className="mt-4 leading-8 text-black/60">
              Explore the programs connecting academic development,
              professional growth, leadership and community engagement.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {programs.map((program, index) => (
              <Link
                key={program.href}
                href={program.href}
                className={`rounded-[1.75rem] p-7 transition hover:-translate-y-1 hover:shadow-lg ${
                  index % 3 === 0
                    ? "bg-[#BFF2F8]"
                    : index % 3 === 1
                      ? "bg-[#F9B6F2]"
                      : "bg-[#F4FAFC] ring-1 ring-black/10"
                }`}
              >
                <span className="text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-black text-[#0B2633]">
                  {program.title}
                </h3>

                <span className="mt-5 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/programs"
            className="mt-8 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
          >
            View All Programs →
          </Link>
        </div>
      </section>

      {/* 9. Blog / Editorial */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Blog / Editorial
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Ideas, experiences and perspectives.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Explore stories that go beyond official reporting and connect
                into the wider KUHRSA experience.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex w-fit rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white"
            >
              Explore Blog →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {blogStories.map((story) => (
              <Link
                key={story.href}
                href={story.href}
                className="group overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {story.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                    {story.title}
                  </h3>

                  <span className="mt-6 inline-block font-bold text-[#F700BA]">
                    Read Story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Announcements */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F9B6F2] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                  Announcements
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                  Important information from KUHRSA.
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-black/60">
                  Keep up with important notices, latest announcements and
                  updates that require attention.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/announcements/important"
                  className="rounded-full bg-[#0B2633] px-6 py-3 font-bold text-white"
                >
                  Important Notices
                </Link>

                <Link
                  href="/announcements/latest"
                  className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10"
                >
                  Latest Notices
                </Link>

                <Link
                  href="/announcements"
                  className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
                >
                  All Announcements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Departments */}
      <section className="bg-[#F4FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Departments
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
              Understand how KUHRSA works.
            </h2>

            <p className="mt-4 leading-8 text-black/60">
              Explore the departments, responsibilities and organizational
              structure supporting the association.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {departments.map((department, index) => (
              <Link
                key={department.href}
                href={department.href}
                className={`rounded-[2rem] p-8 transition hover:-translate-y-1 hover:shadow-lg ${
                  index === 0
                    ? "bg-white ring-1 ring-black/10"
                    : index === 1
                      ? "bg-[#BFF2F8]"
                      : "bg-[#F9B6F2]"
                }`}
              >
                <span className="text-sm font-black text-[#168DB8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {department.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {department.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/departments"
            className="mt-8 inline-flex rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
          >
            View Departments →
          </Link>
        </div>
      </section>

      {/* 12. Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Gallery
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                See the KUHRSA story in pictures.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Explore albums from events, activities, leadership, academic
                life and the wider KUHRSA community.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex w-fit rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
            >
              View Gallery →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryAlbums.map((album) => (
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

                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                    {album.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#0B2633]">
                    {album.title}
                  </h3>

                  <span className="mt-5 inline-block font-bold text-[#F700BA]">
                    Open Album →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Resources */}
      <section className="bg-[#BFF2F8]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Resources
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                Useful information when you need it.
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Find resources for academic work, membership, practical
                guidance and document access.
              </p>
            </div>

            <Link
              href="/resources"
              className="inline-flex w-fit rounded-full bg-[#0B2633] px-6 py-3 font-bold text-white"
            >
              Resources Home →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-[1.75rem] bg-white p-7 ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-black text-[#0B2633]">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {resource.description}
                </p>

                <span className="mt-5 inline-block font-bold text-[#168DB8]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. KUHRSA Community CTA */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
              KUHRSA Community
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              Participate. Connect. Grow.
            </h2>

            <p className="mt-5 leading-8 text-white/65">
              KUHRSA is more than information. It is a community where
              students can participate, build connections, develop
              professionally and contribute.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/membership"
              className="rounded-[2rem] bg-white p-8 text-[#0B2633] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                Participate
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Become part of KUHRSA activities, programs and membership.
              </p>

              <span className="mt-6 inline-block font-bold text-[#168DB8]">
                Membership →
              </span>
            </Link>

            <Link
              href="/events"
              className="rounded-[2rem] bg-[#168DB8] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                Connect
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Discover events, activities and opportunities to meet and
                collaborate with others.
              </p>

              <span className="mt-6 inline-block font-bold text-[#BFF2F8]">
                Explore Events →
              </span>
            </Link>

            <Link
              href="/programs"
              className="rounded-[2rem] bg-[#F700BA] p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                Grow
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/80">
                Find programs supporting academic, professional and leadership
                development.
              </p>

              <span className="mt-6 inline-block font-bold text-white">
                Explore Programs →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                  Start with KUHRSA
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] md:text-5xl">
                  Find your place in the association.
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-black/60">
                  Become a member, explore what KUHRSA offers or get in touch
                  with the association.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="rounded-full bg-[#F700BA] px-6 py-3 font-black text-white transition hover:bg-[#CE26A4]"
                >
                  Become a Member
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white transition hover:bg-[#0B2633]"
                >
                  Contact KUHRSA
                </Link>

                <Link
                  href="/about"
                  className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633] ring-1 ring-black/10 transition hover:bg-[#BFF2F8]"
                >
                  Explore the Association
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}