"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: 8 + Math.random() * 36,
        left: Math.random() * 100,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 rounded-full opacity-40"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(188,221,243,0.35))",
            border: "1px solid rgba(255,255,255,0.5)",
            animation: `rise ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
