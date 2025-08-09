import React from 'react'

function MyBookings() {
  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const getMyBookings = async () => {
    try {
      const response = await fetch('/api/bookings')
      const data = await response.json()
      setBookings(data)
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <h1>My Bookings</h1>
    </div>
  )
}

export default MyBookings
