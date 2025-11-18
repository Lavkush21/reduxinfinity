// src/TransactionHistory.jsx
import React from "react";
import { useSelector } from "react-redux";

export default function TransactionHistory() {
  const transactions = useSelector((state) => state.transactions);

  if (transactions.length === 0) {
    return <p style={{ textAlign: "center", color: "#888", fontStyle: "italic" }}>No transactions yet</p>;
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h3 style={{ textAlign: "center" }}>Transaction History</h3>
      <div style={styles.list}>
        {transactions.map((t, i) => (
          <div key={i} style={{ ...styles.item, background: t.type === "add" ? "#d4edda" : "#f8d7da" }}>
            <div>
              <strong style={{ color: t.type === "add" ? "#28a745" : "#dc3545" }}>
                {t.type === "add" ? "+" : "-"} ₹{t.amount.toLocaleString()}
              </strong>
            </div>
            <div style={styles.date}>
              {new Date(t.date).toLocaleDateString()} {new Date(t.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  list: { maxWidth: "600px", margin: "0 auto" },
  item: {
    padding: "14px 20px",
    margin: "8px 0",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  date: { fontSize: "14px", color: "#555" },
};