import React from 'react'

const AddTask = ({userinput,setUserInput,books,setBooks}) => {
    function handleSubmit(e){
        e.preventDefault();
        if (userinput.id){
            console.log('editing....');
            const editedTasks=books.map((book) => (
                book.id === userinput.id?{
                    id:userinput.id,
                    name:e.target.title.value,
                    description:e.target.description.value,
                    completed: e.target.status.value ==='true'
                }:book
            ))
            setBooks(editedTasks);
            handleReset();
            

        }else {
            const book_id = Math.floor(Math.random()*100000);
            const new_book = {
                id:book_id,
                name: e.target.title.value, 
                description: e.target.description.value, 
                completed:  e.target.status.value ==='true'
            }
            console.log("-------", new_book)
            setBooks([...books,new_book])
            handleReset();

        }

    }

    function handleReset(){
        setUserInput({});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title of the book" name="title" value={userinput.name || ""} onChange={e=>setUserInput({...userinput,name:e.target.value})}/>
            <input type="text" placeholder="Description" name="description" value={userinput.description || ""} onChange={e=>setUserInput({...userinput, description:e.target.value})} />
            <select name="status" value={userinput.completed || ""} onChange={e=>setUserInput({...userinput,completed:e.target.value})} >
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <h3 onClick={handleReset} className="reset">Reset</h3>
            <button type="submit">{userinput.id?"Update":"Add"}</button>
        </form>

        <div className="userinput">
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Name of the Book: {userinput.name} </span>  </p>
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Description: </span>{userinput.description}  </p>
        </div>        
    </div>

  )
}

export default AddTask
