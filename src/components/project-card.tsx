import Link from "next/link";
import { Frame } from "@/components/frame";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  /** Lead card spans two columns and uses a 16:9 frame. */
  lead?: boolean;
};

export function ProjectCard({ project, lead = false }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`card group flex flex-col gap-3 ${lead ? "md:col-span-2" : ""}`}
      aria-label={`${project.title} · ${project.spec}`}
    >
      <Frame caption={project.caption} aspect={lead ? "video" : "square"} />
      <div className="flex justify-between items-baseline gap-4 flex-wrap">
        <span className="card-title text-[22px] md:text-[28px] font-extrabold uppercase tracking-[-0.01em] leading-none">
          {project.title}
        </span>
        <span className="font-mono text-[12px] text-dim tracking-[0.06em]">{project.spec}</span>
      </div>
    </Link>
  );
}
