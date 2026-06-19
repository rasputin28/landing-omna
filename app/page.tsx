import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BrainGraph from "./BrainGraph";

const DIAGNOSTIC_HREF = "#contacto";
const CONTACT_EMAIL = "manuel@omna.club";
const SCHEDULE_URL = "https://omna.club";
const TWITTER_HANDLE = "manuelnocode";
const TWITTER_URL = `https://twitter.com/${TWITTER_HANDLE}`;

export const metadata: Metadata = {
  title: "OMNA — IA que llega a producción en tu planta. No otro piloto.",
  description:
    "Hacemos que la inteligencia artificial funcione de verdad dentro de la operación de fabricantes y distribuidores maduros. Integramos con tu ERP, MES, sensores y sistemas legacy. Empieza con un diagnóstico.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OMNA — IA aplicada para industria, manufactura y distribución.",
    description:
      "Diagnóstico en sitio, integración con tus sistemas reales y resultados medibles. Para directores que necesitan ejecutar IA, y para los equipos de TI que la van a sostener.",
    url: "/",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNA — IA aplicada para industria, manufactura y distribución.",
    description:
      "Diagnóstico en sitio, integración con tus sistemas reales y resultados medibles. IA en producción, no otro piloto.",
  },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/omna-isotipo.png" alt="OMNA" className="h-8 w-8" />
          <span className="text-2xl font-bold tracking-tight text-foreground lowercase">
            omna
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-muted">
          <a href="#para-quien" className="hover:text-foreground transition-colors">
            Para quién
          </a>
          <a href="#metodo" className="hover:text-foreground transition-colors">
            El método
          </a>
          <a href="#resultado" className="hover:text-foreground transition-colors">
            El resultado
          </a>
          <a href="#proceso" className="hover:text-foreground transition-colors">
            Cómo trabajamos
          </a>
          <a href="#plataforma" className="hover:text-foreground transition-colors">
            La plataforma
          </a>
        </div>
        <a
          href={DIAGNOSTIC_HREF}
          className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Empezar con un diagnóstico
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-brand animate-fade-in-up">
          IA aplicada · Industria, Manufactura y Distribución
        </p>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up animation-delay-100">
          Que la IA funcione de verdad
          <br />
          <span className="text-brand">dentro de tu operación.</span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-foreground/85 max-w-4xl mx-auto leading-snug animate-fade-in-up animation-delay-200">
          No otro piloto que muere en una presentación. Integramos IA en tus sistemas reales
          —ERP, MES, sensores, bases legacy— hasta que produce resultados medibles en planta.
        </p>

        <p className="mt-6 text-base sm:text-lg text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Trabajamos con fabricantes y distribuidores establecidos: empresas con 15–20 años de
          operación, procesos serios y datos reales. Llegamos a sitio, entendemos el proceso de
          primera mano y entregamos IA en producción donde otros solo dejan diapositivas.
        </p>

        <div className="mt-12 flex flex-col items-center gap-3 animate-fade-in-up animation-delay-400">
          <a
            href={DIAGNOSTIC_HREF}
            className="inline-flex items-center rounded-full bg-accent px-10 py-5 text-lg sm:text-xl font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02]"
          >
            Empezar con un diagnóstico →
          </a>
          <p className="text-sm text-muted max-w-xl">
            45 minutos. Sin costo. Sales con un mapa de dónde la IA sí genera valor en tu
            operación —lo construyamos juntos o no.
          </p>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    eyebrow: "Si diriges la empresa",
    title:
      "Sabes que la IA va a redefinir tu industria. No sabes por dónde empezar sin tirar el dinero.",
    body: "Has visto demos impresionantes que nunca llegaron a tu operación. Quieres resultados medibles —menos paros, mejor inventario, decisiones más rápidas— no un piloto más. Necesitas saber qué proyectos de IA sí tienen ROI en tu planta antes de invertir.",
    bullets: [
      "Un mapa de proyectos de IA con ROI claro, calculado antes de empezar",
      "IA que llega a producción dentro de tu operación, no a una presentación",
      "Resultados visibles en planta: tiempo, costo, calidad",
      "De un proyecto corto a una relación que crece con tu empresa",
    ],
  },
  {
    eyebrow: "Si sostienes los sistemas",
    title:
      "Conoces tu ERP y tus sistemas mejor que nadie. Trabajamos contigo, no por encima de ti.",
    body: "Nadie integra IA en tu operación sin entender primero el sistema que tú mantienes. Nos sentamos contigo a mapear ERP, MES, sensores y bases legacy, y te incorporamos las habilidades nuevas. Sales del proyecto liderando, no dependiendo de nosotros.",
    bullets: [
      "Integramos sobre tus sistemas reales, respetando lo que ya funciona",
      "Incorporas IA aplicada (LLMs, RAG, pipelines) a tu stack",
      "Te quedas con la documentación viva que usamos para construir",
      "Tu rol gana valor en el mercado — no se vuelve reemplazable",
    ],
  },
];

