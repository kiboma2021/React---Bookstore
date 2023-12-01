import { useState } from "react";

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
  return (
    <section className="main">
        <div className="toogle-btn">
            <button onClick={handleToggle}>Toogle</button>
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
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.description} </td>
                    <td><a className="delete" onClick={()=>handleDelete(book.id)}>Delete</a> </td>
                </tr>
                )}
            </tbody>
        </table>      
    </section>
  )
}

export default Main
