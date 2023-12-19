import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  function handleSubmit(){
    console.log('....');
    navigate('/')
  }
  return (
    <div>
        <form className='contact' onSubmit={handleSubmit}>
            <input type="text" placeholder='Subject' maxLength={100} autoComplete='false' />
            <input type="text" placeholder='Email' maxLength={50} autoComplete='false' />
            <input type="text" placeholder='How do you want us to serve you?' maxLength={500} />
            <button type='submit'>Submit Query</button>
        </form>
      
    </div>
  )
}

export default Contact
