"use client";
import React, { useEffect, useState } from "react";
import api from "utils/api";
import Table from "../../components/Table";
import Modal from "../../components/Modal";

export default function CasesPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/cases");
      setItems(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createCase = async () => {
    try {
      await api.post("/api/cases", { title });
      setOpen(false);
      setTitle("");
      fetchCases();
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    { header: "ID", field: "id" },
    { header: "Title", field: "title" },
    { header: "Patient", field: "patient_name" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Cases</h2>
        <div>
          <button onClick={() => setOpen(true)} className="bg-primary-500 text-white px-3 py-1 rounded">New Case</button>
        </div>
      </div>

      <Table data={items} columns={columns} loading={loading} />

      <Modal open={open} onClose={() => setOpen(false)} title="Create Case">
        <div className="space-y-3">
          <label className="block">Title</label>
          <input className="w-full p-2 border rounded" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="mr-2">Cancel</button>
            <button onClick={createCase} className="bg-primary-500 text-white px-3 py-1 rounded">Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
