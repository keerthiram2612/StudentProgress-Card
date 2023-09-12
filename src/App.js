import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Student from './pages/Student'
import Footer from './components/Footer'
import Student1 from "./pages/Student1"
import Student2 from"./pages/Student2"
import Student3 from "./pages/Student3"
import Contact from './pages/Contact'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'

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
      <Route path="/student3"element={<Student3/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path = "/contactus"element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App