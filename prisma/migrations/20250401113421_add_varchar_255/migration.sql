/*
  Warnings:

  - You are about to alter the column `nama` on the `Golongan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nama` on the `Kategori` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Golongan" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Kategori" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(255);
