import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, LeftPad } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle><DiReact size="3rem" /> <LeftPad>Front-End</LeftPad></ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript <br />
            React <br />
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
            Git/GitHub <br />
            Bash/Terminal <br />
            Agile/SCRUM
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
