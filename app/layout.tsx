import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omna.club"),
  title: "OMNA — Tu empresa AI-first. Sin riesgo, sin reemplazar a tu equipo.",
  description:
    "Somos la agencia que te lleva del 'no sabemos por dónde empezar con AI' a una operación AI-first con visibilidad, escala y documentación viva. Empieza con un diagnóstico.",
  openGraph: {
    title: "OMNA — Agencia AI-First para empresas en transición.",
    description:
      "Diagnóstico, implementación y documentación viva. Para CEOs que necesitan escalar sin crecer su equipo, y para AI Champions que quieren liderar la transformación.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
