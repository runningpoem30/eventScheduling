import { useState } from 'react'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import FirstNavbar from './components/firstNavbar/firstNavbar'
import Calendar from './components/Calendar/Calendar'
import Event from './components/Event/Event'


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/event" element={<div><FirstNavbar/><Event/></div>}></Route>
          <Route path='/home' element={<FirstNavbar></FirstNavbar>}></Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/event' element={<Calendar/>}/>
        </Routes>
        </BrowserRouter>

      </div>
      
    </>
  )
}

export default App