function Audiences() {
  return (
    <section id="para-quien" className="py-24 px-6 border-y border-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          Para quién es esto
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Le hablamos a dos personas dentro de tu empresa.
        </h2>
        <p className="mt-6 text-lg text-muted text-center max-w-2xl mx-auto leading-relaxed">
          Porque la IA solo llega a producción cuando la dirección y el equipo técnico empujan del
          mismo lado.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {audiences.map((a) => (
            <div
              key={a.eyebrow}
              className="rounded-2xl border border-border bg-background/70 p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
                {a.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-foreground leading-tight">{a.title}</h3>
              <p className="mt-4 text-base text-muted leading-relaxed">{a.body}</p>
              <ul className="mt-6 space-y-3">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                    <span className="text-brand shrink-0 font-bold">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const comparison = [
  {
    old: "Empieza con una herramienta de moda buscando dónde encajarla.",
    omna: "Empieza con tu proceso real, en sitio, buscando dónde la IA sí tiene ROI.",
  },
  {
    old: "Diagnóstico genérico hecho desde una sala de juntas.",
    omna: "Diagnóstico en planta, con quien ejecuta y con quien dirige.",
  },
  {
    old: "Pilotos que nunca se conectan a tu ERP, MES o datos reales.",
    omna: "Integración sobre tus sistemas reales hasta llegar a producción.",
  },
  {
    old: "El equipo de TI se entera cuando ya está todo decidido.",
    omna: "Tu equipo de TI co-construye desde el día uno.",
  },
  {
    old: "Te entregan un PDF y se llevan el know-how.",
    omna: "Te quedas con IA funcionando y documentación viva que heredas.",
  },
  {
    old: "Cobran por el proyecto, funcione o no.",
    omna: "Medimos impacto y construimos una relación transparente, recomendándote lo mejor para ti.",
  },
];

function Method() {
  return (
    <section id="metodo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          Por qué sigues atorado
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
          No es que no lo hayas intentado. Es <span className="text-brand">cómo se ha abordado.</span>
        </h2>
        <p className="mt-6 text-lg text-muted text-center max-w-3xl mx-auto leading-relaxed">
          Probaste una herramienta. Trajiste a una consultora. Le pediste a alguien de TI que
          “investigara IA” en sus ratos libres. Y sin embargo, la IA sigue sin tocar tu operación
          de verdad. El problema casi nunca es la tecnología — es el método.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border bg-border">
          <div className="bg-background/70 px-7 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              La forma tradicional
            </p>
          </div>
          <div className="bg-brand px-7 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
              De la mano de OMNA
            </p>
          </div>
          {comparison.map((row) => (
            <div key={row.omna} className="contents">
              <div className="bg-background/70 px-7 py-5 flex gap-3 text-sm text-muted leading-relaxed">
                <span className="shrink-0 text-muted/60">✕</span>
                <span>{row.old}</span>
              </div>
              <div className="bg-brand-soft px-7 py-5 flex gap-3 text-sm text-foreground leading-relaxed">
                <span className="shrink-0 font-bold text-brand">→</span>
                <span>{row.omna}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg sm:text-xl font-medium text-foreground max-w-3xl mx-auto leading-snug">
          La diferencia no es trabajar más duro. Es empezar por entender tu operación antes de
          tocar una sola línea de código.
        </p>
      </div>
    </section>
  );
}

function FactoryBand() {
  return (
    <section className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
      <Image
        src="/planta-equipo.jpg"
        alt="Operarios trabajando en una línea de producción"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/60 to-brand/20" />
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <p className="max-w-xl text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Donde otros dejan diapositivas,
          <br />
          nosotros dejamos IA operando en tu planta.
        </p>
      </div>
    </section>
  );
}

const outcomes = [
  {
    title: "La IA vive dentro de tu operación",
    body:
      "No en una demo. Integrada a tu ERP, MES y sensores, produciendo resultados medibles todos los días.",
  },
  {
    title: "Tus datos por fin hablan entre sí",
    body:
      "El conocimiento que vivía en silos, cabezas y hojas de cálculo está consolidado. Tu equipo y tu IA consultan la misma fuente.",
  },
  {
    title: "Escalas sin crecer la nómina",
    body:
      "Procesos que requerían varias personas corren con supervisión mínima. El resto se libera para lo que solo un humano hace.",
  },
  {
    title: "Tu equipo de TI lidera, no resiste",
    body:
      "Operan la IA como antes operaban sus bases de datos: con criterio y con calma, sin depender de nosotros.",
  },
  {
    title: "La documentación se mantiene sola",
    body:
      "Cada integración y decisión queda en una wiki viva que puedes leer, modificar y heredar. Si nos vamos, la operación sigue.",
  },
  {
    title: "Sabes qué construir sin adivinar",
    body:
      "Cada solución sale del diagnóstico con ROI calculado. Si algo no va a funcionar, te lo decimos antes de empezar.",
  },
];

function PromisedLand() {
  return (
    <section id="resultado" className="py-24 px-6 border-y border-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          Del otro lado
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Así se ve tu operación cuando la IA por fin funciona.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background/70 p-6"
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

const steps = [
  {
    label: "01",
    title: "Diagnóstico",
    body:
      "45 min con dirección y con quien ejecuta. Mapeamos los procesos donde la IA tiene ROI claro y descartamos los que no. Sales con un documento — lo implementemos nosotros o no.",
  },
  {
    label: "02",
    title: "Despliegue en sitio",
    body:
      "Vamos a la planta, almacén o centro de distribución. Entendemos el proceso de primera mano y levantamos el contexto técnico real: ERP, MES, sensores/IoT, bases legacy.",
  },
  {
    label: "03",
    title: "Integración en producción",
    body:
      "Conectamos nuestra plataforma a tus sistemas, modelamos los datos y ponemos las soluciones de IA a correr de verdad, en sprints cortos y con métricas. Cuando hace falta, también desarrollamos e integramos IoT en tu planta.",
  },
  {
    label: "04",
    title: "Relación que crece",
    body:
      "Medimos impacto, iteramos y convertimos un proyecto corto en una relación recurrente. Cada decisión queda en documentación viva que tu equipo opera y hereda.",
  },
];

function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          Cómo trabajamos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Llegamos a tu planta. No a una sala de juntas.
        </h2>
        <p className="mt-6 text-lg text-muted text-center max-w-2xl mx-auto leading-relaxed">
          Primero entendemos el proceso real, en sitio. Después integramos. Después medimos. Nunca
          al revés.
        </p>

        <ol className="mt-14 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-background/70 p-8 flex gap-6"
            >
              <span className="text-3xl font-bold text-brand shrink-0 leading-none">
                {s.label}
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const differentiators = [
  {
    title: "No vendemos software. Vendemos IA funcionando en tu planta.",
    body:
      "Una consultora te deja un PDF. Un SaaS te deja una licencia que tú tienes que conectar. Nosotros dejamos IA integrada y operando — con tu gente al volante.",
  },
  {
    title: "Nos ensuciamos las manos con tus sistemas reales.",
    body:
      "ERP, MES, sensores, bases legacy. Ahí donde los pilotos se mueren es donde nosotros entregamos. La integración profunda es el trabajo, no el obstáculo.",
  },
  {
    title: "Tenemos una plataforma propietaria que nos da velocidad.",
    body:
      "Te entregamos en semanas lo que una consultora entrega en trimestres, porque nuestra plataforma sostiene cada proyecto desde el día uno.",
  },
  {
    title: "Si no somos la solución, te lo decimos.",
    body:
      "Y te recomendamos quién sí. Preferimos eso a vender un proyecto que no va a funcionar.",
  },
];

function Why() {
  return (
    <section className="py-24 px-6 border-y border-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          Por qué con OMNA
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Las consultoras hacen pilotos. <span className="text-brand">Nosotros llegamos a producción.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-background/70 p-8"
            >
              <h3 className="text-lg font-bold text-foreground">{d.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="plataforma" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand text-center mb-3">
          La plataforma que lo hace posible
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
          Detrás de cada proyecto: <span className="text-brand">El Cerebro.</span>
        </h2>
        <p className="mt-8 text-lg text-muted leading-relaxed text-center">
          El Cerebro es nuestra plataforma propietaria. Combina una capa de datos inmutable —una
          base confiable y a prueba de errores de la información de tu operación— con un “cerebro”
          que aprende cómo funcionan tus sistemas y construye un mapa vivo de tu empresa. Eso es lo
          que permite que la IA entienda tu ERP, tu MES y tus datos de planta lo suficientemente
          bien como para llegar a producción, no quedarse en demo.
        </p>
        <p className="mt-6 text-base text-muted leading-relaxed text-center">
          Es la razón por la que logramos integración profunda donde otros solo hacen pilotos. Y la
          documentación viva de tu operación —cada decisión, cada flujo, cada integración— vive ahí.
          Tu equipo la opera con nosotros y se la queda cuando el proyecto termina.
        </p>

        <div className="mt-14">
          <BrainGraph />
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={DIAGNOSTIC_HREF}
            className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02]"
          >
            Construyamos el cerebro de tu operación →
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="py-28 px-6 border-t border-border/60 bg-brand-soft/60">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
          Empieza por el diagnóstico
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          45 minutos. Sin costo.
          <br />
          Te vas con un mapa.
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-muted leading-relaxed">
          Visitamos (o nos conectamos contigo), entendemos tu operación y te entregamos un mapa de
          dónde la IA sí tiene ROI en tu empresa. Si decidimos trabajar juntos, perfecto. Si no, el
          documento es tuyo y lo puede usar cualquier consultor o equipo interno. Tuyo desde el
          minuto uno.
        </p>

        <p className="mt-10 text-sm text-muted">
          Agenda 30 minutos →{" "}
          <a
            href={SCHEDULE_URL}
            className="text-brand font-medium hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            omna.club
          </a>
          <br />
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
          {" · "}
          <a
            href={TWITTER_URL}
            className="hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            @{TWITTER_HANDLE}
          </a>
        </p>

        <div className="mt-10 w-full min-h-[500px] text-left">
          <div
            style={{ width: "100%", height: "500px" }}
            data-fillout-id="u5xF6jsfB5us"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters=""
            data-fillout-dynamic-resize=""
            data-fillout-domain="forms.trifecta.studio"
          />
        </div>
        <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <p className="text-center text-sm text-muted">OMNA® · Marca registrada · 2026</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Audiences />
        <Method />
        <FactoryBand />
        <PromisedLand />
        <Process />
        <Why />
        <Platform />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
