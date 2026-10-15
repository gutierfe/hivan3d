import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-24 flex flex-col items-center text-center gap-6">
      <span className="label text-dim">404 · Controller not found</span>
      <h1 className="display text-[clamp(48px,12vw,112px)]">
        Broken <span className="bar">rig.</span>
      </h1>
      <Link href="/" className="label bg-paper text-ink px-4 py-2.5 hover:bg-muted transition-colors">
        ← Back to work
      </Link>
    </div>
  );
}
