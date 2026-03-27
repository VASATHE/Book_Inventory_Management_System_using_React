import { useEffect, useState } from "react";
import { getDashboard } from "../api/bookService";

export default function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    lowStock: 0,
    outOfStock: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getDashboard();
    setStats(res.data);
  };
return (
  <div className="container">
    <h2>Dashboard</h2>

    <div className="dashboard-cards">

      <div className="card total">
        <h3>Total Books</h3>
        <p>{stats.total}</p>
      </div>

      <div className="card low">
        <h3>Low Stock</h3>
        <p>{stats.lowStock}</p>
      </div>

      <div className="card out">
        <h3>Out of Stock</h3>
        <p>{stats.outOfStock}</p>
      </div>

    </div>
  </div>
);
}