import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { fullAddress, mapsUrl, site, waLink } from "@/lib/site";
import { PageHero, WhatsAppIcon } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/VisitCTA";

export const metadata: Metadata = {
  title: "Contact Us — Visit Our Karachi Salon",
  description: `Call, WhatsApp or visit Glamour Hair & Beauty Studio at ${fullAddress}. Open Saturday to Thursday, 11 AM – 8 PM.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phone, href: waLink(), external: true },
    { icon: MapPin, label: "Visit", value: fullAddress, href: mapsUrl, external: true },
    ...(site.email ? [{ icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` }] : []),
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact Us"
        title={<>Your next look <span className="text-gold-metal italic">starts here.</span></>}
        text="Message us on WhatsApp, give us a call, or drop by the studio. We are happy to help you choose the right service."
        image="/images/contact-salon.jpg"
        alt="Elegant salon interior with mirrors and styling chairs"
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="reveal space-y-4">
          {cards.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="group flex items-start gap-5 rounded-sm border border-white/15 p-6 transition-colors hover:border-gold"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.2em] text-white/50 uppercase">{label}</span>
                <span className="mt-1 block text-lg group-hover:text-gold">{value}</span>
              </span>
            </a>
          ))}
          <div className="flex items-start gap-5 rounded-sm border border-white/15 p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xs tracking-[0.2em] text-white/50 uppercase">Business hours</h2>
              <ul className="mt-1 text-lg">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: <span className={h.time === "Closed" ? "text-gold" : ""}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal rounded-sm border border-gold/40 p-6 sm:p-10">
          <p className="eyebrow">Send an enquiry</p>
          <h2 className="mt-3 mb-8 font-serif text-4xl">How can we help?</h2>
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-serif text-4xl">Find the studio</h2>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            <Navigation className="size-4" aria-hidden="true" /> Get Directions
          </a>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
