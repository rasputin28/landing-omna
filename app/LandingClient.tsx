"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import {
  Factory, Keyboard, EyeOff, Scale, Boxes, Database, Bot, Lock, GitBranch,
  LineChart, ClipboardList, DraftingCompass, Target, Truck, Check, ArrowRight,
  MoveHorizontal, Menu, X,
} from "lucide-react";
import OmnaBrain from "./OmnaBrain";

const FILLOUT_ID = "u5xF6jsfB5us";
const FILLOUT_DOMAIN = "forms.trifecta.studio";

/* ---------- shared styles ---------- */
const wrap: CSSProperties = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" };
const card: CSSProperties = { height: "100%", borderRadius: "var(--radius-card)", border: "1px solid var(--border-subtle)", background: "var(--surface-raised)", padding: 26 };
const h2: CSSProperties = { fontSize: "clamp(2rem,4.4vw,3.7rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.02em", margin: "16px 0 0", color: "#fff" };
const lead: CSSProperties = { marginTop: 20, fontSize: "1.12rem", lineHeight: 1.6, color: "var(--text-secondary)" };

function IconBox({ children, size = 44 }: { children: ReactNode; size?: number }) {
  return (
    <span style={{ width: size, height: size, borderRadius: "var(--radius-md)", border: "1px solid var(--border-default)", display: "grid", placeItems: "center", color: "var(--omna-orange)", flex: "none" }}>
      {children}
    </span>
  );
}

function Button({ variant = "primary", size = "lg", arrow, full, onClick, children }: {
  variant?: "primary" | "secondary"; size?: "lg" | "md"; arrow?: boolean; full?: boolean;
  onClick?: () => void; children: ReactNode;
}) {
  const dims = size === "lg" ? { height: 56, padding: "0 30px", fontSize: "1.05rem" } : { height: 44, padding: "0 22px", fontSize: ".95rem" };
  const base: CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
    borderRadius: "var(--radius-pill)", fontWeight: 600, cursor: "pointer", border: "1px solid transparent",
    width: full ? "100%" : "auto", transition: "transform .18s var(--ease-out), background .2s var(--ease-out)", ...dims,
  };
  const skin: CSSProperties = variant === "primary"
    ? { background: "var(--omna-orange)", color: "#fff", boxShadow: "var(--shadow-glow-orange)" }
    : { background: "rgba(255,255,255,.04)", color: "#fff", borderColor: "var(--border-default)" };
  return (
    <button onClick={onClick} style={{ ...base, ...skin }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
      {children}{arrow && <span aria-hidden>↗</span>}
    </button>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="omna-flow" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem,3.6vw,2.9rem)", lineHeight: 1, letterSpacing: "-.02em" }}>{value}</div>
      <div style={{ marginTop: 10, color: "var(--text-secondary)", fontSize: ".98rem" }}>{label}</div>
    </div>
  );
}

/* ---------- data ---------- */
const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "problema", label: "El problema" },
  { id: "solucion", label: "Solución" },
  { id: "casos", label: "Casos de uso" },
  { id: "metodologia", label: "Metodología" },
];

const LOGOS = ["Telefónica", "Illux", "Persianas Classic", "Jägermeister"];

const PROBLEMAS = [
  { icon: <Keyboard size={22} />, title: "Pedidos capturados a mano", body: "Más de 1,400 pedidos al mes se teclean uno por uno en el ERP. Si no se libera el pago en 5 días, el sistema los cancela — y el cliente no se entera." },
  { icon: <EyeOff size={22} />, title: "Back orders invisibles", body: "La empresa descubre el backorder cuando el cliente ya lo descubrió. El 80% de los lanzamientos terminan en backorder por falta de planeación conectada al ERP." },
  { icon: <Scale size={22} />, title: "Conciliación atrasada", body: "2 semanas al mes de 2 personas comparando PDFs de fleteras contra tarifarios en Excel. Los errores se detectan después de pagar." },
  { icon: <Boxes size={22} />, title: "Inventario sin visibilidad", body: "Cada área tiene su propio Excel. El quiebre se detecta cuando el cliente ya no puede comprar. $100M+ en inventario con 30% de rotación muy baja." },
];

const IMPACTO = [
  { value: "100%", label: "de captura de pedidos automatizada", warm: false },
  { value: "2–3 sem → hrs", label: "en conciliación mensual de fleteras", warm: false, small: true },
  { value: "$516k", label: "recuperados en diferencias detectadas en 5 meses", warm: true },
  { value: "+30%", label: "reducción de capital inmovilizado en inventario", warm: true },
];

const CHIPS = [
  { l: "ERP · SAP", left: "50%", top: "2%" }, { l: "CRM", left: "72%", top: "14%" },
  { l: "WhatsApp", left: "88%", top: "38%" }, { l: "Fleteras", left: "88%", top: "62%" },
  { l: "Tarifarios", left: "72%", top: "86%" }, { l: "Fichas técnicas", left: "50%", top: "98%" },
  { l: "Facturas / OC", left: "28%", top: "86%" }, { l: "Correo", left: "12%", top: "62%" },
  { l: "Reuniones", left: "12%", top: "38%" }, { l: "Repositorios", left: "28%", top: "14%" },
];

const PIPELINE = [
  { tag: "01 · CAPTURA", color: "var(--omna-violet)", title: "Todo entra", body: "Cada fuente se conecta y se guarda tal cual, con su origen intacto. Correos, notas, actas, PDFs, SAP, facturas, órdenes de compra. Nada se pierde." },
  { tag: "02 · CONECTA", color: "var(--omna-amethyst)", title: "Se ordena por significado", body: "OMNA une lo que habla de lo mismo —una OC, una factura— aunque venga de sistemas distintos, sin borrar de dónde salió cada dato. Los registros con errores van a cuarentena." },
  { tag: "03 · ACTIVA", color: "var(--omna-orange)", title: "Listo para usar", body: "Pregúntale en lenguaje natural con la cita exacta del documento de origen, úsalo en tus reportes o conéctalo a tus agentes de IA. Datos conciliados y certificados.", hi: true },
];

