import Link from "next/link";
import React from "react";

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
        <br />a full stack developer.
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
