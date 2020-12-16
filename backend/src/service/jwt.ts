import jwt from "jsonwebtoken";

const secret = "0%7H2¨3Y'¨[´´}}]&JU*(_)+_+:>sd<?sdf<>sdf:?dsf/;456,65.^`{]!156";

function criarToken(id: number) {
  return jwt.sign({ id }, secret, { expiresIn: "1d" });
}

function verificarToken(token: string) {
  return jwt.verify(token, secret);
}

export default { criarToken, verificarToken };
