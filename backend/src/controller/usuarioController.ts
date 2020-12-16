import { Request, Response } from "express";
import usuarioModel from "../model/usuarioModel";
import bcrypt from "../service/bcrypt";
import jwt from "../service/jwt";

function logar(req: Request, resp: Response) {
  const { usuario, senha } = req.body;

  usuarioModel
    .buscarUsuario(usuario)
    .then((result) => {
      if (bcrypt.compararSenha(senha, result[0].senha)) {
        const id = result[0].id;
        const token = jwt.criarToken(id);
        resp.status(200).json({ token });
      } else {
        throw new Error();
      }
    })
    .catch(() => resp.status(400).end());
}

function cadastrar(req: Request, resp: Response) {
  const { usuario, senha } = req.body;

  usuarioModel
    .cadastrarUsuario(usuario, bcrypt.criptografar(senha))
    .then((result) => {
      if (result.affectedRows != 0) {
        resp.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch(() => resp.status(400).end());
}

export default { logar, cadastrar };
