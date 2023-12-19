import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = ({userinput}) => {
  const params = useParams();
  console.log(params)
  return (
    <div className='bookPage'>
        <h2>{userinput.name}</h2>
        <p>{userinput.description}</p>
      
    </div>
  )
}

export default BookDetail
