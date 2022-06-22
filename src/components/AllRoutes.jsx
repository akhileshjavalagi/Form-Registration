import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Registration from './Registration'
import View from './View'

//All routes are here.
export default function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/view" element={<View/>} />
          <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  )
}
