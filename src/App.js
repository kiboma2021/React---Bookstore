import { useState,useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.css';

function App() {
  const [books, setBooks]=useState(JSON.parse(localStorage.getItem("books"))||[]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });


  return (
    <div className="App">
      <Header books={books} />
      <Main books={books} setBooks={setBooks} />


      <Footer />

    </div>
  );
}

export default App;
