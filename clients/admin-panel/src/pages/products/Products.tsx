import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import { useState } from 'react'
import './Products.css'

const Products = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className='products'>
      <Navbar />
      <div className='products__body'>
        <div className='products__body__head'>
          <h1>All Products</h1>
          <button onClick={openModal}>Add Product</button>
        </div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products
