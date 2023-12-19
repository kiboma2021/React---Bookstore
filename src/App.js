import { useState,useEffect } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import Profile from './components/Profile';
import BookDetail from './components/BookDetail';
import './App.css';
import NoRouteFound from './components/NoRouteFound';



function App() {
  const [books, setBooks]=useState(JSON.parse(localStorage.getItem("books"))||[]);
  const [userinput, setUserInput]=useState({})

  const user = false;

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });


  return (
    <div className="App">
      <Header books={books} />
      <Routes>
        <Route path='/' element={<Main books={books} setBooks={setBooks} userinput={userinput} setUserInput={setUserInput} />}> </Route>
        <Route path='contact' element={<Contact />} ></Route>
        <Route path='profile' element={user?<Profile /> :<Navigate to='/' /> }></Route>
        <Route path='book/:id' element={<BookDetail userinput={userinput} setUserInput={setUserInput}  />} ></Route>
        <Route path='*' element={<NoRouteFound />} ></Route>

      </Routes>
      


      <Footer />

    </div>
  );
}

export default App;
