-- CreateTable
CREATE TABLE `Drone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `model` VARCHAR(255) NOT NULL,
    `make` VARCHAR(255) NOT NULL,
    `serialNumber` INTEGER NOT NULL,
    `batteryLife` INTEGER NOT NULL,
    `topSpeed` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Drone_serialNumber_key`(`serialNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
