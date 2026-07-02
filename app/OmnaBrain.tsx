"use client";

import { useEffect, useRef, type CSSProperties, type RefObject } from "react";

type Mode = "ambient" | "core" | "pixel" | "order" | "chaos";

type Opts = {
  nodes: number;
  connect: boolean;
  travel: boolean;
  cluster: boolean;
  spread?: number;
  pixel?: boolean;
  palette: "brand" | "grey";
  lineOpacity?: number;
  travelers?: number;
  drift?: number;
  explode?: () => number;
};

function brainOpts(mode: Mode): Opts {
  switch (mode) {
    case "core":
      return { nodes: 130, connect: true, travel: true, cluster: true, spread: 1.15, palette: "brand", lineOpacity: 0.5, travelers: 30, drift: 1 };
    case "pixel":
      return { nodes: 170, connect: true, travel: true, cluster: true, spread: 1.0, pixel: true, palette: "brand", lineOpacity: 0.32, travelers: 26, drift: 0.8 };
    case "order":
      return { nodes: 74, connect: true, travel: true, cluster: false, palette: "brand", lineOpacity: 0.5, travelers: 22, drift: 1 };
    case "chaos":
      return { nodes: 52, connect: false, travel: false, cluster: false, palette: "grey", drift: 2.6 };
    default:
      return { nodes: 82, connect: true, travel: true, cluster: false, palette: "brand", lineOpacity: 0.46, travelers: 22, drift: 1.1 };
  }
}

