import styled from "styled-components";

export const FormBody = styled.div`
  max-width: 1040px;
  padding: 10px;
  padding-left: 0;
  margin: 0px auto 50px;
  display: flex;
  border-radius: 12px;
  justify-content: space-between;
  box-shadow: 3px 3px 20px rgb(80 78 78 / 50%);
`;

export const FormBodyLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FormImage = styled.img`
  width: 100%;
  opacity: 0.4;
`;

export const FormBodyRight = styled.form`
  width: auto;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  color: #111;
  padding: 15px;
  justify-content: center;
  opacity: 0.9;
  background-color: white;
  border-radius: 12px;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  color: #111;
  letter-spacing: 0.2rem;
`;

export const FormInput = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  padding: 0.5rem 1rem;
  font-size: 2rem;
  margin-bottom: 22px;
  border-radius: 10px;
  background-color: rgba(230, 230, 230, 0.6);
`;

export const FormTextArea = styled.textarea`
  width: 100;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 2rem;
  margin-bottom: 22px;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 5px;
  outline: none;
  color: rgb(230, 227, 227);
  border: 2px solid #6b3030;
  border-radius: 19px;
  background-color: #1f2235;
  font-size: 18px;
  width: 160px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 2px solid grey;
  }

  &:active {
    transform: translateY(1px);
    background-color: #1f2255;
  }
`;

export const FormText = styled.h4`
  opacity: 0.5;
  margin: 3px 10px;
  letter-spacing: 0.1rem;
`;
