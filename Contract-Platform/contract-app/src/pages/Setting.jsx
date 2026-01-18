import React, { useState } from "react";

export default function Setting() {
  const [profile, setProfile] = useState({
    fullName: "Kahef Khan",
    email: "kahef@gmail.com",
    company: "Contract Platform",
  });

  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: true,
    autoSave: true,
    twoFactor: false,
  });

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Settings</h1>
        <p style={styles.subtitle}>Manage your profile, security & preferences</p>
      </div>

      {/* Main Layout */}
      <div style={styles.grid}>
        {/* LEFT: Profile */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>👤 Profile</h2>

          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              placeholder="Enter your name"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Company</label>
            <input
              style={styles.input}
              value={profile.company}
              onChange={(e) => setProfile({ ...profile, company: e.target.value })}
              placeholder="Enter company name"
            />
          </div>

          <button style={styles.primaryBtn} onClick={handleSave}>
            Save Profile
          </button>
        </div>

        {/* RIGHT: Preferences + Security */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Preferences */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>⚙️ Preferences</h2>

            <div style={styles.toggleRow}>
              <div>
                <p style={styles.toggleTitle}>Dark Mode</p>
                <p style={styles.toggleDesc}>Enable modern dark theme UI</p>
              </div>
              <button
                style={preferences.darkMode ? styles.toggleOn : styles.toggleOff}
                onClick={() =>
                  setPreferences({ ...preferences, darkMode: !preferences.darkMode })
                }
              >
                {preferences.darkMode ? "ON" : "OFF"}
              </button>
            </div>

            <div style={styles.toggleRow}>
              <div>
                <p style={styles.toggleTitle}>Notifications</p>
                <p style={styles.toggleDesc}>Get alerts about updates</p>
              </div>
              <button
                style={preferences.notifications ? styles.toggleOn : styles.toggleOff}
                onClick={() =>
                  setPreferences({
                    ...preferences,
                    notifications: !preferences.notifications,
                  })
                }
              >
                {preferences.notifications ? "ON" : "OFF"}
              </button>
            </div>

            <div style={styles.toggleRow}>
              <div>
                <p style={styles.toggleTitle}>Auto Save</p>
                <p style={styles.toggleDesc}>Save drafts automatically</p>
              </div>
              <button
                style={preferences.autoSave ? styles.toggleOn : styles.toggleOff}
                onClick={() =>
                  setPreferences({ ...preferences, autoSave: !preferences.autoSave })
                }
              >
                {preferences.autoSave ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* Security */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>🔒 Security</h2>

            <div style={styles.toggleRow}>
              <div>
                <p style={styles.toggleTitle}>Two-Factor Authentication</p>
                <p style={styles.toggleDesc}>Extra security for your account</p>
              </div>
              <button
                style={preferences.twoFactor ? styles.toggleOn : styles.toggleOff}
                onClick={() =>
                  setPreferences({ ...preferences, twoFactor: !preferences.twoFactor })
                }
              >
                {preferences.twoFactor ? "ON" : "OFF"}
              </button>
            </div>

            <div style={styles.securityActions}>
              <button
                style={styles.secondaryBtn}
                onClick={() => alert("🔑 Password reset link sent to your email!")}
              >
                Change Password
              </button>

              <button
                style={styles.dangerBtn}
                onClick={() => alert("⚠️ Logged out from all devices!")}
              >
                Logout All Devices
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div style={styles.footerBar}>
        <button style={styles.grayBtn} onClick={() => alert("↩️ Changes discarded!")}>
          Discard
        </button>
        <button style={styles.primaryBtn} onClick={handleSave}>
          Save All Settings
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "28px",
    color: "#fff",
  },

  header: {
    marginBottom: "18px",
  },

  title: {
    fontSize: "34px",
    fontWeight: 800,
    margin: 0,
  },

  subtitle: {
    marginTop: "6px",
    opacity: 0.75,
    fontSize: "14px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    marginTop: "18px",
  },

  card: {
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "18px",
    padding: "18px",
    backdropFilter: "blur(14px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  cardTitle: {
    margin: 0,
    marginBottom: "14px",
    fontSize: "18px",
    fontWeight: 700,
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "12px",
  },

  label: {
    fontSize: "12px",
    opacity: 0.75,
  },

  input: {
    padding: "12px 12px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },

  toggleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    borderRadius: "14px",
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.10)",
    marginBottom: "10px",
  },

  toggleTitle: {
    margin: 0,
    fontWeight: 700,
    fontSize: "14px",
  },

  toggleDesc: {
    margin: 0,
    opacity: 0.7,
    fontSize: "12px",
    marginTop: "3px",
  },

  toggleOn: {
    padding: "8px 14px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "#22c55e",
    color: "#0b1220",
  },

  toggleOff: {
    padding: "8px 14px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "rgba(255,255,255,0.18)",
    color: "#fff",
  },

  securityActions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "12px",
  },

  primaryBtn: {
    marginTop: "8px",
    padding: "12px 14px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "#3b82f6",
    color: "#fff",
  },

  secondaryBtn: {
    padding: "12px 14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
    cursor: "pointer",
    fontWeight: 700,
    background: "rgba(255,255,255,0.10)",
    color: "#fff",
  },

  dangerBtn: {
    padding: "12px 14px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    background: "#ef4444",
    color: "#fff",
  },

  footerBar: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },

  grayBtn: {
    padding: "12px 14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
    cursor: "pointer",
    fontWeight: 700,
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
  },
};
