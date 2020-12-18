import express from "express";
import cors from "cors";
import LoginView from "../view/usuarioView";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(LoginView);

export default {
  iniciarServidor() {
    return new Promise((resolver) => {
      app.listen(4000, () => resolver("Servidor Online"));
    });
  },
};
