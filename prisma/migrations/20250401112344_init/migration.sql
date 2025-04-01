-- CreateTable
CREATE TABLE "Kategori" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Golongan" (
    "id" SERIAL NOT NULL,
    "id_kategori" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Golongan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_nama_key" ON "Kategori"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Golongan_nama_key" ON "Golongan"("nama");

-- CreateIndex
CREATE INDEX "Golongan_id_kategori_idx" ON "Golongan"("id_kategori");

-- AddForeignKey
ALTER TABLE "Golongan" ADD CONSTRAINT "Golongan_id_kategori_fkey" FOREIGN KEY ("id_kategori") REFERENCES "Kategori"("id") ON DELETE CASCADE ON UPDATE CASCADE;
