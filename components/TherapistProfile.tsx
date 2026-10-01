import { Button, SectionHeading } from "./ui";
import Image from "next/image";

export default function TherapistProfile() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,340px)_1fr] md:gap-14 lg:py-24">
      <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-muted">
        <Image src="/portrait.jpg" alt="Dr. Maya Reynolds, PsyD" fill className="object-cover" />
      </div>
      <div className="self-center">
        <SectionHeading eyebrow="Licensed Clinical Psychologist" title="Meet Dr. Maya Reynolds" />
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Maya is a licensed clinical psychologist based in Santa Monica. She believes therapy works best when you feel respected, understood, and actively involved. Her goal is to help you develop insight, resilience, and a stronger relationship with yourself over time.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          If you want a therapist who combines practical tools with depth-oriented work, and who understands life in a fast-paced environment, she may be a good fit.
        </p>
        <Button href="#contact" variant="outline" className="mt-8">Reach out to Maya</Button>
      </div>
    </section>
  );
}
