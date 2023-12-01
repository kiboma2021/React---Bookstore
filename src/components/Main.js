import { useState } from "react";

const Main = () => {
    const [books, setBooks]=useState([
        {id:123, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:124, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:125, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:126, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:127, name:"Shreds of tenderness", description:"lorem ipsum"},
    ]);
    
    function handleDelete(id){
        console.log("Clicked",id);
        setBooks(books.filter(book => book.id != id));
    }
  return (
    <section>
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
            {books.map(book =>
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
