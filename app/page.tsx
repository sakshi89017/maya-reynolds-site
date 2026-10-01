import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import TherapistProfile from "@/components/TherapistProfile";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><About /><Services /><Approach /><TherapistProfile /><Office /><FAQ /><CTA />
      </main>
      <Footer />
    </>
  );
}
