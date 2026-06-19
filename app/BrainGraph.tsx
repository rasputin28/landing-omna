"use client";

import { useEffect, useRef, useState } from "react";
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  type Simulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";

type Node = SimulationNodeDatum & {
  id: string;
  label?: string;
  note?: string;
  /** importancia visual: 0 satélite · 1 periférico · 2 núcleo · 3 centro */
  level: number;
};

type Link = SimulationLinkDatum<Node> & {
  source: string | Node;
  target: string | Node;
};

// --- Nodos centrales con la copy de OMNA ---
const coreNodes: Node[] = [
  {
    id: "cerebro",
    label: "El Cerebro",
    note: "Un mapa vivo de tu empresa. Entiende cómo funcionan tus sistemas y conecta todo.",
    level: 3,
  },
  {
    id: "datos",
    label: "Capa de datos inmutable",
    note: "Una base confiable y a prueba de errores de la información de tu operación.",
    level: 2,
  },
  {
    id: "ia",
    label: "IA / Agentes",
    note: "Modelos que llegan a producción porque entienden tu contexto real, no una demo.",
    level: 2,
  },
  {
    id: "docs",
    label: "Documentación viva",
    note: "Cada decisión, cada flujo, cada integración vive aquí. Tuya cuando el proyecto termina.",
    level: 2,
  },
  {
    id: "erp",
    label: "ERP",
    note: "Conecta tu sistema central: inventario, compras, finanzas, órdenes.",
    level: 1,
  },
  {
    id: "mes",
    label: "MES",
    note: "Aprende tu piso de producción: órdenes, paros, rendimiento.",
    level: 1,
  },
  {
    id: "planta",
    label: "Datos de planta",
    note: "Señales de máquinas, sensores y turnos convertidas en información útil.",
    level: 1,
  },
  {
    id: "flujos",
    label: "Flujos",
    note: "Cómo se mueve el trabajo de verdad en tu operación, paso a paso.",
    level: 1,
  },
  {
    id: "integraciones",
    label: "Integraciones",
    note: "Integración profunda donde otros solo hacen pilotos.",
    level: 1,
  },
  {
    id: "decisiones",
    label: "Decisiones",
    note: "El criterio operativo de tu equipo, capturado y reutilizable.",
    level: 1,
  },
];

const coreLinks: Link[] = [
  { source: "cerebro", target: "datos" },
  { source: "cerebro", target: "ia" },
  { source: "cerebro", target: "docs" },
  { source: "datos", target: "erp" },
  { source: "datos", target: "mes" },
  { source: "datos", target: "planta" },
  { source: "ia", target: "flujos" },
  { source: "ia", target: "decisiones" },
  { source: "docs", target: "integraciones" },
  { source: "docs", target: "flujos" },
  { source: "erp", target: "integraciones" },
  { source: "mes", target: "planta" },
  { source: "flujos", target: "decisiones" },
  { source: "mes", target: "flujos" },
];

// Genera satélites pequeños alrededor de los nodos con etiqueta para densidad tipo Obsidian.
function buildSatellites(): { nodes: Node[]; links: Link[] } {
  const anchors = ["datos", "ia", "docs", "erp", "mes", "planta", "flujos", "integraciones", "decisiones", "cerebro"];
  const nodes: Node[] = [];
  const links: Link[] = [];
  let n = 0;
  // distribución determinista (sin Math.random para SSR estable)
  const counts = [2, 4, 3, 4, 5, 4, 4, 3, 4, 2];
  anchors.forEach((anchor, i) => {
    for (let k = 0; k < counts[i]; k++) {
      const id = `s${n++}`;
      nodes.push({ id, level: 0 });
      links.push({ source: anchor, target: id });
    }
  });
  return { nodes, links };
}

const COLORS = {
  edge: "rgba(168, 85, 247, 0.18)",
  edgeActive: "rgba(185, 117, 255, 0.7)",
  satellite: "rgba(180, 166, 200, 0.45)",
  node: "#a855f7",
  nodeCore: "#b975ff",
  center: "#d6b3ff",
  label: "#ece8f2",
  labelDim: "rgba(236, 232, 242, 0.25)",
};

function radiusFor(level: number) {
  return [3, 7, 10, 16][level] ?? 4;
}

