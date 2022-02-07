import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

export default function Header() {

  const [navCollapse, setNavCollapse] = useState(true);

  function handleClick(e) {
    setNavCollapse(!navCollapse);
    console.log(navCollapse);
  }


  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2 collapse={navCollapse}>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3 collapse={navCollapse}>
        <SocialIcons href="https://github.com/Jesse1786">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jesse-z-b35716197/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="http://twitter.com">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
      <Div4 onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </Div4>
    </Container>
  );
}
