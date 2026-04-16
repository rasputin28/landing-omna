"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseItem } from "./cases.data";
import { CASES } from "./cases.data";

export default function CasesPage() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [selected, setSelected] = useState<CaseItem | null>(null);

  const industries = useMemo(
    () => Array.from(new Set(CASES.map((item) => item.industria))),
    []
  );
  const areas = useMemo(
    () => Array.from(new Set(CASES.map((item) => item.area))).sort(),
    []
  );

  const filtered = useMemo(() => {
    return CASES.filter((item) => {
      if (industry && item.industria !== industry) return false;
      if (area && item.area !== area) return false;
      if (!query) return true;
      const text =
        `${item.caso} ${item.problema} ${item.solucion} ${item.archetype} ${item.area}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [area, industry, query]);

  const clearFilters = () => {
    setQuery("");
    setIndustry(null);
    setArea(null);
  };

  return (
    <main className="min-h-screen">
      <nav className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/" className="text-xl font-bold tracking-tight">
            omna
          </Link>
          <Link href="/#contacto" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">
            Hablar con el equipo
          </Link>
        </div>
      </nav>

      <section className="px-6 pt-16 pb-10 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">Casos de uso</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Problemas reales. <span className="text-accent">Resultados medibles.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-muted">
            Filtra por industria o area para encontrar casos parecidos a tu operacion.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl space-y-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar casos de uso..."
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <div className="flex flex-wrap gap-2">
            {industries.map((value) => (
              <button
                key={value}
                onClick={() => setIndustry(industry === value ? null : value)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  industry === value
                    ? "bg-accent border-accent text-white"
                    : "border-border text-muted hover:text-foreground"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {areas.map((value) => (
              <button
                key={value}
                onClick={() => setArea(area === value ? null : value)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  area === value
                    ? "bg-accent border-accent text-white"
                    : "border-border text-muted hover:text-foreground"
                }`}
              >
                {value}
              </button>
            ))}
            {(query || industry || area) && (
              <button onClick={clearFilters} className="ml-2 text-xs text-accent">
                Limpiar filtros
              </button>
            )}
          </div>
          <p className="text-xs text-muted">{filtered.length} casos</p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-surface/50 p-8 text-center text-muted">
              No hay casos que coincidan con los filtros actuales.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="text-left rounded-2xl border border-border bg-surface/60 p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs text-accent">
                          {item.industria}
                        </span>
                        <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                          {item.archetype}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{item.caso}</h3>
                    </div>
                    <span className="text-xs text-muted">{item.id}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted line-clamp-3">{item.problema}</p>
                  <div className="mt-4 pt-4 border-t border-border text-xs text-accent font-semibold">
                    Ver solucion
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-40 bg-black/65 p-4 flex items-center justify-center" onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl border border-border bg-background"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border p-6">
              <button onClick={() => setSelected(null)} className="float-right text-muted hover:text-foreground">
                Cerrar
              </button>
              <p className="text-xs tracking-widest text-accent uppercase font-semibold">
                {selected.id} · {selected.area}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{selected.caso}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs text-accent">
                  {selected.industria}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                  {selected.archetype}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <Block title="El problema" content={selected.problema} />
              <Block title="La solucion" content={selected.solucion} />
              <Block title="Impacto esperado" content={selected.roi} highlight />
              <Block title="Como lo construimos" content={selected.tools} />
              <Link href="/#contacto" className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
                Quiero hablar de esto
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Block({
  title,
  content,
  highlight,
}: {
  title: string;
  content: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-accent/30 bg-accent/10" : "border-border bg-surface/50"}`}>
      <p className="text-xs uppercase tracking-widest text-accent font-semibold">{title}</p>
      <p className="mt-2 text-sm text-muted leading-relaxed">{content}</p>
    </div>
  );
}
