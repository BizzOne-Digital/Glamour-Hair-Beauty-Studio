import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-serif text-5xl">Terms &amp; Conditions</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-white/75">
        <p>By using this website you agree to the following terms.</p>
        <h2 className="pt-4 font-serif text-3xl text-white">Information on this site</h2>
        <p>
          Service descriptions are a general guide. The exact service, duration and price are confirmed with you
          directly before any work begins.
        </p>
        <h2 className="pt-4 font-serif text-3xl text-white">Pricing &amp; offers</h2>
        <p>
          Prices are quoted individually. Packages and seasonal promotions are subject to availability and are
          confirmed only when {site.name} confirms them to you directly.
        </p>
        <h2 className="pt-4 font-serif text-3xl text-white">Photography</h2>
        <p>Images on this website are for illustration of our services and studio atmosphere.</p>
        <h2 className="pt-4 font-serif text-3xl text-white">Contact</h2>
        <p>
          Questions about these terms? Call or WhatsApp us on <a href={site.phoneHref} className="text-gold">{site.phone}</a>.
        </p>
      </div>
    </article>
  );
}
