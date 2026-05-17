import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const DIAGNOSTIC_HREF = "#contacto";
const CONTACT_EMAIL = "manuel@omna.club";
const SCHEDULE_URL = "https://omna.club";
const TWITTER_HANDLE = "manuelnocode";
const TWITTER_URL = `https://twitter.com/${TWITTER_HANDLE}`;

export const metadata: Metadata = {
  title: "OMNA — Tu empresa AI-first. Sin riesgo, sin reemplazar a tu equipo.",
  description:
    "Somos la agencia que te lleva del 'no sabemos por dónde empezar con AI' a una operación AI-first con visibilidad, escala y documentación viva. Empieza con un diagnóstico.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OMNA — Agencia AI-First para empresas en transición.",
    description:
      "Diagnóstico, implementación y documentación viva. Para CEOs que necesitan escalar sin crecer su equipo, y para AI Champions que quieren liderar la transformación.",
    url: "/",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNA — Agencia AI-First.",
    description:
      "Para CEOs que quieren escalar sin crecer su equipo, y para AI Champions que quieren liderar la transición.",
  },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
          omna
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-muted">
          <a href="#para-quien" className="hover:text-foreground transition-colors">
            Para quién
          </a>
          <a href="#status-quo" className="hover:text-foreground transition-colors">
            El costo de no actuar
          </a>
          <a href="#tierra-prometida" className="hover:text-foreground transition-colors">
            Resultado
          </a>
          <a href="#proceso" className="hover:text-foreground transition-colors">
            Proceso
          </a>
          <a href="#sistema" className="hover:text-foreground transition-colors">
            Sistema
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
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-accent animate-fade-in-up">
          Agencia AI-First · Para CEOs y equipos técnicos
        </p>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up animation-delay-100">
          Convierte tu empresa en una
          <br />
          operación <span className="text-accent">AI-first.</span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-foreground/85 max-w-4xl mx-auto leading-snug animate-fade-in-up animation-delay-200">
          Sin reemplazar a tu equipo. Sin perder el control. Con documentación viva del sistema
          desde el día uno.
        </p>

        <p className="mt-6 text-base sm:text-lg text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          No vendemos software. Somos la agencia que te lleva del “no sabemos por dónde empezar
          con AI” a tener visibilidad sobre tus sistemas, escalar sin crecer tu equipo, y dejar a
          tu gente más fuerte de lo que estaba antes de que llegáramos.
        </p>

        <div className="mt-12 flex flex-col items-center gap-3 animate-fade-in-up animation-delay-400">
          <a
            href={DIAGNOSTIC_HREF}
            className="inline-flex items-center rounded-full bg-accent px-10 py-5 text-lg sm:text-xl font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02]"
          >
            Empezar con un diagnóstico →
          </a>
          <p className="text-sm text-muted">
            45 minutos. Sin costo. Sin compromiso. Sales con un mapa, lo implementemos juntos o no.
          </p>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    eyebrow: "Si eres CEO o dueño",
    title: "Quieres escalar sin que crezca la nómina.",
    body: "Sabes que la AI va a redefinir tu industria. No sabes por dónde empezar sin meterte en un proyecto que se te salga de las manos. Quieres visibilidad sobre tus sistemas, decisiones más rápidas, y entender qué puedes desarrollar para abrir distancia con la competencia — antes de que ellos lo hagan.",
    bullets: [
      "Visibilidad real sobre lo que pasa en tu operación",
      "Escala sin sumar headcount ni licencias infinitas",
      "Soluciones de alto impacto, con ROI calculado antes de empezar",
      "Documentación viva del sistema — no dependes de nosotros para sostenerlo",
    ],
  },
  {
    eyebrow: "Si eres AI Champion o lideras tecnología",
    title: "Tu rol va a cambiar. Que cambie a tu favor.",
    body: "Sabes que la transición a AI-first no es opcional. Lo que no quieres es que la decisión la tome alguien que no entiende el sistema que tú sostienes. Trabajamos contigo, no sobre ti: te incorporamos las habilidades nuevas para que salgas del proyecto con más valor que cuando empezó.",
    bullets: [
      "Incorporas habilidades de AI aplicadas a tu sistema real",
      "Lideras la implementación con respaldo técnico, no a ciegas",
      "Te quedas con la documentación viva que nosotros usamos",
      "Tu trabajo crece en valor — no se vuelve reemplazable",
    ],
  },
];

