import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — OMNA",
  description: "Aviso de privacidad de OMNA.",
  robots: { index: false },
};

export default function AvisoPrivacidad() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(80px,12vh,140px) var(--gutter) 100px", color: "var(--text-primary)" }}>
      <Link href="/" style={{ color: "var(--omna-orange)", fontSize: ".95rem", textDecoration: "none" }}>← Volver al inicio</Link>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-.02em", color: "#fff", margin: "28px 0 0" }}>Aviso de Privacidad</h1>
      <p style={{ marginTop: 24, fontSize: "1.08rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
        OMNA® respeta y protege la privacidad de sus usuarios. La información que nos compartes a través de
        este sitio se utiliza únicamente para contactarte y preparar tu diagnóstico. No compartimos tus datos
        con terceros ajenos a la prestación del servicio.
      </p>
      <p style={{ marginTop: 20, fontSize: "1.08rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
        Para ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO), o para cualquier
        duda sobre el tratamiento de tus datos, escríbenos a{" "}
        <a href="mailto:manuel@omna.club" style={{ color: "var(--omna-orange)" }}>manuel@omna.club</a>.
      </p>
      <p style={{ marginTop: 40, fontSize: ".9rem", color: "var(--text-muted)" }}>© 2026 OMNA® · Marca registrada</p>
    </main>
  );
}
