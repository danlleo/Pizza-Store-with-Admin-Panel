import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      {show && <Cart />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