function Audiences() {
  return (
    <section id="para-quien" className="py-24 px-6 border-y border-border/60 bg-surface/25">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Para quién es esto
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Le hablamos a dos personas dentro de tu empresa.
        </h2>
        <p className="mt-6 text-lg text-muted text-center max-w-2xl mx-auto leading-relaxed">
          Porque una transición AI-first solo funciona cuando dirección y tecnología están del
          mismo lado.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {audiences.map((a) => (
            <div
              key={a.eyebrow}
              className="rounded-2xl border border-border bg-background/60 p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {a.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-foreground leading-tight">{a.title}</h3>
              <p className="mt-4 text-base text-muted leading-relaxed">{a.body}</p>
              <ul className="mt-6 space-y-3">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                    <span className="text-accent shrink-0 font-bold">→</span>
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

const statusQuoLines = [
  "Pruebas con ChatGPT que nunca llegan a producción porque nadie sabe cómo conectarlas a tus datos reales.",
  "Decisiones que toma quien tenga el reporte más reciente — y el reporte siempre llega tarde.",
  "Procesos críticos que viven en la cabeza de tres personas. Si una se va, se va el conocimiento.",
  "Consultoras que te entregan un PDF, te cobran caro y se llevan el know-how con ellas.",
  "Equipos técnicos que ven la AI como amenaza porque nadie los incluyó en la transición.",
  "La competencia ya está experimentando. Tú sigues esperando el caso de uso perfecto.",
];

const costBlocks = [
  {
    title: "12-18",
    subtitle: "meses de atraso",
    body:
      "El tiempo que pierde una empresa que decide “esperar a que madure” la tecnología. Tus competidores que sí están experimentando ya están dos ciclos adelante.",
  },
  {
    title: "30-50%",
    subtitle: "de capacidad sin usar",
    body:
      "El porcentaje de operación que podría automatizarse hoy con las herramientas que existen — y que se quedan fuera porque nadie traduce capacidad técnica en proceso real.",
  },
  {
    title: "$0",
    subtitle: "de aprendizaje retenido",
    body:
      "Lo que queda dentro de la empresa cuando contratas una consultora tradicional que se va con el conocimiento. Sin documentación viva, cada cambio empieza de cero.",
  },
  {
    title: "1",
    subtitle: "talento clave perdido",
    body:
      "Lo que cuesta dejar fuera a tu mejor gente técnica de la transición. Cuando se sienten amenazados, se van — y se van con todo lo que sostienen.",
  },
];

function StatusQuo() {
  return (
    <section id="status-quo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          El costo de no actuar
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
          Esperar a que madure la AI ya
          <span className="text-accent"> te está costando.</span>
        </h2>

        <div className="mt-14 rounded-2xl border border-border bg-surface/60 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            Lo que vemos en empresas que llegan a nosotros
          </p>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-sm text-muted leading-relaxed">
            {statusQuoLines.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {costBlocks.map((item) => (
            <div
              key={item.title + item.subtitle}
              className="rounded-2xl border border-accent/25 bg-accent/5 p-6"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent">{item.title}</div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mt-1">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const outcomes = [
  {
    title: "Ves tu operación entera en una sola superficie",
    body:
      "El conocimiento que vivía en cabezas, drives y chats está consolidado. Tu equipo y tu AI consultan la misma fuente. Las decisiones dejan de depender de quién llegó primero a la reunión.",
  },
  {
    title: "Escalas sin crecer el equipo",
    body:
      "Procesos que antes requerían 6 personas corren con 2 supervisando. El resto se libera para vender, atender excepciones o trabajar en lo que solo un humano puede hacer.",
  },
  {
    title: "Tu equipo técnico lidera, no resiste",
    body:
      "Tu AI Champion sale del proyecto con habilidades nuevas que el mercado paga. Tu equipo de sistemas opera AI como antes operaba bases de datos: con criterio y con calma.",
  },
  {
    title: "Identificas oportunidades antes que la competencia",
    body:
      "El sistema te dice qué clientes están cambiando de comportamiento, qué procesos están listos para automatizarse, qué ideas tienen ROI antes de invertir un peso.",
  },
  {
    title: "La documentación se mantiene sola",
    body:
      "Cada cambio que hacemos queda escrito en una wiki viva que tú puedes leer, modificar y heredar. Si nosotros nos vamos, la operación sigue. Si entra alguien nuevo, se pone al día solo.",
  },
  {
    title: "Sabes qué construir sin adivinar",
    body:
      "Cada solución sale del diagnóstico con ROI calculado. Sin entregables que no se usan. Sin proyectos que se mueren a la mitad. Si algo no va a funcionar, te lo decimos antes de empezar.",
  },
];

function PromisedLand() {
  return (
    <section id="tierra-prometida" className="py-24 px-6 border-y border-border/60 bg-surface/25">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Del otro lado
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Así se ve tu empresa después de la transición.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background/60 p-6"
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
      "45 minutos con dirección y con quien ejecuta. Mapeamos los procesos donde la AI tiene ROI claro y descartamos los que no. Sales con un documento — lo implementemos nosotros o no.",
  },
  {
    label: "02",
    title: "Mapeo del sistema",
    body:
      "Entrevistamos al equipo que ejecuta. Levantamos cómo opera tu empresa de verdad, no cómo dice el organigrama. Identificamos a tu AI Champion y arrancamos el sistema de documentación viva.",
  },
  {
    label: "03",
    title: "Implementación",
    body:
      "Construimos las soluciones que salieron del diagnóstico, en sprints cortos y con métricas. Tu equipo trabaja a la par del nuestro — no es entregable, es transferencia.",
  },
  {
    label: "04",
    title: "Documentación viva",
    body:
      "Cada decisión, cada flujo, cada prompt queda escrito en un sistema que crece contigo. Si nosotros nos vamos, tu equipo sigue. Si entra gente nueva, se pone al día sin volverte a llamar.",
  },
];

function Process() {
  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Cómo trabajamos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Un proceso de 4 pasos. Sin caja negra.
        </h2>
        <p className="mt-6 text-lg text-muted text-center max-w-2xl mx-auto leading-relaxed">
          Empezamos siempre por entender. Después construimos. Después documentamos. Nunca al
          revés.
        </p>

        <ol className="mt-14 grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-background/60 p-8 flex gap-6"
            >
              <span className="text-3xl font-bold text-accent shrink-0 leading-none">
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
    title: "No vendemos software. Vendemos resultados.",
    body:
      "Una agencia tradicional te deja un PDF. Un SaaS te deja una licencia. Nosotros te dejamos una operación funcionando — con la gente de tu empresa al volante.",
  },
  {
    title: "Trabajamos con tu equipo, no encima de él.",
    body:
      "Tu AI Champion es parte del proceso, no espectador. Sale del proyecto liderando el sistema, no dependiendo de nosotros para entenderlo.",
  },
  {
    title: "Usamos un sistema propio que multiplica nuestra velocidad.",
    body:
      "Te entregamos en semanas lo que una consultora tradicional te entrega en trimestres — porque tenemos un sistema interno (OMNA Brain) que sostiene cada proyecto con documentación viva desde el día uno.",
  },
  {
    title: "Si no somos la solución, te lo decimos.",
    body:
      "Y te recomendamos quién sí puede ayudarte. Preferimos eso a vender un proyecto que no va a funcionar.",
  },
];

function Why() {
  return (
    <section className="py-24 px-6 border-y border-border/60 bg-surface/25">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          Por qué con OMNA
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
          Una agencia que entrega como producto.
          <br />
          Un producto que trabaja como agencia.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-background/60 p-8"
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

function System() {
  return (
    <section id="sistema" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent text-center mb-3">
          El sistema que usamos
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
          Detrás de cada proyecto: <span className="text-accent">OMNA Brain.</span>
        </h2>
        <p className="mt-8 text-lg text-muted leading-relaxed text-center">
          OMNA Brain es el sistema interno que nos permite entregarte resultados con velocidad y
          calidad que una consultora tradicional no puede igualar. Es donde vive la documentación
          viva de tu operación: cada grabación, cada decisión, cada flujo, cada prompt. Tu equipo
          lo opera con nosotros — y se lo queda cuando el proyecto termina.
        </p>
        <p className="mt-6 text-base text-muted leading-relaxed text-center">
          No lo vendemos por separado. Es la herramienta que nos hace ser quienes somos.
        </p>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="py-28 px-6 border-t border-border/60 bg-accent/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Empieza por el diagnóstico
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          45 minutos. Sin costo.
          <br />
          Te vas con un mapa.
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-muted leading-relaxed">
          Si después decidimos trabajar juntos, perfecto. Si no, te quedas con un documento que
          puede usar cualquier otra agencia, consultor o equipo interno. El diagnóstico es tuyo
          desde el minuto uno.
        </p>

        <p className="mt-10 text-sm text-muted">
          Agenda 30 minutos →{" "}
          <a
            href={SCHEDULE_URL}
            className="text-accent font-medium hover:underline"
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
      <p className="text-center text-sm text-muted">
        OMNA · Trifecta Studio · 2026
      </p>
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
        <StatusQuo />
        <PromisedLand />
        <Process />
        <Why />
        <System />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
