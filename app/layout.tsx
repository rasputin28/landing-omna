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
  metadataBase: new URL("https://omna.ai"),
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  title: "OMNA — Omnipresent Technology, Applied",
  description:
    "El 70% de los pedidos en distribuidoras y fabricantes B2B llegan por WhatsApp, correo o llamada. Y el 100% se capturan a mano. OMNA — Omnipresent Technology, Applied.",
  openGraph: {
    title: "OMNA — Omnipresent Technology, Applied",
    description:
      "No llegamos con una solución. Llegamos a entender tu negocio. Casos reales en distribución y manufactura.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OMNA - Omnipresent Technology, Applied",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNA — Omnipresent Technology, Applied",
    description:
      "No llegamos con una solución. Llegamos a entender tu negocio. Casos reales en distribución y manufactura.",
    images: ["/opengraph-image"],
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
