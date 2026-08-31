import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-black/10 bg-[#168DB8] text-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/blog" className="text-2xl font-black tracking-tight">
              KUHRSA BLOG
            </Link>
            <Link href="/" className="text-sm font-bold text-white/85 hover:text-white">
              ← Back to KUHRSA
            </Link>
          </div>
          <nav className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-white/90">
            <Link href="/blog">Home</Link>
            <Link href="/blog#latest">Latest</Link>
            <Link href="/blog#topics">Topics</Link>
            <Link href="/blog#categories">Categories</Link>
            <Link href="/blog#contributors">Contributors</Link>
            <Link href="/blog#archive">Archive</Link>
            <span className="rounded-full bg-white/15 px-3 py-1">Search</span>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/10 bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 lg:px-8">
          <div className="font-black">KUHRSA BLOG</div>
          <Link href="/" className="text-sm text-white/75 hover:text-white">Return to KUHRSA</Link>
        </div>
      </footer>
    </div>
  );
}
