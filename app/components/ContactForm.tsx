import Script from "next/script";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent mb-2">
          OMNA
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Una sola pregunta.</h2>
        <p className="mt-4 text-xl font-semibold text-center text-foreground">
          ¿Hay alguno de estos procesos que esté costándote hoy?
        </p>
        <p className="mt-4 text-center text-muted leading-relaxed">
          Si la respuesta es sí, vale la pena una conversación de 30 minutos. Sin presentación, sin
          pitch. Solo entendemos tu caso y te decimos si podemos ayudarte.
        </p>
        <p className="mt-2 text-center text-sm text-muted">
          Agenda 30 minutos →{" "}
          <a
            href="https://omna.club"
            className="text-accent font-medium hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            omna.club
          </a>
          <br />
          <a href="mailto:manuel@omna.club" className="hover:text-foreground">
            manuel@omna.club
          </a>
          {" · "}
          <a
            href="https://twitter.com/manuelnocode"
            className="hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            @manuelnocode
          </a>
        </p>

        <div className="mt-10 w-full min-h-[500px]">
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
