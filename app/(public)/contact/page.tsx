import Link from "next/link";
import PageHero from "@/components/site/PageHero";

const contactOptions = [
  {
    title: "General Enquiries",
    description:
      "For general questions, information and matters concerning KUHRSA.",
    href: "/contact#general",
  },
  {
    title: "Membership",
    description:
      "Get help with registration, membership information and member support.",
    href: "/contact#membership",
  },
  {
    title: "Academic",
    description:
      "Questions relating to academic support, opportunities and student development.",
    href: "/contact#academic",
  },
  {
    title: "Programs & Activities",
    description:
      "Enquiries about KUHRSA programs, events and activities.",
    href: "/contact#programs",
  },
  {
    title: "Communications",
    description:
      "Media, publicity, website and other communication-related enquiries.",
    href: "/contact#communications",
  },
  {
    title: "Leadership & Administration",
    description:
      "Organizational, leadership and administrative matters.",
    href: "/contact#leadership",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact KUHRSA"
        title="We're here to help you connect with KUHRSA."
        description="Find the right contact area, learn where KUHRSA is based and send an enquiry to the association."
        image="/images/kuhrsa/general/HR.jpeg"
        imageAlt="KUHRSA student community"
      />

      {/* Contact Options */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Contact Directory
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Choose the right contact area.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Start with the area that best matches your enquiry and KUHRSA
              can direct it to the appropriate team.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((option, index) => (
              <Link
                key={option.title}
                href={option.href}
                className="group rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 transition hover:-translate-y-1 hover:bg-[#BFF2F8] hover:shadow-lg"
              >
                <span className="text-sm font-black text-[#F700BA]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#0B2633]">
                  {option.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {option.description}
                </p>

                <span className="mt-6 inline-block font-bold text-[#168DB8] transition group-hover:translate-x-1">
                  Contact Area →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="general" className="bg-[#F4FAFC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Contact information.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/65">
              Official contact details can be managed centrally as the KUHRSA
              administration system develops.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/10">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Email
                </p>

                <p className="mt-2 font-bold text-[#0B2633]">
                  Official KUHRSA email
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/10">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#168DB8]">
                  Phone
                </p>

                <p className="mt-2 font-bold text-[#0B2633]">
                  Official KUHRSA phone
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0B2633] p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/50">
              Need assistance?
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Send KUHRSA an enquiry.
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              Use the contact form to send a message to the association.
            </p>

            <Link
              href="/contact#form"
              className="mt-7 inline-flex rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white transition hover:bg-[#CE26A4]"
            >
              Open Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Contact Areas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "membership",
                title: "Membership",
                text: "Questions about joining, renewal and member support.",
                href: "/membership/support",
              },
              {
                id: "academic",
                title: "Academic",
                text: "Academic information and student development enquiries.",
                href: "/academic",
              },
              {
                id: "programs",
                title: "Programs & Activities",
                text: "Questions about KUHRSA programs, events and activities.",
                href: "/programs",
              },
              {
                id: "communications",
                title: "Communications",
                text: "Media, publicity and digital communication enquiries.",
                href: "/departments/communications-publicity",
              },
              {
                id: "leadership",
                title: "Leadership & Administration",
                text: "Organizational and administrative enquiries.",
                href: "/departments/administration",
              },
              {
                id: "location",
                title: "Location",
                text: "Find information about where KUHRSA is based.",
                href: "/contact#location",
              },
            ].map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="rounded-[2rem] bg-[#F4FAFC] p-7 ring-1 ring-black/10"
              >
                <h3 className="text-2xl font-black text-[#0B2633]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {item.text}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-block font-bold text-[#168DB8]"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-[#BFF2F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Location
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Find KUHRSA.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Official location and physical office details can be added here
              once they are confirmed and maintained through the KUHRSA system.
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-8 ring-1 ring-black/10 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#168DB8]">
              Current Location Information
            </p>

            <p className="mt-3 text-lg font-bold text-[#0B2633]">
              Official KUHRSA location details
            </p>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Replace this placeholder with the official association address
              and any relevant directions or campus location information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] bg-[#F4FAFC] p-8 ring-1 ring-black/10 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Enquiry Form
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Send us a message.
            </h2>

            <p className="mt-4 leading-8 text-black/60">
              This form is ready for backend integration. For the initial
              frontend phase, the fields establish the final structure of the
              enquiry workflow.
            </p>

            <form className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-[#0B2633]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#168DB8]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-[#0B2633]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#168DB8]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="text-sm font-bold text-[#0B2633]"
                >
                  Enquiry Area
                </label>

                <select
                  id="department"
                  name="department"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#168DB8]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option value="general">General Enquiries</option>
                  <option value="membership">Membership</option>
                  <option value="academic">Academic</option>
                  <option value="programs">
                    Programs & Activities
                  </option>
                  <option value="communications">
                    Communications
                  </option>
                  <option value="leadership">
                    Leadership & Administration
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-bold text-[#0B2633]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#168DB8]"
                  placeholder="What is your enquiry about?"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-[#0B2633]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#168DB8]"
                  placeholder="Write your message..."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#168DB8] px-7 py-3.5 font-black text-white transition hover:bg-[#0B2633]"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0B2633] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/50">
                KUHRSA
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Explore more before contacting us.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#0B2633]"
              >
                About KUHRSA
              </Link>

              <Link
                href="/membership"
                className="rounded-full bg-[#168DB8] px-6 py-3 font-bold text-white"
              >
                Membership
              </Link>

              <Link
                href="/resources"
                className="rounded-full bg-[#F700BA] px-6 py-3 font-bold text-white"
              >
                Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}