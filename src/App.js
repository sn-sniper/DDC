import './unknown.css';
import './App.css';
import './web__title.css';
import Survey from './Survey';
import Homepage from './Homepage';
import React from 'react';
import ChatBox from './ChatBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>x
        <Route exact path="/DDC/" element={<Homepage />} />
        <Route path="/DDC/Survey" element={<Survey />} />
        <Route path="/DDC/Live-Chat" element={<ChatBox />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;