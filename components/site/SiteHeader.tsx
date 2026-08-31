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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="KUHRSA home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#168DB8] text-sm font-black tracking-tight text-white shadow-sm">
            K
          </span>

          <span>
            <span className="block text-xl font-black tracking-tight text-[#168DB8]">
              KUHRSA
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-black/45 sm:block">
              Student Association
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-black/75 transition hover:text-[#168DB8]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            href="/login"
            className="rounded-full border-2 border-[#168DB8] px-4 py-2 text-sm font-bold text-[#168DB8] transition hover:bg-[#168DB8] hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="border-t border-black/5 xl:hidden">
        <nav
          className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 lg:px-8"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 text-sm font-semibold text-black/70 transition hover:text-[#168DB8]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
