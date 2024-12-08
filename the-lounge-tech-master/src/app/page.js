import Carousel from "@/components/carousel";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
