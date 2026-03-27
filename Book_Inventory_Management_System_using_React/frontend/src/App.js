import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ Public */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/add" element={isLoggedIn ? <AddBook /> : <Navigate to="/login" />} />
        <Route path="/update/:id" element={isLoggedIn ? <UpdateBook /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;