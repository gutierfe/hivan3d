import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hivan3d.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, priority: 0.7 })),
  ];
}
