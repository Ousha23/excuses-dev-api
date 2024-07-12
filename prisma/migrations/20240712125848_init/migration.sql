-- CreateTable
CREATE TABLE `excuse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `httpCode` INTEGER NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
