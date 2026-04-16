"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Manuel",
    role: "Fundador",
    bio: "Ayuda a empresas establecidas a adoptar IA sin requerir un equipo tecnico interno.",
    initial: "M",
  },
  {
    name: "Joel",
    role: "CTO",
    bio: "Lidera el analisis operativo y la implementacion tecnica de soluciones para procesos complejos.",
    initial: "J",
  },
];

const stats = [
  { value: "150+", label: "Proyectos" },
  { value: "9", label: "Paises" },
  { value: "3+", label: "Anos" },
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
    <section id="nosotros" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Nosotros
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          OMNA - Omnipresent Technology, Applied
        </h2>

        <div className="mt-6 max-w-3xl mx-auto text-center text-muted space-y-4">
          <p>
            Implementamos inteligencia artificial en empresas de manufactura y
            distribucion con operaciones complejas.
          </p>
          <p>
            No llegamos con soluciones predefinidas. Entendemos la operacion
            antes de tocarla, para construir sistemas que si se usan.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {team.map((member, idx) => (
            <article
              key={member.name}
              className={`rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-accent/20 text-accent font-bold flex items-center justify-center">
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-border bg-surface/50 p-5 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
