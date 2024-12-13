import Carousel from "@/components/carousel";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials";
import TeamPeople from "./pages/TeamPeople";
import JoinPage from "./pages/JoinPage";
// import "swiper/swiper-bundle.min.css"; // Global Swiper styles
// import "./globals.css";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <JoinPage />
      <TeamPeople />
      <Testimonials />
    </>
  );
}
