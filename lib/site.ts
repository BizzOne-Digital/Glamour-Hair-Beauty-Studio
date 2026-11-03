// Single source of truth for business details, services, offers and imagery.
// Swap a photo by replacing the file in /public/images or editing the path here.

export const site = {
  name: "Glamour Hair & Beauty Studio",
  shortName: "Glamour",
  tagline: "Serving Generations with Style and Care Since 2004",
  brandLine: "Where Style Meets Elegance",
  established: "2004",
  foundingYear: 2004,
  experience: "22+",
  phone: "+92 332 8289434",
  phoneHref: "tel:+923328289434",
  whatsapp: "923328289434",
  // Hidden everywhere until the client confirms a real address.
  email: null as string | null,
  address: {
    street: "303 A5 Rabia Petal, Abu al Isphani Road",
    city: "Karachi",
    region: "Sindh",
    postalCode: "74400",
    country: "PK",
  },
  hoursShort: "Sat–Thu, 11 AM–8 PM · Friday Closed",
  hours: [
    { days: "Saturday – Thursday", time: "11:00 AM – 8:00 PM" },
    { days: "Friday", time: "Closed" },
  ],
  // Only add verified account URLs here; icons render only for non-empty entries.
  social: {} as Partial<Record<"facebook" | "instagram" | "tiktok" | "youtube", string>>,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const fullAddress = `${site.address.street}, ${site.address.city} – ${site.address.postalCode}, ${site.address.region} – Pakistan`;
const mapQuery = encodeURIComponent(fullAddress);
// Search-based map: searches the street address, not a verified Google Business pin.
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export const defaultMessage =
  "Hello Glamour Hair & Beauty Studio, I would like to enquire about your services. Could you please share more details?";

export function waLink(message = defaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  image: string;
  alt: string;
  audience: string;
};

export const services: Service[] = [
  {
    slug: "hair-cutting",
    title: "Hair Cutting & Trimming",
    summary:
      "Ladies' and gents' haircuts, precision cutting, layered cuts, graduated cuts, blunt cuts, trimming, and personalised hairstyles according to face shape, hair texture, and customer preferences.",
    details: ["Ladies' and gents' haircuts", "Precision cutting", "Layered, graduated and blunt cuts", "Trimming", "Personalised hairstyles for your face shape and hair texture"],
    image: "/images/service-cutting.jpg",
    alt: "Stylist precision-cutting a client's hair with scissors and comb",
    audience: "Ladies & Gents",
  },
  {
    slug: "styling-finishing",
    title: "Hair Styling & Finishing",
    summary:
      "Professional blow-drying, blowouts, curling, straightening, roller setting, thermal styling, brushing, and finishing techniques for everyday looks and special occasions.",
    details: ["Professional blow-drying and blowouts", "Curling and straightening", "Roller setting", "Thermal styling and brushing", "Finishing for everyday looks and special occasions"],
    image: "/images/service-styling.jpg",
    alt: "Stylist blow-drying a client's hair with a round brush",
    audience: "Ladies & Gents",
  },
  {
    slug: "hair-colouring",
    title: "Hair Colouring & Root Touch-Ups",
    summary:
      "Permanent and semi-permanent hair colouring, grey coverage, root touch-ups, full-head colouring, colour matching, and colour correction according to hair condition and customer requirements.",
    details: ["Permanent and semi-permanent colouring", "Grey coverage", "Root touch-ups", "Full-head colouring", "Colour matching and colour correction"],
    image: "/images/service-colouring.jpg",
    alt: "Woman with rich copper-red coloured hair",
    audience: "Ladies & Gents",
  },
  {
    slug: "lightening-highlighting",
    title: "Hair Lightening & Highlighting",
    summary:
      "Hair bleaching, highlighting, lowlighting, foil highlights, streaking, and toner application to achieve desired hair colours and effects.",
    details: ["Hair bleaching", "Highlighting and lowlighting", "Foil highlights", "Streaking", "Toner application"],
    image: "/images/service-lightening.jpg",
    alt: "Woman with soft blonde highlighted hair against a dark background",
    audience: "Ladies & Gents",
  },
  {
    slug: "chemical-straightening",
    title: "Chemical Hair Straightening & Relaxing",
    summary:
      "Professional chemical straightening, relaxing, and smoothing treatments, including appropriate hair assessment, product application, processing, neutralisation, and aftercare.",
    details: ["Chemical straightening", "Relaxing and smoothing treatments", "Hair assessment before treatment", "Product application, processing and neutralisation", "Aftercare guidance"],
    image: "/images/service-straightening.jpg",
    alt: "Woman with sleek, smooth straight hair",
    audience: "Ladies & Gents",
  },
  {
    slug: "permanent-waves",
    title: "Permanent Waving & Hair Texture Services",
    summary:
      "Permanent waving, curling, chemical texture modification, and related treatments using suitable techniques and products.",
    details: ["Permanent waving", "Curling", "Chemical texture modification", "Related texture treatments"],
    image: "/images/service-perm.jpg",
    alt: "Woman with voluminous natural curls",
    audience: "Ladies & Gents",
  },
  {
    slug: "shampoo-scalp-care",
    title: "Shampooing, Conditioning & Scalp Care",
    summary:
      "Professional shampooing, deep conditioning, scalp cleansing, scalp massage, moisturising treatments, and hair care services tailored to individual hair and scalp conditions.",
    details: ["Professional shampooing", "Deep conditioning", "Scalp cleansing and scalp massage", "Moisturising treatments", "Care tailored to your hair and scalp"],
    image: "/images/service-shampoo.jpg",
    alt: "Client relaxing at the wash basin during a professional shampoo",
    audience: "Ladies & Gents",
  },
  {
    slug: "hair-consultation",
    title: "Hair & Scalp Consultation",
    summary:
      "Personalised consultation, assessment of hair texture and scalp condition, evaluation of previous chemical treatments, and recommendations for appropriate hairstyles, colouring, treatments, and home maintenance.",
    details: ["Hair texture and scalp assessment", "Review of previous chemical treatments", "Hairstyle and colouring recommendations", "Treatment recommendations", "Home maintenance advice"],
    image: "/images/service-consultation.jpg",
    alt: "Stylist styling a smiling client's hair during an appointment",
    audience: "Ladies & Gents",
  },
  {
    slug: "special-occasion",
    title: "Special Occasion & Formal Hairstyling",
    summary:
      "Party hairstyles, formal hairstyling, updos, curls, bridal-event hairstyling, and customised looks for weddings and other special occasions.",
    details: ["Party hairstyles", "Formal hairstyling", "Updos and curls", "Bridal-event hairstyling", "Customised looks for weddings and occasions"],
    image: "/images/service-occasion.jpg",
    alt: "Stylist pinning an elegant updo for a special occasion",
    audience: "Ladies",
  },
  {
    slug: "gents-grooming",
    title: "Gents' Grooming & Hairstyling",
    summary:
      "Men's haircuts, trimming, hairstyling, beard trimming, beard shaping, hair colouring, grey coverage, and personalised grooming services.",
    details: ["Men's haircuts and trimming", "Hairstyling", "Beard trimming and beard shaping", "Hair colouring and grey coverage", "Personalised grooming"],
    image: "/images/service-gents.jpg",
    alt: "Barber styling a gentleman's haircut in a warm-lit grooming studio",
    audience: "Gents",
  },
];

export const offers = [
  {
    title: "Ladies' Hair Care Packages",
    text: "Haircuts, hairstyling, colouring, conditioning, and hair treatments.",
    image: "/images/offer-ladies.jpg",
    alt: "Woman with long, healthy flowing hair",
  },
  {
    title: "Gents' Grooming Packages",
    text: "Haircuts, beard trimming, styling, and grooming services.",
    image: "/images/offer-gents.jpg",
    alt: "Well-groomed gentleman in a dark suit",
  },
  {
    title: "Hair Colouring Packages",
    text: "Hair colouring, highlights, root touch-ups, and related treatments.",
    image: "/images/offer-colour.jpg",
    alt: "Woman with soft balayage-coloured hair",
  },
  {
    title: "Special Occasion Packages",
    text: "Hairstyling and beauty services for weddings, parties, and special events.",
    image: "/images/offer-occasion.jpg",
    alt: "Elegant braided bun hairstyle with decorative hair pins",
  },
];

export const appreciationOffers = [
  { title: "Loyal Customer Appreciation Offers", text: "Exclusive promotions to recognise and appreciate our valued customers." },
  { title: "Seasonal & Festive Offers", text: "Special packages during Eid, wedding seasons, and other occasions." },
];

export const gallery = [
  { src: "/images/gallery-1.jpg", alt: "Elegant low updo with a black turtleneck" },
  { src: "/images/gallery-2.jpg", alt: "Gentleman's hair being combed and styled" },
  { src: "/images/gallery-3.jpg", alt: "Stylist washing a client's hair at the basin" },
  { src: "/images/gallery-4.jpg", alt: "Barber blow-drying a gentleman's haircut" },
  { src: "/images/gallery-5.jpg", alt: "Sleek, shoulder-length straight bob" },
  { src: "/images/gallery-6.jpg", alt: "Barber shaping a beard with a straight razor" },
  { src: "/images/gallery-7.jpg", alt: "Long braided hairstyle in profile" },
  { src: "/images/about-studio.jpg", alt: "Modern salon interior with styling stations" },
];
