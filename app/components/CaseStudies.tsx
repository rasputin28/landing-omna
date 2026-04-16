"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    tag: "Distribucion",
    title: "Pedidos que antes tardaban horas en capturarse, ahora se procesan solos",
    pain: "Equipos capturando pedidos manuales y cuellos de botella al cierre de mes.",
    metrics: [
      { value: "-95%", label: "Tiempo de captura" },
      { value: "24/7", label: "Operacion continua" },
      { value: "< 6 meses", label: "ROI estimado" },
    ],
  },
  {
    tag: "Finanzas operativas",
    title: "Discrepancias de facturas detectadas automaticamente",
    pain: "Cobros incorrectos de fleteras pasaban desapercibidos durante meses.",
    metrics: [
      { value: "100s de miles", label: "Monto recuperado" },
      { value: "Minutos", label: "Tiempo de revision" },
      { value: "Mensual", label: "Control continuo" },
    ],
  },
  {
    tag: "Direccion general",
    title: "Informacion financiera en tiempo real para decidir a tiempo",
    pain: "Reportes llegaban tarde y las decisiones se tomaban con datos viejos.",
    metrics: [
      { value: "En vivo", label: "Visibilidad diaria" },
      { value: "-80%", label: "Trabajo manual" },
      { value: "Mejor", label: "Calidad de decision" },
    ],
  },
  {
    tag: "Fuerza de ventas",
    title: "Asistentes con catalogo tecnico para respuestas inmediatas",
    pain: "Vendedores tardaban meses en dominar productos complejos.",
    metrics: [
      { value: "Instantaneo", label: "Tiempo de respuesta" },
      { value: "-70%", label: "Tiempo onboarding" },
      { value: "+", label: "Conversion comercial" },
    ],
  },
];

export default function CaseStudies() {
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
          Resultados
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          Lo que cambia cuando la operacion escala bien
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={c.tag}
              className={`rounded-2xl border border-border bg-surface/60 p-8 transition-all duration-700 hover:border-accent/30 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                {c.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{c.pain}</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-accent">
                      {m.value}
                    </div>
                    <div className="text-xs text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
