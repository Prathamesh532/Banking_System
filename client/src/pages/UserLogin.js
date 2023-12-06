import React , {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  // const handleLogin = async (e) =>{
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/login', {
  //       email,
  //       password,
  //     });
  //     console.log('Login successful');
  //     alert("Login Successful...")
  //   } catch (error) {
  //     if (error) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       const errorMessage = error;
  //       console.error('Login failed', errorMessage);
  //     } 
  //     // else if (error.request) {
  //     //   // The request was made but no response was received
  //     //   console.error('No response received from the server');
  //     // } else {
  //     //   // Something happened in setting up the request that triggered an Error
  //     //   console.error('Error setting up the request', error.message);
  //     // }
  //   }
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/', {
        email,
        password,
      });
      console.log('Login successful');
      console.log(res)
      alert('Login Successful...');
      navigate("/transaction")
    } catch (error) {
      // Handle login error
      console.error('Login failed', error || 'Unknown error');
      alert('Login failed. Please check your email and password.');
    }
  };
  

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="reg-title">User Login</h1>
        <p className="reg-info">Please enter your email and password!</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <p className="redirect">
          You don't Account! Go <Link to="register"> Regsiter</Link>
        </p>

        <Link to="bankerlogin" className="loginAs">
          Login as Banker
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
