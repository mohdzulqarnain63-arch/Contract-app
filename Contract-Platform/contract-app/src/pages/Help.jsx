import React from "react";

export default function Help() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Help</h2>
        <p style={styles.text}>
          Need guidance? Check quick docs & support.
        </p>

        <div style={styles.box}>
          <h3 style={styles.subTitle}>Quick Fix</h3>
          <ul style={styles.list}>
            <li>✅ Refresh page (Ctrl + R)</li>
            <li>✅ Turn OFF VPN</li>
            <li>✅ Check internet connection</li>
            <li>✅ Restart server: <b>npm run dev</b></li>
          </ul>
        </div>

        <div style={styles.box}>
          <h3 style={styles.subTitle}>Support</h3>
          <p style={styles.small}>
            Email: support@contract-platform.com <br />
            Phone: +91 00000 00000 <br />
            Working Hours: 10 AM - 6 PM
          </p>
        </div>

        <button
          style={styles.btnPrimary}
          onClick={() => alert("✅ Help Opened (Demo)")}
        >
          Open Help →
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    background: "transparent",
    color: "white",
  },
  card: {
    width: "100%",
    maxWidth: "700px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "18px",
    padding: "25px",
    backdropFilter: "blur(10px)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  text: {
    opacity: 0.9,
    marginBottom: "15px",
  },
  box: {
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    padding: "14px",
    marginBottom: "12px",
  },
  subTitle: {
    marginBottom: "8px",
  },
  list: {
    marginLeft: "18px",
    lineHeight: "24px",
  },
  small: {
    opacity: 0.9,
    lineHeight: "22px",
  },
  btnPrimary: {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#2b82ff",
    color: "white",
    fontWeight: "bold",
  },
};
