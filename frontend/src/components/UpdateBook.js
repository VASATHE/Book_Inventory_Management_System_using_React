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
    setBook({ ...book, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit}>
      <h2>Update Book</h2>

      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />

      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />

      <input
        name="description"
        value={book.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <button type="submit">Update</button>
    </form>
  );
}
