import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
  };
  reverse?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  cta,
  reverse = false,
}: PageHeroProps) {
  return (
    <section className="bg-[#F4FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div
          className={`grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[#2BB9EC] text-white lg:grid-cols-2 lg:gap-12 ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
            {eyebrow && (
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75 sm:text-sm">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                {description}
              </p>
            )}

            {cta && (
              <div className="mt-7">
                <Link
                  href={cta.href}
                  className="inline-flex rounded-full bg-[#F700BA] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>

          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[430px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}