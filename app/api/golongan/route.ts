import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// 🆕 CREATE GOLONGAN
export async function POST(req: Request) {
  try {
    const { nama, id_kategori } = await req.json();

    if (!nama || !id_kategori) {
      return NextResponse.json({ error: "Nama golongan dan kategori wajib diisi" }, { status: 400 });
    }

    const golongan = await prisma.golongan.create({
      data: { nama, id_kategori },
    });

    return NextResponse.json(golongan, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah golongan:", error); // ✅ Logging error
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah golongan" }, { status: 500 });
  }
}

// 📄 GET LIST GOLONGAN
export async function GET() {
  try {
    const golongan = await prisma.golongan.findMany({
      include: {
        kategori: true, // Menampilkan relasi kategori
      },
    });
    return NextResponse.json(golongan, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data golongan:", error); // ✅ Logging error
    return NextResponse.json({ error: "Gagal mengambil data golongan" }, { status: 500 });
  }
}

// ✏️ UPDATE GOLONGAN
export async function PUT(req: Request) {
  try {
    const { id, nama, id_kategori } = await req.json();

    if (!id || !nama || !id_kategori) {
      return NextResponse.json({ error: "ID, Nama golongan, dan kategori wajib diisi" }, { status: 400 });
    }

    const updatedGolongan = await prisma.golongan.update({
      where: { id },
      data: { nama, id_kategori },
    });

    return NextResponse.json(updatedGolongan, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate golongan:", error); // ✅ Logging error
    return NextResponse.json({ error: "Gagal mengupdate golongan" }, { status: 500 });
  }
}

// ❌ DELETE GOLONGAN
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID golongan wajib diisi" }, { status: 400 });
    }

    await prisma.golongan.delete({ where: { id } });

    return NextResponse.json({ message: "Golongan berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus golongan:", error); // ✅ Logging error
    return NextResponse.json({ error: "Gagal menghapus golongan" }, { status: 500 });
  }
}
