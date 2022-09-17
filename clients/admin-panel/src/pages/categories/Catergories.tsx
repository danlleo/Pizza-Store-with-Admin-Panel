import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import { useState } from 'react'
import './Categories.css'

const Categories = () => {
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
          <h1>All Categories</h1>
          <button onClick={openModal}>Add Category</button>
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

export default Categories
