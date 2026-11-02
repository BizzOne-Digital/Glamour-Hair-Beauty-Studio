import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { fullAddress, mapsEmbedUrl, mapsUrl, site } from "@/lib/site";
import { WhatsAppButton, WhatsAppIcon } from "./ui";

export function VisitCTA({ showMap = true }: { showMap?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-gold/30">
      <Image src="/images/contact-salon.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-black/85 to-black" />
      <div className={`mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 ${showMap ? "lg:grid-cols-2" : ""}`}>
        <div className="reveal">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Your next look <span className="text-gold-metal italic">starts here.</span>
          </h2>
          <p className="mt-5 max-w-lg text-white/70">
            Discover professional hair styling, colouring and grooming services in a comfortable and welcoming environment.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Call</dt>
                <dd><a href={site.phoneHref} className="text-lg hover:text-gold">{site.phone}</a></dd>
              </div>
            </div>
            <div className="flex gap-4">
              <WhatsAppIcon className="mt-1 size-5 shrink-0 text-gold" />
              <div>
                <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">WhatsApp</dt>
                <dd className="text-lg">{site.phone}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Address</dt>
                <dd className="text-white/85">
                  {fullAddress}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <dt className="text-xs tracking-[0.2em] text-white/50 uppercase">Hours</dt>
                {site.hours.map((h) => (
                  <dd key={h.days} className="text-white/85">{h.days}: {h.time}</dd>
                ))}
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-gold">Contact Us</Link>
            <WhatsAppButton />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Navigation className="size-4" aria-hidden="true" /> Get Directions
            </a>
          </div>
        </div>

        {showMap && <MapEmbed />}
      </div>
    </section>
  );
}

export function MapEmbed() {
  return (
    <figure className="reveal">
      <div className="overflow-hidden rounded-sm border border-gold/40">
        <iframe
          src={mapsEmbedUrl}
          title={`Map showing ${fullAddress}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full grayscale-[0.6] invert-[0.9] hue-rotate-180 lg:h-full lg:min-h-[460px]"
        />
      </div>
      <figcaption className="mt-3 text-xs text-white/50">
        Map shows our area in Karachi. Please call or WhatsApp if you need help finding us.
      </figcaption>
    </figure>
  );
}
