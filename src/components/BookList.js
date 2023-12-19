import { useNavigate } from "react-router-dom";

const BookList = ({ show,books,setBooks,handleDelete,userinput,setUserInput}) => {

  const navigate = useNavigate();

  function handleEdit(id) {
    setUserInput(books.find(book => book.id === id));
  }

  function handleShow (id) {
    setUserInput(books.find(book => book.id === id));
    navigate('/book/' + id);

  }
  return (

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
        {show && books && books.map((book) =>(
        <tr key={book.id} className={book.completed?"completed":"pending"}>
          <td>{book.id}</td>
          <td>{book.name}</td>
          <td>{book.description} </td>
          <td>
            <span onClick={()=>handleEdit(book.id)} style={{marginLeft:"0.8rem",color:"red"}} ><i className="fa fa-edit"></i></span> 
            <span onClick={()=>handleDelete(book.id)} style={{color:"red"}}><i className="fa fa-trash"></i></span>
            <span onClick={()=>handleShow(book.id)} style={{color:"red"}}><i className="fa fa-eye"></i></span> 
          </td>
        </tr>
        ))}    
    </tbody>
  </table>  









  )
}

export default BookList
