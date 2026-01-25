import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookService";

export default function AddBook(){
    
    const [book,setBook] = useState({title:"",author:"",description:""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({...book,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addBook(book);     // wait until API finishes
            navigate("/");           // then redirect
        } catch (error) {
            console.error("Error saving book:", error);
            }
        };

    return(
        <form onSubmit={handleSubmit} className="container">
            <h2>Add Book</h2>
            <div className="form-group">
            <input name="title" placeholder="Title" onChange={handleChange} required></input>
            </div>
            <div className="form-group">
            <input name="author" placeholder="Author" onChange={handleChange} required></input>
            </div>
            <div className="form-group">
            <input name="description" placeholder="Description" onChange={handleChange} required></input>
            </div>
            <button type="submit" className="btn-success">Save</button>
        </form>
    );
}
