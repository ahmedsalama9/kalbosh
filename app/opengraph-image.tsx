import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dr. Mohamed Kalboush — Fertility & IVF, Tanta";

// Baked text is Latin because satori has no bundled Arabic font; the Arabic
// title/description are carried by the page's og:title / og:description meta.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #3D1550 0%, #6D2B86 60%, #A8125F 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#FAF6F7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                border: "5px solid #D6177E",
              }}
            />
          </div>
          <div style={{ fontSize: 30, color: "#F3E9F8" }}>Kalboush Fertility</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            Dr. Mohamed Kalboush
          </div>
          <div style={{ marginTop: 18, fontSize: 34, color: "#FCE7F1" }}>
            Delayed pregnancy &amp; IVF specialist
          </div>
          <div style={{ marginTop: 10, fontSize: 28, color: "#F3E9F8", opacity: 0.85 }}>
            Obstetrics &amp; Gynecology — Tanta, Egypt
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Correct diagnosis first", "A plan for each case", "Step by step"].map(
            (t) => (
              <div
                key={t}
                style={{
                  fontSize: 22,
                  color: "#F3E9F8",
                  border: "1px solid rgba(243,233,248,0.3)",
                  borderRadius: 999,
                  padding: "8px 20px",
                }}
              >
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
