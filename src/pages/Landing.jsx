import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../assets/images/logo-white.png";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="header-container">
        <img className="header-logo" src={HeaderLogo} alt="Masaki Logo" />
      </div>
      <div className="landing-content">
        <h1>Welcome to the Landing Page</h1>
        <button className="landing-button" onClick={() => navigate("/login")}>
          Go to Login
        </button>
        <button className="landing-button" onClick={() => navigate("/signup")}>
          Go to Signup
        </button>
        <button className="landing-button" onClick={() => navigate("/home")}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Landing;
