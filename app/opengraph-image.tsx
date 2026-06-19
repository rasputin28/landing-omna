import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "OMNA — Agencia AI-First";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const monogram = readFileSync(join(process.cwd(), "public", "omna-isotipo.png"));
  const monogramSrc = `data:image/png;base64,${monogram.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 110% at 0% 0%, #2a0f44 0%, #160a28 50%, #0a0514 100%)",
          color: "#ece8f2",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={monogramSrc} width={96} height={96} alt="" />
          <div
            style={{
              fontSize: 44,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 800,
            }}
          >
            OMNA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 1040,
            }}
          >
            <span>Convierte tu empresa en una operación&nbsp;</span>
            <span style={{ color: "#c05cff" }}>AI-first.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.25,
              maxWidth: 980,
              color: "#b4a6c8",
            }}
          >
            Sin reemplazar a tu equipo. Sin perder el control. Con documentación
            viva del sistema desde el día uno.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#b4a6c8",
            fontWeight: 600,
          }}
        >
          <div>omna.club</div>
          <div style={{ color: "#d24b6e" }}>Agencia AI-First</div>
        </div>
      </div>
    ),
    size,
  );
}
