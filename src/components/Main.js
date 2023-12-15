import { useState } from "react";
import BookList from "./BookList";
import AddTask from "./AddTask";

const Main = ({books,setBooks}) => {
    
    const [show, setShow]=useState(true);
    const [userinput, setUserInput]=useState({})



    function handleDelete(id){
        setBooks(books.filter(book => book.id !== id));
    }


    function handleSubmit(event){
        event.preventDefault();
        // const book_id = Math.floor(Math.random()*100000);
        // const new_book = {
        //     id:book_id,
        //     name: title, 
        //     description: description, 
        //     completed:  statusVal.current.value ==='true'
        // }
        // console.log("-------", statusVal.current.value)
        // console.log("-------", new_book)
        // setBooks([...books,new_book])
        handleReset()
    }

    function handleReset(){
        // setTitle("");
        // setDescription("");
        //statusVal.current.value=false;
    };

  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={()=>setShow(!show)}>{show?"Hide Books":"Show Books"}</button>
        </div>

        <AddTask 
        userinput={userinput} 
        setUserInput={setUserInput} 
        handleSubmit={handleSubmit} 
        handleReset={handleReset} 
        />

        <BookList 
        books={books} 
        setBooks={setBooks} 
        handleDelete={handleDelete} />
        
    </section>
  )
}

export default Main
