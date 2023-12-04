import { useState, useRef } from "react";
import BookList from "./BookList";

const Main = () => {
    const [books, setBooks]=useState([
        {id:1231, name: 'ABSALOM, ABSALOM! BY WILLIAM FAULKNER', description: 'This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.', completed: true},
        {id:1241, name: 'A TIME TO KILL BY JOHN GRISHAM', description: 'This one is from 3:3 in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who relates and analyses events in his own life. This has resonated strongly with a lot of people: Abraham Lincoln quoted Ecclesiastes when addressing Congress in 1862, and the novelist Thomas Wolfe called it ‘the greatest single piece of writing I have ever known.’ Grisham’s 1989 title is taken from the line that [To every thing there is a season, and a time to every purpose under the heaven:] A time to kill, and a time to heal; a time to break down, and a time to build up…', completed: false },
        {id:1253, name: 'THE HOUSE OF MIRTH BY EDITH WHARTON',description: 'Another Ecclesiastes quotation, this time from line 7:4. A brilliant sentence: The heart of the wise is in the house of mourning; but the heart of fools is in the house of mirth. One of Wharton’s best-known novels, it came out in 1905.', completed: false},
        {id:1267, name: 'EAST OF EDEN BY JOHN STEINBECK', description:'Steinbeck apparently considered this 1952 novel to be his magnum opus, the one which all other novels before it had merely been practice for. The title is suitably grand. Taken from Genesis, the first book of the Old Testament, it refers to line 4:16, after Cain has slain his brother Abel. And Cain went out from the presence of the Lord, and dwelt in the land of Nod, on the east of Eden.', completed: true}
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
    //const [status, setStatus] = useState(false);

    const statusVal = useRef(false);

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
            completed:  statusVal.current.value ==='true'
        }
        console.log("-------", statusVal.current.value)
        console.log("-------", new_book)
        setBooks([...books,new_book])
        handleReset()
    }

    function handleReset(){
        setTitle("");
        setDescription("");
        statusVal.current.value=false;
    };

  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={handleToggle}>{show?"Hide Books":"Show Books"}</button>
        </div>
        
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="Title of the book" name="title" id="title" value={title} />
            <input onChange={handleDesc} type="text" placeholder="Description" name="description" id="description" value={description} />
            <select ref={statusVal}>
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
