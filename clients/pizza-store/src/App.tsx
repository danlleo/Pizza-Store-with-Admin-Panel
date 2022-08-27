import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import { selectCart } from './store'

export default () => {
  const isOpen = useSelector(selectCart)

  return (
    <>
      {isOpen && <Cart />}
      <Header />
      <Home />
      <Footer />
    </>
  )
}
