import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authService";

export default function Login() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.username, user.password);
      
      if (user.username === "admin") {
        localStorage.setItem("role", "ADMIN");
      } else {
        localStorage.setItem("role", "USER");
      }

      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "/";

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
