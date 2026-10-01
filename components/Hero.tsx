import { Button } from "./ui";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:py-24">
      <div className="rise">
        <p className="mb-4 text-sm font-medium text-accent">In-person in Santa Monica and telehealth across California</p>
        <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
          Anxiety, trauma, and burnout therapy for adults in Santa Monica, CA
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          You may look like you’re managing well while feeling constantly on edge. Dr. Maya Reynolds, a licensed clinical psychologist, offers a grounded space to slow down and feel more regulated in daily life.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact">Schedule a Consultation</Button>
          <Button href="#about" variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 relative aspect-[3/4] rounded-sm overflow-hidden bg-muted">
           <Image src="/hero.jpg" alt="Calm Santa Monica beach" fill className="object-cover" />
        </div>
        <div className="col-span-2 mt-12 relative aspect-[3/4] rounded-sm overflow-hidden bg-muted">
           <Image src="/office.jpg" alt="Calming therapy office detail" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
