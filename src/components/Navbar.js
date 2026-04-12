import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id");

  const logout = () => {
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3>🚀 Task Manager</h3>

      <div>
        {!user_id ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;