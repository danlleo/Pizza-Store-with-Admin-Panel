import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { useAppSelector } from './store'

export default () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen)

  return (
    <>
      {isOpen && <Cart />}
      <Header />
      <Home />
      <Footer />
    </>
  )
}
