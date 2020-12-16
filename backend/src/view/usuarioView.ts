import express from "express";
import usuarioController from "../controller/usuarioController";

const router = express.Router();

router.post("/logar", usuarioController.logar);
router.post("/cadastrar", usuarioController.cadastrar);

export default router;
