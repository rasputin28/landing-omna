"use client";

import { useEffect, useRef, useState } from "react";

const signals = [
  {
    stat: "10x",
    rest: "más rápido",
    copy:
      "Construir software a la medida hoy es 10 veces más rápido que hace 3 años. Lo que antes tomaba 6 meses ahora toma semanas. El costo bajó en la misma proporción.",
  },
  {
    stat: "$15T",
    rest: "USD en compras B2B manejadas por IA para 2028",
    copy:
      "Gartner proyecta que para 2028, el 90% de las compras B2B serán gestionadas por agentes de IA. Tus distribuidores ya esperan respuesta inmediata.",
  },
  {
    stat: "74%",
    rest: "de empresas lucha para escalar IA",
    copy:
      "BCG reporta que 74% de las empresas no logra escalar su implementación de IA. La diferencia entre las que sí lo logran: empezaron por entender su operación antes de construir.",
  },
];

export default function WhyNow() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="por-que-ahora" ref={ref} className="py-24 px-6 bg-surface/35 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Por qué ahora
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          El mercado ya se está moviendo. Quien automatiza primero, gana.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {signals.map((s, i) => (
            <div
              key={s.stat}
              className={`rounded-2xl border border-border bg-background/80 p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-bold text-accent">{s.stat}</div>
              <p className="mt-2 text-sm font-semibold text-foreground leading-snug">{s.rest}</p>
              <p className="mt-4 text-sm text-muted leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
