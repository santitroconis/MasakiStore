import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleSignup } from "../context/AuthContext";
import "./Signup.css";
import logo from "../assets/images/logo-black.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const errorMessage = "Signup failed - Please try again";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupData = await handleSignup({ email, password });
      if (signupData) {
        navigate("/home");
      } else {
        setError(errorMessage);
      }
    } catch (error) {
      setError(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <img src={logo} alt="Logo" className="signup-logo" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">
          Signup
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default Signup;
