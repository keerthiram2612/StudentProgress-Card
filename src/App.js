import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Student from './pages/Student'
import Footer from './components/Footer'
import Student1 from "./pages/Student1"
import Student2 from"./pages/Student2"

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/student"element={<Student/>}/>
      <Route path="/student1"element={<Student1/>}/>
      <Route path="/student2"element={<Student2/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App