export default function BrainGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Node | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; node: Node } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const satellites = buildSatellites();
    const nodes: Node[] = [...coreNodes.map((d) => ({ ...d })), ...satellites.nodes];
    const links: Link[] = [...coreLinks, ...satellites.links].map((l) => ({ ...l }));

    const byId = new Map(nodes.map((d) => [d.id, d]));
    // adyacencia para resaltar vecinos
    const neighbors = new Map<string, Set<string>>();
    nodes.forEach((d) => neighbors.set(d.id, new Set()));
    links.forEach((l) => {
      const s = typeof l.source === "string" ? l.source : l.source.id;
      const t = typeof l.target === "string" ? l.target : l.target.id;
      neighbors.get(s)?.add(t);
      neighbors.get(t)?.add(s);
    });

    let width = wrap.clientWidth;
    let height = wrap.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = wrap!.clientWidth;
      height = wrap!.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      sim.force("center", forceCenter(width / 2, height / 2));
      sim.alpha(0.3).restart();
    }

    const sim: Simulation<Node, Link> = forceSimulation(nodes)
      .force(
        "link",
        forceLink<Node, Link>(links)
          .id((d) => d.id)
          .distance((l) => {
            const tgt = l.target as Node;
            return tgt.level === 0 ? 30 : 90;
          })
          .strength(0.4),
      )
      .force("charge", forceManyBody<Node>().strength((d) => (d.level === 0 ? -30 : -180)))
      .force("collide", forceCollide<Node>().radius((d) => radiusFor(d.level) + 6))
      .force("center", forceCenter(width / 2, height / 2))
      .alphaDecay(reduceMotion ? 0.05 : 0.015)
      .velocityDecay(0.6);

    let hoverId: string | null = null;

    function draw() {
      ctx!.save();
      ctx!.scale(dpr, dpr);
      ctx!.clearRect(0, 0, width, height);

      const active = hoverId ? neighbors.get(hoverId) : null;

      // aristas
      links.forEach((l) => {
        const s = l.source as Node;
        const t = l.target as Node;
        const isActive =
          hoverId != null && (s.id === hoverId || t.id === hoverId);
        ctx!.beginPath();
        ctx!.moveTo(s.x!, s.y!);
        ctx!.lineTo(t.x!, t.y!);
        ctx!.strokeStyle = isActive ? COLORS.edgeActive : COLORS.edge;
        ctx!.lineWidth = isActive ? 1.6 : 0.8;
        ctx!.stroke();
      });

      // nodos
      nodes.forEach((d) => {
        const r = radiusFor(d.level);
        const dim =
          hoverId != null && d.id !== hoverId && !active?.has(d.id);
        const isHover = d.id === hoverId;

        if (d.level >= 1 || isHover) {
          ctx!.shadowColor = COLORS.node;
          ctx!.shadowBlur = isHover ? 22 : d.level === 3 ? 18 : 8;
        } else {
          ctx!.shadowBlur = 0;
        }

        ctx!.beginPath();
        ctx!.arc(d.x!, d.y!, isHover ? r + 2 : r, 0, Math.PI * 2);
        if (d.level === 0) {
          ctx!.fillStyle = dim ? "rgba(180,166,200,0.15)" : COLORS.satellite;
        } else if (d.level === 3) {
          ctx!.fillStyle = COLORS.center;
        } else if (d.level === 2) {
          ctx!.fillStyle = COLORS.nodeCore;
        } else {
          ctx!.fillStyle = COLORS.node;
        }
        ctx!.globalAlpha = dim ? 0.35 : 1;
        ctx!.fill();
        ctx!.globalAlpha = 1;
        ctx!.shadowBlur = 0;

        // etiquetas
        if (d.label) {
          ctx!.font = `${d.level === 3 ? 600 : 500} ${
            d.level === 3 ? 14 : 12
          }px ui-sans-serif, system-ui, sans-serif`;
          ctx!.fillStyle = dim ? COLORS.labelDim : COLORS.label;
          ctx!.textAlign = "center";
          ctx!.textBaseline = "top";
          ctx!.fillText(d.label, d.x!, d.y! + r + 4);
        }
      });

      ctx!.restore();
    }

    sim.on("tick", draw);

    // --- interacción ---
    let dragging: Node | null = null;

    function pointerPos(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function nodeAt(x: number, y: number): Node | null {
      // prioriza nodos grandes; recorre de mayor a menor nivel
      let best: Node | null = null;
      let bestLevel = -1;
      for (const d of nodes) {
        const r = radiusFor(d.level) + 6;
        const dx = x - d.x!;
        const dy = y - d.y!;
        if (dx * dx + dy * dy <= r * r && d.level > bestLevel) {
          best = d;
          bestLevel = d.level;
        }
      }
      return best;
    }

    function onPointerDown(e: PointerEvent) {
      const { x, y } = pointerPos(e);
      const d = nodeAt(x, y);
      if (d) {
        dragging = d;
        d.fx = d.x;
        d.fy = d.y;
        sim.alphaTarget(0.3).restart();
        canvas!.setPointerCapture(e.pointerId);
      }
    }

    function onPointerMove(e: PointerEvent) {
      const { x, y } = pointerPos(e);
      if (dragging) {
        dragging.fx = x;
        dragging.fy = y;
        return;
      }
      const d = nodeAt(x, y);
      const id = d?.id ?? null;
      if (id !== hoverId) {
        hoverId = id;
        setHovered(d ?? null);
        canvas!.style.cursor = d ? "pointer" : "default";
        if (reduceMotion) draw();
      }
      if (d && d.note) {
        setTooltip({ x, y, node: d });
      } else {
        setTooltip(null);
      }
    }

    function onPointerUp(e: PointerEvent) {
      if (dragging) {
        dragging.fx = null;
        dragging.fy = null;
        dragging = null;
        sim.alphaTarget(0);
        canvas!.releasePointerCapture(e.pointerId);
      }
    }

    function onPointerLeave() {
      hoverId = null;
      setHovered(null);
      setTooltip(null);
      canvas!.style.cursor = "default";
      if (reduceMotion) draw();
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    if (reduceMotion) {
      // posiciona y congela
      for (let i = 0; i < 200; i++) sim.tick();
      sim.stop();
      draw();
    }

    return () => {
      sim.stop();
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[420px] sm:h-[480px] rounded-2xl border border-border bg-background/40 overflow-hidden"
    >
      <canvas ref={canvasRef} className="block touch-none" />

      {tooltip && tooltip.node.note && (
        <div
          className="pointer-events-none absolute z-10 max-w-[240px] rounded-xl border border-border bg-brand-soft/95 px-4 py-3 shadow-xl backdrop-blur-sm"
          style={{
            left: Math.min(tooltip.x + 14, (wrapRef.current?.clientWidth ?? 0) - 252),
            top: Math.max(tooltip.y - 10, 8),
          }}
        >
          <p className="text-sm font-semibold text-foreground">{tooltip.node.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{tooltip.node.note}</p>
        </div>
      )}

      {!hovered && (
        <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-muted/70">
          Pasa el cursor por los nodos · arrástralos para explorar
        </p>
      )}
    </div>
  );
}
