import React from "react";
import { createGlobalStyle } from "styled-components";
import Container from "./Components/Container";
import Conteudo from "./Pages/Conteudo/Conteudo";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Conteudo />
      </Container>
    </React.Fragment>
  );
}
