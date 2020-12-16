import bcryptjs from "bcryptjs";

const salt: string = bcryptjs.genSaltSync(8);

function criptografar(senha: string): string {
  return bcryptjs.hashSync(senha, salt);
}

function compararSenha(
  senhaNaoCriptografada: string,
  senhaCriptografada: string
): boolean {
  return bcryptjs.compareSync(senhaNaoCriptografada, senhaCriptografada);
}

export default { criptografar, compararSenha };
