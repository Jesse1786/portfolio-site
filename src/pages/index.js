import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { HeroSection, Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <HeroSection grid>
        <Hero />
        <BgAnimation />
      </HeroSection>
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;
