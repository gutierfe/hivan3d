import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { YouTube } from "@/components/youtube";
import { profile, projects, tools } from "@/lib/data";

const marqueeItems = [
  "Biped",
  "Facial",
  "Props",
  "Mech",
  "IK/FK",
  "Ribbons",
  "Space switching",
  "Correctives",
  "Python",
];

export default function HomePage() {
  const [lead, ...rest] = projects;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-10 pt-16 md:pt-[70px] pb-10 flex flex-col items-center text-center">
        <h1 className="display text-[clamp(40px,11.5vw,112px)]">
          <span className="block rise">Character</span>
          <span className="bar mt-1.5 rise rise-1 leading-[0.98]">Rigging</span>
        </h1>
        <p className="rise rise-2 mt-8 md:mt-[38px] max-w-[620px] text-[16px] md:text-[17px] leading-[1.5] text-muted text-pretty">
          {profile.tagline}
        </p>
        <div className="rise rise-3 mt-6 md:mt-[26px] flex flex-wrap gap-3 justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="label bg-paper text-ink px-4 py-2.5 hover:bg-muted transition-colors"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="label border border-paper px-4 py-2.5 hover:bg-paper hover:text-ink transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-3 md:py-4" aria-hidden>
        <div className="marquee display-wide text-[28px] md:text-[40px] leading-none whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex">
              {marqueeItems.map((item) => (
                <span key={item} className="px-4 md:px-6">
                  {item} <span className="text-dim">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1280px] px-5 md:px-10 pt-12 md:pt-16">
        <SectionLabel variant="centered">Selected rigs 2024 – 2026</SectionLabel>
        <div className="mt-8 md:mt-[30px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3.5">
          <ProjectCard project={lead} lead />
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} lead={i === rest.length - 1} />
          ))}
          <a
            href="#reel"
            className="card group flex flex-col gap-3"
            aria-label="Watch the rigging reel"
          >
            <div className="frame aspect-square flex items-center justify-center gap-3.5 font-mono text-[12px] text-dim">
              <span
                className="w-[54px] h-[54px] border-2 border-paper rounded-full flex items-center justify-center text-paper text-[14px] group-hover:bg-paper group-hover:text-ink transition-colors"
                aria-hidden
              >
                ▶
              </span>
              [ rigging reel · youtube ]
            </div>
            <div className="flex justify-between items-baseline gap-4 flex-wrap">
              <span className="card-title text-[22px] md:text-[28px] font-extrabold uppercase tracking-[-0.01em] leading-none">
                Rigging reel
              </span>
              <span className="font-mono text-[12px] text-dim tracking-[0.06em]">REEL · 2025</span>
            </div>
          </a>
        </div>
      </section>

      {/* Tools + Reel */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-10 mt-16 md:mt-[70px]">
        <div className="border-t border-line pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div id="tools">
            <SectionLabel className="mb-[18px]">Python tools · Maya</SectionLabel>
            <ul className="flex flex-col">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex justify-between items-baseline gap-4 py-3.5 border-b border-line text-[18px] md:text-[22px] font-bold uppercase"
                >
                  <span>{tool.name}</span>
                  <span className="font-mono text-[12px] text-dim normal-case text-right shrink-0">{tool.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-[1.55] text-muted max-w-[480px] text-pretty">
              A modular builder generates a full biped from a guide skeleton, so a new character is rigged in a
              fraction of the manual time.{" "}
              <Link href="/about#tools" className="link text-paper">
                More on the tools
              </Link>
            </p>
          </div>

          <div id="reel">
            <SectionLabel className="mb-[18px] lg:sr-only">Rigging reel · 2025</SectionLabel>
            <YouTube id={profile.reelId} title="Rigging reel" />
            <div className="mt-3 flex justify-between font-mono text-[12px] text-dim">
              <span>Rigging reel · 2025</span>
              <a href={profile.reelUrl} target="_blank" rel="noreferrer" className="link hover:text-paper">
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-[1280px] px-5 md:px-10 mt-20 md:mt-[80px] pb-10 md:pb-9 flex flex-col md:flex-row justify-between md:items-end gap-8"
      >
        <h2 className="display text-[clamp(44px,8vw,64px)] leading-[0.95]">
          Let&rsquo;s rig
          <br />
          something.
        </h2>
        <address className="not-italic md:text-right font-mono text-[13px] leading-[1.9] text-muted">
          <a href={`mailto:${profile.email}`} className="link hover:text-paper">
            {profile.email}
          </a>
          <br />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link hover:text-paper">
            {profile.linkedinLabel}
          </a>
          <br />
          {profile.citizenship} · {profile.availability}
        </address>
      </section>

    </>
  );
}
