
const Main = () => {
    const books=[
        {id:123, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:124, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:125, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:126, name:"Shreds of tenderness", description:"lorem ipsum"},
        {id:127, name:"Shreds of tenderness", description:"lorem ipsum"},
    ];
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
                    <td>Delete </td>
                </tr>
                )}
            </tbody>
        </table>      
    </section>
  )
}

export default Main
