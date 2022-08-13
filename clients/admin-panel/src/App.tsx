import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default () => {
  const [isLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="login" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  )
}

const Layout = () => {
  return (
    <>
      <Dashboard />
    </>
  )
}
