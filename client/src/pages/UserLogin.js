import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="reg-title">User Login</h1>
        <p className="reg-info">Please enter your email and password!</p>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
        </form>
        <p className="redirect">
          You don't Account! Go <Link to="register"> Regsiter</Link>
        </p>

        <Link to="bankerlogin" className="loginAs">Login as Banker</Link>
      </div>
    </div>
  );
};

export default UserLogin;
