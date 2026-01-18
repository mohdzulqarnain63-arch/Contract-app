import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buy() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "pro",
      title: "Pro Plan",
      price: "$ 15 / month",
      desc: "Best for individuals & freelancers",
      features: [
        "Send & sign contracts",
        "Secure storage",
        "Basic templates",
        "Email support",
        "Unlimited drafts",
      ],
    },
    {
      id: "business",
      title: "Business Plan",
      price: "$ 30 / month",
      desc: "Best for teams & small business",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Priority support",
        "Advanced templates",
        "Audit history",
      ],
    },
  ];

  const handlePurchaseClick = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedPlan(null);
  };

  const confirmPurchase = () => {
    // yaha hum actual payment nahi kar rahe (demo)
    setOpen(false);
    alert(`✅ Purchased: ${selectedPlan?.title}`);
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Buy Now</h1>
        <p style={styles.subText}>
          Purchase your plan to manage contracts like DocuSign / PandaDoc.
        </p>

        <div style={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} style={styles.card}>
              <div style={styles.cardTop}>
                <h2 style={styles.planTitle}>{plan.title}</h2>
                <p style={styles.planDesc}>{plan.desc}</p>
                <div style={styles.price}>{plan.price}</div>
              </div>

              <div style={styles.features}>
                {plan.features.map((f, idx) => (
                  <div key={idx} style={styles.featureRow}>
                    <span style={styles.tick}>✓</span>
                    <span style={styles.featureText}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                style={styles.btnOrangeFull}
                onClick={() => handlePurchaseClick(plan)}
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={closeModal}>
              ✖
            </button>

            <h2 style={styles.modalTitle}>Confirm Purchase</h2>
            <p style={styles.modalText}>
              You selected: <b>{selectedPlan?.title}</b>
            </p>
            <p style={styles.modalText}>
              Price: <b>{selectedPlan?.price}</b>
            </p>

            <div style={styles.modalActions}>
              <button style={styles.btnGhost} onClick={closeModal}>
                Cancel
              </button>
              <button style={styles.btnOrange} onClick={confirmPurchase}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b1220",
    padding: "30px 16px",
    color: "white",
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
  },
  heading: {
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 6,
  },
  subText: {
    opacity: 0.8,
    marginBottom: 22,
    fontSize: 14,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
  },
  cardTop: {
    marginBottom: 14,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 4,
  },
  planDesc: {
    fontSize: 12,
    opacity: 0.75,
    marginBottom: 10,
  },
  price: {
    fontSize: 28,
    fontWeight: 900,
  },
  features: {
    marginTop: 12,
    marginBottom: 14,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  featureRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13,
    opacity: 0.9,
  },
  tick: {
    color: "#22c55e",
    fontWeight: 900,
  },
  featureText: {},
  btnOrangeFull: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "none",
    background: "#F97316",
    color: "#0B1220",
    fontWeight: 900,
    cursor: "pointer",
    marginTop: 6,
  },

  // Modal
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    zIndex: 999,
  },
  modalBox: {
    width: "100%",
    maxWidth: 420,
    background: "#0f172a",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    padding: 18,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "transparent",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 6,
  },
  modalActions: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-end",
    marginTop: 14,
  },
  btnGhost: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.25)",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  btnOrange: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    background: "#F97316",
    color: "#0B1220",
    cursor: "pointer",
    fontWeight: 900,
  },
};
