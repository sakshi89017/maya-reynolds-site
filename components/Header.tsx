"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Button } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="font-serif text-lg leading-none text-primary sm:text-xl">{site.short}</Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-sm hover:text-accent">{n.label}</Link>)}
          <Button href="#contact" className="!py-2">Schedule a Consultation</Button>
        </nav>
        <button ref={btn} type="button" className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <nav id="mobile-menu" aria-label="Mobile" hidden={!open}
        className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
        <ul>
          {nav.map((n) => (
            <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base">{n.label}</Link></li>
          ))}
        </ul>
        <Button href="#contact" onClick={() => setOpen(false)} className="mt-5 w-full">Schedule a Consultation</Button>
      </nav>
    </header>
  );
}
