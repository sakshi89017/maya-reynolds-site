"use client";
import { useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const field = "mt-1 w-full rounded-sm border border-border bg-background px-3 py-3 text-base";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address, like name@example.com.";
    if (message.length < 10) next.message = "Write at least a sentence (10 characters) so Maya knows how to respond.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 700)); // Simulated: no backend is connected.
    setStatus("done");
  }

  if (status === "done")
    return (
      <div role="status" className="rounded-sm border border-border bg-background p-6">
        <p className="font-serif text-xl">Your message has been prepared.</p>
        <p className="mt-2 text-sm text-muted-foreground">This demo has no email service connected, so nothing was sent. Connect a backend or form provider before launch.</p>
      </div>
    );

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-accent">{errors[k]}</p>;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-sm border border-border bg-background p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name <span className="text-accent">(required)</span></label>
        <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email <span className="text-accent">(required)</span></label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message <span className="text-accent">(required)</span></label>
        <textarea id="message" name="message" rows={4} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {err("message")}
      </div>
      <p className="text-xs text-muted-foreground">Please don’t include sensitive health details in this form.</p>
      <button type="submit" disabled={status === "loading"}
        className="min-h-11 w-full rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Preparing…" : "Send message"}
      </button>
    </form>
  );
}
