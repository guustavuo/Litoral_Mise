-- CreateTable
CREATE TABLE `Evento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `faixaEtaria` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
