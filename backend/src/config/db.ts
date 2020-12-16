import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "95825541",
  database: "login",
});

function ligarBancoDeDados() {
  return new Promise((resolver, reject) => {
    db.connect((err) => {
      if (err) reject(err);
      resolver("Banco De Dados Online");
    });
  });
}

function executarQuery(query: string): Promise<any> {
  return new Promise((resolver, reject) => {
    db.query(query, (erro, result) => {
      if (erro) reject(erro);
      resolver(result);
    });
  });
}

export default { ligarBancoDeDados, executarQuery };
