import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-6 flex flex-col md:flex-row gap-3 md:gap-8 justify-between label text-dim">
        <a href={`mailto:${profile.email}`} className="link hover:text-paper">
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link hover:text-paper"
        >
          {profile.linkedinLabel}
        </a>
        <span>
          {profile.citizenship} · CUSMA eligible
        </span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
