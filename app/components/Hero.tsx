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
  { end: 150, prefix: "+", suffix: "", label: "Implementaciones" },
  { end: 9, prefix: "", suffix: "", label: "Países" },
  { end: 3, prefix: "+", suffix: " años", label: "De experiencia en IA aplicada" },
  { end: 140, prefix: "+", suffix: "", label: "Empresas atendidas" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up">
          Escalamos tu negocio{" "}
          <span className="text-accent">sin aumentar tu equipo</span>{" "}
          ni tu carga operativa
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Diseñamos sistemas tecnológicos a la medida que conectan procesos,
          eliminan fricción y le dan a tu equipo tiempo para crecer.
        </p>

        <a
          href="#contacto"
          className="mt-10 inline-flex items-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          Agendar llamada de descubrimiento
        </a>
      </div>

      <div className="relative z-10 mt-20 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up animation-delay-600">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-4 rounded-2xl bg-surface/60 border border-border/50"
          >
            <div className="text-3xl sm:text-4xl font-bold text-accent">
              <AnimatedCounter
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="mt-2 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
