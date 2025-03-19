import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CarouselDemo from "./components/carousel-demo";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CarouselDemo />
      <Testimonials />
      <Contact />
    </>
  );
}
