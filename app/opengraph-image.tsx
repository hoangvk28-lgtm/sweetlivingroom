export const dynamic = "force-static";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "SweetLivingRoom: living room furniture and decor buying guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read the brand mark at build time. ImageResponse cannot fetch a relative
// path, so the PNG is inlined as a data URL instead.
const markDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "icon-192.png")
).toString("base64")}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#2F4739", color: "#FAF6F0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUrl} alt="" width={150} height={150} />
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            <span>Sweet</span><span style={{ color: "#E8914F" }}>LivingRoom</span>
          </div>
        </div>
        <div style={{ marginTop: 40, fontSize: 40, color: "rgba(250,246,240,0.75)" }}>Living rooms, planned before they are furnished.</div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 18, display: "flex", background: "linear-gradient(90deg, #7C9A80 0%, #D2A24C 50%, #C2714F 100%)" }} />
      </div>
    ),
    { ...size }
  );
}
