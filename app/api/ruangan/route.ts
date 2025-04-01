import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import cache from "memory-cache";

// 🕒 Waktu cache (5 menit)
const CACHE_DURATION = 5 * 60 * 1000;

// 🆕 CREATE RUANGAN
export async function POST(req: Request) {
  try {
    const { nama, gedungId } = await req.json();

    if (!nama || !gedungId) {
      return NextResponse.json({ error: "Nama ruangan dan Gedung ID wajib diisi" }, { status: 400 });
    }

    const ruangan = await prisma.ruangan.create({
      data: { nama, id_gedung: gedungId },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("ruangan_list");

    return NextResponse.json(ruangan, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah ruangan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah ruangan" }, { status: 500 });
  }
}

// 📄 GET LIST RUANGAN (Menggunakan cache)
export async function GET() {
  try {
    // Cek apakah data sudah ada di cache
    let ruanganList = cache.get("ruangan_list");
    if (ruanganList) {
      return NextResponse.json(ruanganList, { status: 200 });
    }

    // Jika tidak ada, ambil dari database
    ruanganList = await prisma.ruangan.findMany({
      include: {
        gedung: true, // Menampilkan data Gedung yang terkait
      },
    });

    // Simpan ke cache
    cache.put("ruangan_list", ruanganList, CACHE_DURATION);

    return NextResponse.json(ruanganList, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data ruangan:", error);
    return NextResponse.json({ error: "Gagal mengambil data ruangan" }, { status: 500 });
  }
}

// ✏️ UPDATE RUANGAN
export async function PUT(req: Request) {
  try {
    const { id, nama, gedungId } = await req.json();

    if (!id || !nama || !gedungId) {
      return NextResponse.json({ error: "ID, Nama ruangan, dan Gedung ID wajib diisi" }, { status: 400 });
    }

    const updatedRuangan = await prisma.ruangan.update({
      where: { id },
      data: { nama, id_gedung: gedungId },
    });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("ruangan_list");

    return NextResponse.json(updatedRuangan, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate ruangan:", error);
    return NextResponse.json({ error: "Gagal mengupdate ruangan" }, { status: 500 });
  }
}

// ❌ DELETE RUANGAN
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID ruangan wajib diisi" }, { status: 400 });
    }

    await prisma.ruangan.delete({ where: { id } });

    // Hapus cache agar data terbaru selalu muncul
    cache.del("ruangan_list");

    return NextResponse.json({ message: "Ruangan berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus ruangan:", error);
    return NextResponse.json({ error: "Gagal menghapus ruangan" }, { status: 500 });
  }
}
