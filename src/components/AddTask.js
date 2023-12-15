import React from 'react'

const AddTask = ({userinput,setUserInput,handleSubmit,handleReset}) => {
    function handleInput(e){
        setUserInput({
            
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title of the book" name="title" />
            <input type="text" placeholder="Description" name="description" />
            <select>
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
