import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(155deg, #e5eae5 0%, #cecde9 42%, #e5eae5 100%)",
          color: "#1f3a2d",
          fontSize: 220,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          letterSpacing: -8,
        }}
      >
        O
      </div>
    ),
    size,
  );
}
