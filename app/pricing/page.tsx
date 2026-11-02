import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { services, site, waLink } from "@/lib/site";
import { PageHero, WhatsAppButton } from "@/components/ui";
import { VisitCTA } from "@/components/VisitCTA";

export const metadata: Metadata = {
  title: "Pricing — Contact Us for a Quote",
  description:
    "Affordable hair and beauty services in Karachi. Prices depend on the service, hair length and condition — message Glamour Hair & Beauty Studio on WhatsApp for a quote.",
  alternates: { canonical: "/pricing" },
};

const factors = [
  { title: "The service you choose", text: "A trim, a full colour and a special occasion style each take different time and products." },
  { title: "Hair length & condition", text: "Longer, thicker or previously treated hair can need more product and care." },
  { title: "Treatment requirements", text: "Colour correction, lightening and chemical services are planned around your hair." },
  { title: "Your preferences", text: "Add-ons and personalised finishes are always discussed with you first." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        ctaLabel="Get a Quote"
        ctaMessage="Hello Glamour Hair & Beauty Studio, could you please share your prices? I am interested in:"
        eyebrow="Pricing"
        title={<>Fair prices, <span className="text-gold-metal italic">tailored to you.</span></>}
        text="Every head of hair is different, so we quote for your exact needs — with no surprises and no obligation."
        image="/images/pricing-tools.jpg"
        alt="Professional clippers and grooming tools laid out on a wooden counter"
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="reveal self-start rounded-sm border border-gold/60 p-8 text-center sm:p-12 lg:sticky lg:top-28">
          <p className="eyebrow">Quality at affordable prices</p>
          <h2 className="text-gold-metal mt-5 font-serif text-5xl leading-tight sm:text-6xl">Contact Us for Pricing</h2>
          <p className="mx-auto mt-5 max-w-sm leading-relaxed text-white/70">
            Send us the service you are interested in and we will reply with an accurate quote.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <WhatsAppButton variant="gold" label="Get a Quote on WhatsApp" message="Hello Glamour Hair & Beauty Studio, could you please share your prices? I am interested in:" />
            <a href={site.phoneHref} className="btn btn-outline">
              <Phone className="size-4" aria-hidden="true" /> Call {site.phone}
            </a>
          </div>
        </div>

        <div>
          <h2 className="reveal font-serif text-4xl">What shapes your price</h2>
          <ol className="mt-8 space-y-6">
            {factors.map((f, i) => (
              <li key={f.title} className="reveal flex gap-6 border-b border-white/10 pb-6">
                <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-lg font-semibold">{f.title}</span>
                  <span className="mt-1 block text-white/65">{f.text}</span>
                </span>
              </li>
            ))}
          </ol>

          <h2 className="reveal mt-16 font-serif text-4xl">Ask about a specific service</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug} className="reveal">
                <a
                  href={waLink(`Hello Glamour Hair & Beauty Studio, could you please share the price for ${s.title}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center gap-4 rounded-sm border border-white/15 px-4 py-3 transition-colors hover:border-gold"
                >
                  <span className="w-6 shrink-0 font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-sm">{s.title}</span>
                  <ArrowUpRight className="size-4 text-white/40 transition-colors group-hover:text-gold" aria-hidden="true" />
                  <span className="sr-only">(ask price on WhatsApp)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VisitCTA showMap={false} />
    </>
  );
}
