import React, { useState } from "react";

export default function AiAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!question.trim()) {
      setAnswer("⚠️ Please type your question first.");
      return;
    }

    setAnswer(
      `✅ AI Assistant Response (Demo):\n\nYou asked: "${question}"\n\n⚠️ If this is not working:\n• Please check your internet connection\n• Turn OFF VPN\n• Refresh the page\n\n(Backend AI is not connected, this is demo output.)`
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI Assistant</h2>
        <p style={styles.text}>
          Click below to open help assistant.
          <br />
          <b>Note:</b> If not working, please check your network and turn off VPN.
        </p>

        <textarea
          style={styles.input}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div style={styles.btnRow}>
          <button style={styles.btnPrimary} onClick={handleAsk}>
            Ask AI →
          </button>

          <button
            style={styles.btnSecondary}
            onClick={() => {
              setQuestion("");
              setAnswer("");
            }}
          >
            Clear
          </button>
        </div>

        {answer && (
          <pre style={styles.answerBox}>
            {answer}
          </pre>
        )}
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
    lineHeight: "22px",
  },
  input: {
    width: "100%",
    minHeight: "120px",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(0,0,0,0.25)",
    color: "white",
    outline: "none",
    resize: "none",
  },
  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
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
  btnSecondary: {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.25)",
    cursor: "pointer",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontWeight: "bold",
  },
  answerBox: {
    marginTop: "15px",
    padding: "14px",
    borderRadius: "12px",
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.15)",
    whiteSpace: "pre-wrap",
    lineHeight: "20px",
  },
};
