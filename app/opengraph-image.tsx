import { ImageResponse } from "next/og";

export const alt = "Jazivo Tech — full-stack products, shipped by the engineers who designed them.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0d0b",
          color: "#ece8df",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            color: "#e0a045",
          }}
        >
          JAZIVO TECH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 920,
          }}
        >
          Full-stack products, shipped by the engineers who designed them.
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8a847b" }}>
          Web · Mobile · Custom software
        </div>
      </div>
    ),
    { ...size },
  );
}
