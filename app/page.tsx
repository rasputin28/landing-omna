import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "OMNA — Tu fábrica o distribuidora, en piloto automático.",
  description:
    "Plataforma de IA de punta a punta para fabricantes y distribuidores. Automatiza pedidos, inventarios, conciliación, ingenierías y planeación de demanda. Todo conectado a un Cerebro que aprende tu operación.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OMNA — Tu fábrica o distribuidora, en piloto automático.",
    description:
      "IA de punta a punta para manufactura y distribución. Agentes verticales que ejecutan pedidos, conciliación e inventarios sobre un Cerebro que conecta todos tus datos.",
    url: "/",
    type: "website",
    locale: "es_MX",
  },
};

export default function Home() {
  return <LandingClient />;
}
