import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Loginf.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // Default role: Student
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (replace with actual API call)
    console.log("Logging in:", { email, password, role });

    // Redirect based on role
    if (role === "staff") {
      navigate("/staff");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <img
        src="./src/Images/bg2.jpg"
        alt="login background"
        className="login__img"
      />

      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__box">
          <i className="ri-user-3-line login__icon"></i>
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
          <i className="ri-lock-2-line login__icon"></i>
          <input
            type="password"
            required
            className="login__input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       

        <button type="submit" className="login__button">Login</button>

     <p>
        <button className="login__button">Signup</button>
     </p>

      </form>
    </div>
  );
};

export default LoginForm;