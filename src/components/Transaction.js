import React from "react";

const Transaction = ({ text, TextId, amount, DeleteTransaction }) => {
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {text}
      <span>
        {sign}
        {Math.abs(amount)}
      </span>
      <button onClick={() => DeleteTransaction(TextId)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
