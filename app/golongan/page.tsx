"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Trash, Pencil } from "lucide-react";

type Golongan = {
  id: number;
  nama: string;
  kode_golongan:string;
  id_kategori: number;
};

type Kategori = {
  id: number;
  nama: string;
};

export default function GolonganPage() {
  const [golongan, setGolongan] = useState<Golongan[]>([]);
  const [kategori, setKategori] = useState<Kategori[]>([]); // Ensure kategori is always an array
  const [kode_golongan, setKodeGolongan] = useState("");
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nama, setNama] = useState("");
  const [id_kategori, setIdKategori] = useState<number | null>(null);

  useEffect(() => {
    fetchGolongan();
    fetchKategori();
  }, []);

  async function fetchGolongan() {
    const res = await fetch("/api/golongan");
    const data = await res.json();
    setGolongan(data);
  }

  async function fetchKategori() {
    const res = await fetch("/api/kategori");
    const data = await res.json();

    // Ensure the response is an array
    if (Array.isArray(data)) {
      setKategori(data);
    } else {
      console.error("Kategori data is not an array:", data);
    }
  }

  async function handleSave() {
    const method = selectedId ? "PUT" : "POST";
    const body = selectedId ? { id: selectedId, nama, id_kategori, kode_golongan } : { nama, id_kategori, kode_golongan };
  
    const res = await fetch("/api/golongan", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  
    if (res.ok) {
      fetchGolongan();
      setOpen(false);
      setNama("");
      setKodeGolongan(""); // Reset kode golongan
      setIdKategori(null);
      setSelectedId(null);
    }
  }
  

  async function handleDelete() {
    if (!selectedId) return;

    await fetch("/api/golongan", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });

    fetchGolongan();
    setOpenDelete(false);
    setSelectedId(null);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Golongan</h1>
      
      {/* Button Tambah */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => { setNama(""); setIdKategori(null); setSelectedId(null); }}>Tambah Golongan</Button>
        </DialogTrigger>
        <DialogContent>
  <DialogHeader>
    <DialogTitle>{selectedId ? "Edit" : "Tambah"} Golongan</DialogTitle>
  </DialogHeader>
  
  {/* Input untuk Nama Golongan */}
  <Input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Golongan" />
  
  {/* Input untuk Kode Golongan */}
  <Input value={kode_golongan} onChange={(e) => setKodeGolongan(e.target.value)} placeholder="Kode Golongan" />

  {/* Select untuk memilih kategori */}
  <Select value={id_kategori ? String(id_kategori) : ""} onValueChange={(value) => setIdKategori(Number(value))}>
    <SelectTrigger>
      <SelectValue placeholder="Pilih Kategori" />
    </SelectTrigger>
    <SelectContent>
      {kategori.length > 0 ? (
        kategori.map((kat) => (
          <SelectItem key={kat.id} value={String(kat.id)}>
            {kat.nama}
          </SelectItem>
        ))
      ) : (
        <SelectItem value="no-category" disabled>
          No Categories Available
        </SelectItem>
      )}
    </SelectContent>
  </Select>
  
  <Button onClick={handleSave}>{selectedId ? "Update" : "Simpan"}</Button>
</DialogContent>

      </Dialog>

      {/* Table */}
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Kode Golongan</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {golongan.length > 0 ? (
            golongan.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.kode_golongan}</TableCell>
                <TableCell>{item.nama}</TableCell>
                <TableCell>{kategori.find((kat) => kat.id === item.id_kategori)?.nama}</TableCell>
                <TableCell>
                  <Button variant="ghost" onClick={() => { setNama(item.nama); setIdKategori(item.id_kategori); setSelectedId(item.id); setOpen(true); }}>
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
              <TableCell colSpan={4}>No Golongan Available</TableCell>
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
