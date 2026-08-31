import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#2BB9EC]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-white lg:px-8 lg:py-28">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-white/75">KUHRSA editorial</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Stories, ideas and perspectives from the KUHRSA community.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            The Blog is a full publication experience inside the KUHRSA public site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Link href="/blog" className="rounded-[2rem] bg-[#168DB8] p-8 text-white">
            <div className="text-sm font-black uppercase tracking-wide text-[#F9B6F2]">Featured</div>
            <h2 className="mt-4 text-4xl font-black">Featured editorial story placeholder</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/85">
              This will become the primary featured story, with related content connecting into events,
              activities, academics, departments, resources and gallery content.
            </p>
          </Link>
          <div className="grid gap-6">
            <div id="categories" className="rounded-3xl bg-[#BFF2F8] p-7">
              <h3 className="text-2xl font-black">Categories</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">Academic Life · Career · Leadership · Student Life · Opinion</p>
            </div>
            <div id="topics" className="rounded-3xl bg-[#F9B6F2] p-7">
              <h3 className="text-2xl font-black">Topics</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">Editorial topics and discovery collections will live here.</p>
            </div>
          </div>
        </div>

        <div id="latest" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black">Latest</h2>
            <span className="text-sm font-semibold text-black/50">Posts will be CMS-driven later</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["Story placeholder", "Story placeholder", "Story placeholder"].map((title, i) => (
              <article key={i} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-black text-[#F700BA]">CATEGORY</div>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Editorial excerpt placeholder for the final blog content model.
                </p>
                <Link href="/blog" className="mt-5 inline-block font-bold text-[#168DB8]">Read story →</Link>
              </article>
            ))}
          </div>
        </div>

        <div id="contributors" className="mt-14 rounded-[2rem] bg-[#f4f4f4] p-8">
          <h2 className="text-3xl font-black">Contributors</h2>
          <p className="mt-3 max-w-2xl text-black/60">
            Author and contributor profiles will become a deeper Blog mini-site experience.
          </p>
        </div>

        <div id="archive" className="mt-6 rounded-[2rem] border border-black/10 p-8">
          <h2 className="text-3xl font-black">Archive</h2>
          <p className="mt-3 max-w-2xl text-black/60">
            Date-based and category-based discovery will live here.
          </p>
        </div>
      </section>
    </>
  );
}
