# Propuesta de copy — Pivote a Industria, Manufactura y Distribución

**Fecha:** 2026-06-18
**Fuente:** Vacante Forward Deployed Engineer (OMNA) + landing actual (`app/page.tsx`)
**Decisiones:** pivote total a industria · moat técnico presente pero accesible · propuesta para revisión (sin tocar código todavía)

---

## Qué cambia y por qué

La landing actual vende una "agencia AI-first" genérica para cualquier empresa. La vacante revela lo que OMNA realmente es:

| Tema | Landing actual | Realidad (según la vacante) |
|---|---|---|
| Público | Cualquier empresa | Fabricantes y distribuidores maduros (15–20 años, procesos serios, datos reales, depto. de TI) |
| Moat | "Documentación viva / wiki" | Plataforma propietaria: **capa de datos inmutable** + **cerebro** que construye grafos de conocimiento sobre los sistemas del cliente |
| Integraciones | No se mencionan | ERP, MES, sensores/IoT, bases de datos legacy |
| Promesa | "AI-first sin reemplazar a tu equipo" | **De pilotos que mueren a IA en producción** dentro de la operación |
| Modelo | Diagnóstico → implementación | Diagnóstico → proyectos cortos → **servicios recurrentes anuales** |

La documentación viva se conserva (sí es real y diferenciador), pero deja de ser el héroe: el héroe es **llevar la IA a producción dentro de la planta**, algo que las consultoras grandes no logran.

---

## SECCIÓN POR SECCIÓN

### 0. Metadata / SEO

- **title:** `OMNA — IA que llega a producción en tu planta. No otro piloto.`
- **description:** `Hacemos que la inteligencia artificial funcione de verdad dentro de la operación de fabricantes y distribuidores maduros. Integramos con tu ERP, MES, sensores y sistemas legacy. Empieza con un diagnóstico.`
- **OG title:** `OMNA — IA aplicada para industria, manufactura y distribución.`
- **OG description:** `Diagnóstico en sitio, integración con tus sistemas reales y resultados medibles. Para directores que necesitan ejecutar IA, y para los equipos de TI que la van a sostener.`

---

### 1. Nav

Cambiar etiquetas para que reflejen el nuevo recorrido:

- Para quién → **Para quién**
- El costo de no actuar → **El método** (o "Tradicional vs OMNA")
- Resultado → **El resultado**
- Proceso → **Cómo trabajamos**
- Sistema → **La plataforma**

CTA: `Empezar con un diagnóstico` (sin cambio)

---

### 2. Hero

**Eyebrow:** IA aplicada · Industria, Manufactura y Distribución

**H1:**
> Que la IA funcione de verdad
> **dentro de tu operación.**

**Subtítulo (grande):**
> No otro piloto que muere en una presentación. Integramos IA en tus sistemas reales —ERP, MES, sensores, bases legacy— hasta que produce resultados medibles en planta.

**Párrafo (apoyo):**
> Trabajamos con fabricantes y distribuidores establecidos: empresas con 15–20 años de operación, procesos serios y datos reales. Llegamos a sitio, entendemos el proceso de primera mano y entregamos IA en producción donde otros solo dejan diapositivas.

**CTA:** `Empezar con un diagnóstico →`
**Microcopy CTA:** 45 minutos. Sin costo. Sales con un mapa de dónde la IA sí genera valor en tu operación —lo construyamos juntos o no.

---

### 3. Para quién (Audiences)

Mantener la estructura de dos públicos, pero reencuadrada a la realidad industrial: **dirección** y **el equipo de TI/sistemas que sostiene la planta**.

**Eyebrow sección:** Para quién es esto
**H2:** Le hablamos a dos personas dentro de tu empresa.
**Sub:** Porque la IA solo llega a producción cuando la dirección y el equipo técnico empujan del mismo lado.

**Tarjeta A — Dirección / Dueño**
- *Eyebrow:* Si diriges la empresa
- *Título:* Sabes que la IA va a redefinir tu industria. No sabes por dónde empezar sin tirar el dinero.
- *Body:* Has visto demos impresionantes que nunca llegaron a tu operación. Quieres resultados medibles —menos paros, mejor inventario, decisiones más rápidas— no un piloto más. Necesitas saber qué proyectos de IA sí tienen ROI en tu planta antes de invertir.
- *Bullets:*
  - Un mapa de proyectos de IA con ROI claro, calculado antes de empezar
  - IA que llega a producción dentro de tu operación, no a una presentación
  - Resultados visibles en planta: tiempo, costo, calidad
  - De un proyecto corto a una relación que crece con tu empresa

