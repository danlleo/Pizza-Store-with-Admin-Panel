import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { useState } from 'react'

export default () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Header />
      {show && <Cart />}
      <Home />
      <Footer />
    </>
  )
}
