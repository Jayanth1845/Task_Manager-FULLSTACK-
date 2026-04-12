import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const user_id = localStorage.getItem("user_id");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Auto redirect */}
        <Route path="/" element={<Navigate to={user_id ? "/home" : "/login"} />} />

        {/* Prevent access after login */}
        <Route
          path="/login"
          element={user_id ? <Navigate to="/home" /> : <Login />}
        />

        <Route
          path="/register"
          element={user_id ? <Navigate to="/home" /> : <Register />}
        />

        {/* Protected routes */}
        <Route
          path="/home"
          element={user_id ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={user_id ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;