**Tarjeta B — TI / Sistemas / AI Champion**
- *Eyebrow:* Si sostienes los sistemas
- *Título:* Conoces tu ERP y tus sistemas mejor que nadie. Trabajamos contigo, no por encima de ti.
- *Body:* Nadie integra IA en tu operación sin entender primero el sistema que tú mantienes. Nos sentamos contigo a mapear ERP, MES, sensores y bases legacy, y te incorporamos las habilidades nuevas. Sales del proyecto liderando, no dependiendo de nosotros.
- *Bullets:*
  - Integramos sobre tus sistemas reales, respetando lo que ya funciona
  - Incorporas IA aplicada (LLMs, RAG, pipelines) a tu stack
  - Te quedas con la documentación viva que usamos para construir
  - Tu rol gana valor en el mercado — no se vuelve reemplazable

---

### 4. Por qué aún no has podido integrar IA (reemplaza "El costo de no actuar")

El ángulo cambia de "esperar cuesta" / "los pilotos fallan" (problema ajeno y abstracto) a la frustración propia del lector: *lo has intentado y algo siempre se atora*. Y se resuelve con un contraste **forma tradicional vs de la mano de OMNA**.

**Formato:** dos columnas lado a lado (antes/después, escaneable). **Tono:** directo pero respetuoso — critica el método, no al lector.

**Eyebrow:** Por qué sigues atorado
**H2:** No es que no lo hayas intentado. Es **cómo se ha abordado.**

**Párrafo intro:**
> Probaste una herramienta. Trajiste a una consultora. Le pediste a alguien de TI que "investigara IA" en sus ratos libres. Y sin embargo, la IA sigue sin tocar tu operación de verdad. El problema casi nunca es la tecnología — es el método.

**Comparación a dos columnas:**

| La forma tradicional | De la mano de OMNA |
|---|---|
| Empieza con una herramienta de moda buscando dónde encajarla. | Empieza con tu proceso real, en sitio, buscando dónde la IA sí tiene ROI. |
| Diagnóstico genérico hecho desde una sala de juntas. | Diagnóstico en planta, con quien ejecuta y con quien dirige. |
| Pilotos que nunca se conectan a tu ERP, MES o datos reales. | Integración sobre tus sistemas reales hasta llegar a producción. |
| El equipo de TI se entera cuando ya está todo decidido. | Tu equipo de TI co-construye desde el día uno. |
| Te entregan un PDF y se llevan el know-how. | Te quedas con IA funcionando y documentación viva que heredas. |
| Cobran por el proyecto, funcione o no. | Medimos impacto y construimos una relación transparente, de buena fe, recomendándote lo mejor para ti. |

**Cierre:**
> La diferencia no es trabajar más duro. Es empezar por entender tu operación antes de tocar una sola línea de código.

---

### 5. El resultado (Promised Land)

**Eyebrow:** Del otro lado
**H2:** Así se ve tu operación cuando la IA por fin funciona.

**Tarjetas (6):**
1. **La IA vive dentro de tu operación** — No en una demo. Integrada a tu ERP, MES y sensores, produciendo resultados medibles todos los días.
2. **Tus datos por fin hablan entre sí** — El conocimiento que vivía en silos, cabezas y hojas de cálculo está consolidado. Tu equipo y tu IA consultan la misma fuente.
3. **Escalas sin crecer la nómina** — Procesos que requerían varias personas corren con supervisión mínima. El resto se libera para lo que solo un humano hace.
4. **Tu equipo de TI lidera, no resiste** — Operan la IA como antes operaban sus bases de datos: con criterio y con calma, sin depender de nosotros.
5. **La documentación se mantiene sola** — Cada integración y decisión queda en una wiki viva que puedes leer, modificar y heredar. Si nos vamos, la operación sigue.
6. **Sabes qué construir sin adivinar** — Cada solución sale del diagnóstico con ROI calculado. Si algo no va a funcionar, te lo decimos antes de empezar.

---

### 6. Cómo trabajamos (Process)

