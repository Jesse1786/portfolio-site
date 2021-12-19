import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  FormBody,
  FormBodyLeft,
  FormBodyRight,
  FormImage,
  FormInput,
  FormLabel,
  FormText,
  FormTextArea,
  SubmitButton,
} from "./ContactStyles";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main>Contact Me</SectionTitle>

      <FormBody>
        <FormBodyLeft>
          <div>
            <FormText>
              Want to collaborate together? Send me a message!
            </FormText>
            <FormImage src={"./images/mail.png"} />
          </div>
        </FormBodyLeft>
        <FormBodyRight>
          <FormLabel for="name">Name</FormLabel>
          <FormInput type="text" />
          <FormLabel for="email">Email</FormLabel>
          <FormInput type="email" />
          <FormLabel for="message">Message</FormLabel>
          <FormTextArea type="text" />

          <SubmitButton type="submit">send</SubmitButton>
        </FormBodyRight>
      </FormBody>
    </Section>
  );
}
