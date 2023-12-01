
const BookList = ({book,handleDelete}) => {
  return (
    <tr key={book.id} className={book.completed?"completed":"pending"}>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.description} </td>
        <td><a className="delete" onClick={()=>handleDelete(book.id)}>Delete</a> </td>
    </tr>
  )
}

export default BookList
