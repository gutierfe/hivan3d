import type { ReactNode } from "react";

type FrameProps = {
  caption: string;
  aspect?: "video" | "square" | "wide";
  align?: "end" | "center";
  className?: string;
  children?: ReactNode;
};

const ratios = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

/**
 * Striped placeholder frame for turntables, screenshots and the reel.
 * Swap `children` in for a real <video>, <Image> or embed when media lands.
 */
export function Frame({ caption, aspect = "video", align = "end", className = "", children }: FrameProps) {
  const alignment = align === "center" ? "items-center justify-center" : "items-end";
  return (
    <div
      className={`frame relative ${ratios[aspect]} flex ${alignment} p-4 font-mono text-[12px] text-dim ${className}`}
    >
      {children ?? <span>[ {caption} ]</span>}
    </div>
  );
}
