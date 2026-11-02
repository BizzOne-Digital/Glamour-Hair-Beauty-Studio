import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { services, site } from "@/lib/site";
import { PageHero, WhatsAppButton } from "@/components/ui";
import { VisitCTA } from "@/components/VisitCTA";

export const metadata: Metadata = {
  title: "Hair & Beauty Services in Karachi",
  description:
    "Haircuts, styling, hair colouring, highlights, straightening, perms, scalp care, consultations, special occasion styling and gents' grooming in Karachi.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        ctaLabel="Enquire on WhatsApp"
        eyebrow="Proudly Serving the Community Since March 2004"
        title={<>Our <span className="text-gold-metal italic">Services</span></>}
        text="With over 22 years of experience, Glamour Hair & Beauty Studio provides professional hair and beauty services for ladies and gentlemen in Karachi, Pakistan."
        image="/images/about-studio.jpg"
        alt="Modern salon interior with styling stations"
      />

      <nav aria-label="Service categories" className="sticky top-20 z-30 border-b border-gold/20 bg-black/90 backdrop-blur-md">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="block rounded-full border border-white/15 px-4 py-2 text-xs whitespace-nowrap text-white/75 transition-colors hover:border-gold hover:text-gold">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-40 items-center gap-10 border-b border-white/10 py-20 last:border-0 lg:grid-cols-2 lg:gap-20"
          >
            <div className={`reveal photo-card aspect-[4/3] ${i % 2 ? "lg:order-2" : ""}`}>
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="reveal [--delay:180ms]">
              <div className="flex items-center gap-4">
                <span className="font-serif text-5xl text-gold/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-12 bg-gold/50" />
                <span className="text-xs tracking-[0.22em] text-white/60 uppercase">{s.audience}</span>
              </div>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">{s.summary}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-3 text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" /> {d}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                className="mt-9"
                label="Enquire on WhatsApp"
                message={`Hello Glamour Hair & Beauty Studio, I would like to enquire about ${s.title}. Could you please share more details?`}
              />
            </div>
          </article>
        ))}
      </div>

      <section className="border-t border-gold/30 px-5 py-24 text-center sm:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <p className="eyebrow">Our Commitment</p>
          <p className="mt-6 font-serif text-3xl leading-snug sm:text-4xl">
            Since March 2004, Glamour Hair &amp; Beauty Studio has been committed to professional workmanship, hygiene,
            personalised customer service, and quality hair and beauty care at affordable prices.
          </p>
          <div className="gold-rule mx-auto my-8 w-40" />
          <p className="font-serif text-2xl text-gold italic">{site.name} – {site.brandLine}.</p>
        </div>
      </section>

      <VisitCTA showMap={false} />
    </>
  );
}
