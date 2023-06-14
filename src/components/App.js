import { Routes, Route } from 'react-router-dom';
import { Map } from './Travel.js';
import { NavBar } from './NavBar.js';
import { Notes } from './Notes.js';
import { BookForm } from './Books.js';
import { Home } from './Main.js';
import { JournalForm } from './Journal.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/travel" element={<Map/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/books" element={<BookForm/>} />
        <Route path="/journal" element={<JournalForm/>} />
      </Routes>
    </div>
  );
}

export default App;
