import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Layout from './pages/Layout'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
export default App
