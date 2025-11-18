// src/App.jsx
import React from "react";
import UserInfo from "./UserInfo.jsx";
import Button from "./Button.jsx";
import TransactionHistory from "./TransactionHistory.jsx";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>
        Redux Money Manager
      </h1>
      <UserInfo />
      <Button />
      <TransactionHistory />
    </div>
  );
}