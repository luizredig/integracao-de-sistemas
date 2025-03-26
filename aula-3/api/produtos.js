const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/", async (req, res) => {
  try {
    const novoProduto = await prisma.produto.create({ data: req.body });
    res.status(200).json(novoProduto);
  } catch {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const produto = await prisma.produto.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(produto);
  } catch {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.produto.delete({ where: { id } });
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

router.all("*", (req, res) => {
  res.status(501).json({ error: "Método não implementado" });
});

module.exports = router;
