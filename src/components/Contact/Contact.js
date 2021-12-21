import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        toast.error("Please fill out all the fields!");
        return;
      }

      let data = {
        name,
        email,
        message,
      };

      const res = await axios.post("/api/mail", data);

      if (res.status === 200) {
        toast.success("Message sent!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Uh-oh, something went wrong. Please try again later!");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main>Contact Me</SectionTitle>
      <ToastContainer />
      <FormBody>
        <FormBodyLeft>
          <div>
            <FormText>
              Want to collaborate together? Send me a message!
            </FormText>
            <FormImage src={"./images/mail.png"} />
          </div>
        </FormBodyLeft>
        <FormBodyRight method="post" onSubmit={handleOnSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" onChange={handleName} value={name} />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" onChange={handleEmail} value={email} />
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea type="text" onChange={handleMessage} value={message} />

          <SubmitButton type="submit">send</SubmitButton>
        </FormBodyRight>
      </FormBody>
    </Section>
  );
}