function makeBrain(canvas: HTMLCanvasElement, o: Opts, reduced: boolean) {
  const ctx = canvas.getContext("2d")!;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let W = 1, H = 1;
  const fit = () => {
    const r = canvas.getBoundingClientRect();
    W = canvas.width = Math.max(1, Math.round(r.width * dpr));
    H = canvas.height = Math.max(1, Math.round(r.height * dpr));
  };
  fit();
  const N = o.nodes;
  const rnd = (a: number, b: number) => a + Math.random() * (b - a);
  const nodes: {
    bx: number; by: number; x: number; y: number; ph: number; sp: number;
    amp: number; exx: number; eyy: number;
  }[] = [];
  for (let i = 0; i < N; i++) {
    let nx: number, ny: number;
    if (o.cluster) {
      const ang = Math.random() * 6.2832, rr = Math.pow(Math.random(), 0.7) * 0.46 * (o.spread || 1);
      nx = 0.5 + Math.cos(ang) * rr; ny = 0.5 + Math.sin(ang) * rr * 0.82;
    } else { nx = rnd(0.05, 0.95); ny = rnd(0.08, 0.92); }
    const dxc = nx - 0.5, dyc = ny - 0.5; const dl = Math.hypot(dxc, dyc);
    const baseAng = dl < 0.06 ? Math.random() * 6.2832 : Math.atan2(dyc, dxc);
    const ang2 = baseAng + rnd(-0.35, 0.35); const mag = rnd(0.5, 1.35);
    nodes.push({
      bx: nx, by: ny, x: nx, y: ny, ph: Math.random() * 6.2832, sp: rnd(0.5, 1.2),
      amp: rnd(0.006, 0.02) * (o.drift || 1), exx: Math.cos(ang2) * mag, eyy: Math.sin(ang2) * mag * 0.9,
    });
  }
  const edges: [number, number][] = [];
  if (o.connect || o.travel) {
    for (let i = 0; i < N; i++) {
      const best: [number, number][] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        best.push([Math.hypot(nodes[i].bx - nodes[j].bx, nodes[i].by - nodes[j].by), j]);
      }
      best.sort((a, b) => a[0] - b[0]);
      for (let k = 0; k < 2; k++) {
        const j = best[k][1]; const a = Math.min(i, j), b = Math.max(i, j);
        if (!edges.some((e) => e[0] === a && e[1] === b)) edges.push([a, b]);
      }
    }
  }
  const travelers: { e: number; t: number; sp: number }[] = [];
  if (o.travel && edges.length) {
    const T = Math.min(edges.length, o.travelers || 24);
    for (let i = 0; i < T; i++) travelers.push({ e: (Math.random() * edges.length) | 0, t: Math.random(), sp: rnd(0.15, 0.4) });
  }
  const palette = o.palette === "grey"
    ? { node: [176, 166, 191], line: [150, 140, 165], dot: [200, 190, 210] }
    : { node: [223, 195, 244], line: [149, 74, 204], dot: [254, 101, 29] };
  const rgba = (c: number[], a: number | string) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  let raf: number | null = null, running = false, t0 = performance.now();
  const render = (now: number) => {
    const t = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    const breathe = o.cluster ? 1 + Math.sin(t * 0.45) * 0.025 : 1;
    const exNow = o.explode ? o.explode() : 0;
    const eAmt = exNow * exNow;
    const fade = Math.max(0, 1 - exNow * 1.05);
    for (const n of nodes) {
      n.x = n.bx + Math.sin(t * 0.32 * n.sp + n.ph) * n.amp;
      n.y = n.by + Math.cos(t * 0.29 * n.sp + n.ph * 1.2) * n.amp;
    }
    const PX = (n: typeof nodes[0]) => (((n.x - 0.5) * breathe + 0.5) + (n.exx || 0) * eAmt) * W;
    const PY = (n: typeof nodes[0]) => (((n.y - 0.5) * breathe + 0.5) + (n.eyy || 0) * eAmt) * H;
    if (o.connect) {
      ctx.lineWidth = Math.max(1, dpr * 0.55);
      for (const ed of edges) {
        const a = nodes[ed[0]], b = nodes[ed[1]];
        const fl = 0.45 + 0.55 * Math.sin(t * 1.05 + (ed[0] * 7 + ed[1]));
        const al = (o.lineOpacity || 0.5) * Math.max(0, fl) * fade;
        if (al > 0.03) {
          ctx.strokeStyle = rgba(palette.line, al.toFixed(3));
          ctx.beginPath(); ctx.moveTo(PX(a), PY(a)); ctx.lineTo(PX(b), PY(b)); ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      const pulse = 0.55 + 0.45 * Math.sin(t * 1.4 + n.ph);
      const base = o.pixel ? dpr * 1.9 : dpr * 1.7;
      const rr = base * (0.7 + 0.55 * pulse);
      ctx.fillStyle = rgba(palette.node, ((0.45 + 0.4 * pulse) * fade).toFixed(3));
      if (o.pixel) ctx.fillRect(PX(n) - rr, PY(n) - rr, rr * 2, rr * 2);
      else { ctx.beginPath(); ctx.arc(PX(n), PY(n), rr, 0, 6.2832); ctx.fill(); }
    }
    if (o.travel) {
      for (const tr of travelers) {
        tr.t += tr.sp * 0.016;
        if (tr.t > 1) { tr.t = 0; tr.e = (Math.random() * edges.length) | 0; }
        const a = nodes[edges[tr.e][0]], b = nodes[edges[tr.e][1]];
        const x = PX(a) + (PX(b) - PX(a)) * tr.t, y = PY(a) + (PY(b) - PY(a)) * tr.t;
        ctx.fillStyle = rgba(palette.dot, (0.92 * fade).toFixed(3));
        ctx.beginPath(); ctx.arc(x, y, dpr * 1.5, 0, 6.2832); ctx.fill();
      }
    }
    if (o.cluster) {
      const cxp = 0.5 * W, cyp = 0.5 * H, rad = Math.min(W, H) * 0.5;
      const gr = ctx.createRadialGradient(cxp, cyp, 0, cxp, cyp, rad);
      gr.addColorStop(0, rgba(palette.dot, 0.10));
      gr.addColorStop(0.5, rgba(palette.line, 0.05));
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    }
    if (running) raf = requestAnimationFrame(render);
  };
  const onResize = () => fit();
  window.addEventListener("resize", onResize, { passive: true });
  return {
    start: () => {
      if (running) return;
      if (reduced) { render(performance.now()); return; }
      running = true; t0 = performance.now(); render(performance.now());
    },
    stop: () => { running = false; if (raf) cancelAnimationFrame(raf); },
    destroy: () => { running = false; if (raf) cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); },
  };
}

export default function OmnaBrain({
  mode = "ambient",
  explodeRef,
  style,
}: {
  mode?: Mode;
  explodeRef?: RefObject<number>;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const opts = brainOpts(mode);
    if (explodeRef) opts.explode = () => explodeRef.current || 0;
    const ctrl = makeBrain(cv, opts, reduced);
    if (reduced) { ctrl.start(); return () => ctrl.destroy(); }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => (e.isIntersecting ? ctrl.start() : ctrl.stop())),
      { threshold: 0.04 }
    );
    io.observe(cv);
    return () => { io.disconnect(); ctrl.destroy(); };
  }, [mode, explodeRef]);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }} />;
}
