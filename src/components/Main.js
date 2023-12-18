import { useState } from "react";
import BookList from "./BookList";
import AddTask from "./AddTask";

const Main = ({books,setBooks}) => {
    
    const [show, setShow]=useState(true);
    const [userinput, setUserInput]=useState({})



    function handleDelete(id){
        setBooks(books.filter(book => book.id !== id));
    }

  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={()=>setShow(!show)}>{show?"Hide Books":"Show Books"}</button>
        </div>

        <AddTask 
        userinput={userinput} 
        setUserInput={setUserInput} 
        books={books} 
        setBooks={setBooks} 

        />

        <BookList 
        books={books} 
        setBooks={setBooks} 
        handleDelete={handleDelete} 
        show={show} 
        userinput={userinput} 
        setUserInput={setUserInput}         
        />
        
    </section>
  )
}

export default Main
