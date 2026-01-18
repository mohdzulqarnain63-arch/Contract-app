import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [mode, setMode] = useState("login"); // login or signup
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #050A16, #0B1B3A)",
      padding: "20px",
      color: "white",
    },

    box: {
      width: "400px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "16px",
      padding: "18px",
      position: "relative",
    },
    close: {
      position: "absolute",
      right: "12px",
      top: "10px",
      cursor: "pointer",
      fontSize: "18px",
      border: "none",
      background: "transparent",
      color: "white",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.06)",
      color: "white",
      outline: "none",
    },
    btn: {
      width: "100%",
      marginTop: "14px",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #ffb400, #ff7a00)",
      color: "#111",
    },
    switchBtn: {
      width: "100%",
      marginTop: "10px",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer",
      background: "transparent",
      color: "white",
    },
  };

  const title = mode === "login" ? "Login" : "Sign Up";

  return (
    <div style={styles.page}>
      {open ? (
        <div style={styles.box}>
          <button
  style={{
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    cursor: "pointer",
    fontWeight: "700",
    marginBottom: "15px",
  }}
  onClick={() => navigate("/")}
>
  ⬅ Go Home
</button>

          <button style={styles.close} onClick={() => setOpen(false)}>
            ❌
          </button>

          <h2 style={{ marginTop: 0 }}>{title}</h2>

          {mode === "signup" && (
            <input style={styles.input} placeholder="Full Name" />
          )}

          <input style={styles.input} placeholder="Email" />
          <input style={styles.input} placeholder="Password" type="password" />

          <button
            style={styles.btn}
            onClick={() => alert(`${title} Successful ✅ (Demo)`)}
          >
            {title}
          </button>

          <button
            style={styles.switchBtn}
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login"
              ? "New user? Create Account"
              : "Already have account? Login"}
          </button>
        </div>
      ) : (
        <h2>Auth Box Closed ✅</h2>
      )}
    </div>
  );
}
