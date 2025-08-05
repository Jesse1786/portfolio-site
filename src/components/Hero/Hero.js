import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

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
        <br />
        a{" "}
        <span style={{ color: "#00bfff" }}>
          <Typewriter
            words={[
              "full stack developer.",
              "MERN stack developer.",
              "QA Analyst.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
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
