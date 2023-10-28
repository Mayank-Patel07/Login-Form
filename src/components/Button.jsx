import React from "react";
import styled from "styled-components";

export default function Button() {
  return <ButtonMain>Submit</ButtonMain>;
}

const ButtonMain = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  border-radius: 2rem;
  //   color: grey;
  color: #d3d3d3;
  border: none;
  width: 65%;
  height: 3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  cursor: pointer;
`;
