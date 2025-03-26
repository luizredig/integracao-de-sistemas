const express = require("express");
const app = express();
const produtosRouter = require("./api/produtos");
require("dotenv").config();

app.use(express.json());

app.use("/produtos", produtosRouter);

app.use((err, req, res, next) => {
  res.status(502).json({ error: "Erro externo" });
});

module.exports = app;
