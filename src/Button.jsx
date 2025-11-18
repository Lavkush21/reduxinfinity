// src/Button.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMoney, removeMoney } from "./store";

export default function Button() {
  const [amount, setAmount] = useState(1000);
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addMoney(amount));
  const handleRemove = () => dispatch(removeMoney(amount));

  const resetAll = () => {
    if (window.confirm("Reset everything to default?")) {
      localStorage.removeItem("reduxMoneyApp");
      window.location.reload();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputGroup}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          style={styles.input}
          min="1"
        />
        <button onClick={handleAdd} style={styles.btnAdd}>Add Money</button>
        <button onClick={handleRemove} style={styles.btnRemove}>Remove Money</button>
      </div>

      <div style={styles.quickButtons}>
        <button onClick={() => dispatch(addMoney(5000))} style={styles.quick}>+₹5,000</button>
        <button onClick={() => dispatch(addMoney(10000))} style={styles.quick}>+₹10,000</button>
        <button onClick={() => dispatch(removeMoney(2000))} style={styles.quick}>-₹2,000</button>
      </div>

      <button onClick={resetAll} style={styles.reset}>
        Reset All Data
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", margin: "30px 0" },
  inputGroup: { marginBottom: "20px" },
  input: {
    padding: "12px",
    fontSize: "18px",
    width: "140px",
    borderRadius: "8px",
    border: "2px solid #ddd",
    marginRight: "10px",
  },
  btnAdd: { padding: "12px 24px", background: "#28a745", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" },
  btnRemove: { padding: "12px 24px", background: "#dc3545", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", marginLeft: "10px" },
  quickButtons: { margin: "20px 0" },
  quick: { margin: "0 8px", padding: "10px 16px", background: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" },
  reset: { padding: "12px 20px", background: "#ff9800", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "20px" },
};