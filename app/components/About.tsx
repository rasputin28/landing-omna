"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Entendemos primero, construimos después",
    body:
      "Antes de proponer nada, mapeamos tu operación real — sin suposiciones. Entrevistamos al equipo que ejecuta los procesos, no solo a la dirección.",
  },
  {
    title: "Todo proyecto sale con ROI calculado",
    body:
      "Sabes cuánto cuesta no resolverlo antes de saber cuánto cuesta resolverlo. Sin letra chica, sin sorpresas a la mitad del proyecto.",
  },
  {
    title: "El conocimiento queda dentro de tu empresa",
    body:
      "Trabajamos con un AI Champion tuyo para que la transformación no dependa de nosotros. Si nos vamos, tu empresa sigue funcionando.",
  },
  {
    title: "Si no somos la solución, te lo decimos",
    body:
      "Y te recomendamos quién sí puede ayudarte. Preferimos eso a vender un proyecto que no va a funcionar.",
  },
];

const stats = [
  { value: "150+", label: "Proyectos" },
  { value: "9", label: "Países" },
  { value: "3+", label: "Años" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={ref} className="py-24 px-6 bg-surface/40 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Por qué OMNA
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          No llegamos con una solución. Llegamos a entender tu negocio.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-border bg-background/60 p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-border bg-surface/50 p-6 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${320 + idx * 80}ms` }}
            >
              <div className="text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
