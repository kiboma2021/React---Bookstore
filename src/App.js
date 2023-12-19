import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import Profile from './components/Profile';

import './App.css';


function App() {
  const [books, setBooks]=useState(JSON.parse(localStorage.getItem("books"))||[]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });


  return (
    <div className="App">
      <Header books={books} />
      <Routes>
        <Route path='/' element={<Main books={books} setBooks={setBooks} />}> </Route>
        <Route path='contact' element={<Contact />} ></Route>
        <Route path='profile' element={<Profile />}></Route>

      </Routes>
      


      <Footer />

    </div>
  );
}

export default App;
