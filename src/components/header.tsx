"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-ink border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 h-[64px] flex items-center justify-between label text-muted">
        <Link href="/" className="link text-paper" aria-label="Home" onClick={close}>
          {profile.name}
        </Link>

        <nav className="hidden md:flex gap-7" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link hover:text-paper"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="hidden md:block">
          {profile.location.split(",")[0]} · {profile.timezone}
        </span>

        <button
          type="button"
          className="md:hidden link text-paper"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="md:hidden fixed inset-x-0 top-[64px] bottom-0 z-50 bg-ink flex flex-col justify-between px-5 py-10"
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display text-[44px] text-paper rise"
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="label text-dim leading-7">
          {profile.email}
          <br />
          {profile.location} · {profile.timezone}
        </div>
      </div>
    </header>
  );
}