Reescrito para reflejar el modelo real: diagnóstico → mapeo en sitio → integración en producción → relación recurrente.

**Eyebrow:** Cómo trabajamos
**H2:** Llegamos a tu planta. No a una sala de juntas.
**Sub:** Primero entendemos el proceso real, en sitio. Después integramos. Después medimos. Nunca al revés.

1. **Diagnóstico** — 45 min con dirección y con quien ejecuta. Mapeamos los procesos donde la IA tiene ROI claro y descartamos los que no. Sales con un documento — lo implementemos nosotros o no.
2. **Despliegue en sitio** — Vamos a la planta, almacén o centro de distribución. Entendemos el proceso de primera mano y levantamos el contexto técnico real: ERP, MES, sensores/IoT, bases legacy.
3. **Integración en producción** — Conectamos nuestra plataforma a tus sistemas, modelamos los datos y ponemos las soluciones de IA a correr de verdad, en sprints cortos y con métricas. Cuando hace falta, también hacemos desarrollos e integramos **IoT** en tu fábrica o planta, de la mano de nuestra tecnología y metodología.
4. **Relación que crece** — Medimos impacto, iteramos y convertimos un proyecto corto en una relación recurrente. Cada decisión queda en documentación viva que tu equipo opera y hereda.

---

### 7. Por qué con OMNA (Why / differentiators)

**Eyebrow:** Por qué con OMNA
**H2:** Las consultoras hacen pilotos. **Nosotros llegamos a producción.**

**Tarjetas (4):**
1. **No vendemos software. Vendemos IA funcionando en tu planta.** — Una consultora te deja un PDF. Un SaaS te deja una licencia que tú tienes que conectar. Nosotros dejamos IA integrada y operando — con tu gente al volante.
2. **Nos ensuciamos las manos con tus sistemas reales.** — ERP, MES, sensores, bases legacy. Ahí donde los pilotos se mueren es donde nosotros entregamos. La integración profunda es el trabajo, no el obstáculo.
3. **Tenemos una plataforma propietaria que nos da velocidad.** — Te entregamos en semanas lo que una consultora entrega en trimestres, porque nuestra plataforma sostiene cada proyecto desde el día uno. (Ver sección "La plataforma".)
4. **Si no somos la solución, te lo decimos.** — Y te recomendamos quién sí. Preferimos eso a vender un proyecto que no va a funcionar.

---

### 8. La plataforma (System / OMNA Brain) — moat presente pero accesible

**Eyebrow:** La plataforma que lo hace posible
**H2:** Detrás de cada proyecto: **El Cerebro.**

**Párrafo 1 (accesible, sin tecnicismos):**
> El Cerebro es nuestra plataforma propietaria. Combina una **capa de datos inmutable** —una base confiable y a prueba de errores de la información de tu operación— con un "cerebro" que aprende cómo funcionan tus sistemas y construye un mapa vivo de tu empresa. Eso es lo que permite que la IA entienda tu ERP, tu MES y tus datos de planta lo suficientemente bien como para llegar a producción, no quedarse en demo.

**Párrafo 2:**
> Es la razón por la que logramos integración profunda donde otros solo hacen pilotos. Y la documentación viva de tu operación —cada decisión, cada flujo, cada integración— vive ahí. Tu equipo la opera con nosotros y se la queda cuando el proyecto termina.

**Cierre:**
> No la vendemos por separado. Es la herramienta que nos hace ser quienes somos.

> *Nota: mantenemos esta sección solo en lenguaje de negocio. Sin bloque técnico — innecesario para la landing.*

---

### 9. CTA final

**Eyebrow:** Empieza por el diagnóstico
**H2:**
> 45 minutos. Sin costo.
> Te vas con un mapa.

**Párrafo:**
> Visitamos (o nos conectamos contigo), entendemos tu operación y te entregamos un mapa de dónde la IA sí tiene ROI en tu empresa. Si decidimos trabajar juntos, perfecto. Si no, el documento es tuyo y lo puede usar cualquier consultor o equipo interno. Tuyo desde el minuto uno.

(Contacto, formulario y footer: sin cambios.)

---

## Pendientes para ti

Todos resueltos:
- IoT: mencionado en el proceso (paso 3), no en el hero. ✓
- Nombre del moat: **El Cerebro** (público). ✓
- Bloque técnico extra: no se incluye — innecesario para la landing. ✓
