import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, HandCoins, HeartHandshake, ShieldCheck } from "lucide-react";
import { appreciationOffers, offers, services, site, waLink } from "@/lib/site";
import { SectionHeading, WhatsAppButton } from "@/components/ui";
import { Gallery } from "@/components/Gallery";
import { VisitCTA } from "@/components/VisitCTA";
import { CountUp } from "@/components/Motion";

const qualities = [
  { title: "Ladies & Gents", text: "One studio for everyone" },
  { title: "Professional Service", text: "Trained, attentive stylists" },
  { title: "Quality Workmanship", text: "Precise, careful results" },
  { title: "Affordable Prices", text: "Premium care, fair value" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Offers />
      <GalleryTrust />
      <VisitCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="parallax absolute inset-x-0 top-0 -z-10 h-[62svh] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[68%]">
        <Image
          src="/images/hero-woman.jpg"
          alt="Woman with long, glossy dark hair in soft salon lighting"
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="kenburns object-cover object-[58%_20%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent lg:bg-linear-to-r lg:from-black lg:via-black/25 lg:to-transparent" />
      </div>

      <div className="hero-out mx-auto flex max-w-7xl flex-col justify-center px-5 pt-[44svh] pb-20 sm:px-8 lg:min-h-[calc(100svh-7.5rem)] lg:pt-20 lg:pb-24">
        <p className="eyebrow enter max-w-sm leading-relaxed lg:max-w-none">{site.name}</p>
        <h1 className="mt-6 font-serif text-[3.4rem] leading-[0.95] font-medium sm:text-7xl lg:text-[6.2rem]">
          <span className="line">
            <span style={{ "--d": "150ms" } as React.CSSProperties}>Where Style</span>
          </span>
          <span className="line">
            <span style={{ "--d": "300ms" } as React.CSSProperties}>
              Meets <span className="text-gold-metal shimmer italic">Elegance.</span>
            </span>
          </span>
        </h1>
        <p className="enter mt-7 max-w-md text-base leading-relaxed text-white/80 [--d:550ms] sm:text-lg">
          <span className="block font-semibold text-white">Proudly Serving the Community Since 2004</span>
          Over 22 years of experience in hair styling, hair colouring &amp; beauty care for ladies and gents in Karachi.
        </p>
        <div className="enter mt-9 flex flex-col gap-3 [--d:700ms] sm:flex-row">
          <Link href="/services" className="btn btn-gold">
            Explore Our Services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton />
        </div>

        <div className="enter credential mt-12 flex w-fit items-center gap-6 rounded-sm px-6 py-5 [--d:850ms] sm:px-7">
          <span className="text-gold-metal shimmer font-serif text-7xl leading-none font-semibold lining-nums sm:text-[5.5rem]">
            <CountUp to={22} delay={900} />+
          </span>
          <span className="h-16 w-px bg-linear-to-b from-transparent via-gold to-transparent" />
          <span className="leading-snug">
            <span className="block text-sm font-bold tracking-[0.24em] text-white uppercase sm:text-base">Years of Excellence</span>
            <span className="mt-1.5 block font-serif text-lg text-gold italic sm:text-xl">Since 2004</span>
          </span>
        </div>
        <p className="enter mt-8 max-w-lg border-l-2 border-gold pl-5 font-serif text-xl leading-snug text-white/95 italic [--d:1000ms] sm:text-2xl">
          <span className="text-gold not-italic">{site.name}</span> – {site.tagline}.
        </p>
      </div>

      {/* Gents' grooming inset keeps the hero gender-inclusive */}
      <figure className="enter absolute right-8 bottom-40 hidden w-52 [--d:900ms] lg:block xl:right-12 xl:w-60">
        <div className="reveal-media relative aspect-[3/4] overflow-hidden rounded-sm border border-gold/60 shadow-2xl shadow-black [--delay:900ms]">
          <Image src="/images/hero-gent.jpg" alt="Well-groomed gentleman with a styled cut and shaped beard" fill sizes="240px" className="object-cover" />
        </div>
        <figcaption className="mt-3 text-right text-xs tracking-[0.24em] text-white/70 uppercase">For ladies &amp; gents</figcaption>
      </figure>

      <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-gold">
        <path pathLength={1} className="draw [--d:600ms]" d="M0 90 C 360 20, 720 130, 1080 60 S 1440 40, 1440 40" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" />
        <path pathLength={1} className="draw [--d:900ms]" d="M0 104 C 400 40, 760 140, 1100 76 S 1440 64, 1440 64" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      </svg>
    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        title="Our Premium Services"
        text="Professional hair and beauty services for ladies and gentlemen in Karachi."
      />
      <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {services.map((s, i) => (
          <li key={s.slug} className={`reveal ${i === 9 ? "md:col-start-2 lg:col-start-auto" : ""}`}>
            <Link href={`/services#${s.slug}`} className="photo-card group aspect-[3/4]">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent to-65%" />
              <span className="absolute top-4 left-4 font-serif text-base text-white/80 sm:top-5 sm:left-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="block font-serif text-lg leading-tight sm:text-[1.35rem]">{s.title}</span>
                <span className="mt-3 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                  Discover
                  <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <Link href="/services" className="btn btn-gold">
          View All Services <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative overflow-hidden border-y border-gold/30">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-32">
        {/* Layered photographs with a rotating heritage seal */}
        <div className="relative pb-16 sm:pr-16 lg:pb-20">
          <div className="reveal-media relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 sm:w-[82%]">
            <Image
              src="/images/about-interior.jpg"
              alt="Glamour studio interior with black styling chairs and round mirrors"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
          <div className="reveal-media absolute right-0 bottom-0 aspect-[4/5] w-[46%] overflow-hidden rounded-sm border border-gold/70 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.95)] [--delay:450ms]">
            <Image src="/images/about-barber.jpg" alt="Warm-lit gents' grooming area with barber chairs" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute -top-5 -left-5 hidden size-24 border-t border-l border-gold/60 sm:block" />

          <div className="reveal absolute bottom-6 left-4 grid size-32 place-items-center rounded-full border border-gold/50 bg-black/85 backdrop-blur [--delay:700ms] sm:top-[38%] sm:bottom-auto sm:left-[62%] sm:size-36">
            <svg viewBox="0 0 100 100" className="seal-spin absolute inset-0 size-full text-gold" aria-hidden="true">
              <defs>
                <path id="seal-path" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
              </defs>
              <text className="fill-current text-[7px] font-semibold uppercase">
                {/* textLength stretches the phrase to exactly one lap of the circle (2π × 38). */}
                <textPath href="#seal-path" textLength={237} lengthAdjust="spacing">
                  Serving Generations · Since 2004 ·
                </textPath>
              </text>
            </svg>
            <span className="text-center leading-none">
              <span className="text-gold-metal block font-serif text-4xl font-semibold">22+</span>
              <span className="mt-1 block text-[0.55rem] tracking-[0.3em] text-white/70 uppercase">Years</span>
            </span>
          </div>
        </div>

        <div className="reveal [--delay:150ms]">
          <p className="eyebrow">About Glamour</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.02] sm:text-6xl">
            A Legacy of
            <br />
            <span className="text-gold-metal italic">Beauty &amp; Trust</span>
          </h2>
          <span className="gold-rule mt-8 block w-28" />
          <p className="mt-8 text-lg leading-relaxed text-white/75">
            Welcome to Glamour Hair &amp; Beauty Studio, proudly serving the community in Karachi, Pakistan, since 2004. With over 22 years of experience in the hair and beauty industry, we have built our reputation on
            professional service, quality workmanship, customer satisfaction, and a commitment to helping our clients
            look and feel their best.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl leading-snug text-white italic sm:text-[1.7rem]">
            “Our mission is to deliver quality services at affordable prices in a clean, comfortable, friendly, and
            welcoming environment.”
          </blockquote>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10">
            {qualities.map((q, i) => (
              <div key={q.title} className="group bg-black p-5 transition-colors duration-500 hover:bg-white/[0.03] sm:p-6">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <dt className="mt-2 font-serif text-xl leading-tight sm:text-2xl">{q.title}</dt>
                <dd className="mt-1 text-sm text-white/55">{q.text}</dd>
                <span className="mt-4 block h-px w-6 bg-gold/60 transition-all duration-500 group-hover:w-14" />
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="btn btn-gold">
              Learn More <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <WhatsAppButton
              label="Book a Visit"
              message="Hello Glamour Hair & Beauty Studio, I would like to book an appointment. What times are available?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div className="reveal">
            <p className="eyebrow">Packages &amp; Promotions</p>
            <h2 className="mt-5 font-serif text-6xl leading-[0.95] sm:text-7xl">
              Special <span className="text-gold-metal italic">Offers</span>
            </h2>
            <p className="mt-4 font-serif text-2xl text-gold italic">Because you deserve the best!</p>
            <span className="gold-rule mt-8 block w-28" />
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              Proudly serving the Karachi community since 2004, we value our customers&apos; continued trust,
              loyalty, and support. To show our appreciation, we offer opportunities for special packages and seasonal
              promotions.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {appreciationOffers.map((o, i) => (
              <li key={o.title} className="reveal" style={{ "--delay": `${150 + i * 150}ms` } as React.CSSProperties}>
                <a
                  href={waLink(`Hello Glamour Hair & Beauty Studio, I would like to know about your ${o.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-frame group flex h-full flex-col p-7 sm:p-8"
                >
                  <span className="font-serif text-5xl leading-none text-gold/30 transition-colors duration-500 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 block font-serif text-2xl leading-tight">{o.title}</span>
                  <span className="mt-3 block flex-1 text-sm leading-relaxed text-white/60">{o.text}</span>
                  <span className="mt-6 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                    Ask on WhatsApp
                    <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-20 flex items-center gap-6">
          <p className="eyebrow shrink-0">Our packages may include</p>
          <span className="gold-rule flex-1" />
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {offers.map((o) => (
            <li key={o.title} className="reveal">
              <a
                href={waLink(`Hello Glamour Hair & Beauty Studio, I would like to enquire about your ${o.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="photo-card group aspect-[3/4]"
              >
                <Image src={o.image} alt={o.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                <span className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-transparent to-70%" />
                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="block font-serif text-xl leading-tight sm:text-2xl">{o.title}</span>
                  <span className="mt-2 block text-xs leading-snug text-white/70 sm:text-sm">{o.text}</span>
                  <span className="mt-4 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                    Enquire
                    <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="reveal mt-14 flex flex-col items-center justify-between gap-6 rounded-sm border border-gold/40 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
          <div>
            <p className="font-serif text-2xl sm:text-3xl">Ask what&apos;s available this season</p>
            <p className="mt-1 text-sm text-white/55">
              Packages and promotions vary through the year, including Eid and wedding seasons.
            </p>
          </div>
          <a
            href={waLink("Hello Glamour Hair & Beauty Studio, I would like to know about your current special offers and packages.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold shrink-0"
          >
            Enquire About Offers <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryTrust() {
  const promises = [
    { icon: BadgeCheck, text: "Professional workmanship" },
    { icon: ShieldCheck, text: "Hygiene and clean tools" },
    { icon: HeartHandshake, text: "Personalised customer service" },
    { icon: HandCoins, text: "Quality care at affordable prices" },
  ];
  return (
    <section className="border-t border-gold/30">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <SectionHeading align="left" eyebrow="Our Gallery" title="A glimpse of our work" />
          <div className="mt-10">
            <Gallery limit={6} gridClass="grid-cols-2 sm:grid-cols-3" showButton />
          </div>
        </div>
        <aside className="reveal relative self-start overflow-hidden rounded-sm border border-gold/40 p-8 sm:p-10 lg:sticky lg:top-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gold" />
          <p className="eyebrow">Since 2004</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">
            Your Beauty, <span className="text-gold-metal italic">Our Passion</span>
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            Since 2004, we have remained committed to professional workmanship, hygiene, personalised customer
            service, and quality hair and beauty care at affordable prices.
          </p>
          <ul className="mt-8 space-y-4">
            {promises.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">
                <Icon className="size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <WhatsAppButton variant="gold" label="Book a Visit" className="mt-8 w-full" message="Hello Glamour Hair & Beauty Studio, I would like to book an appointment. What times are available?" />
        </aside>
      </div>
    </section>
  );
}
