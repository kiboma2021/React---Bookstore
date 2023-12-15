import React from 'react'

const AddTask = ({userinput,setUserInput,books,setBooks}) => {
    function handleSubmit(e){
        e.preventDefault();
        if (userinput.id){

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

        }
    }

    function handleReset(){
        // setTitle("");
        // setDescription("");
        //statusVal.current.value=false;
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title of the book" name="title" />
            <input type="text" placeholder="Description" name="description" />
            <select name="status">
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <h3 onClick={handleReset} className="reset">Reset</h3>
            <button type="submit">Add</button>
        </form>

        <div className="userinput">
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Name of the Book: </span>  </p>
            <p> <span style={{fontSize:"1.5rem", color:"red"}}>Description: </span>  </p>
        </div>        
    </div>

  )
}

export default AddTask
