import React, { useState } from "react";
import axios from "axios";

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("deposit");
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");

  const handleTransaction = async (e) => {
    e.preventDefault();

    // Perform validation on the amount (positive number, etc.)

    try {
      // Make a request to your backend API to handle the transaction
      const response = await axios.post("http://localhost:5000/transaction", {
        username: username,
        type: transactionType,
        amount: parseFloat(amount),
      });

      // Handle the response (success/failure) as needed
      console.log(response.data);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div>
      <h2>Transaction Page</h2>
      <form onSubmit={handleTransaction}>
        <input type="text" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label>
          Transaction Type:
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transaction;
