import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  ["About", "/about"],
  ["Membership", "/membership"],
  ["Programs", "/programs"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Events", "/events"],
  ["Activities", "/activities"],
  ["Contact", "/contact"],
];

const programLinks = [
  ["Academic & Professional Development", "/programs/academic"],
  ["Career Development", "/programs/career"],
  ["Leadership Development", "/programs/leadership"],
  ["Mentorship", "/programs/mentorship"],
  ["Community Engagement", "/programs/community"],
];

const quickLinks = [
  ["Announcements", "/announcements"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
  ["Downloads", "/resources/downloads"],
];

const portalLinks = [
  ["Member Portal", "/login"],
  ["Join Us", "/register"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B2633] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="KUHRSA home"
          >
            <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/20">
              <Image
                src="/images/kuhrsa_logo.jpeg"
                alt="KUHRSA"
                width={64}
                height={64}
                className="h-full w-full object-contain p-2"
              />
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Connecting KUHRSA members through information, engagement,
            academic support and a strong student community.
          </p>

          <Link
            href="/register"
            className="mt-6 inline-flex rounded-full bg-[#F700BA] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#CE26A4]"
          >
            Join Us
          </Link>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Explore
          </h3>

          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {exploreLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Programs
          </h3>

          <div className="mt-5 grid gap-3 text-sm leading-5 text-white/65">
            {programLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Quick Links
          </h3>

          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {quickLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Online Portal */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Online Portal
          </h3>

          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
            Access KUHRSA membership services and authorized online portals.
          </p>

          <div className="mt-5 grid gap-3 text-sm">
            {portalLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="font-semibold text-white/75 transition hover:text-white"
              >
                {label}
              </Link>
            ))}

            {/* Authorized Access */}
            <div className="mt-2 border-t border-white/10 pt-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                Authorized Access
              </p>

              <div className="mt-3 grid gap-3">
                <Link
                  href="/leadership"
                  className="text-white/60 transition hover:text-white"
                >
                  Leadership Portal
                </Link>

                <Link
                  href="/administration"
                  className="text-white/60 transition hover:text-white"
                >
                  Administration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold text-white/85">
              Need to reach KUHRSA?
            </p>

            <Link
              href="/contact"
              className="mt-1 inline-block text-sm text-white/55 transition hover:text-white"
            >
              Contact the association →
            </Link>
          </div>

          <div className="text-sm text-white/45">
            KUHRSA Public Website
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} KUHRSA. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}