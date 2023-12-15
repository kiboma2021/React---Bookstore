
const BookList = ({books,handleDelete}) => {
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
        {books && books.map((book) =>(
        <tr key={book.id} className={book.completed?"completed":"pending"}>
          <td>{book.id}</td>
          <td>{book.name}</td>
          <td>{book.description} </td>
          <td><span className="delete" onClick={()=>handleDelete(book.id)}>Delete</span> </td>
        </tr>
        ))}    
    </tbody>
  </table>  









  )
}

export default BookList
