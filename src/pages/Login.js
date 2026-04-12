import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UPDATED LOGIN FUNCTION
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost/task-manager/backend/login.php",
        { email, password }
      );

      console.log("LOGIN RESPONSE:", res.data);

      if (res.data.status === "success") {
        // Store user
        localStorage.setItem("user_id", res.data.user_id);

        alert("Login Success");

        // IMPORTANT FIX (forces UI update)
        window.location.href = "/home";
      } else {
        alert(res.data.message || "Login Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
