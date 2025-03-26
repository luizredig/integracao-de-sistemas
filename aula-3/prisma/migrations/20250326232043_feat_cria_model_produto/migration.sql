-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "endereco_fornecedor" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "preco_unitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
