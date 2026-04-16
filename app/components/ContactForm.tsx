"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    industry: "",
    problem: "",
    name: "",
    phone: "",
    consentNonMarketing: false,
    consentMarketing: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.name,
            lastName: "",
            phone: form.phone,
            email: "",
            companyName: form.industry,
            customData: {
              problem: form.problem,
            },
            tags: ["landing-page-lead"],
          }),
        });
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    } else {
      console.log("Form submission (no GHL webhook configured):", form);
      setStatus("sent");
    }
  };

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (status === "sent") {
    return (
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">¡Gracias!</h2>
          <p className="mt-4 text-lg text-muted">
            Te contactamos en menos de 24 horas para agendar tu llamada de descubrimiento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Si tu operacion frena tu crecimiento, vale la pena una conversacion
        </h2>
        <p className="mt-3 text-center text-lg text-muted">
          Cuentanos tu caso y te contactamos en menos de 24 horas
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="industry" className="block text-sm font-medium mb-1.5">
              A que se dedica tu empresa
            </label>
            <input
              id="industry"
              type="text"
              required
              placeholder="Ej: Distribuidora de materiales"
              value={form.industry}
              onChange={(e) => update("industry", e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
            />
          </div>

          <div>
            <label htmlFor="problem" className="block text-sm font-medium mb-1.5">
              Cual es el principal problema que quieres resolver
            </label>
            <textarea
              id="problem"
              required
              placeholder="Describe el cuello de botella mas importante hoy"
              value={form.problem}
              onChange={(e) => update("problem", e.target.value)}
              className="w-full min-h-28 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Nombre <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Tu nombre completo"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
              WhatsApp <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="+52 55 0000 0000"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
            />
          </div>

          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consentNonMarketing}
                onChange={(e) => update("consentNonMarketing", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border bg-surface accent-accent"
              />
              <span className="text-xs text-muted leading-relaxed">
                Al marcar esta casilla, acepto recibir mensajes de texto no comerciales de
                OMNA sobre nuestros servicios. La frecuencia de los mensajes varía, pueden
                aplicar tarifas de mensajes y datos. Envía HELP para asistencia, responde
                STOP para cancelar.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consentMarketing}
                onChange={(e) => update("consentMarketing", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border bg-surface accent-accent"
              />
              <span className="text-xs text-muted leading-relaxed">
                Al marcar esta casilla, acepto recibir mensajes de marketing y promocionales
                incluyendo ofertas especiales, descuentos, actualizaciones de nuevos productos
                entre otros de <strong className="text-foreground">OMNA</strong> al número de
                teléfono proporcionado. La frecuencia puede variar. Pueden aplicar tarifas de
                mensajes y datos. Envía HELP para asistencia, responde STOP para cancelar.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-accent py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>

          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Hubo un error al enviar. Intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
