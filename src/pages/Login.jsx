import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleLogin } from "../context/AuthContext";
import "./Login.css";
import logo from "../assets/images/logo-black.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const errorMessage = "Login failed - Invalid email or password";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    try {
      const loginData = await handleLogin({ email, password });
      if (loginData) {
        navigate("/home");
      } else {
        setError(errorMessage);
      }
    } catch (error) {
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} alt="Logo" className="login-logo" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="register-link">
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
