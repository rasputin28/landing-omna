import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const GA_ID = "G-5JVD67G0ER";

const sft = localFont({
  variable: "--font-sft",
  display: "swap",
  src: [
    { path: "../public/fonts/SFTSchriftedSans-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-800.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/SFTSchriftedSans-900.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omna.club"),
  title: "OMNA — Tu fábrica o distribuidora, en piloto automático.",
  description:
    "Plataforma de IA de punta a punta para fabricantes y distribuidores. Automatiza pedidos, inventarios, conciliación, ingenierías y planeación de demanda. Todo conectado a un Cerebro que aprende tu operación.",
  openGraph: {
    title: "OMNA — Tu fábrica o distribuidora, en piloto automático.",
    description:
      "IA de punta a punta para manufactura y distribución. Agentes verticales que ejecutan pedidos, conciliación e inventarios sobre un Cerebro que conecta todos tus datos.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNA — Tu fábrica o distribuidora, en piloto automático.",
    description:
      "IA de punta a punta para manufactura y distribución. Agentes verticales sobre un Cerebro que aprende tu operación.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sft.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </html>
  );
}
