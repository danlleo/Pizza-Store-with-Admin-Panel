import Catergories from './pages/categories/Catergories'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/categories' element={<Catergories />} />
    </Routes>
  )
}

export default App
