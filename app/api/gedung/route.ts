import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

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

    return NextResponse.json(gedung, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah gedung:", error); // ✅ Logging error
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah gedung" }, { status: 500 });
  }
}

// 📄 GET LIST GEDUNG
export async function GET() {
  try {
    const gedung = await prisma.gedung.findMany();
    return NextResponse.json(gedung, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data gedung:", error); // ✅ Logging error
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

    return NextResponse.json(updatedGedung, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate gedung:", error); // ✅ Logging error
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

    return NextResponse.json({ message: "Gedung berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus gedung:", error); // ✅ Logging error
    return NextResponse.json({ error: "Gagal menghapus gedung" }, { status: 500 });
  }
}
