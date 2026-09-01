"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import PageHero from "@/components/site/PageHero";
import { blogPosts } from "@/lib/blog";

export default function BlogSearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return blogPosts;
    }

    return blogPosts.filter((post) =>
      [
        post.title,
        post.category,
        post.topic,
        post.contributor,
        post.intro,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Search the Blog"
        description="Find stories by title, topic, category, contributor or keyword."
        image="/images/kuhrsa/general/STUDENTS.jpeg"
        imageAlt="KUHRSA student community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <label
            htmlFor="blog-search"
            className="text-sm font-black uppercase tracking-[0.16em] text-[#168DB8]"
          >
            Search Stories
          </label>

          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the KUHRSA Blog..."
            className="mt-3 w-full rounded-2xl border border-black/10 bg-[#F4FAFC] px-5 py-4 text-base outline-none transition focus:border-[#168DB8]"
          />

          <p className="mt-4 text-sm text-black/45">
            {results.length}{" "}
            {results.length === 1 ? "story" : "stories"} found
          </p>

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {results.length > 0 ? (
              results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-[#F4FAFC] ring-1 ring-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                      {post.category}
                    </p>

                    <h2 className="mt-3 text-xl font-black">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {post.intro}
                    </p>

                    <span className="mt-5 inline-block font-bold text-[#F700BA]">
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[2rem] bg-[#F4FAFC] p-10 text-center ring-1 ring-black/10 md:col-span-2">
                <h2 className="text-2xl font-black">
                  No stories found.
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Try another title, topic, category or keyword.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}