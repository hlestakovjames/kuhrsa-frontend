"use client";

import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
  label?: string;
};

export default function ShareButtons({
  title,
  url,
  label = "Share this content",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-12 border-y border-black/10 py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#168DB8]">
            Share
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
            {label}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#168DB8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0B2633]"
          >
            WhatsApp
          </a>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Facebook
          </a>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0B2633] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#168DB8]"
          >
            X
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="rounded-full bg-[#F9B6F2] px-5 py-2.5 text-sm font-bold text-[#CE26A4] transition hover:bg-[#F2A5E9]"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  );
}