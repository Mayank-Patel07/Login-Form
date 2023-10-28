import React from "react";
import styled from "styled-components";
import Input from "../src/components/Input";
import ButtonMain from "../src/components/Button";
import Icons from "./components/Icons";

function App() {
  const FacebookBackgound =
    "linear-gradient(to right ,#0546A0 0% ,#663FB6 100%)";
  const GmailBackgound =
    "linear-gradient(to right ,#A12AC4 0%, #ED586C 40% ,#F0A853 100%)";
  return (
    <>
      <Container>
        <WelcomeBack>Welcome Back</WelcomeBack>
        <InputContainer>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButttonContainer>
          <ButtonMain />
        </ButttonContainer>
        <LoginWith>OR Login With</LoginWith>
        <HorizontalLine />
        <IconContainer>
          <Icons color={FacebookBackgound}>f</Icons>
          <Icons color={GmailBackgound}>G</Icons>
        </IconContainer>
        <Password>Forgot Password</Password>
      </Container>
    </>
  );
}
// Main container
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(109, 51, 176, 0.25);
  box-shadow: 0 8px 32px 0 rgba(30, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  border-radius: 5px;
  color: white;
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  // Responsiveness

  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
    hr {
      margin-bottom: 0.3rem;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 410px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 770px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

// Heading
const WelcomeBack = styled.h2`
  margin: 3rem 0 2rem 0;
  color: grey;
`;

// Inputs container
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20%;
  width: 80%;
`;

// Buttons container
const ButttonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem 0;
  width: 100%;
`;
const LoginWith = styled.h5`
  cursor: pointer;
`;

// Horizontal line with Linear Gradient
const HorizontalLine = styled.hr`
  margin: 1.5rem 0 1rem 0;
  height: 0.3rem;
  width: 90%;
  border: none;
  backdrop-filter: blur(25px);
  border-radius: 0.8rem;
  background: linear-gradient(to right, #14163c 0%, grey 79%);
`;

// Icon Container
const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;
const Password = styled.h4`
  cursor: pointer;
`;
export default App;
