import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Favourites from './pages/Favourites'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
