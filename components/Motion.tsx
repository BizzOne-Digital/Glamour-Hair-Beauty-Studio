"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** Milliseconds left on the first-visit splash (0 once it has finished or was skipped). */
function splashRemaining() {
  const s = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--splash")) || 0;
  return Math.max(0, s * 1000 - performance.now());
}

/** Adds .is-in to every .reveal / .reveal-media element as it scrolls into view. */
export function RevealObserver() {
  const pathname = usePathname();
  const firstPage = useRef(true);

  useEffect(() => {
    // After the landing page, retire the splash delay so new pages animate straight away.
    if (!firstPage.current) document.documentElement.classList.add("no-splash");
    firstPage.current = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    // On the landing page, hold reveals until the splash panels open.
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-in), .reveal-media:not(.is-in)").forEach((el) => io.observe(el));
    }, splashRemaining());
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}

/** Counts up to `to` once mounted; server HTML already shows the final number. */
export function CountUp({ to, delay = 0, duration = 1800 }: { to: number; delay?: number; duration?: number }) {
  const [value, setValue] = useState(to);
  const raf = useRef(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let start = 0;
    const tick = (t: number) => {
      start ||= t;
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    const reset = setTimeout(() => setValue(0)); // before the number fades in
    const timer = setTimeout(() => (raf.current = requestAnimationFrame(tick)), delay + splashRemaining());
    return () => {
      clearTimeout(reset);
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [to, delay, duration]);

  return <span className="tabular-nums">{value}</span>;
}
