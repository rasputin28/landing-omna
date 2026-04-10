"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    tag: "Manufactura B2B",
    title: "La fabricante que no podía salir de cuatro estados",
    pain: "Expansión frenada, cero presencia digital, desarrollo lento",
    metrics: [
      { value: "7x", label: "Alcance comercial" },
      { value: "10x", label: "Velocidad de desarrollo" },
      { value: "< 30 días", label: "Recuperación inversión" },
    ],
  },
  {
    tag: "Distribución · SAP",
    title: "La distribuidora que dejaba dinero en la mesa cada mes",
    pain: "70% pedidos manuales, $400K MXN en errores de fletera en Q1",
    metrics: [
      { value: "$1.6M", label: "MXN ahorro anual" },
      { value: "−95%", label: "Tiempo en logística" },
      { value: "< 3 meses", label: "Recuperación inversión" },
    ],
  },
  {
    tag: "Consumo masivo · Bebidas",
    title: "La marca global con equipo de marketing de 3 personas",
    pain: "Producción de contenido lenta, reportes manuales semanales",
    metrics: [
      { value: "3x", label: "Output de contenido" },
      { value: "−85%", label: "Tiempo de lanzamiento" },
      { value: "9 hrs", label: "Liberadas por semana" },
    ],
  },
  {
    tag: "Iluminación · NetSuite",
    title: "La empresa que pagaba de más sin saberlo",
    pain: "Órdenes de compra manuales, errores financieros no detectados",
    metrics: [
      { value: "−80%", label: "Tiempo conciliación" },
      { value: "50 hrs", label: "Liberadas al mes" },
      { value: "< 2 meses", label: "Recuperación inversión" },
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
          Impacto real. ROI calculado.
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          Empresas que ya lo vivieron
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
