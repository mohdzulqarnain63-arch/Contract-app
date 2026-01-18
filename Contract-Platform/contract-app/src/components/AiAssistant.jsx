import React, { useState } from "react";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const sendMsg = () => {
    if (!msg.trim()) return;
    alert("AI Reply (Demo): Please don't use VPN. Your account may get blocked.");
    setMsg("");
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        style={styles.fab}
        onClick={() => setOpen(!open)}
        title="AI Assistant"
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            <div>
              <div style={{ fontWeight: 800 }}>AI Assistant</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Help for contracts & platform
              </div>
            </div>
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div style={styles.body}>
            <div style={styles.botMsg}>
              👋 Hi! I can help you create contracts, choose plans and fix errors.
            </div>

            <div style={styles.warning}>
              ⚠️ Important: <b>Don’t use VPN</b> while using this platform.
            </div>
          </div>

          <div style={styles.footer}>
            <input
              style={styles.input}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your question..."
            />
            <button style={styles.sendBtn} onClick={sendMsg}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  fab: {
    position: "fixed",
    right: 18,
    bottom: 18,
    width: 55,
    height: 55,
    borderRadius: "50%",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontSize: 22,
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    zIndex: 9999,
  },

  chatBox: {
    position: "fixed",
    right: 18,
    bottom: 85,
    width: 320,
    borderRadius: 16,
    background: "rgba(15, 23, 42, 0.95)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
    overflow: "hidden",
    zIndex: 9999,
  },

  header: {
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  closeBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: 16,
  },

  body: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  botMsg: {
    padding: 10,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    fontSize: 13,
    lineHeight: 1.4,
  },

  warning: {
    padding: 10,
    borderRadius: 12,
    background: "rgba(245, 158, 11, 0.15)",
    border: "1px solid rgba(245, 158, 11, 0.35)",
    fontSize: 13,
    lineHeight: 1.4,
  },

  footer: {
    padding: 12,
    display: "flex",
    gap: 8,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    outline: "none",
  },

  sendBtn: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "none",
    background: "#22c55e",
    color: "#0b1220",
    fontWeight: 800,
    cursor: "pointer",
  },
};
