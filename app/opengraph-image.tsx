export const dynamic = "force-static";

import { ImageResponse } from "next/og";
import { GearMark } from "./brand-mark";

export const alt = "SweetLivingRoom: living room furniture and decor buying guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#2F4739", color: "#FAF6F0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <GearMark size={120} />
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            <span>Sweet</span><span style={{ color: "#C2714F" }}>LivingRoom</span>
          </div>
        </div>
        <div style={{ marginTop: 40, fontSize: 40, color: "rgba(244,244,241,0.75)" }}>Living rooms, planned before they're furnished.</div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 18, display: "flex", background: "repeating-linear-gradient(-45deg, #C2714F 0 22px, #2F4739 22px 44px)" }} />
      </div>
    ),
    { ...size }
  );
}
