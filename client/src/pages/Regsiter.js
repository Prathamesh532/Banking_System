import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Regsiter = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/register', {
        username,
        email,
        accountType,
        password,
      });
      console.log('Registration successful');
      alert("Registeration Successful...");
      navigate("/");
      
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message;
        alert(errorMessage); // Display the error message in an alert box
        console.error('Registration failed', errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request', error.message);
      }
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
