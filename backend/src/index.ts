import db from "./config/db";
import server from "./config/server";

Promise.all([server.iniciarServidor(), db.ligarBancoDeDados()]).then((resp) =>
  resp.forEach((msg) => console.log(msg))
);
