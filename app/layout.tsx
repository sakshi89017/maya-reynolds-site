import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content";

const description = "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica offering therapy for adults with anxiety, panic, trauma, and burnout. In-person and telehealth across California.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA",
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA", description, type: "website", url: "/", siteName: site.name },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
