"use client";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Table from "../../../components/Table";
import Modal from "../../../components/Modal";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/patients");
      setPatients(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createPatient = async () => {
    try {
      await api.post("/api/patients", { name: newName });
      setOpen(false);
      setNewName("");
      fetchPatients();
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    { header: "ID", field: "id" },
    { header: "Name", field: "name" },
    { header: "DOB", field: "dob" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Patients</h2>
        <div>
          <button onClick={() => setOpen(true)} className="bg-primary-500 text-white px-3 py-1 rounded">New Patient</button>
        </div>
      </div>

      <Table data={patients} columns={columns} loading={loading} />

      <Modal open={open} onClose={() => setOpen(false)} title="Create Patient">
        <div className="space-y-3">
          <label className="block">Name</label>
          <input className="w-full p-2 border rounded" value={newName} onChange={(e)=>setNewName(e.target.value)} />
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="mr-2">Cancel</button>
            <button onClick={createPatient} className="bg-primary-500 text-white px-3 py-1 rounded">Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
