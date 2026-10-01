"use client";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <SectionHeading eyebrow="FAQs" title="Common questions" />
      <div className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <h3 className="font-sans">
                <button type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-serif text-lg">
                  {f.q}
                  <span aria-hidden className={`text-2xl leading-none text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
