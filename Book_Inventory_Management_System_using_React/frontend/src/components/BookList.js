import React, { useEffect, useState } from "react";
import { getAllBooks, deleteBookById } from "../api/bookService";
import { Link } from "react-router-dom";

export default function BookList() {

  const [books, setBooks] = useState([]);

  const role = localStorage.getItem("role");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const result = await getAllBooks();
      setBooks(result.data);
    } catch (error) {
      console.error("Error loading books:", error);
      alert("Failed to load books");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBookById(id);
      alert("Book deleted successfully");
      loadBooks();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Only ADMIN can delete books");
    }
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(books) ? (
          books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.quantity}</td>

              <td>
                {role === "ADMIN" ? (
                  <>
                    <Link to={`/update/${book.id}`}>
                      <button className="btn-warning">Update</button>
                    </Link>

                    <br /><br />

                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <span style={{ color: "gray" }}>View Only</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
