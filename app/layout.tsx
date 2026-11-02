import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/ui";
import { RevealObserver } from "@/components/Motion";
import { Splash } from "@/components/Splash";
import { fullAddress, mapsUrl, services, site, waLink } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Hair Salon in Karachi Since 2004`,
    template: `%s | ${site.name}`,
  },
  description:
    "Professional hair salon in Karachi for ladies and gents since 2004. Haircuts, colouring, highlights, styling, treatments and gents' grooming on Abu Al Isphani Road, near Gulshan-e-Iqbal.",
  keywords: [
    "hair salon in Karachi", "beauty salon Karachi", "hair colouring Karachi", "ladies salon Gulshan-e-Iqbal",
    "gents grooming Karachi", "hair cutting Karachi", "Abul Hasan Isphahani Road salon",
  ],
  openGraph: { type: "website", siteName: site.name, locale: "en_PK", images: ["/logo/logo-full.png"] },
};

const splashScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('glamour-splash'))d.classList.add('no-splash');else sessionStorage.setItem('glamour-splash','1')}catch(e){}})()`;

export const viewport: Viewport = { themeColor: "#000000" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  slogan: site.tagline,
  foundingDate: "2004-03",
  telephone: "+923328289434",
  url: site.url,
  image: `${site.url}/images/about-interior.jpg`,
  logo: `${site.url}/logo/logo-full.png`,
  priceRange: "Contact for pricing",
  hasMap: mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: ["Karachi", "Gulshan-e-Iqbal"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "11:00",
    closes: "20:00",
  },
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  description: `Hair and beauty studio for ladies and gents at ${fullAddress}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Before first paint: mark JS available (scroll reveals start hidden, no flash) and
            skip the splash if it already played this session. */}
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
      </head>
      <body id="top" className="flex min-h-screen flex-col overflow-x-clip">
        <a href="#main" className="sr-only z-50 bg-gold px-4 py-2 text-black focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          Skip to content
        </a>
        <Splash />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="enter fixed right-5 bottom-5 z-30 grid size-14 [--d:1.2s] place-items-center rounded-full bg-gold text-black shadow-[0_10px_40px_-8px_rgb(212_175_55/0.6)] transition-transform hover:scale-110"
        >
          <WhatsAppIcon className="size-7" />
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
