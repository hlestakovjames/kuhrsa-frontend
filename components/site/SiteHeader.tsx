import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Membership", "/membership"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Announcements", "/announcements"],
  ["Events", "/events"],
  ["Activities", "/activities"],
  ["Academic", "/academic"],
  ["Resources", "/resources"],
  ["Departments", "/departments"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-[#168DB8]">
          KUHRSA
        </Link>

        <nav className="hidden flex-1 justify-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black transition hover:text-[#168DB8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border-2 border-[#168DB8] px-4 py-2 text-sm font-bold text-[#168DB8] md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/membership#join"
            className="rounded-full bg-[#F700BA] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
          >
            Join KUHRSA
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-black/5 xl:hidden">
        <nav className="mx-auto flex min-w-max gap-5 px-5 py-3" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
