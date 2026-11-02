import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUp, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { fullAddress, mapsUrl, nav, site, waLink } from "@/lib/site";
import Image from "next/image";
import { WhatsAppIcon } from "./ui";

async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative border-t border-gold/40 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr]">
        <div>
          <Link href="/" aria-label={`${site.name} — home`} className="block w-52">
            <Image src="/logo/logo-full.png" alt={`${site.name} logo`} width={800} height={800} sizes="208px" />
          </Link>
          <p className="mt-4 max-w-xs font-serif text-xl leading-snug text-gold italic">{site.tagline}.</p>
          {Object.entries(site.social).length > 0 && (
            <ul className="mt-6 flex gap-4 text-sm">
              {Object.entries(site.social).map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-gold">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="eyebrow">Quick Links</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label === "About" ? "About Us" : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-6 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic">
                {fullAddress}
              </address>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-gold">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold">
                <WhatsAppIcon className="size-4 shrink-0 text-gold" /> WhatsApp {site.phone}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-gold">
                  <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" /> {site.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Business Hours</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-white">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-7">
            <Navigation className="size-4" aria-hidden="true" /> Get Directions
          </a>
        </div>
      </div>

      <div className="gold-rule" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-8">
        <p>
          © <Year /> {site.name}. All rights reserved.
        </p>
        <p className="font-serif text-lg text-gold italic">{site.brandLine}</p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          <a
            href="#top"
            className="grid size-11 place-items-center rounded-full border border-gold/60 text-gold transition-transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
