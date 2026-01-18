import React from "react";

export default function FreeTrial() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Start Free Trial</h1>
        <p style={styles.desc}>
          Try Contract Platform free for 7 days. No credit card required.
        </p>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h3 style={styles.h3}>What you get</h3>
            <ul style={styles.ul}>
              <li>✔ Dashboard access</li>
              <li>✔ Blueprint templates</li>
              <li>✔ Create & manage contracts</li>
              <li>✔ AI Assistant support</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h3 style={styles.h3}>Your plan</h3>
            <p style={styles.price}>₹0 / 7 days</p>
            <button style={styles.btn}>Activate Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#05060a",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#fff",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "22px",
    padding: "26px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
  },
  title: { margin: 0, fontSize: "34px", fontWeight: 900 },
  desc: { color: "rgba(255,255,255,0.7)", marginTop: "10px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    marginTop: "20px",
  },
  box: {
    borderRadius: "18px",
    padding: "18px",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  h3: { margin: 0, fontSize: "16px", fontWeight: 800 },
  ul: { marginTop: "10px", lineHeight: "1.9" },
  price: { fontSize: "22px", fontWeight: 900, marginTop: "12px" },
  btn: {
    marginTop: "12px",
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    fontWeight: 800,
    cursor: "pointer",
    background: "rgba(0,140,255,0.9)",
    color: "#fff",
  },
};
