import Image from "next/image";
import { site } from "@/lib/site";

// Fixed positions keep the gold dust identical between server and client renders.
const dust = [
  [8, 78, 3, 4.2, 0.1], [16, 64, 2, 3.6, 0.6], [24, 88, 4, 4.8, 0.3], [33, 70, 2, 3.4, 0.9],
  [41, 92, 3, 4.4, 0.2], [49, 74, 2, 3.8, 1.1], [57, 86, 4, 4.6, 0.5], [64, 68, 2, 3.5, 0.8],
  [71, 90, 3, 4.1, 0.0], [78, 76, 2, 3.9, 1.2], [85, 84, 4, 4.7, 0.4], [92, 66, 2, 3.7, 0.7],
  [12, 95, 2, 4.3, 1.4], [88, 94, 3, 4.0, 1.0],
] as const;

/**
 * First-visit splash. Pure CSS timeline (globals.css "Splash"), so it plays from first paint
 * and hides itself even without JavaScript. Shown once per browser session.
 */
export function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-panel splash-top" />
      <div className="splash-panel splash-bottom" />

      <div className="splash-dust">
        {dust.map(([x, y, s, dur, delay], i) => (
          <span
            key={i}
            style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="splash-content">
        <div className="splash-emblem">
          <svg viewBox="0 0 120 120" className="splash-rings">
            <circle cx="60" cy="60" r="56" pathLength={1} className="splash-ring" />
            <circle cx="60" cy="60" r="59" className="splash-ring-dash" />
          </svg>
          <Image src="/logo/emblem.png" alt="" width={800} height={600} priority sizes="280px" className="splash-emblem-img" />
        </div>

        <div className="splash-word">
          <Image src="/logo/wordmark.png" alt="" width={1204} height={330} priority sizes="420px" />
          <span className="splash-shine" />
        </div>

        <p className="splash-tag">{site.tagline}</p>
        <div className="splash-bar">
          <span />
        </div>
        <p className="splash-est">Since 2004 · Karachi</p>
      </div>
    </div>
  );
}
