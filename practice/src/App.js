import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/read';
import AppBar from './components/appbar';
import Create from './components/Create';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
