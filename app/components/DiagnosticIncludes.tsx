"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    number: "01",
    title: "Operación actual",
    description:
      "Cómo trabajan hoy: procesos manuales, flujos de información y dónde está el tiempo del equipo.",
  },
  {
    number: "02",
    title: "Stack tecnológico",
    description:
      "Qué sistemas usan, qué habla con qué, qué está roto o desconectado — y qué se puede conectar.",
  },
  {
    number: "03",
    title: "Cuellos de botella",
    description:
      "Dónde se pierde tiempo, dinero y capacidad de escala. Identificamos los puntos de mayor dolor.",
  },
  {
    number: "04",
    title: "Inventario de iniciativas",
    description:
      "Transformamos todas las ideas y áreas de oportunidad en iniciativas clasificadas: proyectos, miniproyectos y herramientas.",
  },
  {
    number: "05",
    title: "Scoring y priorización",
    description:
      "Qué automatizar primero según impacto, urgencia y viabilidad técnica. Un roadmap con el orden correcto.",
  },
  {
    number: "06",
    title: "Matriz de riesgos",
    description:
      "Riesgos de implementación identificados antes de invertir. Seguridad, integraciones y dependencias críticas.",
  },
];

export default function DiagnosticIncludes() {
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
    <section ref={ref} className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          ¿Qué incluye?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Diagnóstico Digital OMNA
        </h2>
        <p className="mt-4 text-center text-lg text-muted">
          14 días. 6 pasos. Sin interrumpir tu operación.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.number}
              className={`rounded-2xl border border-border bg-background/60 p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl font-bold text-accent/30">
                {item.number}
              </span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
