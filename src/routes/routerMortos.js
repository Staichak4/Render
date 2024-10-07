const express = require("express");
const router = express.Router();
const mortosController = require("../controllers/mortosController");
const authenticateToken = require('../middleware/authMiddleware');

router.post("/", authenticateToken, mortosController.cadastrarMorto);
router.get("/", authenticateToken, mortosController.listarMortos);
router.put("/:id", authenticateToken, mortosController.editarMorto);
router.delete("/:id", authenticateToken, mortosController.deletarMorto);

module.exports = router;
