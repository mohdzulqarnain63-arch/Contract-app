import React from "react";

export default function Purchase() {
  const plans = [
    {
      title: "Standard",
      price: "$15 / month",
      color: "rgba(0,140,255,0.90)",
      features: [
        "Send total of 100 envelopes per user per year",
        "Mobile-friendly workflows",
        "Collect payments during signing",
        "Enable intuitive signing with interactive form fields",
        "Save time by bulk sending",
      ],
    },
    {
      title: "Personal",
      price: "$10 / month",
      color: "rgba(255,165,0,0.90)",
      features: [
        "Send total of 30 envelopes per year",
        "Store agreements in one place",
        "Reusable templates",
        "Simple audit trail",
        "Basic support",
      ],
    },
    {
      title: "Business",
      price: "$25 / month",
      color: "rgba(0,200,120,0.90)",
      features: [
        "Unlimited templates",
        "Team management",
        "Advanced security",
        "24/7 support",
        "Centralized org management",
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Purchase Plan</h1>
        <p style={styles.desc}>
          Pick a plan and continue to checkout.
        </p>

        <div style={styles.grid}>
          {plans.map((p, i) => (
            <div key={i} style={styles.card}>
              <div style={{ ...styles.topBar, background: p.color }}>
                <div style={styles.topText}>Buy Now</div>
              </div>

              <div style={styles.body}>
                <h2 style={styles.planTitle}>{p.title}</h2>
                <div style={styles.price}>{p.price}</div>

                <div style={styles.featureBox}>
                  {p.features.map((f, idx) => (
                    <div key={idx} style={styles.feature}>
                      ✔ {f}
                    </div>
                  ))}
                </div>

                <button style={{ ...styles.btn, background: p.color }}>
                  Continue Purchase
                </button>

                <button style={styles.outlineBtn}>See All Features</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7ff",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    margin: 0,
    fontSize: "36px",
    fontWeight: 900,
    color: "#111",
  },
  desc: {
    marginTop: "10px",
    color: "rgba(0,0,0,0.65)",
    fontWeight: 600,
  },
  grid: {
    marginTop: "22px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },
  card: {
    borderRadius: "22px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  topBar: {
    padding: "16px",
  },
  topText: {
    fontWeight: 900,
    color: "#fff",
    fontSize: "16px",
  },
  body: {
    padding: "18px",
  },
  planTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 900,
    color: "#111",
  },
  price: {
    marginTop: "10px",
    fontSize: "24px",
    fontWeight: 900,
    color: "#111",
  },
  featureBox: {
    marginTop: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "rgba(0,0,0,0.75)",
    fontWeight: 600,
    fontSize: "13px",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  btn: {
    marginTop: "18px",
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: 900,
    color: "#fff",
    fontSize: "14px",
  },
  outlineBtn: {
    marginTop: "12px",
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#fff",
    cursor: "pointer",
    fontWeight: 800,
  },
};
