import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import './Products.css'

const Products = () => {
  return (
    <div className='products'>
      <Navbar />
      <div className='products__body'>
        <div className='products__body__head'>
          <h1>All Products</h1>
          <button>Add Product</button>
        </div>
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
