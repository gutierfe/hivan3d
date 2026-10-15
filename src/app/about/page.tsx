import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { codeSample, education, experience, profile, skills, toolsBlurb } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 md:px-10">
      {/* Profile */}
      <section className="pt-12 md:pt-14 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <SectionLabel className="mb-5">{"// 00 — Profile"}</SectionLabel>
          <h1 className="display text-[clamp(44px,8vw,72px)] text-balance rise">
            Rigs animators
            <br />
            don&rsquo;t fight.
          </h1>
          <p className="mt-8 max-w-[520px] text-[16px] md:text-[17px] leading-[1.6] text-muted text-pretty rise rise-1">
            {profile.summary}
          </p>
        </div>
        <dl className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-x-5 gap-y-3.5 border-t border-line pt-5 text-[15px] leading-[1.5] rise rise-2">
          <Row label="Role">{profile.role}</Row>
          <Row label="Experience">Sole rigger, 5 VFS short films · 10 animators · 5+ bipeds, 3 facial rigs, props</Row>
          <Row label="Stack">{profile.stack}</Row>
          <Row label="Status">{profile.status}</Row>
          <Row label="Based">
            {profile.location} · {profile.timezone}
          </Row>
          <Row label="Resume">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="link">
              Download PDF ↗
            </a>
          </Row>
        </dl>
      </section>

      {/* Experience */}
      <section className="border-t border-line pt-10 pb-12">
        <SectionLabel className="mb-6">{"// 01 — Rigging experience"}</SectionLabel>
        <div className="flex flex-col">
          {experience.map((job) => (
            <div
              key={job.title}
              className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-10 py-7 border-t border-line first:border-t-0"
            >
              <div>
                <div className="text-[22px] md:text-[26px] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]">
                  {job.title}
                </div>
                <div className="mt-2 font-mono text-[12px] leading-[1.8] text-dim uppercase tracking-[0.06em]">
                  {job.org}
                  <br />
                  {job.where} · {job.when}
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 text-[15px] md:text-[16px] leading-[1.55] text-muted max-w-[640px] text-pretty">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-dim font-mono shrink-0" aria-hidden>
                      +
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="border-t border-line pt-10 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <SectionLabel className="mb-[18px]">{"// 02 — Python tools (Maya)"}</SectionLabel>
          <p className="text-[15px] md:text-[16px] leading-[1.55] text-muted max-w-[480px] text-pretty">{toolsBlurb}</p>
        </div>
        <pre className="font-mono text-[12px] md:text-[12.5px] leading-[1.75] bg-[#111] border border-line p-5 text-muted overflow-x-auto">
          {codeSample}
        </pre>
      </section>

      {/* Skills */}
      <section className="border-t border-line pt-10 pb-12">
        <SectionLabel className="mb-6">{"// 03 — Skills"}</SectionLabel>
        <dl className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-x-5 gap-y-3.5 text-[15px] leading-[1.5] max-w-[820px]">
          {skills.map((skill) => (
            <Row key={skill.label} label={skill.label}>
              {skill.value}
            </Row>
          ))}
        </dl>
      </section>

      {/* Education + community */}
      <section className="border-t border-line pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <SectionLabel className="mb-6">{"// 04 — Education"}</SectionLabel>
          <ul className="flex flex-col">
            {education.map((item) => (
              <li
                key={item.school}
                className="flex justify-between items-baseline gap-4 py-3.5 border-b border-line"
              >
                <span>
                  <span className="block text-[18px] md:text-[20px] font-bold uppercase leading-tight">{item.school}</span>
                  <span className="block text-[14px] text-muted mt-1">{item.degree}</span>
                </span>
                <span className="font-mono text-[12px] text-dim shrink-0 text-right">{item.when}</span>
              </li>
            ))}
          </ul>
          <a
            href={profile.screenerUrl}
            target="_blank"
            rel="noreferrer"
            className="link inline-block mt-5 font-mono text-[12px] text-dim hover:text-paper"
          >
            ▶ VFS graduation screener ↗
          </a>
        </div>
        <div>
          <SectionLabel className="mb-6">{"// 05 — Community (Vancouver)"}</SectionLabel>
          <p className="text-[15px] md:text-[16px] leading-[1.55] text-muted max-w-[480px] text-pretty">
            Operations volunteer: Spark CG Society, Anirevo, Vancouver Game Connect, Galint Gaming (Battle of BC 7).
          </p>
        </div>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="contents">
      <dt className="font-mono text-[12px] leading-[1.6] text-dim uppercase tracking-[0.08em]">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
