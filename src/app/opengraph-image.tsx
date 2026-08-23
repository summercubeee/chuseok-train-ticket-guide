import { ImageResponse } from "next/og";

export const alt = "2026 추석 기차표 예매 총정리";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ fontSize: 64 }}>🚄</div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              color: "#b45309",
              background: "white",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            코레일 발표 기반 정리
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 800,
            color: "#1c1917",
            lineHeight: 1.25,
            maxWidth: 980,
          }}
        >
          2026 추석 기차표 예매 총정리
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#57534e", marginTop: 24, maxWidth: 900 }}>
          예매 일정 / 노선별 날짜 / 매진 대응법 한 번에 정리
        </div>
      </div>
    ),
    { ...size }
  );
}
