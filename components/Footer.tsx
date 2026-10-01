import Link from "next/link";
import { nav, site } from "@/lib/content";
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{site.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/80">{site.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:underline">{n.label}</Link></li>)}</ul>
        </nav>
        <address className="text-sm not-italic text-primary-foreground/80">
          {site.address.map((l) => <span key={l} className="block">{l}</span>)}
          <span className="mt-2 block">In-person and secure telehealth (California)</span>
          {/* Phone and email intentionally omitted: not in profile. */}
        </address>
      </div>
      <div className="border-t border-primary-foreground/20 px-5 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} {site.name}. <Link href="#top" className="underline">Privacy notice (to be supplied)</Link>
      </div>
    </footer>
  );
}
