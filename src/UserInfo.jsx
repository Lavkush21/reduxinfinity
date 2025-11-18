// src/UserInfo.jsx
import React from "react";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const { username, balance } = useSelector((state) => state.user);

  return (
    <div style={styles.card}>
      <h2>Welcome, {username}!</h2>
      <h1 style={styles.balance}>₹{balance.toLocaleString("en-IN")}</h1>
      <p style={styles.label}>Current Balance</p>
    </div>
  );
}

const styles = {
  card: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
    margin: "20px 0",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  balance: {
    fontSize: "48px",
    margin: "10px 0",
    fontWeight: "bold",
  },
  label: {
    margin: 0,
    opacity: 0.9,
  },
};