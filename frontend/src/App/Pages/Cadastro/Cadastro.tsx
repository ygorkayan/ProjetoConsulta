import React, { useState } from "react";
import AreaFormulario from "../../Components/AreaFormulario";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Axios from "../../Service/Axios";

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

  function cadastrar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (isValid("login", login) && isValid("senha", senha)) {
      Axios.cadastrar(login, senha).then((resp) => {
        if (resp.status === 200) {
          limpar(e);
          alert("Cadastrado com Sucesso");
        } else {
          alert("Ocorreu um erro no cadastro");
        }
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
      <h1>Cadastro</h1>
      <form>
        <Input nome="Login" estado={login} setEstado={setLogin} />
        <Input
          nome="Senha"
          type="password"
          estado={senha}
          setEstado={setSenha}
        />
        <Button nome="Cadastrar" click={cadastrar} />
        <Button nome="Limpar" click={limpar} />
      </form>
    </AreaFormulario>
  );
}
