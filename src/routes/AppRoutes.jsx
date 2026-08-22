import Home from '../pages/Home'
import Search from '../pages/Search'
import MovieDetails from '../pages/MovieDetails'
import MainLayout from '../layout/MainLayout'
import { Route, Routes } from 'react-router-dom'


import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={ <MainLayout/> }>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      

        </Route>
    </Routes>
  )
}

export default AppRoutes