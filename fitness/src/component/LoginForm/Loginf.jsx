import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loginf.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    axios.get("http://localhost:5000/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.isVerified) {
          navigate("/");
        }
      })
      .catch(() => {}); // Ignore errors
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup request
        await axios.post("http://localhost:5000/signup", { name, email, password });
        alert("Signup successful! Please log in.");
        setIsSignup(false);
      } else {
        // Login request
        const res = await axios.post(
          "http://localhost:5000/login",
          { email, password },
          { withCredentials: true }
        );
        alert(res.data.message);
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login">
      <img src="./src/Images/bg2.jpg" alt="login background" className="login__img" />

      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">{isSignup ? "Signup" : "Login"}</h1>

        {isSignup && (
          <div className="login__box">
            <input
              type="text"
              required
              className="login__input"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="login__box">
          <input
            type="email"
            required
            className="login__input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__box">
          <input
            type="password"
            required
            className="login__input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login__button">
          {isSignup ? "Signup" : "Login"}
        </button>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

