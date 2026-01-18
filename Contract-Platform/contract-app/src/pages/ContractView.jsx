import React, { useEffect, useState } from "react";
import { loadContracts, saveContracts } from "../Data/storage";
import { useNavigate, useParams } from "react-router-dom";

export default function ContractView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contract, setContract] = useState(null);

  useEffect(() => {
    const all = loadContracts();
    const found = all.find((c) => c.id === id);
    setContract(found || null);
  }, [id]);

  const updateContract = (updatedContract) => {
    const all = loadContracts();
    const updated = all.map((c) => (c.id === id ? updatedContract : c));
    saveContracts(updated);
    setContract(updatedContract);
  };

  const nextAllowed = (status) => {
    const order = ["CREATED", "APPROVED", "SENT", "SIGNED", "LOCKED"];
    return order;
  };

  const moveStatus = (newStatus) => {
    if (!contract) return;

    // Locked or revoked -> no changes
    if (contract.status === "LOCKED" || contract.status === "REVOKED") {
      alert("This contract cannot be updated.");
      return;
    }

    const order = nextAllowed();
    const currentIndex = order.indexOf(contract.status);
    const newIndex = order.indexOf(newStatus);

    // allow only next step
    if (newIndex !== currentIndex + 1) {
      alert("You cannot skip steps ❌");
      return;
    }

    updateContract({ ...contract, status: newStatus });
  };

  const revoke = () => {
    if (!contract) return;
    if (contract.status === "LOCKED") return alert("Locked contract can't revoke");
    updateContract({ ...contract, status: "REVOKED" });
  };

  const onChangeField = (fieldId, value) => {
    if (contract.status === "LOCKED") return;

    const updatedFields = contract.fields.map((f) =>
      f.id === fieldId ? { ...f, value } : f
    );
    updateContract({ ...contract, fields: updatedFields });
  };

  if (!contract) {
    return (
      <div style={{ padding: 20, color: "white" }}>
        <h2>Contract not found</h2>
        <button onClick={() => navigate("/dashboard")} style={btnDark}>
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 style={{ fontSize: 28 }}>{contract.name}</h1>
      <p style={{ opacity: 0.8 }}>
        Blueprint: <b>{contract.blueprintName}</b>
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button style={btnDark} onClick={() => navigate("/")}>
          🏠 Go Home
        </button>
        <button style={btnDark} onClick={() => navigate("/dashboard")}>
          ← Back Dashboard
        </button>
      </div>

      <div style={card}>
        <h3>Status: {contract.status}</h3>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button style={btnBlue} onClick={() => moveStatus("APPROVED")}>
            Approve
          </button>
          <button style={btnBlue} onClick={() => moveStatus("SENT")}>
            Send
          </button>
          <button style={btnBlue} onClick={() => moveStatus("SIGNED")}>
            Sign
          </button>
          <button style={btnBlue} onClick={() => moveStatus("LOCKED")}>
            Lock
          </button>

          <button style={btnRed} onClick={revoke}>
            Revoke
          </button>
        </div>

        <p style={{ marginTop: 10, opacity: 0.7 }}>
          Rule: Created → Approved → Sent → Signed → Locked (No skipping)
        </p>
      </div>

      <div style={card}>
        <h2>Fill Contract Fields</h2>

        {contract.fields.map((f) => (
          <div key={f.id} style={fieldRow}>
            <label style={{ fontWeight: 800 }}>{f.label}</label>

            {f.type === "Text" && (
              <input
                style={input}
                value={f.value}
                onChange={(e) => onChangeField(f.id, e.target.value)}
                placeholder="Enter text..."
              />
            )}

            {f.type === "Date" && (
              <input
                style={input}
                type="date"
                value={f.value}
                onChange={(e) => onChangeField(f.id, e.target.value)}
              />
            )}

            {f.type === "Signature" && (
              <input
                style={input}
                value={f.value}
                onChange={(e) => onChangeField(f.id, e.target.value)}
                placeholder="Type signature name..."
              />
            )}

            {f.type === "Checkbox" && (
              <div style={{ marginTop: 8 }}>
                <input
                  type="checkbox"
                  checked={f.value}
                  onChange={(e) => onChangeField(f.id, e.target.checked)}
                />{" "}
                Agree
              </div>
            )}
          </div>
        ))}
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

const fieldRow = {
  padding: 12,
  borderRadius: 12,
  background: "#0b1220",
  border: "1px solid rgba(255,255,255,0.08)",
  marginTop: 12,
};

const input = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#0f172a",
  color: "white",
  marginTop: 8,
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

const btnRed = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  background: "#ef4444",
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
