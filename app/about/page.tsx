import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, HandCoins, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";
import { Gallery } from "@/components/Gallery";
import { VisitCTA } from "@/components/VisitCTA";

export const metadata: Metadata = {
  title: "About Us — Serving Karachi Since 2004",
  description:
    "Glamour Hair & Beauty Studio has served ladies and gentlemen in Karachi since 2004. Learn about our 22+ years of experience, philosophy and mission.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: BadgeCheck, title: "Professional workmanship", text: "Careful technique and attention to detail, whether it's a quick trim or a full transformation." },
  { icon: ShieldCheck, title: "Hygiene first", text: "A clean studio, clean tools and fresh towels for every client, every visit." },
  { icon: HeartHandshake, title: "Customer satisfaction", text: "We listen first, recommend honestly and make sure you leave happy with your look." },
  { icon: HandCoins, title: "Affordable quality", text: "Premium care at prices that let you keep coming back." },
  { icon: Users, title: "Ladies & gentlemen", text: "One welcoming studio for the whole family, across every generation." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Glamour"
        title={<>A legacy of <span className="text-gold-metal italic">beauty &amp; trust.</span></>}
        text="Since 2004, Glamour Hair & Beauty Studio has been a trusted part of the Karachi community — serving generations with style and care."
        image="/images/about-interior.jpg"
        alt="Glamour studio interior with black styling chairs and round mirrors"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="reveal-media relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/40 sm:w-4/5">
            <Image src="/images/about-studio.jpg" alt="Bright, modern salon floor with styling stations" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="reveal-media absolute right-0 -bottom-10 hidden aspect-square w-1/2 overflow-hidden rounded-sm border border-gold shadow-2xl shadow-black [--delay:450ms] sm:block">
            <Image src="/images/about-barber.jpg" alt="Warm-lit gents' grooming area with barber chairs" fill sizes="25vw" className="object-cover" />
          </div>
        </div>
        <div className="reveal [--delay:200ms]">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Since 2004</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-white/75">
            <p>
              Welcome to Glamour Hair &amp; Beauty Studio, proudly serving the community in Karachi, Pakistan, since 2004.
              With over 22 years of experience in the hair and beauty industry, we have built our
              reputation on professional service, quality workmanship, customer satisfaction, and a commitment to
              helping our clients look and feel their best.
            </p>
            <p>
              We provide a range of hair and beauty services for both ladies and gentlemen, including professional
              haircuts, hairstyling, hair colouring, grooming, hair treatments, and beauty care.
            </p>
            <p>
              Since our establishment in 2004, we have remained committed to serving our community with
              dedication, professionalism, and personalised attention.
            </p>
            <p className="font-serif text-xl text-gold italic">
              Glamour Hair &amp; Beauty Studio — Your Beauty, Our Passion Since 2004.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/30 pt-8">
            <div>
              <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Since</dt>
              <dd className="text-gold-metal font-serif text-5xl">2004</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Experience</dt>
              <dd className="text-gold-metal font-serif text-5xl">22+</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Services</dt>
              <dd className="text-gold-metal font-serif text-5xl">10</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24 text-center sm:px-8">
        <div className="reveal">
          <p className="eyebrow">Meet Our Owner</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Ms. Yasmeen Khan</h2>
          <span className="gold-rule mx-auto mt-6 block w-28" />
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Glamour Hair &amp; Beauty Studio was founded in 2004 by Ms. Yasmeen Khan, who continues to own and manage
            the salon. Together with her team of skilled professionals, she is committed to providing professional,
            affordable hair and beauty services in a friendly and welcoming environment.
          </p>
        </div>
      </section>

      <section className="border-y border-gold/30 bg-black">
        <div className="mx-auto grid max-w-7xl gap-px bg-gold/20 lg:grid-cols-2">
          <div className="reveal bg-black px-5 py-16 sm:px-12">
            <p className="eyebrow">Our Philosophy</p>
            <p className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              Great hair isn&apos;t about trends alone. It&apos;s about <span className="text-gold italic">knowing the person</span> in the chair.
            </p>
          </div>
          <div className="reveal bg-black px-5 py-16 [--delay:150ms] sm:px-12">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              To deliver quality services at affordable prices in a clean, comfortable, friendly and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Our Commitment" title="What you can expect" />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-gold/30 bg-gold/20 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="reveal bg-black p-7">
              <Icon className="size-7 text-gold" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <SectionHeading eyebrow="Our Gallery" title="A glimpse of our work" />
        <div className="mt-12">
          <Gallery />
        </div>
      </section>

      <VisitCTA />
    </>
  );
}
