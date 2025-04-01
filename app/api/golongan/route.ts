import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import cache from "memory-cache";

// 🕒 Waktu cache (5 menit)
const CACHE_DURATION = 5 * 60 * 1000;

// 🆕 CREATE GOLONGAN
export async function POST(req: Request) {
  try {
    const { nama, id_kategori, kode_golongan } = await req.json();

    if (!nama || !id_kategori || !kode_golongan) {
      return NextResponse.json({ error: "Nama golongan, kategori, dan kode golongan wajib diisi" }, { status: 400 });
    }

    const golongan = await prisma.golongan.create({
      data: { nama, id_kategori, kode_golongan },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("golongan_list");

    return NextResponse.json(golongan, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah golongan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah golongan" }, { status: 500 });
  }
}

// 📄 GET LIST GOLONGAN (Menggunakan cache)
export async function GET() {
  try {
    // Cek apakah data sudah ada di cache
    let golonganList = cache.get("golongan_list");
    if (golonganList) {
      return NextResponse.json(golonganList, { status: 200 });
    }

    // Jika tidak ada, ambil dari database
    golonganList = await prisma.golongan.findMany({
      include: {
        kategori: true, // Menampilkan data kategori yang terkait
      },
    });

    // Simpan ke cache
    cache.put("golongan_list", golonganList, CACHE_DURATION);

    return NextResponse.json(golonganList, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data golongan:", error);
    return NextResponse.json({ error: "Gagal mengambil data golongan" }, { status: 500 });
  }
}

// ✏️ UPDATE GOLONGAN
export async function PUT(req: Request) {
  try {
    const { id, nama, id_kategori, kode_golongan } = await req.json();

    if (!id || !nama || !id_kategori || !kode_golongan) {
      return NextResponse.json({ error: "ID, Nama golongan, kategori, dan kode golongan wajib diisi" }, { status: 400 });
    }

    const updatedGolongan = await prisma.golongan.update({
      where: { id },
      data: { nama, id_kategori, kode_golongan },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("golongan_list");

    return NextResponse.json(updatedGolongan, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate golongan:", error);
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

    // Hapus cache agar data terbaru selalu muncul
    cache.del("golongan_list");

    return NextResponse.json({ message: "Golongan berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus golongan:", error);
    return NextResponse.json({ error: "Gagal menghapus golongan" }, { status: 500 });
  }
}
