"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Trash, Pencil } from "lucide-react";

type Gedung = {
  id: number;
  nama: string;
};

export default function GedungPage() {
  const [gedung, setGedung] = useState<Gedung[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nama, setNama] = useState("");

  useEffect(() => {
    fetchGedung();
  }, []);

  async function fetchGedung() {
    try {
      const res = await fetch("/api/gedung");
      if (!res.ok) throw new Error("Gagal mengambil data");
      const data = await res.json();
      setGedung(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setGedung([]);
    }
  }

  async function handleSave() {
    const method = selectedId ? "PUT" : "POST";
    const body = selectedId ? { id: selectedId, nama } : { nama };

    const res = await fetch("/api/gedung", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchGedung();
      setOpen(false);
      setNama("");
      setSelectedId(null);
    }
  }

  async function handleDelete() {
    if (!selectedId) return;

    await fetch("/api/gedung", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });

    fetchGedung();
    setOpenDelete(false);
    setSelectedId(null);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Gedung</h1>
      
      {/* Button Tambah */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => { setNama(""); setSelectedId(null); }}>Tambah Gedung</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedId ? "Edit" : "Tambah"} Gedung</DialogTitle>
          </DialogHeader>
          <Input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Gedung" />
          <Button onClick={handleSave}>{selectedId ? "Update" : "Simpan"}</Button>
        </DialogContent>
      </Dialog>

      {/* Table */}
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gedung.length > 0 ? (
            gedung.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nama}</TableCell>
                <TableCell>
                  <Button variant="ghost" onClick={() => { setNama(item.nama); setSelectedId(item.id); setOpen(true); }}>
                    <Pencil size={16} />
                  </Button>
                  <Button variant="ghost" onClick={() => { setSelectedId(item.id); setOpenDelete(true); }}>
                    <Trash size={16} className="text-red-600" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500">Tidak ada data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Delete Confirmation */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>Apakah Anda yakin ingin menghapus?</AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={handleDelete} className="bg-red-600">Hapus</Button>
            <Button variant="outline" onClick={() => setOpenDelete(false)}>Batal</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}