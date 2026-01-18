import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#05060a",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
    },

    // Background Image (motion effect)
    bgLayer: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(1px) brightness(0.6)",
      transform: "scale(1.08)",
      animation: "bgMove 12s ease-in-out infinite alternate",
      zIndex: 0,
    },

    // Dark overlay for readability
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 30% 20%, rgba(0,140,255,0.35), transparent 75%), radial-gradient(circle at 80% 70%, rgba(255,170,0,0.08), transparent 60%), rgba(0,0,0,0.55)",
      zIndex: 1,
    },

    content: {
      position: "relative",
      zIndex: 2,
      padding: "22px",
    },

    // TOP LEFT LOGO AREA (NO BORDER LINE)
    topLeftBrand: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#fff",
      fontWeight: 700,
      fontSize: "18px",
      marginBottom: "18px",
    },

    logoCircle: {
      width: "34px",
      height: "34px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.04)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      letterSpacing: "1px",
    },

    // RIGHT NAV BAR
    navBar: {
      position: "fixed",
      top: "20px",
      right: "20px",
      display: "flex",
      alignItems: "center",
      gap: "18px",
      padding: "14px 18px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.01)", // Transparent
      border: "1px solid rgba(255,255,255,0.03)", // Border almost invisible
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },

    navLink: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      opacity: 0.9,
    },

    // Right buttons
    navBtn: {
      padding: "8px 14px",
      borderRadius: "12px",
      fontSize: "13px",
      fontWeight: 700,
      border: "1px solid rgba(255,255,255,0.05)",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.2s",
    },

    loginBtn: {
      background: "rgba(255,255,255,0.01)",
      color: "#fff",
    },

    signupBtn: {
      background: "rgba(255,255,255,0.02)",
      color: "#fff",
    },

    freeTrialBtn: {
      background: "rgba(0,140,255,0.75)",
      color: "#fff",
      border: "1px solid rgba(0,140,255,0.25)",
    },

    buyNowBtn: {
      background: "rgba(255,165,0,0.85)",
      color: "#111",
      border: "1px solid rgba(255,165,0,0.25)",
    },

    purchaseBtn: {
      background: "rgba(0,200,120,0.85)",
      color: "#111",
      border: "1px solid rgba(0,200,120,0.25)",
    },

    // MAIN GRID
    grid: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "22px",
      marginTop: "40px",
      alignItems: "start",
    },

    // HERO CARD
    heroCard: {
      borderRadius: "22px",
      padding: "26px",
      background: "rgba(255,255,255,0.01)", // FULL TRANSPARENT GLASS
      border: "1px solid rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },

    heroTitleSmall: {
      color: "rgba(255,255,255,0.75)",
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "10px",
    },

    heroTitle: {
      color: "#fff",
      fontSize: "54px",
      lineHeight: "1.05",
      fontWeight: 900,
      margin: 0,
    },

    heroDesc: {
      color: "rgba(255,255,255,0.75)",
      fontSize: "14px",
      lineHeight: "1.6",
      marginTop: "14px",
      maxWidth: "420px",
    },

    heroBtnRow: {
      display: "flex",
      gap: "12px",
      marginTop: "18px",
      flexWrap: "wrap",
    },

    primaryBtn: {
      padding: "10px 16px",
      borderRadius: "12px",
      background: "rgba(0,140,255,0.85)",
      color: "#fff",
      fontWeight: 800,
      border: "1px solid rgba(0,140,255,0.25)",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    secondaryBtn: {
      padding: "10px 16px",
      borderRadius: "12px",
      background: "rgba(255,165,0,0.85)",
      color: "#111",
      fontWeight: 800,
      border: "1px solid rgba(255,165,0,0.25)",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // LEFT SMALL CARDS
    leftCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      marginTop: "20px",
    },

    smallCard: {
      borderRadius: "18px",
      padding: "18px",
      background: "rgba(255,255,255,0.01)", // transparent
      border: "1px solid rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      minHeight: "120px",
    },

    cardTitle: {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 800,
      marginBottom: "8px",
    },

    cardText: {
      color: "rgba(255,255,255,0.70)",
      fontSize: "12px",
      lineHeight: "1.5",
      marginBottom: "12px",
    },

    cardBtn: {
      padding: "9px 12px",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      color: "#fff",
      fontWeight: 700,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    },

    // RIGHT SIDE QUICK LINKS
    quickLinksCard: {
      borderRadius: "22px",
      padding: "20px",
      background: "rgba(255,255,255,0.01)",
      border: "1px solid rgba(255,255,255,0.03)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      minHeight: "340px",
    },

    quickTitle: {
      color: "#fff",
      fontSize: "15px",
      fontWeight: 900,
      marginBottom: "14px",
    },

    quickItem: {
      width: "100%",
      padding: "14px 14px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.04)",
      color: "rgba(255,255,255,0.85)",
      fontWeight: 700,
      marginBottom: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      textDecoration: "none",
    },

    // RESPONSIVE
    mobileNote: {
      marginTop: "14px",
      color: "rgba(255,255,255,0.65)",
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Animations */}
      <style>
        {`
          @keyframes bgMove {
            0% { transform: scale(1.08) translateX(0px) translateY(0px); }
            100% { transform: scale(1.12) translateX(-20px) translateY(-10px); }
          }

          @media (max-width: 900px) {
            .mainGrid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Background */}
      <div style={styles.bgLayer}></div>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        {/* Brand (NO BORDER LINE) */}
        <div style={styles.topLeftBrand}>
          <div style={styles.logoCircle}>CM</div>
          <div>Contract Platform</div>
        </div>

        {/* Right Nav */}
        <div style={styles.navBar}>
          <Link style={styles.navLink} to="/">
            Home
          </Link>
          <Link style={styles.navLink} to="/dashboard">
            Dashboard
          </Link>
          <Link style={styles.navLink} to="/blueprints">
            Blueprints
          </Link>
          <Link style={styles.navLink} to="/create-contract">
            Create Contract
          </Link>

          <Link style={{ ...styles.navBtn, ...styles.loginBtn }} to="/login">
            Login
          </Link>
          <Link style={{ ...styles.navBtn, ...styles.signupBtn }} to="/signup">
            Sign Up
          </Link>
          <Link style={{ ...styles.navBtn, ...styles.freeTrialBtn }} to="/free-trial">
            Free Trial
          </Link>
          <Link style={{ ...styles.navBtn, ...styles.buyNowBtn }} to="/buy">
            Buy Now
          </Link>
          <Link style={{ ...styles.navBtn, ...styles.purchaseBtn }} to="/purchase">
            Purchase
          </Link>
        </div>

        {/* Main Layout */}
        <div className="mainGrid" style={styles.grid}>
          {/* LEFT */}
          <div>
            <div style={styles.heroCard}>
              <div style={styles.heroTitleSmall}>Modern Contract Management</div>
              <h1 style={styles.heroTitle}>
                Everything you need to agree
              </h1>

              <div style={styles.heroDesc}>
                Create templates (Blueprints), generate contracts, manage approvals,
                send, sign and lock — all in one dashboard.
              </div>

              <div style={styles.heroBtnRow}>
                <Link to="/free-trial" style={styles.primaryBtn}>
                  Start Free Trial
                </Link>
                <Link to="/buy" style={styles.secondaryBtn}>
                  Buy Now
                </Link>
              </div>
            </div>

            <div style={styles.leftCards}>
              <div style={styles.smallCard}>
                <div style={styles.cardTitle}>AI Assistant</div>
                <div style={styles.cardText}>
                  Click below to open help assistant.
                </div>
                <Link to="/ai-assistant" style={styles.cardBtn}>
                  Open AI Help →
                </Link>
              </div>

              <div style={styles.smallCard}>
                <div style={styles.cardTitle}>Settings</div>
                <div style={styles.cardText}>
                  Manage profile, security & preferences.
                </div>
                <Link to="/settings" style={styles.cardBtn}>
                  Open settings
                </Link>
              </div>

              <div style={styles.smallCard}>
                <div style={styles.cardTitle}>Help</div>
                <div style={styles.cardText}>
                  Need guidance? Check quick docs & support.
                </div>
                <Link to="/help" style={styles.cardBtn}>
                  Open Help
                </Link>
              </div>

              <div style={styles.smallCard}>
                <div style={styles.cardTitle}>Quick Links</div>
                <div style={styles.cardText}>
                  Jump directly to important pages.
                </div>
                <Link to="/dashboard" style={styles.cardBtn}>
                  Open links →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={styles.quickLinksCard}>
            <div style={styles.quickTitle}>Quick Links</div>

            <Link to="/dashboard" style={styles.quickItem}>
              Dashboard <span>→</span>
            </Link>

            <Link to="/blueprints" style={styles.quickItem}>
              Blueprints <span>→</span>
            </Link>

            <Link to="/create-contract" style={styles.quickItem}>
              Create Contract <span>→</span>
            </Link>

            <div style={styles.mobileNote}>
              (Ye sirf UI hai, baad me real pages connect kar denge.)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
