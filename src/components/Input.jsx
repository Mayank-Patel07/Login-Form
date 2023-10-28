import React from "react";
import styled from "styled-components";

export default function Input(props) {
  // Props for set the type of input (email, password) and same goes for placeholder

  const { type, placeholder } = props;
  return (
    <>
      <MainInput type={type} placeholder={placeholder}></MainInput>
    </>
  );
}

const MainInput = styled.input`
  background: rgba(109, 51, 176, 0.25);
  box-shadow: 0 8px 32px 0 rgba(30, 38, 135, 0.37);
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: grey;
  border: none;
  padding: 1rem;
  height: 3rem;
  width: 80%;
  outline: none;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
    box-shadow: 0 0 0 0.2rem rgba(109, 51, 176, 0.3);
  }
  &::placeholder {
    color: #b9abe099;
    font-size: 1rem;
    font-weight: bold;
  }
`;
