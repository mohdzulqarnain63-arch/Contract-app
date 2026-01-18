import React, { useEffect, useState } from "react";
import { loadBlueprints, saveBlueprints } from "../Data/storage";
import { useNavigate } from "react-router-dom";

export default function Blueprints() {
  const navigate = useNavigate();
  const [blueprints, setBlueprints] = useState([]);
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);

  useEffect(() => {
    setBlueprints(loadBlueprints());
  }, []);

  const addField = (type) => {
    const newField = {
      id: Date.now().toString(),
      type,
      label: `${type} Field`,
    };
    setFields([...fields, newField]);
  };

  const saveBlueprint = () => {
    if (!name.trim()) {
      alert("Blueprint name required!");
      return;
    }

    const newBp = {
      id: Date.now().toString(),
      name,
      fields,
    };

    const updated = [newBp, ...blueprints];
    setBlueprints(updated);
    saveBlueprints(updated);

    setName("");
    setFields([]);
    alert("Blueprint saved ✅");
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 style={{ fontSize: 32 }}>Blueprints</h1>
      <p style={{ opacity: 0.8 }}>
        Create reusable templates (Text, Date, Signature, Checkbox)
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button style={btnDark} onClick={() => navigate("/")}>
          🏠 Go Home
        </button>
        <button style={btnOrange} onClick={() => navigate("/create-contract")}>
          ➕ Create Contract
        </button>
      </div>

      <div style={card}>
        <h2>Create Blueprint</h2>

        <input
          style={input}
          placeholder="Blueprint Name (e.g. Employment Blueprint)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button style={btnBlue} onClick={() => addField("Text")}>
            + Text
          </button>
          <button style={btnBlue} onClick={() => addField("Date")}>
            + Date
          </button>
          <button style={btnBlue} onClick={() => addField("Signature")}>
            + Signature
          </button>
          <button style={btnBlue} onClick={() => addField("Checkbox")}>
            + Checkbox
          </button>
        </div>

        <div style={{ marginTop: 15 }}>
          <h3>Fields Preview</h3>
          {fields.length === 0 ? (
            <p style={{ opacity: 0.7 }}>No fields added yet.</p>
          ) : (
            fields.map((f) => (
              <div key={f.id} style={fieldRow}>
                <b>{f.type}</b> — {f.label}
              </div>
            ))
          )}
        </div>

        <button style={{ ...btnOrange, marginTop: 15 }} onClick={saveBlueprint}>
          Save Blueprint
        </button>
      </div>

      <div style={card}>
        <h2>Saved Blueprints</h2>
        {blueprints.length === 0 ? (
          <p style={{ opacity: 0.7 }}>No blueprints saved.</p>
        ) : (
          blueprints.map((bp) => (
            <div key={bp.id} style={bpCard}>
              <h3 style={{ margin: 0 }}>{bp.name}</h3>
              <p style={{ opacity: 0.7 }}>
                Fields: {bp.fields?.length || 0}
              </p>
            </div>
          ))
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

const bpCard = {
  padding: 12,
  borderRadius: 12,
  background: "#0b1220",
  border: "1px solid rgba(255,255,255,0.08)",
  marginTop: 10,
};

const fieldRow = {
  padding: 10,
  marginTop: 8,
  borderRadius: 10,
  background: "rgba(255,255,255,0.05)",
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#0b1220",
  color: "white",
  marginTop: 10,
  marginBottom: 12,
};

const btnOrange = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  background: "#F97316",
  color: "#0b1220",
  fontWeight: 900,
  cursor: "pointer",
};

const btnBlue = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  background: "#60A5FA",
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
