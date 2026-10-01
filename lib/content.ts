// All facts below come from Dr. Reynolds' profile document. Nothing else is asserted.
export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  short: "Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  city: "Santa Monica, California",
  address: ["123th Street 45 W", "Santa Monica, CA 90401"],
  url: "https://example.com", // TODO: replace with production domain
  // Phone, email and license number were not in the profile: supply before launch.
  phone: null as string | null,
  email: null as string | null,
};
export const nav = [
  { label: "About", href: "#about" }, { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" }, { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" }, { label: "Contact", href: "#contact" },
];
export const services = [
  { title: "Anxiety & panic", href: "#contact", imageSrc: "/service_anxiety.jpg", alt: "Calm water ripples",
    description: "For adults caught in constant worry, overthinking, tension in the body, or trouble sleeping. Many clients look “functional” on the outside while feeling always on edge." },
  { title: "Trauma", href: "#contact", imageSrc: "/service_trauma.jpg", alt: "Gentle leaf shadows on a wall",
    description: "Support for single-incident trauma and for longer-standing patterns that may stem from childhood, relationships, or chronic stress. Work is paced carefully, with safety and stabilization first." },
  { title: "Burnout & perfectionism", href: "#contact", imageSrc: "/service_burnout.jpg", alt: "A cozy moment with tea and a book",
    description: "For professionals, entrepreneurs, and creatives who feel disconnected from themselves after years of pushing through stress, and want more sustainable ways of living and working." },
];
export const approaches = [
  { title: "Cognitive-behavioral therapy (CBT)", text: "An evidence-based method for understanding how thoughts, emotions, and behavior interact." },
  { title: "EMDR", text: "An evidence-based method used within Maya’s trauma work." },
  { title: "Mindfulness-based practices", text: "Practices that help you notice what you are experiencing and build more regulation day to day." },
  { title: "Body-oriented techniques", text: "Tools for understanding the physiological side of anxiety, stress, and trauma, not only the emotional side." },
];
export const faqs = [
  { q: "Who do you work with?", a: "Adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many clients are high-achieving, thoughtful, and self-aware, yet feel exhausted or stuck in overthinking." },
  { q: "What can I expect in sessions?", a: "A warm, collaborative, grounded approach. Sessions are structured enough to feel supportive while leaving space for reflection and depth, and you are actively involved in the process." },
  { q: "Which therapeutic approaches do you use?", a: "Evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques." },
  { q: "Do you offer in-person or online sessions?", a: "Both. Therapy is available in person at the Santa Monica office and through secure telehealth for clients located in California." },
  { q: "Where is your office?", a: "123th Street 45 W, Santa Monica, CA 90401." },
  { q: "How do I get started?", a: "Use the contact form on this page to reach out and ask whether Maya’s approach may be a good fit." },
];
