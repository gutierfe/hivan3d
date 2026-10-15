import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame } from "@/components/frame";
import { SectionLabel } from "@/components/section-label";
import { YouTube } from "@/components/youtube";
import { getProject, profile, projects } from "@/lib/data";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const number = String(index + 1).padStart(2, "0");
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-[1280px] px-5 md:px-10">
      {/* Breadcrumb */}
      <div className="pt-6 flex justify-between label text-dim">
        <Link href="/#work" className="link hover:text-paper">
          ← Work
        </Link>
        <span>
          Rig {number} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* Title block */}
      <header className="pt-12 md:pt-16 pb-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-10 items-end">
        <h1 className="display text-[clamp(48px,10vw,108px)] leading-[0.88] rise">{project.title}</h1>
        <div className="flex flex-col gap-3.5 text-[16px] leading-[1.5] text-pretty rise rise-1">
          <span className="label self-start bg-paper text-ink px-2.5 py-1 tracking-[0.1em]">{project.spec}</span>
          <p className="text-muted">{project.summary}</p>
          <div className="flex gap-1.5 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="border border-paper px-2 py-[3px] font-mono text-[11px] uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero media */}
      <div className="rise rise-2">
        {project.videoId ? (
          <YouTube id={project.videoId} title={`${project.title} · video`} />
        ) : (
          <Frame caption={project.caption} aspect="wide" />
        )}
      </div>

      {/* Body + specs */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
        <div>
          <SectionLabel className="mb-5">{"// 01 — The rig"}</SectionLabel>
          <div className="flex flex-col gap-5 text-[16px] md:text-[17px] leading-[1.6] text-muted max-w-[620px] text-pretty">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <SectionLabel className="mt-12 mb-4">{"// 02 — What was rigged"}</SectionLabel>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[12.5px] leading-[1.6] text-muted max-w-[520px]">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-dim" aria-hidden>
                  +
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-[120px_1fr] gap-x-5 gap-y-3.5 border-t border-line pt-5 text-[15px] leading-[1.5]">
          {project.specs.map((spec) => (
            <div key={spec.label} className="contents">
              <dt className="font-mono text-[12px] leading-[1.6] text-dim uppercase tracking-[0.08em]">{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
          <dt className="font-mono text-[12px] leading-[1.6] text-dim uppercase tracking-[0.08em]">Year</dt>
          <dd>{project.year}</dd>
        </dl>
      </div>

      {/* Secondary media slots */}
      <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3.5">
        <Frame caption="deformation test" aspect="square" />
        <Frame caption="control layout" aspect="square" />
        <Frame caption="in-shot" aspect="square" className="col-span-2 md:col-span-1" />
      </div>

      {/* Prev / next */}
      <nav
        className="mt-16 md:mt-20 border-t border-line pt-8 pb-10 grid grid-cols-2 gap-6"
        aria-label="More projects"
      >
        <Link href={`/work/${prev.slug}`} className="card group flex flex-col gap-2">
          <span className="label text-dim">← Previous</span>
          <span className="card-title display text-[clamp(26px,5vw,44px)]">{prev.title}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="card group flex flex-col gap-2 text-right items-end">
          <span className="label text-dim">Next →</span>
          <span className="card-title display text-[clamp(26px,5vw,44px)]">{next.title}</span>
        </Link>
      </nav>

      <div className="border-t border-line py-8 flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <span className="display text-[clamp(28px,4vw,40px)] leading-none">
          Send me a <span className="bar">character.</span>
        </span>
        <a href={`mailto:${profile.email}`} className="label bg-paper text-ink px-4 py-2.5 self-start md:self-auto hover:bg-muted transition-colors">
          {profile.email}
        </a>
      </div>
    </article>
  );
}
