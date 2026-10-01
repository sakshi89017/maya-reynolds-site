import Link from "next/link";
import type { ReactNode } from "react";

export function Button({ href, children, variant = "primary", className = "", ...rest }:
  { href: string; children: ReactNode; variant?: "primary" | "outline" | "accent"; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const v = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  }[variant];
  return <Link href={href} {...rest} className={`inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors ${v} ${className}`}>{children}</Link>;
}

export function SectionHeading({ eyebrow, title, id, className = "", as: Tag = "h2" }:
  { eyebrow?: string; title: ReactNode; id?: string; className?: string; as?: "h1" | "h2" }) {
  return (
    <div className={className}>
      {eyebrow && <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>}
      <Tag id={id} className="text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">{title}</Tag>
    </div>
  );
}

/** Honest placeholder: no photo was available from the profile source. Replace with next/image. */
export function ImageSlot({ label, ratio = "aspect-[4/5]", className = "" }: { label: string; ratio?: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder: ${label}`}
      className={`${ratio} ${className} flex w-full items-end rounded-sm border border-dashed border-primary/40 bg-muted p-4`}>
      <span className="text-xs leading-snug text-muted-foreground">{label}</span>
    </div>
  );
}

import Image from "next/image";

export function ServiceCard({ title, description, href, imageSrc, alt }: { title: string; description: string; href: string; imageSrc: string; alt: string }) {
  return (
    <article className="flex flex-col">
      <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-muted">
        <Image src={imageSrc} alt={alt} fill className="object-cover" />
      </div>
      <h3 className="mt-6 text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
      <Link href={href} className="mt-4 text-sm font-medium text-accent underline underline-offset-4">Ask about {title.toLowerCase()}</Link>
    </article>
  );
}
