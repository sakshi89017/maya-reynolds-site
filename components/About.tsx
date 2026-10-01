import { SectionHeading } from "./ui";
import Image from "next/image";

const themes = ["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism", "High internal pressure", "Overthinking", "Sleep difficulty"];
export default function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-muted">
           <Image src="/about.jpg" alt="Calming coastal sand and water" fill className="object-cover" />
        </div>
        <div>
          <SectionHeading title="Capable on the outside. Worn out on the inside." />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Many of the people Maya works with are high-achieving, thoughtful, and self-aware, yet feel exhausted, stuck in overthinking, or always bracing for something to go wrong. Some are also carrying earlier life experiences that still shape their relationships, confidence, or sense of safety.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Therapy here is meant to be a place to slow down, reconnect, and build a stronger relationship with yourself over time, not only to relieve symptoms.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Areas Maya often supports">
            {themes.map((t) => <li key={t} className="rounded-sm border border-border bg-background px-3 py-1.5 text-sm">{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
