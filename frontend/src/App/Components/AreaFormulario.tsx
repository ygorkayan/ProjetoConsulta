import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 440px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: sans-serif;
    margin-bottom: 2rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function AreaFormulario(props: Props) {
  return <Container>{props.children}</Container>;
}
