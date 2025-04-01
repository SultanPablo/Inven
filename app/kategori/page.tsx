"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Trash, Pencil } from "lucide-react";

type Kategori = {
  id: number;
  nama: string;
};

export default function KategoriPage() {
  const [kategori, setKategori] = useState<Kategori[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nama, setNama] = useState("");

  useEffect(() => {
    fetchKategori();
  }, []);

  async function fetchKategori() {
    const res = await fetch("/api/kategori");
    const data = await res.json();
    setKategori(data);
  }

  async function handleSave() {
    const method = selectedId ? "PUT" : "POST";
    const body = selectedId ? { id: selectedId, nama } : { nama };

    const res = await fetch("/api/kategori", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchKategori();
      setOpen(false);
      setNama("");
      setSelectedId(null);
    }
  }

  async function handleDelete() {
    if (!selectedId) return;

    await fetch("/api/kategori", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });

    fetchKategori();
    setOpenDelete(false);
    setSelectedId(null);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Kategori</h1>
      
      {/* Button Tambah */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => { setNama(""); setSelectedId(null); }}>Tambah Kategori</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedId ? "Edit" : "Tambah"} Kategori</DialogTitle>
          </DialogHeader>
          <Input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Kategori" />
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
          {kategori.map((item) => (
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
          ))}
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
