import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PurchaseDetail() {
  const navigate = useNavigate();
  const { plan } = useParams();

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0b1220",
      padding: "40px 20px",
      color: "white",
      fontFamily: "Arial, sans-serif",
    },
    box: {
      maxWidth: 850,
      margin: "0 auto",
      background: "#0f1a2f",
      border: "1px solid #1e2c55",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    },
    title: { fontSize: 26, fontWeight: 900 },
    sub: { marginTop: 6, color: "#b6c2ff" },
    row: {
      marginTop: 18,
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
    },
    btn: {
      padding: "12px 14px",
      borderRadius: 12,
      border: "none",
      background: "linear-gradient(90deg,#2f64ff,#1e3bff)",
      color: "white",
      fontWeight: 900,
      cursor: "pointer",
    },
    btn2: {
      padding: "12px 14px",
      borderRadius: 12,
      border: "1px solid #2a3a7a",
      background: "transparent",
      color: "white",
      fontWeight: 800,
      cursor: "pointer",
    },
    info: {
      marginTop: 18,
      background: "#0b1326",
      border: "1px solid #1e2c55",
      borderRadius: 14,
      padding: 14,
      color: "#dbe6ff",
      fontSize: 14,
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <div style={styles.title}>Plan Selected: {decodeURIComponent(plan)}</div>
        <div style={styles.sub}>
          This is a demo purchase detail screen (like real checkout page).
        </div>

        <div style={styles.info}>
          <b>What you can add here later:</b>
          <br />✅ Payment form
          <br />✅ Billing address
          <br />✅ Card details
          <br />✅ Confirm Purchase button
          <br />✅ Success message / receipt
        </div>

        <div style={styles.row}>
          <button style={styles.btn} onClick={() => alert("Purchase Done ✅ (Demo)")}>
            Confirm Purchase
          </button>

          <button style={styles.btn2} onClick={() => navigate("/purchase")}>
            ⬅ Back to Plans
          </button>

          <button style={styles.btn2} onClick={() => navigate("/")}>
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
}
