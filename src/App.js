import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Student from './pages/Student'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/student"element={<Student/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App