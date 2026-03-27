import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../api/bookService";

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    quantity:0
  });

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const result = await getBookById(id);
      setBook(result.data);
    } catch (error) {
      console.error("Error loading book:", error);
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setBook({
    ...book,
    [name]: name === "quantity" ? parseInt(value) : value
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Update Book</h2>
      <div className="form-group">
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      </div>
      <div className="form-group">
      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      </div>
      <div className="form-group">
      <input
        name="description"
        value={book.description}
        onChange={handleChange}
        placeholder="Description"
      />
      </div>
      <div className="form-group">
      <input
        name="quantity"
        type="number"
        value={book.quantity}
        onChange={handleChange}
        placeholder="Quantity"
      />
      </div>
      <button type="submit" className="btn-success">Update</button>
    </form>
  );
}
