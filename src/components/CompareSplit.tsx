"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CompareSplitProps {
  src: string;
  alt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/** Comparación fija al 50% — sucio izquierda, limpio derecha */
export default function CompareSplit({
  src,
  alt = "Comparación antes y después del lavado",
  beforeLabel = "Antes",
  afterLabel = "Después",
  className = "",
}: CompareSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const position = 50;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={className} ref={containerRef}>
      <div className="relative aspect-[800/449] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-tertiary md:rounded-3xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
          draggable={false}
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full" style={{ width: width || "100%" }}>
            <Image
              src={src}
              alt={`${alt} — ${beforeLabel}`}
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 560px"
              draggable={false}
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_16px_rgba(0,0,0,0.25)]"
          style={{ left: `${position}%` }}
        />

        <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          {beforeLabel}
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          {afterLabel}
        </div>
      </div>
    </div>
  );
}
