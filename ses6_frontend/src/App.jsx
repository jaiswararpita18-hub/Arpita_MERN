import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddBlog from './components/AddCourse'
import EditBlog from './components/EditCourse'
import ShowBlog from './components/ShowCourse'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <AddBlog /> } />
          <Route path='/edit/:id' element={ <EditBlog /> } />
          <Route path='/:id' element={ <ShowBlog /> } />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
