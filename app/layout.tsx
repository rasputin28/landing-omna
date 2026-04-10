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
  title: "OMNA — Escalamos tu negocio sin aumentar tu equipo",
  description:
    "Diseñamos sistemas tecnológicos a la medida que conectan procesos, eliminan fricción y le dan a tu equipo tiempo para crecer. +150 implementaciones en 9 países.",
  openGraph: {
    title: "OMNA — Escalamos tu negocio sin aumentar tu equipo",
    description:
      "Diseñamos sistemas tecnológicos a la medida que conectan procesos, eliminan fricción y le dan a tu equipo tiempo para crecer.",
    type: "website",
    locale: "es_MX",
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
