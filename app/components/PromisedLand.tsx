"use client";

import { useEffect, useRef, useState } from "react";

const outcomes = [
  {
    title: "Tu equipo de atención deja de capturar",
    body:
      "Un agente recibe el pedido, lo valida contra inventario, lo crea en tu ERP y confirma al cliente — sin que nadie intervenga. Tu equipo atiende solo las excepciones.",
  },
  {
    title: "El director ve el flujo de caja hoy",
    body:
      "No en 30 días. No al trimestre. Los datos de CxC, CxP e inventario están consolidados en tiempo real para tomar decisiones cuando importan.",
  },
  {
    title: "El asesor sabe todo del catálogo al instante",
    body:
      "Precio, ficha técnica, comparativo con la competencia, argumentos de venta. Desde cualquier dispositivo, en cualquier conversación con un cliente.",
  },
  {
    title: "Sabes exactamente qué oportunidades estás perdiendo",
    body:
      "Qué distribuidor dejó de comprar qué producto. Qué zona tiene baja penetración. Qué SKU está cayendo. Todo con alerta automática antes de que sea tarde.",
  },
  {
    title: "Los clientes saben dónde está su pedido sin llamar",
    body:
      "Notificaciones proactivas por WhatsApp con el estatus real. El cliente que ya pagó recibe su actualización sin tener que llamar, y tu equipo no pierde tiempo respondiendo lo mismo.",
  },
  {
    title: "Los cobros incorrectos se detectan solos",
    body:
      "El sistema cruza las facturas contra los pedidos despachados. Las diferencias aparecen antes de pagar, no 90 días después.",
  },
];

export default function PromisedLand() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tierra-prometida" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          La tierra prometida
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          Así se ve la operación del otro lado.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h3 className="text-base font-bold text-foreground leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
