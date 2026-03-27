import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookService";

export default function AddBook(){

    const [book,setBook] = useState({
      title:"",
      author:"",
      description:"",
      quantity:0
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;

    setBook({
        ...book,
        [name]: name === "quantity" ? Number(value) : value
    });
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addBook(book);
            alert("Book added successfully");
            navigate("/");
        } catch (error) {
            console.error("Error saving book:", error);
            alert("Only ADMIN can add books");
        }
    };

    return(
        <form onSubmit={handleSubmit} className="container">
            <h2>Add Book</h2>

            <div className="form-group">
                <input name="title" placeholder="Title" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <input name="author" placeholder="Author" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <input name="description" placeholder="Description" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <input 
                  name="quantity" 
                  type="number" 
                  placeholder="Quantity" 
                  onChange={handleChange} 
                  required 
                />
            </div>

            <button type="submit" className="btn-success">Save</button>
        </form>
    );
}