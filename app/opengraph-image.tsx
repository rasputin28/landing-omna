import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OMNA - Omnipresent Technology, Applied";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(155deg, #e5eae5 0%, #cecde9 42%, #e5eae5 100%)",
          color: "#1f3a2d",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#fe641c",
            fontWeight: 700,
          }}
        >
          OMNA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            Omnipresent Technology, Applied
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.2, maxWidth: 980 }}>
            Pedidos B2B sin captura manual. Menos errores, mas velocidad.
          </div>
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#1f3a2d" }}>
          omna.club
        </div>
      </div>
    ),
    size,
  );
}
