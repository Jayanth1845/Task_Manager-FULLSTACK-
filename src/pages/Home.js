import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to Task Manager 🚀</h2>

      <p style={{ textAlign: "center" }}>
        Manage your daily tasks, improve productivity, and stay organized.
      </p>

      <button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default Home;