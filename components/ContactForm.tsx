"use client";

import { useState } from "react";
import { services, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

const field =
  "mt-2 w-full rounded-sm border border-white/20 bg-black px-4 py-3.5 text-base text-white placeholder:text-white/35 transition-colors focus:border-gold focus:outline-none";

// No email service is configured, so the form hands the enquiry to WhatsApp
// rather than pretending it was delivered.
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const message = [
      "Hello Glamour Hair & Beauty Studio,",
      "",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Service of interest: ${d.get("service")}`,
      "",
      String(d.get("message") || "I would like to know more about this service."),
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className="block text-sm font-medium">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[+0-9 ()-]{7,20}"
            title="Please enter a valid phone number"
            className={field}
            placeholder="+92 3XX XXXXXXX"
          />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Service of interest
        <select name="service" required defaultValue="" className={field}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Special Offers & Packages</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Message
        <textarea name="message" rows={4} maxLength={800} className={field} placeholder="Tell us what you have in mind, or your preferred day and time." />
      </label>
      <button type="submit" className="btn btn-gold w-full sm:w-auto">
        <WhatsAppIcon /> Send via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-white/55" role="status">
        {opened
          ? "WhatsApp has opened with your message ready. Please press send in WhatsApp — your enquiry reaches us only once it is sent there."
          : "Submitting opens WhatsApp with your details pre-filled. Nothing is sent until you press send in WhatsApp."}
      </p>
    </form>
  );
}
