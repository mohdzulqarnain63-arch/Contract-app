import React, { useEffect, useState } from "react";
import { loadBlueprints, loadContracts, saveContracts } from "../Data/storage";
import { useNavigate } from "react-router-dom";

export default function CreateContract() {
  const navigate = useNavigate();
  const [blueprints, setBlueprints] = useState([]);
  const [selected, setSelected] = useState("");
  const [contractName, setContractName] = useState("");

  useEffect(() => {
    setBlueprints(loadBlueprints());
  }, []);

  const create = () => {
    const bp = blueprints.find((b) => b.id === selected);
    if (!bp) return alert("Select a blueprint first!");

    if (!contractName.trim()) return alert("Contract name required!");

    const newContract = {
      id: Date.now().toString(),
      name: contractName,
      blueprintId: bp.id,
      blueprintName: bp.name,
      status: "CREATED",
      createdAt: new Date().toLocaleString(),
      fields: bp.fields.map((f) => ({
        ...f,
        value: f.type === "Checkbox" ? false : "",
      })),
    };

    const all = loadContracts();
    const updated = [newContract, ...all];
    saveContracts(updated);

    alert("Contract created ✅");
    navigate(`/contract/${newContract.id}`);
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 style={{ fontSize: 32 }}>Create Contract</h1>
      <p style={{ opacity: 0.8 }}>
        Select blueprint and generate a contract.
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <button style={btnDark} onClick={() => navigate("/")}>
          🏠 Go Home
        </button>
        <button style={btnDark} onClick={() => navigate("/blueprints")}>
          ← Back to Blueprints
        </button>
      </div>

      <div style={card}>
        <label>Contract Name</label>
        <input
          style={input}
          placeholder="e.g. Service Contract"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
        />

        <label>Select Blueprint</label>
        <select
          style={input}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- Select --</option>
          {blueprints.map((bp) => (
            <option key={bp.id} value={bp.id}>
              {bp.name}
            </option>
          ))}
        </select>

        <button style={btnOrange} onClick={create}>
          Generate Contract
        </button>

        {blueprints.length === 0 && (
          <p style={{ marginTop: 10, opacity: 0.7 }}>
            No blueprints found. Create one first.
          </p>
        )}
      </div>
    </div>
  );
}

const card = {
  marginTop: 20,
  padding: 16,
  borderRadius: 14,
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#0b1220",
  color: "white",
  marginTop: 8,
  marginBottom: 12,
};

const btnOrange = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  background: "#F97316",
  color: "#0b1220",
  fontWeight: 900,
  cursor: "pointer",
};

const btnDark = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};
