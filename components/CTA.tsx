import ContactForm from "./ContactForm";
import { SectionHeading } from "./ui";
export default function CTA() {
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <div>
        <SectionHeading eyebrow="Schedule a consultation" title="Ready to take the next step?" />
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          Finding the right therapist is part of starting therapy. If Maya’s approach sounds like a good fit, send a note and ask whatever you’d like to know. You can meet in person in Santa Monica or online from anywhere in California.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
