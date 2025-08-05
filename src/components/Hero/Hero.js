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
          "QA Analyst.",
          2000,
        ]} />
      </SectionTitle>
      <SectionText>
        Recent Computer Science graduate from the University of Toronto with experience in full-stack web development and QA.
      </SectionText>
      <Link href="#projects">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
