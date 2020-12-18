import Axios from "axios";

const urlBase = "http://localhost:4000";

function logar(usuario: string, senha: string) {
  return Axios.post(`${urlBase}/logar`, { usuario, senha });
}

function cadastrar(usuario: string, senha: string) {
  return Axios.post(`${urlBase}/cadastrar`, { usuario, senha });
}

export default { logar, cadastrar };
