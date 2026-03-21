import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MediaBand from "@/components/sections/MediaBand";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <MediaBand />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
