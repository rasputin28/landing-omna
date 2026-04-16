"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    number: "01",
    title: "Exploramos tu operacion",
    subtitle: "Entender antes de construir",
    description:
      "Nos metemos a entender tus procesos, sistemas desconectados y cuellos de botella para priorizar lo que mas impacto genera.",
    accent: true,
  },
  {
    number: "02",
    title: "Implementamos con tu equipo",
    subtitle: "Ejecucion enfocada en impacto",
    description:
      "Construimos y conectamos soluciones reales sobre tu operacion, sin romper lo que ya funciona ni agregar complejidad innecesaria.",
    accent: false,
  },
  {
    number: "03",
    title: "Capacitamos y transferimos",
    subtitle: "Autonomia interna con partners especializados",
    description:
      "Capacitamos a tu equipo y transferimos conocimiento con partners especializados para que la operacion quede dentro de tu empresa.",
    accent: false,
  },
];

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="como-trabajamos" ref={ref} className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Como trabajamos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Exploramos, implementamos y capacitamos
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`relative rounded-2xl border p-8 transition-all duration-700 ${
                phase.accent
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-surface/60"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-5xl font-bold text-border/60">
                {phase.number}
              </span>
              <h3 className="mt-4 text-xl font-bold">{phase.title}</h3>
              <p
                className={`mt-1 text-sm font-medium ${
                  phase.accent ? "text-accent" : "text-muted"
                }`}
              >
                {phase.subtitle}
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
