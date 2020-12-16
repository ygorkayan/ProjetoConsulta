import db from "../config/db";

function buscarUsuario(usuario: string) {
  const query = `select id, usuario, senha
  from usuarios where usuario = '${usuario}'`;

  return db.executarQuery(query);
}

function cadastrarUsuario(usuario: string, senha: string) {
  const query = `insert into usuarios (usuario, senha)
  values ("${usuario}", "${senha}")`;

  return db.executarQuery(query);
}

export default { buscarUsuario, cadastrarUsuario };
