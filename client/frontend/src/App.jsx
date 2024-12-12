import { useState } from 'react'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import FirstNavbar from './components/firstNavbar/FirstNavbar'


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/home' element={<FirstNavbar/>}></Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>

      </div>
      
    </>
  )
}

export default App
