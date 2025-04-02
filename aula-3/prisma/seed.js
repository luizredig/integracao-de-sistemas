const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        nome: "Caneta Azul",
        fornecedor: "Papelaria Legal",
        endereco_fornecedor: "Rua das Flores, 123",
        quantidade: 100,
        endereco: "Estoque A",
        preco_unitario: 2.5,
      },
      {
        nome: "Caderno",
        fornecedor: "Escrita+",
        endereco_fornecedor: "Av. Central, 456",
        quantidade: 50,
        endereco: "Estoque B",
        preco_unitario: 12.9,
      },
      {
        nome: "Lapiseira",
        fornecedor: "Grafite LTDA",
        endereco_fornecedor: "Rua do Grafite, 789",
        quantidade: 80,
        endereco: "Estoque C",
        preco_unitario: 6.75,
      },
      {
        nome: "Borracha",
        fornecedor: "ApagaTudo",
        endereco_fornecedor: "Rua Apagador, 101",
        quantidade: 200,
        endereco: "Estoque A",
        preco_unitario: 1.8,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