const CASOS = [
  { icon: <LineChart size={21} />, title: "Planeación de la demanda", dolor: "Forecast en Excel que caduca al enviarse; 80% de lanzamientos en backorder.", construye: "Motor de compras que descarga datos del ERP y genera la propuesta de OC lista para revisar — el equipo solo valida.", chip: "Alerta antes del lanzamiento" },
  { icon: <ClipboardList size={21} />, title: "Pedidos y back orders", dolor: "1,400+ pedidos/mes capturados a mano; cancelaciones invisibles a los 5 días.", construye: "Toma de pedidos automática desde cualquier canal + dashboard de back orders en tiempo real.", chip: "Captura 100% automática" },
  { icon: <Scale size={21} />, title: "Conciliación de datos", dolor: "2 sem/mes de 2 personas comparando PDFs vs tarifarios; errores tras pagar.", construye: "Motor de conciliación que carga facturas del SAT, aplica cada tarifario y genera reclamaciones listas.", chip: "$516k recuperados" },
  { icon: <Boxes size={21} />, title: "Optimización de inventarios", dolor: "$100M+ en inventario con 30% de rotación baja; sin stock de seguridad dinámico.", construye: "Stock óptimo por SKU según rotación, lead time y MOQ, con alertas de sobrestock y quiebre.", chip: "+30% capital liberado" },
  { icon: <DraftingCompass size={21} />, title: "Ingenierías y cotización", dolor: "Fichas tardan semanas; la lógica vive en Excel y en una sola cabeza.", construye: "Ingeniería carga parámetros como datos, no código; fichas y BOMs generados en horas.", chip: "Fichas en horas, no semanas" },
  { icon: <Target size={21} />, title: "Expansión comercial", dolor: "80% de ventas de 350 de 2,000 clientes; 1,650 dormidos sin motor de reactivación.", construye: "Segmentación A/B/C y lista semanal de clientes a activar por potencial real.", chip: "1,650 clientes reactivables" },
  { icon: <Truck size={21} />, title: "Supply chain", dolor: "Embarques en portales distintos; incidencias cuando el cliente llama; guías con doble costo.", construye: "Torre de control de embarques con rastreo unificado y alertas de incidencias antes del reclamo.", chip: "Torre de control unificada" },
];

const METODO = [
  { n: "01", title: "Diagnóstico", body: "Antes de hablar de IA entendemos cómo funciona tu operación: procesos, ERP, información, objetivos y personas." },
  { n: "02", title: "Conectamos", body: "Integramos ERP, CRM, correos, fleteras, documentación, APIs y dashboards. Todo comienza a hablar entre sí." },
  { n: "03", title: "Construimos agentes", body: "Desplegamos los agentes verticales que ejecutan pedidos, conciliación, inventarios e ingenierías. Todo conectado al Cerebro." },
  { n: "04", title: "Entrenamos el Cerebro", body: "Cada documento, reunión, factura, proceso y conversación hace más inteligente al Cerebro." },
  { n: "05", title: "Nunca deja de aprender", body: "Cada proyecto nuevo aumenta el conocimiento acumulado. No reinicias desde cero: construyes un activo que se vuelve más valioso cada mes.", hi: true },
];

const eyebrow = (t: string) => <span className="omna-eyebrow">{t}</span>;

