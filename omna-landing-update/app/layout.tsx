import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omna.club"),
  title: "OMNA — IA que llega a producción en tu planta. No otro piloto.",
  description:
    "Hacemos que la inteligencia artificial funcione de verdad dentro de la operación de fabricantes y distribuidores maduros. Integramos con tu ERP, MES, sensores y sistemas legacy. Empieza con un diagnóstico.",
  openGraph: {
    title: "OMNA — IA aplicada para industria, manufactura y distribución.",
    description:
      "Diagnóstico en sitio, integración con tus sistemas reales y resultados medibles. Para directores que necesitan ejecutar IA, y para los equipos de TI que la van a sostener.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
