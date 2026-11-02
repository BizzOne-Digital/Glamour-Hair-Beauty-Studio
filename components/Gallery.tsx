"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site";

export function Gallery({
  limit = gallery.length,
  gridClass = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  showButton = false,
}: {
  limit?: number;
  gridClass?: string;
  showButton?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const items = gallery; // lightbox always browses the full set
  const current = items[index];

  const open = (i: number) => {
    setIndex(i);
    ref.current?.showModal();
  };
  const step = (d: number) => setIndex((i) => (i + d + items.length) % items.length);

  return (
    <>
      <ul className={`grid ${gridClass} gap-3 sm:gap-4`}>
        {items.slice(0, limit).map((img, i) => (
          <li key={img.src} className="reveal">
            <button
              type="button"
              onClick={() => open(i)}
              className="photo-card aspect-[4/5] w-full"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      {showButton && (
        <button type="button" onClick={() => open(0)} className="btn btn-outline mt-6">
          View Gallery
        </button>
      )}

      <dialog
        ref={ref}
        onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 text-white"
        aria-label="Gallery image viewer"
      >
        <figure className="relative flex h-[85dvh] w-[92vw] items-center justify-center">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="92vw"
            className="enter-img object-contain"
          />
          <figcaption className="absolute -bottom-2 left-0 right-0 translate-y-full text-center text-sm text-white/70">
            {current.alt} · {index + 1} / {items.length}
          </figcaption>
        </figure>
        <button onClick={() => ref.current?.close()} className="fixed top-4 right-4 grid size-12 place-items-center rounded-full border border-gold/60 bg-black text-gold" aria-label="Close">
          <X className="size-5" />
        </button>
        <button onClick={() => step(-1)} className="fixed top-1/2 left-3 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-black text-gold" aria-label="Previous image">
          <ChevronLeft className="size-5" />
        </button>
        <button onClick={() => step(1)} className="fixed top-1/2 right-3 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-black text-gold" aria-label="Next image">
          <ChevronRight className="size-5" />
        </button>
      </dialog>
    </>
  );
}
