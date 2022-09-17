import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import Modal from '../../components/modal/Modal'
import { open } from '../../store/features/modalSlice'
import { ToastContainer } from 'react-toastify'
import { useAppSelector, useAppDispatch } from '../../store'
import './Products.css'

const Products = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.modalState.isOpen)

  const openModal = () => {
    dispatch(open())
  }

  return (
    <div className='products'>
      <Navbar />
      <div className='products__body'>
        {isOpen && <Modal />}
        <div className='products__body__head'>
          <h1>All Products</h1>
          <button onClick={openModal}>Add Product</button>
        </div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme='dark'
        />
      </div>
    </div>
  )
}

export default Products
