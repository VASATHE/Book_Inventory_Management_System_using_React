import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
    </>
  );
}

export default App;
