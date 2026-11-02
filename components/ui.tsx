import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41" />
    </svg>
  );
}

export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "outline",
  className = "",
}: {
  message?: string;
  label?: string;
  variant?: "gold" | "outline";
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
    >
      <WhatsAppIcon />
      {label}
      <span className="sr-only">(opens WhatsApp)</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={`reveal ${center ? "mx-auto max-w-4xl text-center" : "max-w-xl"}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <div className={`flex items-center gap-6 ${center ? "justify-center" : ""}`}>
        {center && <span className="gold-rule hidden max-w-40 flex-1 sm:block" />}
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
        {center && <span className="gold-rule hidden max-w-40 flex-1 sm:block" />}
      </div>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">{text}</p>}
    </div>
  );
}

/** Shared banner for the inner pages: breadcrumb, masked headline, outlined watermark and CTAs. */
export function PageHero({
  crumb,
  eyebrow,
  title,
  text,
  image,
  alt,
  ctaLabel = "Chat on WhatsApp",
  ctaMessage,
}: {
  crumb: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  alt: string;
  ctaLabel?: string;
  ctaMessage?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[600px] items-end overflow-hidden border-b border-gold/30 lg:min-h-[78svh]">
      <div className="parallax absolute inset-0 -z-20">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="kenburns object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/20 to-black/40" />

      {/* Outlined editorial watermark */}
      <span
        aria-hidden="true"
        className="watermark enter pointer-events-none absolute -right-[1vw] -bottom-[2.5vw] -z-10 font-serif text-[21vw] leading-none font-semibold tracking-tight uppercase select-none [--d:300ms] lg:text-[12vw]"
      >
        {crumb}
      </span>

      {/* Vertical heritage mark */}
      <div aria-hidden="true" className="enter absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-5 [--d:900ms] lg:flex">
        <span className="h-24 w-px bg-linear-to-b from-transparent to-gold" />
        <span className="text-[0.62rem] font-semibold tracking-[0.45em] text-white/60 uppercase [writing-mode:vertical-rl]">
          Est. 2004 · Karachi
        </span>
        <span className="h-24 w-px bg-linear-to-t from-transparent to-gold" />
      </div>

      <div className="hero-out mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 lg:pb-24">
        <nav aria-label="Breadcrumb" className="enter">
          <ol className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase">
            <li>
              <Link href="/" className="text-white/60 transition-colors hover:text-gold">Home</Link>
            </li>
            <li aria-hidden="true" className="h-px w-8 bg-gold/70" />
            <li aria-current="page" className="text-gold">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow enter mt-8 [--d:120ms]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-[3.2rem] leading-[1] sm:text-7xl lg:text-[5.6rem]">
          <span className="line">
            <span style={{ "--d": "220ms" } as React.CSSProperties}>{title}</span>
          </span>
        </h1>
        <span className="rule-grow mt-8 block h-px w-28 bg-linear-to-r from-gold to-transparent [--d:600ms]" />
        <p className="enter mt-7 max-w-xl text-lg leading-relaxed text-white/85 [--d:650ms] sm:text-xl">{text}</p>
        <div className="enter mt-9 flex flex-col gap-3 [--d:800ms] sm:flex-row">
          <WhatsAppButton variant="gold" label={ctaLabel} message={ctaMessage} />
          <a href={site.phoneHref} className="btn btn-outline">
            <Phone className="size-4" aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>

    </section>
  );
}
