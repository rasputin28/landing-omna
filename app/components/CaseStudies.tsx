"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    label: "Caso real — Distribución",
    context: "Distribuidora B2B con 400 distribuidores, 500 SKUs y 200 pedidos diarios.",
    problema:
      "6 personas capturando pedidos manualmente en SAP desde WhatsApp, correo y llamadas. El 70% del volumen llegaba por canales no estructurados. Al cierre del mes siempre quedaban pedidos sin procesar y dinero sin facturar. Las facturas de flotilla se revisaban trimestralmente — cuando ya habían pasado.",
    construimos:
      "Un agente de IA que lee los canales de entrada, extrae la información del pedido, verifica inventario en SAP en tiempo real y crea la orden automáticamente. Una auditoría automatizada cruza las facturas de flotilla contra los pedidos despachados al cierre de cada semana.",
    resultado:
      "200 pedidos diarios procesados sin intervención humana. El equipo de atención pasó de capturar a resolver excepciones. $400,000 MXN recuperados en el primer trimestre de facturas incorrectas. ROI del proyecto recuperado en menos de 6 meses.",
  },
  {
    label: "Caso real — Manufactura",
    context: "Fabricante con red de distribuidores, productos configurables y servicio técnico.",
    problema:
      "Los asesores buscaban fichas técnicas manualmente para cada cotización. Los tickets de servicio técnico llegaban sin filtro — preguntas básicas consumían el tiempo de los técnicos especializados. Los clientes llamaban para saber dónde estaba su pedido y nadie tenía la respuesta en tiempo real.",
    construimos:
      "Un asistente RAG entrenado sobre todo el catálogo de productos que responde al asesor en lenguaje natural — fichas, comparativos, argumentos de venta contra la competencia. Un agente de filtro de tickets que hace el diagnóstico inicial y solo escala al técnico los casos que lo requieren.",
    resultado:
      "−80% en tiempo de búsqueda de información técnica por parte del equipo de ventas. Onboarding de vendedores nuevos reducido de meses a días. Los técnicos atienden exclusivamente casos que requieren su criterio. El distribuidor recibe respuesta en minutos, no en horas.",
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
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
    <section id="resultados" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Casos reales
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
          Mismo contenido que presentamos en sala
        </h2>

        <div className="mt-16 space-y-16">
          {cases.map((c, i) => (
            <article
              key={c.label}
              className={`rounded-2xl border border-border bg-surface/60 p-8 md:p-10 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{c.label}</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{c.context}</p>

              <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">El problema</p>
                  <p>{c.problema}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Lo que construimos</p>
                  <p>{c.construimos}</p>
                </div>
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">El resultado</p>
                  <p className="text-foreground/95">{c.resultado}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
