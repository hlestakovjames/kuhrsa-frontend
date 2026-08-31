import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  ["About", "/about"],
  ["Membership", "/membership"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Events", "/events"],
  ["Activities", "/activities"],
];

const discoverLinks = [
  ["Announcements", "/announcements"],
  ["Academic", "/academic"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B2633] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
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
        </div>

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

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Discover
          </h3>

          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {discoverLinks.map(([label, href]) => (
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

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white/90">
            Connect
          </h3>

          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact KUHRSA
            </Link>

            <Link
              href="/membership"
              className="transition hover:text-white"
            >
              Membership
            </Link>

            <Link
              href="/login"
              className="transition hover:text-white"
            >
              Member Login
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} KUHRSA. All rights reserved.</p>

          <p>KUHRSA Public Website</p>
        </div>
      </div>
    </footer>
  );
}
