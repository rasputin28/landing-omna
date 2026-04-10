"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Proyectos",
    subtitle: "Desde $5,000 USD",
    description:
      "Soluciones a medida que OMNA construye contigo, con Project Plan y ROI calculado. Ideal para alto volumen, múltiples integraciones y lógica de negocio compleja.",
    features: [
      "Project Plan completo",
      "Arquitectura de integraciones",
      "ROI calculado",
      "Riesgo técnico gestionado por OMNA",
    ],
    accent: true,
  },
  {
    title: "Miniproyectos",
    subtitle: "Sin conocimiento técnico requerido",
    description:
      "Automatizaciones rápidas con Claude / Cowork. Se implementan en bootcamp en vivo con tu equipo. El cliente sale con la automatización activa.",
    features: [
      "Bootcamp en vivo",
      "Automatización funcional al terminar",
      "El equipo aprende a mantenerlo",
      "Sin IT interno necesario",
    ],
    accent: false,
  },
  {
    title: "Herramientas",
    subtitle: "Implementación inmediata",
    description:
      "Herramientas existentes que OMNA recomienda y conecta, o te presentamos partners especializados. Sin desarrollo custom.",
    features: [
      "Solución de mercado madura",
      "Activación directa",
      "OMNA como conector estratégico",
      "Costo conocido desde el inicio",
    ],
    accent: false,
  },
];

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Cómo organizamos lo que encontramos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Tres caminos según tu necesidad
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`rounded-2xl border p-8 flex flex-col transition-all duration-700 ${
                cat.accent
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-surface/60"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="text-xl font-bold">{cat.title}</h3>
              <p
                className={`mt-1 text-sm font-medium ${
                  cat.accent ? "text-accent" : "text-muted"
                }`}
              >
                {cat.subtitle}
              </p>
              <p className="mt-4 text-sm text-muted leading-relaxed flex-1">
                {cat.description}
              </p>
              <ul className="mt-6 space-y-2">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        cat.accent ? "text-accent" : "text-muted"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
