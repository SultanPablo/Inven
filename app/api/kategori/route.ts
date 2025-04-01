import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import cache from "memory-cache";

// 🕒 Waktu cache (dalam milidetik), contoh: 5 menit
const CACHE_DURATION = 5 * 60 * 1000;

// 🆕 CREATE KATEGORI
export async function POST(req: Request) {
  try {
    const { nama } = await req.json();

    if (!nama) {
      return NextResponse.json({ error: "Nama kategori wajib diisi" }, { status: 400 });
    }

    const kategori = await prisma.kategori.create({
      data: { nama },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("kategori_list");

    return NextResponse.json(kategori, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah kategori:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah kategori" }, { status: 500 });
  }
}

// 📄 GET LIST KATEGORI (Menggunakan cache)
export async function GET() {
  try {
    // Cek apakah data sudah ada di cache
    let kategori = cache.get("kategori_list");
    if (kategori) {
      return NextResponse.json(kategori, { status: 200 });
    }

    // Jika tidak ada, ambil dari database
    kategori = await prisma.kategori.findMany();

    // Simpan ke cache
    cache.put("kategori_list", kategori, CACHE_DURATION);

    return NextResponse.json(kategori, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data kategori:", error);
    return NextResponse.json({ error: "Gagal mengambil data kategori" }, { status: 500 });
  }
}

// ✏️ UPDATE KATEGORI
export async function PUT(req: Request) {
  try {
    const { id, nama } = await req.json();

    if (!id || !nama) {
      return NextResponse.json({ error: "ID dan nama kategori wajib diisi" }, { status: 400 });
    }

    const updatedKategori = await prisma.kategori.update({
      where: { id },
      data: { nama },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("kategori_list");

    return NextResponse.json(updatedKategori, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate kategori:", error);
    return NextResponse.json({ error: "Gagal mengupdate kategori" }, { status: 500 });
  }
}

// ❌ DELETE KATEGORI
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID kategori wajib diisi" }, { status: 400 });
    }

    await prisma.kategori.delete({ where: { id } });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("kategori_list");

    return NextResponse.json({ message: "Kategori berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus kategori:", error);
    return NextResponse.json({ error: "Gagal menghapus kategori" }, { status: 500 });
  }
}
