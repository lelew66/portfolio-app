import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import  Portfolio from './pages/Portfolio';
import API from './pages/API';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" exct element={<Portfolio/>} />
        <Route path="/api" element={<API/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;