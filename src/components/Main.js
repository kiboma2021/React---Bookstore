import { useState } from "react";
import BookList from "./BookList";

const Main = () => {
    const [books, setBooks]=useState([
        {id:123, name:"Shreds of tenderness", description:"lorem ipsum", completed:true},
        {id:124, name:"Shreds of tenderness", description:"lorem ipsum", completed:false},
        {id:125, name:"Shreds of tenderness", description:"lorem ipsum", completed:false},
        {id:126, name:"Shreds of tenderness", description:"lorem ipsum", completed:true},
        {id:127, name:"Shreds of tenderness", description:"lorem ipsum", completed:false},
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

    function handleInput(event){
        setTitle(event.target.value);
    }
  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={handleToggle}>{show?"Hide Books":"Show Books"}</button>
        </div>
        
        <form>
            <input onChange={handleInput} type="text" placeholder="Title of the book" name="title" id="title" />
            <input  type="text" placeholder="Description" name="description" id="description" />
            <button type="submit">Add</button>
        </form>
        <div className="userinput">
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Name of the Book: </span>  {title}</p>
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Description: </span> </p>
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
