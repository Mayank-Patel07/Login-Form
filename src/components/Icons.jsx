import React from "react";
import styled from "styled-components";

export default function Icons({ color, children }) {
  return (
    <>
      <Icon background={color}>{children}</Icon>
    </>
  );
}
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  border-radius: 4rem;
  height: 3.5rem;
  width: 3.5rem;
  color: white;
  cursor: pointer;
  background: ${(props) => props.background};
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
