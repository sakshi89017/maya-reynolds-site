import { approaches } from "@/lib/content";
import { SectionHeading } from "./ui";
export default function Approach() {
  return (
    <section id="approach" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow="My approach" title="Practical tools, with room for depth" />
          <p className="mt-6 leading-relaxed text-primary-foreground/85">
            Maya takes a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while leaving space for reflection. Trauma work is paced carefully, with an emphasis on safety and stabilization, so you feel more regulated in daily life and not just during sessions.
          </p>
        </div>
        <dl className="divide-y divide-primary-foreground/25 border-y border-primary-foreground/25">
          {approaches.map((a) => (
            <div key={a.title} className="py-5">
              <dt className="font-serif text-xl">{a.title}</dt>
              <dd className="mt-1 text-primary-foreground/80">{a.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
