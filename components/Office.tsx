import { site } from "@/lib/content";
import { SectionHeading } from "./ui";
import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading eyebrow="Our Office" title="A calm space for meaningful work" />
          <p className="leading-relaxed text-muted-foreground">
            The Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease. Secure telehealth is also available for clients located in California.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2 relative aspect-[16/9] rounded-sm overflow-hidden bg-muted">
             <Image src="/office.jpg" alt="Main therapy office space" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-muted">
             <Image src="/office2.jpg" alt="Therapy office details" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-muted">
             <Image src="/office3.jpg" alt="Comfortable seating area in the therapy office" fill className="object-cover" />
          </div>
        </div>
        <address className="mt-8 not-italic text-sm text-muted-foreground">
          {site.address.join(", ")} · In-person and telehealth
        </address>
      </div>
    </section>
  );
}
