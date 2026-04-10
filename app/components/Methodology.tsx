"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    number: "01",
    title: "Diagnóstico",
    subtitle: "$27,000 MXN · 14 días",
    description:
      "Mapeamos tu operación completa, identificamos riesgos reales y encontramos oportunidades de digitalización que quizás ni sabías que existían. Te mostramos el potencial exacto de tu empresa.",
    accent: true,
  },
  {
    number: "02",
    title: "Plan de proyecto",
    subtitle: "Ya tienes el plan, el resto es tu decisión",
    description:
      "Con tus resultados, te construimos un plan de acción completo: qué automatizar primero, en qué orden, cuánto cuesta y cuánto puedes ganar. Te vas con un roadmap claro de cómo escalar tu empresa.",
    accent: false,
  },
  {
    number: "03",
    title: "Ejecución",
    subtitle: "Hasta el go live",
    description:
      "Implementamos, documentamos y capacitamos a tu equipo. SOPs, manuales y bootcamp de cierre incluidos. No dependes de nosotros para operar. Eso es intencional.",
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
    <section ref={ref} className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Metodología
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          3 Fases: Del Diagnóstico al Go Live
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
