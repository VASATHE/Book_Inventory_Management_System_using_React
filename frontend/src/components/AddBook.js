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
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <input name="title" placeholder="Title" onChange={handleChange}></input>
            <input name="author" placeholder="Author" onChange={handleChange}></input>
            <input name="description" placeholder="Description" onChange={handleChange}></input>
            <button type="submit">Save</button>
        </form>
    );
}
