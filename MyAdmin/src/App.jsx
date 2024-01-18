import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Register from './Pages/Register'
import Announcement from './Pages/Annoucement'
import Users from './Pages/User'
import Citizen from './Pages/Citizen'
import Generatereport from './Pages/GenerateReport'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import 'aos/dist/aos.css';
import Test from './Components/test'
// import AOS from 'aos';


function App() {

  return (
    <>
      <div className='div1'>

      </div>
      <BrowserRouter>
      <Sidebar>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/citizen" element={<Citizen/>}/>
        <Route path="/generateReport" element={<Generatereport/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </>
  )
}

export default App
