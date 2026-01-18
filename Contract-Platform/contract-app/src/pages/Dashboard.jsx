import React, { useEffect, useState } from "react";
import { loadContracts, saveContracts } from "../Data/storage";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    let data = loadContracts();

    // agar empty ho to dummy data daal do
    if (data.length === 0) {
      data = [
        {
          id: "c1",
          name: "Employment Contract",
          blueprintName: "Employment Blueprint",
          status: "CREATED",
          createdAt: new Date().toLocaleString(),
          fields: [],
        },
        {
          id: "c2",
          name: "Rental Agreement",
          blueprintName: "Rental Blueprint",
          status: "SENT",
          createdAt: new Date().toLocaleString(),
          fields: [],
        },
      ];
      saveContracts(data);
    }

    setContracts(data);
  }, []);

  const filtered = contracts.filter((c) => {
    if (filter === "ALL") return true;
    return c.status === filter;
  });

  const statusColor = (s) => {
    if (s === "CREATED") return "#a0a0a0";
    if (s === "APPROVED") return "#3b82f6";
    if (s === "SENT") return "#f59e0b";
    if (s === "SIGNED") return "#22c55e";
    if (s === "LOCKED") return "#8b5cf6";
    if (s === "REVOKED") return "#ef4444";
    return "#fff";
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Dashboard</h1>
      <p style={{ opacity: 0.8, marginBottom: 20 }}>
        Contracts list + lifecycle tracking
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
        <button onClick={() => navigate("/")} style={btnDark}>
          🏠 Go Home
        </button>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={selectStyle}
        >
          <option value="ALL">All</option>
          <option value="CREATED">Created</option>
          <option value="APPROVED">Approved</option>
          <option value="SENT">Sent</option>
          <option value="SIGNED">Signed</option>
          <option value="LOCKED">Locked</option>
          <option value="REVOKED">Revoked</option>
        </select>
      </div>

      <div style={tableWrap}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={th}>Contract</th>
              <th style={th}>Blueprint</th>
              <th style={th}>Status</th>
              <th style={th}>Created</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td style={td}>{c.name}</td>
                <td style={td}>{c.blueprintName}</td>
                <td style={td}>
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: 20,
                      background: statusColor(c.status),
                      color: "#0b1220",
                      fontWeight: 900,
                    }}
                  >
                    {c.status}
                  </span>
                </td>
                <td style={td}>{c.createdAt}</td>
                <td style={td}>
                  <button
                    style={btnOrange}
                    onClick={() => navigate(`/contract/${c.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td style={td} colSpan={5}>
                  No contracts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableWrap = {
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 12,
  overflowX: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: 700,
};

const th = {
  textAlign: "left",
  padding: 12,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  opacity: 0.8,
};

const td = {
  padding: 12,
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const btnOrange = {
  padding: "8px 14px",
  borderRadius: 10,
  border: "none",
  background: "#F97316",
  color: "#0b1220",
  fontWeight: 900,
  cursor: "pointer",
};

const btnDark = {
  padding: "8px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};

const selectStyle = {
  padding: "8px 12px",
  borderRadius: 10,
  background: "#0b1220",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
};
