/*
  Warnings:

  - A unique constraint covering the columns `[kode_golongan]` on the table `Golongan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kode_golongan` to the `Golongan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Kondisi" AS ENUM ('BAIK', 'RUSAK');

-- AlterTable
ALTER TABLE "Golongan" ADD COLUMN     "kode_golongan" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "Gedung" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "Gedung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ruangan" (
    "id" SERIAL NOT NULL,
    "id_gedung" INTEGER NOT NULL,
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "Ruangan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventaris" (
    "id" SERIAL NOT NULL,
    "id_ruangan" INTEGER NOT NULL,
    "id_golongan" INTEGER NOT NULL,
    "nama_inventaris" VARCHAR(255) NOT NULL,
    "tahun_perolehan" INTEGER,
    "harga_perolehan" INTEGER,
    "bahan_merk" VARCHAR(255),
    "masa_manfaat" INTEGER,
    "umur_aset" INTEGER,
    "nilai_residu" INTEGER,
    "persentase_garis_lurus" DECIMAL(15,2),
    "nilai_yang_dapat_disusutkan" INTEGER,
    "beban_penyusutan_per_tahun" INTEGER,
    "nilai_buku_akhir" INTEGER,
    "jumlah" INTEGER,
    "kondisi" "Kondisi" NOT NULL,
    "barcode" VARCHAR(255),

    CONSTRAINT "inventaris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang_habis_pakai" (
    "id" SERIAL NOT NULL,
    "id_golongan" INTEGER NOT NULL,
    "kode_barang" VARCHAR(50) NOT NULL,
    "nama_barang" VARCHAR(255) NOT NULL,
    "satuan" VARCHAR(50) NOT NULL,

    CONSTRAINT "barang_habis_pakai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaksi_barang_habis_pakai" (
    "id" SERIAL NOT NULL,
    "id_barang_habis_pakai" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "uraian" TEXT NOT NULL,
    "tanda_bukti" VARCHAR(50) NOT NULL,
    "jumlah_terima" INTEGER NOT NULL DEFAULT 0,
    "jumlah_keluar" INTEGER NOT NULL DEFAULT 0,
    "sisa" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "transaksi_barang_habis_pakai_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gedung_nama_key" ON "Gedung"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Ruangan_nama_key" ON "Ruangan"("nama");

-- CreateIndex
CREATE INDEX "Ruangan_id_gedung_idx" ON "Ruangan"("id_gedung");

-- CreateIndex
CREATE INDEX "inventaris_id_ruangan_idx" ON "inventaris"("id_ruangan");

-- CreateIndex
CREATE INDEX "inventaris_id_golongan_idx" ON "inventaris"("id_golongan");

-- CreateIndex
CREATE INDEX "barang_habis_pakai_id_golongan_idx" ON "barang_habis_pakai"("id_golongan");

-- CreateIndex
CREATE INDEX "transaksi_barang_habis_pakai_id_barang_habis_pakai_idx" ON "transaksi_barang_habis_pakai"("id_barang_habis_pakai");

-- CreateIndex
CREATE UNIQUE INDEX "Golongan_kode_golongan_key" ON "Golongan"("kode_golongan");

-- AddForeignKey
ALTER TABLE "Ruangan" ADD CONSTRAINT "Ruangan_id_gedung_fkey" FOREIGN KEY ("id_gedung") REFERENCES "Gedung"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventaris" ADD CONSTRAINT "inventaris_id_ruangan_fkey" FOREIGN KEY ("id_ruangan") REFERENCES "Ruangan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventaris" ADD CONSTRAINT "inventaris_id_golongan_fkey" FOREIGN KEY ("id_golongan") REFERENCES "Golongan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_habis_pakai" ADD CONSTRAINT "barang_habis_pakai_id_golongan_fkey" FOREIGN KEY ("id_golongan") REFERENCES "Golongan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksi_barang_habis_pakai" ADD CONSTRAINT "transaksi_barang_habis_pakai_id_barang_habis_pakai_fkey" FOREIGN KEY ("id_barang_habis_pakai") REFERENCES "barang_habis_pakai"("id") ON DELETE CASCADE ON UPDATE CASCADE;
