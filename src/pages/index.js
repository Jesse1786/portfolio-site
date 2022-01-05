import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import { Layout } from "../layout/Layout";
import { HeroSection } from "../styles/GlobalComponents";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: window.innerWidth < 1024 });
  }, []);

  return (
    <Layout>
      <HeroSection grid>
        <Hero />
        <BgAnimation />
      </HeroSection>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-right">
        <Technologies />
      </div>
      <div data-aos="fade-left">
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
