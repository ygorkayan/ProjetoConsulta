import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro";
import BemVindo from "../BemVindo/BemVindo";
import AreaLogado from "../AreaLogado/AreaLogado";

const Area = styled.div`
  width: 440px;
  height: 10vh;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    padding: 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-family: sans-serif;
  }
`;

function verificarLogin(component: any) {
  const token = window.localStorage.getItem("token");
  if (token) {
    return component;
  } else {
    return Login;
  }
}

export default function Conteudo() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BemVindo} />
        <Route exact path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/logado" component={verificarLogin(AreaLogado)} />
      </Switch>
      <Area>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </Area>
    </BrowserRouter>
  );
}
