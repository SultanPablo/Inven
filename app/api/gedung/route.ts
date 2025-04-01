import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import cache from "memory-cache"; // ✅ Memory cache untuk caching data

// 🆕 CREATE GEDUNG
export async function POST(req: Request) {
  try {
    const { nama } = await req.json();

    if (!nama) {
      return NextResponse.json({ error: "Nama gedung wajib diisi" }, { status: 400 });
    }

    const gedung = await prisma.gedung.create({
      data: { nama },
    });

    // ✅ Hapus cache agar data terbaru bisa diambil
    cache.del("gedung");

    return NextResponse.json(gedung, { status: 201 });
  } catch (error: unknown) {
    console.error("Error saat menambah gedung:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah gedung" }, { status: 500 });
  }
}

// 📄 GET LIST GEDUNG (Dengan Caching)
export async function GET() {
  // ✅ Cek apakah data sudah ada di cache
  const cachedData = cache.get("gedung");

  if (cachedData) {
    return NextResponse.json(cachedData, { status: 200 });
  }

  try {
    // ✅ Timeout manual: Batasi waktu eksekusi Prisma
    const gedungPromise = prisma.gedung.findMany();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Request Timeout")), 10000) // 10 detik timeout
    );

    // ✅ Ambil data dengan batasan waktu
    const gedung = await Promise.race([gedungPromise, timeoutPromise]);

    if (!Array.isArray(gedung)) {
      throw new Error("Request Timeout");
    }

    // ✅ Simpan ke cache selama 5 menit
    cache.put("gedung", gedung, 300000);

    return NextResponse.json(gedung, { status: 200 });
  } catch (error: unknown) {
    console.error("Error saat mengambil data gedung:", error);
    return NextResponse.json({ error: "Gagal mengambil data gedung" }, { status: 500 });
  }
}

// ✏️ UPDATE GEDUNG
export async function PUT(req: Request) {
  try {
    const { id, nama } = await req.json();

    if (!id || !nama) {
      return NextResponse.json({ error: "ID dan nama gedung wajib diisi" }, { status: 400 });
    }

    const updatedGedung = await prisma.gedung.update({
      where: { id },
      data: { nama },
    });

    // ✅ Hapus cache agar data terbaru bisa diambil
    cache.del("gedung");

    return NextResponse.json(updatedGedung, { status: 200 });
  } catch (error: unknown) {
    console.error("Error saat mengupdate gedung:", error);
    return NextResponse.json({ error: "Gagal mengupdate gedung" }, { status: 500 });
  }
}

// ❌ DELETE GEDUNG
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID gedung wajib diisi" }, { status: 400 });
    }

    await prisma.gedung.delete({ where: { id } });

    // ✅ Hapus cache agar data terbaru bisa diambil
    cache.del("gedung");

    return NextResponse.json({ message: "Gedung berhasil dihapus" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error saat menghapus gedung:", error);
    return NextResponse.json({ error: "Gagal menghapus gedung" }, { status: 500 });
  }
}
