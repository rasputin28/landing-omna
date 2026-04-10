"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ProblemSolution() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight max-w-4xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          El problema no es que te falte tecnología.{" "}
          <span className="text-accent">
            Es que tienes demasiadas herramientas que no trabajan juntas
          </span>
        </h2>

        <p
          className={`mt-6 text-center text-lg text-muted max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tu equipo vive en Excel, WhatsApp y correos. Tus sistemas no se
          hablan. Las decisiones se toman a ciegas. Y mientras tanto, tu
          competencia ya automatizó. Nosotros conectamos todo — y lo hacemos
          trabajar junto.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div
            className={`rounded-2xl border border-red-500/20 bg-red-500/5 p-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">El problema real</h3>
            </div>
            <h4 className="text-lg font-semibold text-red-300 mb-3">
              Operación manual que frena el crecimiento
            </h4>
            <p className="text-muted leading-relaxed">
              Procesos repetitivos, información dispersa, equipos saturados de
              tareas que no generan valor. Cada hora perdida en talacha es una
              hora que no se invierte en crecer.
            </p>
          </div>

          <div
            className={`rounded-2xl border border-accent/20 bg-accent/5 p-8 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Lo que OMNA hace</h3>
            </div>
            <h4 className="text-lg font-semibold text-accent mb-3">
              Un sistema conectado que trabaja solo
            </h4>
            <p className="text-muted leading-relaxed">
              Automatización, integraciones y visibilidad en tiempo real para que
              tu equipo se enfoque en crecer. Sin aumentar headcount, sin
              complejidad innecesaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
