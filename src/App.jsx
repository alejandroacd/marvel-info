import { useEffect, useState } from 'react'
import './App.css'
import Header from './views/header/index.jsx';
import Comics from './views/comics/index.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<Comics />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
