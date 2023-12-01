import { useState } from "react";
import BookList from "./BookList";

const Main = () => {
    const [books, setBooks]=useState([
    ]);
    
    const [show, setShow]=useState(true);

    function handleDelete(id){
        console.log("Clicked",id);
        setBooks(books.filter(book => book.id != id));
    }

    function handleToggle(){
        setShow(!show);
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleInput(event){
        setTitle(event.target.value);
    }
    function handleDesc(event){
        setDescription(event.target.value);
    }

    function handleSubmit(){
        const new_book = {}
        setBooks(...books, new_book)

    }

  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={handleToggle}>{show?"Hide Books":"Show Books"}</button>
        </div>
        
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="Title of the book" name="title" id="title" />
            <input onChange={handleDesc} type="text" placeholder="Description" name="description" id="description" />
            <button type="submit">Add</button>
            <h3 className="reset">Reset</h3>
        </form>
        <div className="userinput">
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Name of the Book: </span>  {title}</p>
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Description: </span> {description} </p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>       
            {show && books.map(book =>
                <BookList key={book.id} book={book} handleDelete={handleDelete} />
                )}
            </tbody>
        </table>      
    </section>
  )
}

export default Main
