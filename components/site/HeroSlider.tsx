"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type HeroSlide = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
};

export default function HeroSlider({
  slides,
  interval = 6000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="relative h-[460px] w-full overflow-hidden bg-[#0B2633] sm:h-[520px] lg:h-[600px]"
      aria-label="KUHRSA featured content"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* Low-opacity readability overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Slightly stronger gradient only behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/80 sm:text-sm">
            {activeSlide.eyebrow}
          </p>

          <h1 className="mt-3 max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {activeSlide.title}
          </h1>

          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
            {activeSlide.description}
          </p>

          {activeSlide.cta && (
            <div className="mt-6">
              <Link
                href={activeSlide.cta.href}
                className="inline-flex rounded-full bg-[#F700BA] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
              >
                {activeSlide.cta.label}
              </Link>
            </div>
          )}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-xl text-white backdrop-blur-sm transition hover:bg-black/35"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-xl text-white backdrop-blur-sm transition hover:bg-black/35"
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-7 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
