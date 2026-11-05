import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Orderbook from "./components/Orderbook";
import Expertise from "./components/Expertise";
import OurTeam from "./components/OurTeam";
// Testimonials is parked until real client comments are in — swap it back in for <HowWeWork /> or alongside it.
import HowWeWork from "./components/HowWeWork";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed header must live outside the smooth-scroll wrapper. */}
      <Header />
      <SmoothScroll>
        <main>
          <Hero />
          <AboutUs />
          <Orderbook />
          <Expertise />
          <OurTeam />
          <HowWeWork />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
