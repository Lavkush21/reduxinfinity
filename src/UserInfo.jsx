import React from "react";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>User: {user.username}</h2>
      <h3>Balance: ₹{user.balance}</h3>
    </div>
  );
}