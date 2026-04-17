"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { end: 150, prefix: "+", suffix: "", label: "Proyectos" },
  { end: 9, prefix: "", suffix: "", label: "Países" },
  { end: 3, prefix: "+", suffix: "", label: "Años" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-accent animate-fade-in-up">
          Un dato que ya conoces
        </p>
        <p className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.2] animate-fade-in-up animation-delay-100">
          El 70% de los pedidos en distribuidoras y fabricantes B2B llegan por WhatsApp, correo o llamada.
        </p>
        <p className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in-up animation-delay-200">
          Y el <span className="text-accent">100%</span> se capturan a mano.
        </p>
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Eso tiene un costo. Y no es solo tiempo.
        </p>

        <a
          href="#contacto"
          className="mt-12 inline-flex items-center rounded-full bg-accent px-10 py-5 text-lg sm:text-xl font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] animate-fade-in-up animation-delay-400"
        >
          Agenda 30 minutos
        </a>
      </div>

      <div className="relative z-10 mt-24 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 animate-fade-in-up animation-delay-600">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-5 sm:p-6 rounded-2xl bg-surface/60 border border-border/50"
          >
            <div className="text-4xl sm:text-5xl font-bold text-accent">
              <AnimatedCounter
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="mt-2 text-sm sm:text-base text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
