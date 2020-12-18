import React, { useState } from "react";
import AreaFormulario from "../../Components/AreaFormulario";
import Axios from "../../Service/Axios";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function Cadastro() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function isValid(nome: string, campo: string) {
    if (!campo) {
      alert(`Campo ${nome} não pode estar vazio.`);
      return false;
    }
    return true;
  }

  function logar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (isValid("login", login) && isValid("senha", senha)) {
      Axios.logar(login, senha).then((r) => {
        window.localStorage.setItem("token", r.data.token);
        limpar(e);
      });
    }
  }

  function limpar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setLogin("");
    setSenha("");
  }

  return (
    <AreaFormulario>
      <h1>Login</h1>
      <form>
        <Input nome="Login" estado={login} setEstado={setLogin} />
        <Input
          nome="Senha"
          type="password"
          estado={senha}
          setEstado={setSenha}
        />
        <Button nome="Logar" click={logar} />
        <Button nome="Limpar" click={limpar} />
      </form>
    </AreaFormulario>
  );
}
