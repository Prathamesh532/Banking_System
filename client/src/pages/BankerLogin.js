import React from "react";
import { Link } from "react-router-dom";

const BankerLogin = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="reg-title">Banker Login</h1>
        <p className="reg-info">Please enter your email and password!</p>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
        </form>
        <p className="redirect">
          You don't Account! Go <Link to="register"> Regsiter</Link>
        </p>

        <Link to='/' className="loginAs">Login as Customer</Link>
      </div>
    </div>
  );
};

export default BankerLogin;
