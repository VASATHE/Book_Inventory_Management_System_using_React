import React, { useEffect, useState } from "react";
import { getAllBooks, deleteBookById } from "../api/bookService";
import { Link } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await getAllBooks();
    setBooks(result.data);
  };

  const handleDelete = async (id) => {
    await deleteBookById(id);
    loadBooks();
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
            <td>
              <button><Link to={`/update/${book.id}`}>Update</Link></button>
              {" | "}
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
