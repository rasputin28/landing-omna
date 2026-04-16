"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Distribucion y manufactura",
    subtitle: "Operaciones complejas y alto volumen",
    description:
      "Trabajamos con empresas de distribucion y manufactura donde los procesos crecen en complejidad junto con el negocio.",
    features: [
      "Procesos interdependientes entre ventas, operaciones y finanzas",
      "Multiples sistemas que no conversan entre si",
      "Alta sensibilidad a errores operativos",
      "Necesidad de escalar sin aumentar friccion",
    ],
    accent: true,
  },
  {
    title: "Empresas establecidas",
    subtitle: "+10 anos de operacion",
    description:
      "No somos para negocios en etapa inicial. Somos para empresas consolidadas que ya probaron su modelo y ahora necesitan escalar su operacion.",
    features: [
      "Mas de una decada operando en su industria",
      "Estructura operativa madura pero saturada",
      "Equipos que cargan procesos manuales criticos",
      "Direccion enfocada en crecimiento sostenible",
    ],
    accent: false,
  },
  {
    title: "Organizaciones con escala",
    subtitle: "+100 empleados y sistemas desconectados",
    description:
      "Empresas donde el tamano ya exige integraciones, automatizacion y visibilidad en tiempo real para tomar mejores decisiones.",
    features: [
      "Mas de 100 colaboradores en operacion",
      "Dependencia de Excel, WhatsApp y correos para flujos criticos",
      "Datos fragmentados entre plataformas",
      "Falta de trazabilidad punta a punta",
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
    <section id="para-quien" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Para quien
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Empresas que ya demostraron que su modelo funciona
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
