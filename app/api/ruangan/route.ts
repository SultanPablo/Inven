import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// 🆕 CREATE Ruangan
export async function POST(req: Request) {
  try {
    const { nama, gedungId } = await req.json();

    if (!nama || !gedungId) {
      return NextResponse.json({ error: "Nama ruangan dan Gedung ID wajib diisi" }, { status: 400 });
    }

    const ruangan = await prisma.ruangan.create({
      data: { nama, id_gedung: gedungId },
    });

    return NextResponse.json(ruangan, { status: 201 });
  } catch (error) {
    console.error("Error saat menambah ruangan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambah ruangan" }, { status: 500 });
  }
}

// 📄 GET LIST Ruangan
export async function GET() {
  try {
    const ruanganList = await prisma.ruangan.findMany({
      include: {
        gedung: true, // Menampilkan data Gedung yang terkait
      },
    });
    return NextResponse.json(ruanganList, { status: 200 });
  } catch (error) {
    console.error("Error saat mengambil data ruangan:", error);
    return NextResponse.json({ error: "Gagal mengambil data ruangan" }, { status: 500 });
  }
}

// ✏️ UPDATE Ruangan
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

    return NextResponse.json(updatedRuangan, { status: 200 });
  } catch (error) {
    console.error("Error saat mengupdate ruangan:", error);
    return NextResponse.json({ error: "Gagal mengupdate ruangan" }, { status: 500 });
  }
}

// ❌ DELETE Ruangan
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID ruangan wajib diisi" }, { status: 400 });
    }

    await prisma.ruangan.delete({ where: { id } });

    return NextResponse.json({ message: "Ruangan berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error saat menghapus ruangan:", error);
    return NextResponse.json({ error: "Gagal menghapus ruangan" }, { status: 500 });
  }
}
