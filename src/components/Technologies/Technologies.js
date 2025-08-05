import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { SectionDivider, SectionTitle, TechSection } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, LeftPad } from './TechnologiesStyles';

const Technologies = () =>  (
  <TechSection id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle><DiReact size="3rem" /> <LeftPad>Front-End</LeftPad></ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript <br />
            Next.js, Material UI <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><DiFirebase size="3rem" /> <LeftPad>Back-End</LeftPad></ListTitle>
          <ListParagraph>
            JavaScript, Java, Python, C <br />
            Node, Express <br />
            PostgreSQL, MongoDB, Neo4j
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><DiGit size="3rem" /> <LeftPad>Other</LeftPad></ListTitle>
          <ListParagraph>
            Git<br />
            Bash <br />
            Docker, GCP VM
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </TechSection>
);

export default Technologies;
