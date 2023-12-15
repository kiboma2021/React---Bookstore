import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.css';

function App() {
  const [books, setBooks]=useState([
    {id:1231, name: 'ABSALOM, ABSALOM! BY WILLIAM FAULKNER', description: 'This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.', completed: true},
    {id:1241, name: 'A TIME TO KILL BY JOHN GRISHAM', description: 'This one is from 3:3 in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who relates and analyses events in his own life. This has resonated strongly with a lot of people: Abraham Lincoln quoted Ecclesiastes when addressing Congress in 1862, and the novelist Thomas Wolfe called it ‘the greatest single piece of writing I have ever known.’ Grisham’s 1989 title is taken from the line that [To every thing there is a season, and a time to every purpose under the heaven:] A time to kill, and a time to heal; a time to break down, and a time to build up…', completed: false },
    {id:1253, name: 'THE HOUSE OF MIRTH BY EDITH WHARTON',description: 'Another Ecclesiastes quotation, this time from line 7:4. A brilliant sentence: The heart of the wise is in the house of mourning; but the heart of fools is in the house of mirth. One of Wharton’s best-known novels, it came out in 1905.', completed: false},
    {id:1267, name: 'EAST OF EDEN BY JOHN STEINBECK', description:'Steinbeck apparently considered this 1952 novel to be his magnum opus, the one which all other novels before it had merely been practice for. The title is suitably grand. Taken from Genesis, the first book of the Old Testament, it refers to line 4:16, after Cain has slain his brother Abel. And Cain went out from the presence of the Lord, and dwelt in the land of Nod, on the east of Eden.', completed: true}
]);


  return (
    <div className="App">
      <Header books={books} />
      <Main books={books} setBooks={setBooks} />


      <Footer />

    </div>
  );
}

export default App;
