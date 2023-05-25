import React from 'react'
import { Routes, Route } from "react-router-dom"
import Friends from '../pages/Friends'
import RefferalPage from '../pages/RefferalPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/friends" element={ <Friends/> } />
        <Route path="/" element={ <RefferalPage/> } />
       
      </Routes>
    </div>
  )
}

export default AllRoutes