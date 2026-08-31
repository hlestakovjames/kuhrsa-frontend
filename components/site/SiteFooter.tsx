import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#168DB8] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-2xl font-black">KUHRSA</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
            Connecting KUHRSA members through information, engagement and a strong public presence.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            {[
              ["About", "/about"],
              ["Membership", "/membership"],
              ["News", "/news"],
              ["Blog", "/blog"],
              ["Events", "/events"],
              ["Activities", "/activities"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Discover</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            {[
              ["Announcements", "/announcements"],
              ["Academic", "/academic"],
              ["Resources", "/resources"],
              ["Departments", "/departments"],
              ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Connect</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <Link href="/contact" className="hover:text-white">Contact KUHRSA</Link>
            <Link href="/membership#join" className="hover:text-white">Join KUHRSA</Link>
            <Link href="/login" className="hover:text-white">Login</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/75">
        © {new Date().getFullYear()} KUHRSA. All rights reserved.
      </div>
    </footer>
  );
}
