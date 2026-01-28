import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import EventList from './pages/EventList'
import Register from './pages/Register'
import Login from './pages/Login'
import EventDetail from './pages/EventDetail'
import AdminDashboard from './pages/AdminDashboard'


const App = () => {

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<EventList />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events/:id' element={<EventDetail/>} />
          <Route path='/admin' element={<AdminDashboard/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;