"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

// Horizontal lockup cut from the client's master logo (public/logo); the full
// stacked logo is shown in the footer.
export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} — home`}>
      <Image src="/logo/emblem.png" alt="" width={800} height={600} priority className="h-12 w-auto transition-[height] duration-500 sm:h-16 sm:group-data-[scrolled=true]/header:h-12" />
      <Image src="/logo/wordmark.png" alt={site.name} width={1204} height={330} priority className="h-8 w-auto transition-[height] duration-500 sm:h-11 sm:group-data-[scrolled=true]/header:h-9" />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="border-b border-gold/20 bg-black text-[0.72rem] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 gap-y-1 px-5 py-2 sm:justify-between sm:px-8">
          <p className="hidden items-center gap-2 md:flex">
            <MapPin className="size-3.5 text-gold" aria-hidden="true" />
            {site.address.street}, {site.address.city} - {site.address.postalCode}
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone className="size-3.5 text-gold" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="hidden items-center gap-2 sm:flex">
              <Clock className="size-3.5 text-gold" aria-hidden="true" />
              {site.hoursShort}
            </p>
          </div>
        </div>
      </div>

      <header
        data-scrolled={scrolled}
        style={{ viewTransitionName: "site-header" }}
        className="group/header sticky top-0 z-40 border-b border-gold/20 bg-black transition-shadow duration-500 data-[scrolled=true]:shadow-[0_12px_40px_-12px_rgb(0_0_0/0.9)]"
      >
        <div className="mx-auto flex h-20 max-w-7xl transition-[height] duration-500 group-data-[scrolled=true]/header:h-16 items-center justify-between gap-6 px-5 sm:px-8">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="group relative py-2 text-[0.78rem] font-semibold tracking-[0.18em] text-white/85 uppercase transition-colors hover:text-gold aria-[current=page]:text-gold"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hidden sm:inline-flex"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-12 place-items-center rounded-full border border-gold/50 text-gold lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 lg:hidden ${open ? "visible" : "invisible"}`}
        inert={!open}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-gold/30 bg-black px-8 py-6 transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-12 place-items-center rounded-full border border-gold/50 text-gold"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="gold-rule my-8" />
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ transitionDelay: open ? `0ms, ${200 + i * 70}ms, ${200 + i * 70}ms` : "0ms" }}
                    className={`flex items-baseline gap-4 py-3 font-serif text-3xl text-white transition-[color,opacity,translate] duration-700 ease-out hover:text-gold aria-[current=page]:text-gold ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                  >
                    <span className="font-sans text-xs text-gold/70">0{i + 1}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-4 text-sm text-white/70">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a href={site.phoneHref} className="btn btn-outline w-full">
              <Phone className="size-4" aria-hidden="true" /> {site.phone}
            </a>
            <p className="pt-2 text-center text-xs">{site.hoursShort}</p>
          </div>
        </div>
      </div>
    </>
  );
}
