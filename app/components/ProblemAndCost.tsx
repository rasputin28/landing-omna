"use client";

import { useEffect, useRef, useState } from "react";

const distributionLines = [
  "Un asesor lee el WhatsApp, abre ERP, busca la lista de precios y captura el pedido — para cada uno de los 200 pedidos del día",
  "Cuando el cliente llama para saber dónde está su pedido, el asesor tiene que llamarle a distribución, que a veces no contesta",
  "Al trimestre, contabilidad revisa las facturas del área logística y encuentra diferencias — si tiene tiempo",
  "Cuando un SKU pierde ventas, nadie lo detecta hasta que el dato llega al reporte — dos trimestres después",
];

const manufacturingLines = [
  "El asesor recibe el WhatsApp del distribuidor, busca la ficha técnica en el sistema, arma la cotización y la manda — a mano",
  "El equipo de soporte atiende 50 tickets al día, de los cuales 30 son la misma pregunta que se podría filtrar antes",
  "El cliente que ya pagó no sabe cuándo llega su pedido. El asesor no sabe. Llama a producción. Producción no contesta",
  "No existe una lista de todos los distribuidores potenciales en el mercado. Se prospecta por referidos y conocidos",
];

const costBlocks = [
  {
    title: "$400K",
    subtitle: "MXN / trimestre",
    body:
      "en discrepancias contables que pasan sin detección. Contabilidad los encuentra 90 días después — si tiene tiempo de revisar.",
  },
  {
    title: "2",
    subtitle: "trimestres de retraso",
    body:
      "para detectar que un SKU perdió ventas o que un distribuidor dejó de comprar. Para entonces, la competencia ya tomó ese espacio.",
  },
  {
    title: "6",
    subtitle: "personas",
    body:
      "dedicadas a capturar pedidos que podrían estar vendiendo, atendiendo o resolviendo excepciones. Un costo operativo que sube con el volumen.",
  },
  {
    title: "∞",
    subtitle: "clientes que no vuelven",
    body:
      "porque no supieron dónde estaba su pedido, porque la cotización tardó un día, o porque el técnico no los atendió a tiempo.",
  },
];

export default function ProblemAndCost() {
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
    <section
      id="status-quo"
      ref={ref}
      className="py-24 px-6 border-y border-border/60 bg-surface/25"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          El día a día hoy
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
          Así opera tu empresa hoy.
          <span className="text-accent"> Y cuesta más de lo que parece.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div
            className={`rounded-2xl border border-border bg-surface/60 p-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Distribución B2B
            </p>
            <ul className="space-y-4 text-sm text-muted leading-relaxed">
              {distributionLines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-accent shrink-0">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`rounded-2xl border border-border bg-surface/60 p-8 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Manufactura B2B
            </p>
            <ul className="space-y-4 text-sm text-muted leading-relaxed">
              {manufacturingLines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-accent shrink-0">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
            El costo real
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
            No resolver esto tiene un precio todos los meses.
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costBlocks.map((item, i) => (
              <div
                key={item.title + item.subtitle}
                className={`rounded-2xl border border-accent/25 bg-accent/5 p-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 70}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent">{item.title}</div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted mt-1">{item.subtitle}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
