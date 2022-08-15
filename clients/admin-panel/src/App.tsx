import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useSelector, useDispatch } from 'react-redux'

import { setLoggedIn } from './redux/slices/loggedInSlice'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default () => {
  const logged = useSelector((state: any): boolean => state.loggedIn.isLoggedIn)
  const dispatch = useDispatch()
  const cookies = new Cookies(['logged', false])

  dispatch(setLoggedIn(cookies.get('logged') === 'true' ? true : false))
  return (
    <>
      {logged ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="login" element={<Login cookies={cookies} />} />
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
