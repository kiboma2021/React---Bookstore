import { useState } from "react";
import BookList from "./BookList";

const Main = () => {
    const [books, setBooks]=useState([
        {id:1255, name: 'hbhbhb', description: 'hbhbh', completed: true},
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
    const [status, setStatus] = useState(false);

    function handleInput(event){
        setTitle(event.target.value);
    }
    function handleDesc(event){
        setDescription(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const book_id = Math.floor(Math.random()*100000);
        const new_book = {
            id:book_id,
            name: title, 
            description: description, 
            completed: Boolean(status)
        }
        console.log("-------", new_book)
        setBooks([...books,new_book])
        handleReset()
    }

    function handleReset(){
        setTitle("");
        setDescription("");
        setStatus(false);
    };

  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={handleToggle}>{show?"Hide Books":"Show Books"}</button>
        </div>
        
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="Title of the book" name="title" id="title" value={title} />
            <input onChange={handleDesc} type="text" placeholder="Description" name="description" id="description" value={description} />
            <select onChange={(event)=>setStatus(event.target.value)} value={status}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <h3 onClick={handleReset} className="reset">Reset</h3>
            <button type="submit">Add</button>
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
