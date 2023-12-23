import { lazy, Suspense } from 'react'
import './App.css'
import Header from './views/header/index.jsx';
const Comics = lazy(() => import('./views/comics/index.jsx'));
const Comic = lazy(() => import('./views/comic/index.jsx'));
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>

        <Header />
        <Routes>
          <Route exact path='/home' element={
            <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}>
              <Comics />
            </Suspense>
          } />
          <Route exact path='/comics/:id' element={
            <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}>
              <Comic />
            </Suspense>
          } />

        </Routes>
      </Router>
    </>
  )
}

export default App
