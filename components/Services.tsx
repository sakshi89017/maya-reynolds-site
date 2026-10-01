import { services } from "@/lib/content";
import { SectionHeading, ServiceCard } from "./ui";
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <SectionHeading eyebrow="Services" title="Where Maya focuses her work" className="max-w-2xl" />
      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}
