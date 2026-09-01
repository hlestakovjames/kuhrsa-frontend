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

  const getAbsoluteUrl = () => {
    return new URL(url, window.location.origin).toString();
  };

  const shareToWhatsApp = () => {
    const absoluteUrl = getAbsoluteUrl();

    const shareUrl = `https://wa.me/?text=${encodeURIComponent(
      `${title}\n${absoluteUrl}`,
    )}`;

    window.open(
      shareUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareToFacebook = () => {
    const absoluteUrl = getAbsoluteUrl();

    const shareUrl =
      `https://www.facebook.com/sharer/sharer.php?u=` +
      encodeURIComponent(absoluteUrl);

    window.open(
      shareUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareToX = () => {
    const absoluteUrl = getAbsoluteUrl();

    const shareUrl =
      `https://twitter.com/intent/tweet?text=` +
      encodeURIComponent(title) +
      `&url=` +
      encodeURIComponent(absoluteUrl);

    window.open(
      shareUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyLink = async () => {
    try {
      const absoluteUrl = getAbsoluteUrl();

      await navigator.clipboard.writeText(absoluteUrl);

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
          <button
            type="button"
            onClick={shareToWhatsApp}
            className="rounded-full bg-[#168DB8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0B2633]"
          >
            WhatsApp
          </button>

          <button
            type="button"
            onClick={shareToFacebook}
            className="rounded-full bg-[#BFF2F8] px-5 py-2.5 text-sm font-bold text-[#168DB8] transition hover:bg-[#A8EAF2]"
          >
            Facebook
          </button>

          <button
            type="button"
            onClick={shareToX}
            className="rounded-full bg-[#0B2633] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#168DB8]"
          >
            X
          </button>

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