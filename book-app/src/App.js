import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home.js'
import Book from './pages/book/Book.js'
import Search from './pages/search/Search.js'
import Create from './pages/create/Create.js'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/search"  element={<Search />}/>
        <Route path="/create" element={<Create />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
