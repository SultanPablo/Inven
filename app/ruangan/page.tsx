"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Trash, Pencil } from "lucide-react";

type Ruangan = {
  id: number;
  nama: string;
  gedung: {
    id: number;
    nama: string;
  };
};

type Gedung = {
  id: number;
  nama: string;
};

export default function RuanganPage() {
  const [ruangan, setRuangan] = useState<Ruangan[]>([]);
  const [gedung, setGedung] = useState<Gedung[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [nama, setNama] = useState("");
  const [gedungId, setGedungId] = useState<number | null>(null);

  useEffect(() => {
    fetchRuangan();
    fetchGedung();
  }, []);

  async function fetchRuangan() {
    const res = await fetch("/api/ruangan");
    const data = await res.json();
    setRuangan(data);
  }

  async function fetchGedung() {
    const res = await fetch("/api/gedung");
    const data = await res.json();
    setGedung(Array.isArray(data) ? data : []);
  }

  async function handleSave() {
    const method = selectedId ? "PUT" : "POST";
    const body = selectedId ? { id: selectedId, nama, gedungId } : { nama, gedungId };

    const res = await fetch("/api/ruangan", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchRuangan();
      setOpen(false);
      setNama("");
      setGedungId(null);
      setSelectedId(null);
    }
  }

  async function handleDelete() {
    if (!selectedId) return;

    await fetch("/api/ruangan", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });

    fetchRuangan();
    setOpenDelete(false);
    setSelectedId(null);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Ruangan</h1>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => { setNama(""); setGedungId(null); setSelectedId(null); }}>Tambah Ruangan</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedId ? "Edit" : "Tambah"} Ruangan</DialogTitle>
          </DialogHeader>
          <Input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Ruangan" />
          
          <Select value={gedungId ? String(gedungId) : ""} onValueChange={(value) => setGedungId(Number(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Gedung" />
            </SelectTrigger>
            <SelectContent>
              {gedung.length > 0 ? (
                gedung.map((g) => (
                  <SelectItem key={g.id} value={String(g.id)}>{g.nama}</SelectItem>
                ))
              ) : (
                <SelectItem value="no-gedung" disabled>No Gedung Available</SelectItem>
              )}
            </SelectContent>
          </Select>
          
          <Button onClick={handleSave}>{selectedId ? "Update" : "Simpan"}</Button>
        </DialogContent>
      </Dialog>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Gedung</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ruangan.length > 0 ? (
            ruangan.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nama}</TableCell>
                <TableCell>{item.gedung?.nama ?? "Gedung Tidak Ditemukan"}</TableCell>
                <TableCell>
                  <Button variant="ghost" onClick={() => { setNama(item.nama); setGedungId(item.gedung.id); setSelectedId(item.id); setOpen(true); }}>
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
              <TableCell colSpan={4}>No Data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <h3>Apakah Anda yakin ingin menghapus ruangan ini?</h3>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setOpenDelete(false)}>Batal</Button>
            <Button onClick={handleDelete} className="bg-red-600">Hapus</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}