export default function LandingClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const heroCoreRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroExplode = useRef<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToId = useCallback((id: string) => {
    setMenuOpen(false);
    if (id === "inicio") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 78), behavior: "smooth" });
  }, []);
  const openAgenda = useCallback(() => { setModalOpen(true); setMenuOpen(false); }, []);

  /* reveals */
  useEffect(() => {
    const root = rootRef.current; if (!root) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced) { els.forEach((el) => el.setAttribute("data-in", "")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.setAttribute("data-in", ""); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* scroll: nav bg + parallax */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const nav = navRef.current;
      if (nav) {
        const on = y > 24;
        nav.style.background = on ? "rgba(13,1,22,0.72)" : "transparent";
        nav.style.backdropFilter = on ? "blur(18px) saturate(140%)" : "none";
        nav.style.borderBottomColor = on ? "rgba(223,195,244,0.12)" : "transparent";
        nav.style.boxShadow = on ? "0 12px 44px -22px rgba(0,0,0,0.85)" : "none";
      }
      if (bgParallaxRef.current) bgParallaxRef.current.style.transform = `translate3d(0,${y * 0.05}px,0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* mouse glow + hero explode RAF */
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const m = { x: 0.66, y: 0.34, cx: 0.66, cy: 0.34 };
    const onMove = (e: MouseEvent) => { m.x = e.clientX / window.innerWidth; m.y = e.clientY / window.innerHeight; };
    window.addEventListener("mousemove", onMove, { passive: true });
    let raf = 0;
    const tick = () => {
      m.cx += (m.x - m.cx) * 0.05; m.cy += (m.y - m.cy) * 0.05;
      if (bgGlowRef.current) {
        bgGlowRef.current.style.left = `${52 + (m.cx - 0.5) * 36}%`;
        bgGlowRef.current.style.top = `${32 + (m.cy - 0.5) * 30}%`;
      }
      const hs = heroSectionRef.current;
      if (hs) {
        const vh = window.innerHeight || 800;
        let e = -hs.getBoundingClientRect().top / (vh * 0.72);
        e = Math.max(0, Math.min(1, e));
        heroExplode.current = e;
        if (heroCoreRef.current) heroCoreRef.current.style.opacity = String(Math.max(0, 1 - e * 1.25));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  /* before/after slider */
  useEffect(() => {
    const el = sliderRef.current; if (!el) return;
    let drag = false;
    const set = (clientX: number) => {
      const r = el.getBoundingClientRect();
      let p = (clientX - r.left) / r.width;
      p = Math.max(0.04, Math.min(0.96, p));
      el.style.setProperty("--pos", `${p * 100}%`);
    };
    const down = (e: PointerEvent) => { drag = true; try { el.setPointerCapture(e.pointerId); } catch {} set(e.clientX); };
    const move = (e: PointerEvent) => { if (drag) set(e.clientX); };
    const up = () => { drag = false; };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    return () => { el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointercancel", up); };
  }, []);

  /* Fillout embed — (re)load script while modal is open */
  useEffect(() => {
    if (!modalOpen) return;
    const s = document.createElement("script");
    s.src = "https://server.fillout.com/embed/v1/";
    document.body.appendChild(s);
    document.body.style.overflow = "hidden";
    return () => { s.remove(); document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <div ref={rootRef} style={{ position: "relative", minHeight: "100vh", color: "var(--text-primary)", overflowX: "clip" }}>
      {/* ===== LIVING BACKGROUND ===== */}
      <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "var(--surface-base)" }}>
        <div ref={bgParallaxRef} style={{ position: "absolute", inset: "-12%" }}>
          <div style={{ position: "absolute", inset: 0, background: "url('/cta-bg.jpg') right center / cover no-repeat", opacity: 0.42, animation: "omnaBreathe 28s var(--ease-in-out) infinite", WebkitMaskImage: "radial-gradient(125% 95% at 80% 22%, #000 14%, transparent 68%)", maskImage: "radial-gradient(125% 95% at 80% 22%, #000 14%, transparent 68%)" }} />
        </div>
        <div ref={bgGlowRef} style={{ position: "absolute", left: "64%", top: "32%", width: "62vw", height: "62vw", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(149,74,204,.28), rgba(254,101,29,.09) 38%, transparent 64%)", filter: "blur(24px)", mixBlendMode: "screen" }} />
        <div className="omna-grain" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,2,33,0) 0%, rgba(22,2,33,.4) 70%, var(--surface-base) 100%)" }} />
      </div>

      {/* ===== NAV ===== */}
      <header ref={navRef} data-nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, borderBottom: "1px solid transparent", transition: "background .45s var(--ease-out), border-color .45s var(--ease-out), box-shadow .45s var(--ease-out)" }}>
        <nav style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "17px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22 }}>
          <button onClick={() => scrollToId("inicio")} style={{ display: "flex", alignItems: "center", gap: 11, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <Image src="/omna-core.png" alt="OMNA" width={30} height={30} style={{ objectFit: "contain" }} />
            <span style={{ fontWeight: 800, fontSize: "1.42rem", letterSpacing: "-.02em", color: "#fff", lineHeight: 1 }}>omna</span>
          </button>
          <div data-navwrap style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {NAV.map((n) => (
              <button key={n.id} data-navlink onClick={() => scrollToId(n.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)", padding: 0 }}>{n.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span data-nav-cta><Button variant="primary" size="md" arrow onClick={openAgenda}>Agenda un diagnóstico</Button></span>
            <button data-menu-btn onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", border: "1px solid var(--border-default)", background: "rgba(255,255,255,.03)", color: "#fff", cursor: "pointer", alignItems: "center", justifyContent: "center" }}><Menu size={22} /></button>
          </div>
        </nav>
        {menuOpen && (
          <div style={{ padding: "0 var(--gutter) 22px", background: "rgba(13,1,22,.94)", backdropFilter: "blur(18px)", borderBottom: "1px solid var(--border-default)", animation: "omnaFadeUp .3s var(--ease-out) both" }}>
            <div style={{ display: "grid", gap: 6, maxWidth: "var(--container-wide)", margin: "0 auto" }}>
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollToId(n.id)} style={{ textAlign: "left", background: "none", border: "none", borderBottom: "1px solid var(--border-subtle)", cursor: "pointer", fontSize: "1.2rem", fontWeight: 600, color: "#fff", padding: "16px 0" }}>{n.label}</button>
              ))}
              <div style={{ marginTop: 14 }}><Button variant="primary" size="lg" arrow full onClick={openAgenda}>Agenda un diagnóstico</Button></div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ===== 1 · HERO ===== */}
        <section ref={heroSectionRef} id="inicio" style={{ position: "relative", zIndex: 2, minHeight: "100vh", display: "flex", alignItems: "center", padding: "150px var(--gutter) 80px", overflow: "hidden" }}>
          <div data-hero-grid style={{ position: "relative", zIndex: 3, maxWidth: "var(--container-wide)", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "minmax(0,1.04fr) minmax(0,.96fr)", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 16px 8px 13px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", background: "rgba(255,255,255,.04)", backdropFilter: "blur(8px)", position: "relative", animation: "omnaBadgeGlow 4.5s var(--ease-in-out) infinite, omnaFadeUp .8s var(--ease-out) both" }}>
                <Factory size={16} style={{ color: "var(--omna-orange)" }} />
                <span style={{ fontSize: ".86rem", fontWeight: 600, color: "#fff" }}>IA de punta a punta para manufactura y distribución</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.5rem,5.4vw,5.3rem)", lineHeight: 0.99, letterSpacing: "-.03em", margin: ".3em 0 0", color: "#fff" }}>
                <span style={{ display: "block", animation: "omnaWordIn .95s var(--ease-out) .15s both" }}>Tu fábrica o</span>
                <span style={{ display: "block", animation: "omnaWordIn .95s var(--ease-out) .3s both" }}>distribuidora.</span>
                <span style={{ display: "block", animation: "omnaWordIn .95s var(--ease-out) .46s both" }}>En <span className="omna-flow">piloto automático.</span></span>
              </h1>
              <p style={{ maxWidth: 560, marginTop: 28, fontSize: "clamp(1.04rem,1.4vw,1.28rem)", lineHeight: 1.55, color: "var(--text-secondary)", animation: "omnaFadeUp 1s var(--ease-out) .64s both" }}>
                Tu plataforma de inteligencia artificial construida para fabricantes y distribuidores. Automatiza pedidos, inventarios, conciliación, ingenierías y planeación de demanda de punta a punta.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 36, animation: "omnaFadeUp 1s var(--ease-out) .9s both" }}>
                <Button variant="primary" size="lg" arrow onClick={openAgenda}>Agenda un diagnóstico</Button>
                <Button variant="secondary" size="lg" onClick={() => scrollToId("solucion")}>Ver cómo funciona</Button>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "clamp(330px,52vh,560px)", animation: "omnaFadeUp 1.4s var(--ease-out) .5s both" }}>
              <OmnaBrain mode="ambient" explodeRef={heroExplode} />
              <div ref={heroCoreRef} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", transition: "opacity .15s linear" }}>
                <div style={{ position: "absolute", left: "50%", top: "50%", width: 236, height: 236, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(254,101,29,.38), rgba(149,74,204,.18) 40%, transparent 70%)", mixBlendMode: "screen", filter: "blur(7px)", animation: "omnaCoreBloom 3.8s var(--ease-in-out) infinite" }} />
                <div style={{ position: "absolute", left: "50%", top: "50%", width: 120, height: 120, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "conic-gradient(from 0deg, transparent, rgba(254,101,29,.42), transparent 42%, rgba(149,74,204,.32), transparent 72%)", WebkitMaskImage: "radial-gradient(circle, transparent 56%, #000 58%, #000 70%, transparent 72%)", maskImage: "radial-gradient(circle, transparent 56%, #000 58%, #000 70%, transparent 72%)", animation: "omnaCoreOrbit 16s linear infinite" }} />
                <div style={{ position: "absolute", left: "50%", top: "50%", width: 90, height: 90, transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1px solid rgba(254,101,29,.26)", boxShadow: "0 0 26px rgba(254,101,29,.20), inset 0 0 20px rgba(149,74,204,.18)", animation: "omnaCoreBloom 3.8s var(--ease-in-out) infinite" }} />
                <Image src="/omna-core.png" alt="OMNA" width={58} height={58} style={{ position: "relative", width: 58, height: 58, objectFit: "contain", filter: "drop-shadow(0 0 9px rgba(254,101,29,.62)) drop-shadow(0 0 22px rgba(149,74,204,.42))", animation: "omnaCoreLive 4.2s var(--ease-in-out) infinite" }} />
              </div>
              <div style={{ position: "absolute", bottom: 6, left: 0, right: 0, textAlign: "center", pointerEvents: "none" }}>
                <span style={{ fontSize: ".7rem", letterSpacing: ".26em", textTransform: "uppercase", color: "var(--text-muted)" }}>El Cerebro · operando</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOGOS ===== */}
        <section style={{ position: "relative", zIndex: 2, padding: "30px 0 50px" }}>
          <p style={{ textAlign: "center", fontSize: ".78rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--text-muted)" }}>Fabricantes y distribuidores que ya operan con OMNA</p>
          <div style={{ marginTop: 30, position: "relative", overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 72, width: "max-content", animation: "omnaMarquee 34s linear infinite" }}>
              {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} style={{ fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-.02em", color: "var(--omna-lilac)", opacity: 0.72 }}>{l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 2 · PROBLEMA ===== */}
        <section id="problema" style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 860 }}>
              {eyebrow("La situación actual")}
              <h2 style={h2}>El back-office industrial todavía corre en correos, llamadas y <span className="omna-flow">Excel</span>.</h2>
              <p style={{ ...lead, maxWidth: 640 }}>Una empresa mediana de manufactura o distribución gestiona múltiples fleteras, proveedores y plataformas. Cada una con su portal, su formato y su contraseña. El trabajo escala linealmente con el volumen — así que crecer en ingresos significa contratar más gente.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 50 }}>
              {PROBLEMAS.map((p, i) => (
                <div key={p.title} data-reveal data-d={i + 1} data-q-card style={card}>
                  <IconBox>{p.icon}</IconBox>
                  <h3 style={{ marginTop: 18, fontSize: "1.14rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ marginTop: 10, color: "var(--text-secondary)", lineHeight: 1.55, fontSize: ".98rem" }}>{p.body}</p>
                </div>
              ))}
            </div>
            <p data-reveal style={{ marginTop: 34, maxWidth: 760, fontSize: "1.08rem", lineHeight: 1.5, color: "var(--text-primary)", fontWeight: 500 }}>El patrón se repite en toda empresa mediana con ERP: la lógica de la operación no vive en el sistema — <span className="omna-flow">vive en cabezas y en hojas de cálculo</span>.</p>
          </div>
        </section>

        {/* ===== 3 · IMPACTO ===== */}
        <section style={{ position: "relative", zIndex: 2, padding: "clamp(60px,8vh,120px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 760 }}>
              {eyebrow("El impacto")}
              <h2 style={h2}>Qué cambia cuando los agentes <span className="omna-flow">empiezan a trabajar</span>.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 44 }}>
              {IMPACTO.map((s, i) => (
                <div key={s.label} data-reveal data-d={i + 1} style={{ borderRadius: "var(--radius-card)", border: "1px solid var(--border-default)", background: `linear-gradient(165deg, ${s.warm ? "rgba(254,101,29,.14)" : "rgba(149,74,204,.12)"}, var(--surface-raised))`, padding: "30px 26px" }}>
                  <div className="omna-flow" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: s.small ? "clamp(2rem,3.2vw,2.5rem)" : "clamp(2.6rem,4.4vw,3.4rem)", lineHeight: s.small ? 1.05 : 1, letterSpacing: "-.02em" }}>{s.value}</div>
                  <div style={{ marginTop: 14, color: "var(--text-secondary)", fontSize: ".98rem", lineHeight: 1.45 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p data-reveal style={{ marginTop: 22, fontSize: ".86rem", color: "var(--text-muted)" }}>Cifras obtenidas en diagnósticos realizados con empresas distribuidoras y fabricantes · Julio 2026</p>
          </div>
        </section>

        {/* ===== 4 · SOLUCIÓN ===== */}
        <section id="solucion" style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-2col style={{ display: "grid", gridTemplateColumns: "minmax(0,.92fr) minmax(0,1.08fr)", gap: "clamp(36px,5vw,64px)", alignItems: "center" }}>
              <div data-reveal style={{ position: "relative", width: "100%", maxWidth: 460, margin: "0 auto", aspectRatio: "1/1" }}>
                <OmnaBrain mode="pixel" style={{ inset: "16%", width: "68%", height: "68%" }} />
                {CHIPS.map((c) => (
                  <div key={c.l} style={{ position: "absolute", left: c.left, top: c.top, transform: "translate(-50%,-50%)", animation: "omnaFloatSoft 5.4s ease-in-out infinite" }}>
                    <span data-chip style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-default)", background: "rgba(13,1,22,.78)", backdropFilter: "blur(8px)", fontSize: ".76rem", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--omna-orange)" }} />{c.l}
                    </span>
                  </div>
                ))}
              </div>
              <div data-reveal data-d={1}>
                {eyebrow("La solución")}
                <h2 style={{ ...h2, fontSize: "clamp(1.9rem,4vw,3.3rem)", lineHeight: 1.06 }}>El futuro del back-office de <span className="omna-flow">manufactura y distribución</span>.</h2>
                <p style={{ marginTop: 18, fontSize: "1.08rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>OMNA conecta todos los datos de tu empresa —estructurados y no estructurados— y los convierte en una operación que se consulta, se monitorea y se ejecuta desde cualquier interfaz. El Director General ya no depende de una persona o un reporte: pregunta directamente a sus datos.</p>
                <div style={{ display: "grid", gap: 16, marginTop: 28 }}>
                  <div style={{ borderRadius: "var(--radius-card)", border: "1px solid var(--border-subtle)", background: "var(--surface-raised)", padding: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <IconBox size={40}><Database size={20} /></IconBox>
                      <h3 style={{ fontSize: "1.16rem", fontWeight: 700, color: "#fff" }}>01 · Sistema de Registro <span style={{ color: "var(--omna-lilac)", fontWeight: 600 }}>(El Cerebro)</span></h3>
                    </div>
                    <p style={{ marginTop: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>La base de datos central de tu operación. Conecta tus sistemas actuales sin reemplazarlos —ERP, correo, WhatsApp, CRM, reuniones, repositorios— y mantiene el conocimiento operativo actualizado en tiempo real. A los 12 meses conoce tu empresa mejor que cualquier consultor externo.</p>
                  </div>
                  <div style={{ borderRadius: "var(--radius-card)", border: "1px solid var(--omna-orange)", background: "linear-gradient(160deg, rgba(254,101,29,.12), var(--surface-raised))", padding: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <IconBox size={40}><Bot size={20} /></IconBox>
                      <h3 style={{ fontSize: "1.16rem", fontWeight: 700, color: "#fff" }}>02 · Agentes Verticales</h3>
                    </div>
                    <p style={{ marginTop: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>Agentes de IA que ejecutan flujos completos de punta a punta, como empleados de tiempo completo. Procesan pedidos, concilian facturas, generan guías, monitorean inventarios y buscan prospectos. Operan 24/7, escalan sin contratar y solo recurren al equipo humano cuando hay una excepción real. No son chatbots: son flujos autónomos.</p>
                  </div>
                </div>
                <p style={{ marginTop: 18, fontSize: "1rem", lineHeight: 1.55, color: "var(--text-primary)" }}>Todo lo que OMNA construye alimenta el Cerebro automáticamente. Pregúntale a tus datos en lenguaje natural desde <span style={{ color: "var(--omna-lilac)" }}>Claude, ChatGPT</span> o cualquier herramienta de IA que ya uses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5 · CEREBRO / PIPELINE ===== */}
        <section style={{ position: "relative", zIndex: 2, padding: "clamp(60px,8vh,120px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
              {eyebrow("La capa de inteligencia")}
              <h2 style={h2}>Todas tus fuentes, un solo <span className="omna-flow">cerebro listo para la IA</span>.</h2>
              <p style={{ marginTop: 18, maxWidth: 640, marginLeft: "auto", marginRight: "auto", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>OMNA Brain se sitúa entre los datos crudos de tu empresa y los agentes que los usan. Una sola capa, no diez integraciones.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, marginTop: 48 }}>
              {PIPELINE.map((p, i) => (
                <div key={p.tag} data-reveal data-d={i + 1} data-q-card style={{ ...card, padding: 28, ...(p.hi ? { border: "1px solid var(--omna-orange)", background: "linear-gradient(160deg, rgba(254,101,29,.12), var(--surface-raised))" } : {}) }}>
                  <span style={{ display: "inline-flex", alignItems: "center", padding: "6px 14px", borderRadius: "var(--radius-pill)", background: p.color, color: "#fff", fontSize: ".74rem", fontWeight: 700, letterSpacing: ".14em" }}>{p.tag}</span>
                  <h3 style={{ marginTop: 18, fontSize: "1.26rem", fontWeight: 700, color: "#fff" }}>{p.title}</h3>
                  <p style={{ marginTop: 10, color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 20 }}>
              {[
                { icon: <Lock size={22} />, title: "Tus datos, solo tuyos", body: "Tu información vive en un repositorio propio. Nunca se mezcla con la de ningún otro cliente, sin excepción." },
                { icon: <GitBranch size={22} />, title: "Trazabilidad total", body: "Cada dato y cada respuesta muestra de dónde salió. Nada es una caja negra: todo es auditable." },
              ].map((t) => (
                <div key={t.title} data-reveal data-q-card style={{ display: "flex", gap: 14, alignItems: "flex-start", borderRadius: "var(--radius-card)", border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,.02)", padding: "22px 24px" }}>
                  <span style={{ color: "var(--omna-orange)", marginTop: 2, flex: "none" }}>{t.icon}</span>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>{t.title}</h4>
                    <p style={{ marginTop: 6, color: "var(--text-secondary)", lineHeight: 1.55, fontSize: ".98rem" }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6 · CASOS ===== */}
        <section id="casos" style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 820 }}>
              {eyebrow("Casos de uso por área operativa")}
              <h2 style={h2}>Siete áreas operativas, <span className="omna-flow">un mismo patrón</span>.</h2>
              <p style={{ ...lead, maxWidth: 640 }}>Evidencia de diagnósticos con empresas de manufactura y distribución. Cada caso: el dolor que se repite, lo que OMNA construye y el resultado.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 50 }}>
              {CASOS.map((c, i) => (
                <div key={c.title} data-reveal data-d={(i % 3) + 1} data-q-card style={{ ...card, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <IconBox size={42}>{c.icon}</IconBox>
                    <h3 style={{ fontSize: "1.14rem", fontWeight: 700, color: "#fff" }}>{c.title}</h3>
                  </div>
                  <p style={{ marginTop: 16, color: "var(--text-secondary)", lineHeight: 1.55, fontSize: ".98rem" }}>
                    <span style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: ".72rem", letterSpacing: ".12em" }}>Dolor</span><br />{c.dolor}
                  </p>
                  <p style={{ marginTop: 14, color: "var(--text-primary)", lineHeight: 1.55, fontSize: ".98rem" }}>
                    <span style={{ color: "var(--omna-orange)", textTransform: "uppercase", fontSize: ".72rem", letterSpacing: ".12em" }}>OMNA construye</span><br />{c.construye}
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: 16 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 13px", borderRadius: "var(--radius-pill)", background: "var(--accent-soft)", border: "1px solid rgba(254,101,29,.3)", color: "#fff", fontSize: ".82rem", fontWeight: 600 }}>
                      <Check size={14} style={{ color: "var(--omna-orange)" }} />{c.chip}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Casos destacados */}
            <div data-reveal style={{ marginTop: 70, marginBottom: 26, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: ".8rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--omna-orange)" }}>Casos destacados · Antes / Después</span>
              <span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
            </div>
            <div data-2col style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 18 }}>
              {[
                { icon: <Scale size={22} />, title: "Conciliación de fleteras", tag: "Distribución · Manufactura", desc: <>Dos personas dedican dos semanas al mes a comparar ~1,400 facturas de fleteras contra tarifarios en Excel. Cada fletera tiene estructura de costos distinta y los errores se detectan después de pagar. En 5 meses auditados: <span style={{ color: "#fff", fontWeight: 600 }}>$516,000 MXN</span> en diferencias.</>, rows: [["2 semanas/mes de 2 personas", "Proceso automático; solo validan excepciones"], ["Errores detectados tras pagar", "Diferencias detectadas antes de pagar"]] },
                { icon: <ClipboardList size={22} />, title: "Toma de pedidos", tag: "Distribución", desc: <><span style={{ color: "#fff", fontWeight: 600 }}>1,434 pedidos</span> por mes se capturan a mano desde correo, WhatsApp o imagen. El 60% pasa por liberación manual de pagos; si no se libera en 5 días el ERP cancela el pedido — y el cliente no se entera hasta que llama.</>, rows: [["1,400+ pedidos/mes a mano", "Generados automáticamente desde cualquier canal"], ["60% con liberación manual", "Liberación por reglas; revisión solo en excepciones"], ["Cancelaciones a 5 días sin aviso", "Alerta antes del límite; se actúa a tiempo"]] },
              ].map((d, i) => (
                <div key={d.title} data-reveal data-d={i + 1} style={{ borderRadius: "var(--radius-card)", border: "1px solid var(--border-default)", background: "var(--surface-raised)", padding: "clamp(24px,3vw,34px)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <IconBox>{d.icon}</IconBox>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff" }}>{d.title}</h3>
                    </div>
                    <span style={{ fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{d.tag}</span>
                  </div>
                  <p style={{ marginTop: 18, color: "var(--text-secondary)", lineHeight: 1.6 }}>{d.desc}</p>
                  <div style={{ display: "grid", gap: 10, marginTop: 22 }}>
                    {d.rows.map((r, k) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "1fr 22px 1fr", alignItems: "center", gap: 8 }}>
                        <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,.03)", border: "1px solid var(--border-subtle)", color: "#b3aabf", fontSize: ".9rem", lineHeight: 1.35 }}>{r[0]}</div>
                        <ArrowRight size={18} style={{ color: "var(--omna-orange)", margin: "0 auto" }} />
                        <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--accent-soft)", border: "1px solid rgba(254,101,29,.28)", color: "#fff", fontSize: ".9rem", lineHeight: 1.35 }}>{r[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7 · TRANSFORMACIÓN (slider) ===== */}
        <section style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              {eyebrow("La transformación")}
              <h2 style={h2}>El día que tu operación <span className="omna-flow">se pilotea sola</span>.</h2>
              <p style={{ marginTop: 16, color: "var(--text-secondary)", fontSize: "1.05rem" }}>Arrastra el control. Mira lo que cambia cuando entran los agentes.</p>
            </div>
            <div data-reveal style={{ marginTop: 46 }}>
              <div ref={sliderRef} style={{ ["--pos" as string]: "50%", position: "relative", cursor: "ew-resize", borderRadius: "var(--radius-2xl)", overflow: "hidden", border: "1px solid var(--border-default)", userSelect: "none", touchAction: "none", height: "clamp(420px,58vh,540px)", background: "#0f0118" }}>
                {/* CON (base) */}
                <div style={{ position: "absolute", inset: 0 }}>
                  <OmnaBrain mode="order" style={{ opacity: 0.85 }} />
                  <SliderPane
                    label="Con OMNA" labelColor="var(--omna-orange)"
                    items={["Captura automática de pedidos", "Conciliación en horas, no semanas", "Backorders detectados antes", "Stock óptimo por SKU", "Torre de control unificada", "Decisiones sobre datos reales"]}
                    on
                  />
                </div>
                {/* SIN (overlay clipped) */}
                <div style={{ position: "absolute", inset: 0, clipPath: "inset(0 calc(100% - var(--pos)) 0 0)", background: "#100c16" }}>
                  <OmnaBrain mode="chaos" style={{ opacity: 0.5 }} />
                  <SliderPane
                    label="Sin OMNA" labelColor="#9a92a6"
                    items={["Pedidos tecleados a mano", "Conciliación en Excel", "Backorders invisibles", "Inventario sin visibilidad", "Datos en portales dispersos", "Decisiones a ciegas"]}
                    on={false}
                  />
                </div>
                {/* handle */}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "var(--pos)", width: 2, background: "linear-gradient(180deg,transparent,var(--omna-orange) 16%,var(--omna-orange) 84%,transparent)", transform: "translateX(-50%)", pointerEvents: "none" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, borderRadius: "50%", background: "var(--omna-ink)", border: "1.5px solid var(--omna-orange)", boxShadow: "var(--shadow-glow-orange)", display: "grid", placeItems: "center", color: "var(--omna-orange)" }}>
                    <MoveHorizontal size={21} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 8 · METODOLOGÍA ===== */}
        <section id="metodologia" style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 760 }}>
              {eyebrow("Metodología")}
              <h2 style={h2}>Así construimos un<br /><span className="omna-flow">Cerebro vivo</span>.</h2>
              <p style={{ marginTop: 18, maxWidth: 560, fontSize: "1.08rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>Cada proyecto alimenta el Cerebro automáticamente. El valor se acumula — no se reinicia con cada proyecto.</p>
            </div>
            <div data-2col style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(30px,4vw,56px)", marginTop: 50, alignItems: "start" }}>
              <div data-sticky style={{ position: "sticky", top: 104, height: "min(72vh,640px)" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "var(--radius-2xl)", overflow: "hidden", border: "1px solid var(--border-default)", background: "radial-gradient(120% 100% at 50% 30%, #260a3d, #0d0117)" }}>
                  <OmnaBrain mode="core" />
                  <div style={{ position: "absolute", left: 0, bottom: 0, padding: 24, pointerEvents: "none" }}>
                    <div style={{ fontSize: ".74rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--omna-orange)" }}>El Cerebro</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginTop: 4 }}>Pensando · conectando · aprendiendo</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {METODO.map((m) => (
                  <div key={m.n} data-reveal data-q-card style={{ ...card, padding: 28, ...(m.hi ? { border: "1px solid var(--omna-orange)", background: "linear-gradient(160deg, rgba(149,74,204,.16), var(--surface-raised))" } : {}) }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.8rem", background: "var(--gradient-text)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{m.n}</span>
                      <h3 style={{ fontSize: "1.34rem", fontWeight: 700, color: "#fff" }}>{m.title}</h3>
                    </div>
                    <p style={{ marginTop: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 9 · EQUIPO ===== */}
        <section id="equipo" style={{ position: "relative", zIndex: 2, padding: "clamp(70px,10vh,140px) 0" }}>
          <div style={wrap}>
            <div data-reveal style={{ maxWidth: 860 }}>
              {eyebrow("El equipo")}
              <h2 style={{ ...h2, lineHeight: 1.06 }}>No implementamos software. <span className="omna-flow">Construimos inteligencia</span> para tu operación.</h2>
              <p style={{ marginTop: 20, maxWidth: 620, fontSize: "1.12rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>Cada implementación es acompañada personalmente. No vendemos una plataforma: construimos junto con tu equipo un Cerebro Digital que aprende continuamente y se vuelve más valioso con el tiempo.</p>
            </div>
            <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "22px 18px", marginTop: 46, padding: "32px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
              <Stat value="Miles" label="Horas automatizadas" />
              <Stat value="95%" label="Satisfacción" />
              <Stat value="5–15x" label="Velocidad con IA" />
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section style={{ position: "relative", zIndex: 2, padding: "clamp(60px,8vh,110px) 0 clamp(90px,12vh,150px)" }}>
          <div style={wrap}>
            <div data-reveal style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-default)", padding: "clamp(40px,6vw,80px)", textAlign: "center", background: "linear-gradient(140deg,#260a3d,#11011C)" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.5, background: "url('/cta-bg.jpg') center/cover", WebkitMaskImage: "radial-gradient(80% 120% at 50% 0%, #000, transparent 62%)", maskImage: "radial-gradient(80% 120% at 50% 0%, #000, transparent 62%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <h2 style={{ fontSize: "clamp(2rem,4.4vw,3.4rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-.02em", color: "#fff", maxWidth: "32ch", margin: "0 auto" }}>Pongamos tu operación en <span className="omna-flow">piloto automático</span>.</h2>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
                  <Button variant="primary" size="lg" arrow onClick={openAgenda}>Agenda un diagnóstico</Button>
                </div>
                <p style={{ marginTop: 16, fontSize: ".95rem", color: "var(--text-muted)" }}>Una sesión para entender tu operación. Sin compromiso.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--border-subtle)", background: "rgba(11,1,18,.6)" }}>
        <div style={{ ...wrap, padding: "64px var(--gutter) 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 40 }}>
            <div style={{ maxWidth: 340 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <Image src="/omna-core.png" alt="OMNA" width={28} height={28} style={{ objectFit: "contain" }} />
                <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "#fff" }}>omna</span>
              </div>
              <p style={{ marginTop: 16, color: "var(--text-secondary)", lineHeight: 1.6 }}>Tu fábrica o distribuidora, en piloto automático. Automatización de IA de punta a punta para manufactura y distribución.</p>
            </div>
            <div>
              <div style={{ fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Navega</div>
              <div style={{ display: "grid", gap: 12 }}>
                {NAV.map((n) => (
                  <button key={n.id} data-navlink onClick={() => scrollToId(n.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "var(--text-secondary)", fontSize: "1rem", padding: 0, width: "fit-content" }}>{n.label}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Contacto</div>
              <div style={{ display: "grid", gap: 12, color: "var(--text-secondary)" }}>
                <a href="mailto:hola@omna.ai">hola@omna.ai</a>
                <a href="https://instagram.com/manuelnocode" target="_blank" rel="noreferrer">Instagram · @manuelnocode</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Empieza</div>
              <Button variant="secondary" size="md" arrow onClick={openAgenda}>Agenda un diagnóstico</Button>
            </div>
          </div>
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border-subtle)", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", color: "var(--text-muted)", fontSize: ".86rem" }}>
            <span>© 2026 OMNA® · Marca registrada · Aviso de privacidad</span>
            <span>Hacemos visible lo invisible.</span>
          </div>
        </div>
      </footer>

      {/* ===== AGENDA MODAL ===== */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 120, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px,4vw,40px)", background: "rgba(8,1,14,.78)", backdropFilter: "blur(14px)", animation: "omnaFadeUp .4s var(--ease-out) both" }} onClick={() => setModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: 560, maxHeight: "92vh", overflowY: "auto", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-default)", background: "linear-gradient(160deg,#1E0930,#11011C)", boxShadow: "var(--shadow-lg)", animation: "omnaScaleIn .45s var(--ease-out) both" }}>
            <button onClick={() => setModalOpen(false)} aria-label="Cerrar" style={{ position: "absolute", top: 18, right: 18, zIndex: 3, width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border-default)", background: "rgba(0,0,0,.3)", color: "var(--text-secondary)", cursor: "pointer", display: "grid", placeItems: "center" }}><X size={18} /></button>
            <div style={{ padding: "clamp(28px,5vw,48px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Image src="/omna-core.png" alt="" width={28} height={28} style={{ objectFit: "contain" }} />
                <span style={{ fontSize: ".76rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text-muted)" }}>Diagnóstico OMNA</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.5rem,3.4vw,2rem)", fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>Agenda tu diagnóstico.</h3>
              <p style={{ marginTop: 12, color: "var(--text-secondary)", lineHeight: 1.55 }}>Cuéntanos de tu empresa. Agendamos una sesión para entender tu operación y dónde los agentes moverían más valor.</p>
              <div style={{ marginTop: 20, minHeight: 480 }}
                data-fillout-id={FILLOUT_ID}
                data-fillout-embed-type="standard"
                data-fillout-inherit-parameters=""
                data-fillout-dynamic-resize=""
                data-fillout-domain={FILLOUT_DOMAIN}
              />
              <p style={{ marginTop: 14, fontSize: ".88rem", color: "var(--text-muted)", textAlign: "center" }}>Sin compromiso. Te respondemos en menos de 24 horas.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SliderPane({ label, labelColor, items, on }: { label: string; labelColor: string; items: string[]; on: boolean }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, padding: "0 clamp(26px,5vw,68px)" }}>
      <span style={{ fontSize: ".74rem", letterSpacing: ".22em", textTransform: "uppercase", color: labelColor }}>{label}</span>
      <div style={{ display: "grid", gap: 11, maxWidth: 360 }}>
        {items.map((it) => (
          <div key={it} style={{ display: "flex", gap: 11, alignItems: "center", color: on ? "#fff" : "#b3aabf", fontWeight: on ? 500 : 400, fontSize: "clamp(.98rem,1.6vw,1.12rem)" }}>
            {on ? <Check size={18} style={{ color: "var(--omna-orange)", flex: "none" }} /> : <X size={18} style={{ color: "#7d748c", flex: "none" }} />}
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
