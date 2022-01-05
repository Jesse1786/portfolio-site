import Link from "next/link";
import React from "react";
import Typical from "react-typical";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! I'm Jesse,
        <br />a {' '}
        <Typical loop={Infinity} wrapper="span" steps={[
          "full stack developer.",
          2000,
          "MERN stack developer.",
          2000,
          "green tea enthusiast.",
          2000,
        ]} />
      </SectionTitle>
      <SectionText>
        Currently completing my fourth year in Computer Science at the
        University of Toronto. I love building web applications.
      </SectionText>
      <Link href="#projects">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
