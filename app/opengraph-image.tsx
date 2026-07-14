import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "ShotStudio — AI Studio for Everyone";
export const size = { width: 1920, height: 1080 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const imgPath = join(
    process.cwd(),
    "public",
    "assets",
    "video",
    "hero-videos",
    "hero-main-poster.jpg",
  );
  const dataUrl = `data:image/jpeg;base64,${readFileSync(imgPath).toString("base64")}`;

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={dataUrl}
        alt='ShotStudio'
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    { ...size },
  );
}
