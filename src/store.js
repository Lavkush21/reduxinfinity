// src/store.js
import { createStore } from "redux";

const INITIAL_STATE = {
  user: {
    username: "Lavkush Gupta",
    balance: 30000,
  },
  transactions: [],
};

// Load saved data from localStorage
const savedData = localStorage.getItem("reduxMoneyApp");
const initialState = savedData ? JSON.parse(savedData) : INITIAL_STATE;

// Action creators
export const addMoney = (amount) => ({ type: "ADD_MONEY", payload: amount });
export const removeMoney = (amount) => ({ type: "REMOVE_MONEY", payload: amount });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MONEY": {
      const newBalance = state.user.balance + action.payload;
      const newTransaction = {
        type: "add",
        amount: action.payload,
        date: new Date().toISOString(),
      };
      const newState = {
        ...state,
        user: { ...state.user, balance: newBalance },
        transactions: [newTransaction, ...state.transactions],
      };
      localStorage.setItem("reduxMoneyApp", JSON.stringify(newState));
      return newState;
    }

    case "REMOVE_MONEY": {
      if (state.user.balance - action.payload < 0) {
        alert("Insufficient funds!");
        return state;
      }
      const newBalance = state.user.balance - action.payload;
      const newTransaction = {
        type: "remove",
        amount: action.payload,
        date: new Date().toISOString(),
      };
      const newState = {
        ...state,
        user: { ...state.user, balance: newBalance },
        transactions: [newTransaction, ...state.transactions],
      };
      localStorage.setItem("reduxMoneyApp", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;