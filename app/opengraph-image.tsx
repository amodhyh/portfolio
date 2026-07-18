import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070d1c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "14px",
              color: "#8b9ab0",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Engineering Ledger
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#f5f8fc",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              lineHeight: "1.1",
            }}
          >
            Amodh Herath
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#8b9ab0",
              lineHeight: "1.5",
            }}
          >
            Backend software · Distributed architecture · System reliability
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#3d5478",
            letterSpacing: "0.15em",
          }}
        >
          amodhyh.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
