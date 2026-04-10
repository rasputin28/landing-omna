"use client";

import { useEffect, useRef, useState } from "react";

const included = [
  "14 días de trabajo dedicado",
  "Hasta 5 entrevistas con tu equipo",
  "Análisis y scoring interno de procesos",
  "Matriz de riesgos documentada",
  "Reporte ejecutivo del diagnóstico",
  "Propuesta con ROI calculado por proyecto",
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-surface/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Inversión
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          El diagnóstico es el primer paso
        </h2>
        <p className="mt-4 text-lg text-muted">
          Entendemos tu operación antes de invertir un peso en tecnología.
        </p>

        <div
          className={`mt-12 rounded-2xl border border-accent/40 bg-accent/5 p-10 transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-bold text-accent">
              $27,000
            </span>
            <span className="text-xl text-muted">MXN + IVA</span>
          </div>
          <p className="mt-2 text-sm text-muted">Pago único · Antes de iniciar</p>

          <div className="mt-8 text-left max-w-md mx-auto">
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
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
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm font-semibold text-accent">
              100% acreditable al proyecto de implementación
            </p>
            <p className="mt-1 text-xs text-muted">
              Si decides avanzar, la inversión del diagnóstico se descuenta del costo total.
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:scale-105"
          >
            Agendar mi diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}
