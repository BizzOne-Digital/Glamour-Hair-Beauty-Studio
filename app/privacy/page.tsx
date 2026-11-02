import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 font-serif text-5xl">Privacy Policy</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-white/75">
        <p>
          This website is informational. It does not create accounts, take payments or store the details you type
          into our enquiry form on any server.
        </p>
        <h2 className="pt-4 font-serif text-3xl text-white">Enquiries via WhatsApp</h2>
        <p>
          When you submit the enquiry form or tap a WhatsApp button, your browser opens WhatsApp with a pre-filled
          message. Your details are shared with {site.name} only if you choose to send that message. WhatsApp&apos;s
          own privacy policy applies to messages sent through it.
        </p>
        <h2 className="pt-4 font-serif text-3xl text-white">How we use your details</h2>
        <p>
          We use the name, phone number and message you send only to respond to your enquiry and arrange your
          appointment. We do not sell or share your details with third parties.
        </p>
        <h2 className="pt-4 font-serif text-3xl text-white">Maps</h2>
        <p>Our contact pages include an embedded Google Map, which is subject to Google&apos;s privacy policy.</p>
        <h2 className="pt-4 font-serif text-3xl text-white">Contact</h2>
        <p>
          For any privacy question, call or WhatsApp us on <a href={site.phoneHref} className="text-gold">{site.phone}</a>.
        </p>
      </div>
    </article>
  );
}
