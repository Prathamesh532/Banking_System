import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Regsiter = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:5000/auth/register", {
      //   username,
      //   email,
      //   password,
      // });

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data)

      // console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="reg-title">Register</h1>
        <p className="reg-info">Please enter your Information and password!</p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="option">Select Account type</label>
          <select
            id="option"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="">Choose Type</option>
            <option value="Customer">Customer</option>
            <option value="banker">Banker</option>
          </select>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Regsiter</button>
        </form>
        <p className="redirect">
          You have already Regsiter! Go <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Regsiter;
