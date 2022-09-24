import Product from '../../components/product/Product'
import Navbar from '../../layout/navbar/Navbar'
import Modal from '../../components/modal/Modal'
import { open } from '../../store/features/modalSlice'
import { ToastContainer } from 'react-toastify'
import { useAppSelector, useAppDispatch } from '../../store'
import { PropagateLoader } from 'react-spinners'
import { useGetStoreItemsQuery } from '../../api/apiSlice'
import './Products.css'

const Products = () => {
  const { data: items, isLoading } = useGetStoreItemsQuery()

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
        {!isLoading ? (
          <div>
            {items?.map((item) => (
              <Product
                image={`https://pizza-store.s3.eu-central-1.amazonaws.com/${item?.image_path}`}
                name={item?.name}
                description={item?.description}
                key={item?._id}
              />
            ))}
          </div>
        ) : (
          <>
            <PropagateLoader
              color='var(--main-accent-color)'
              style={{ alignSelf: 'center', marginTop: '1rem' }}
            />
          </>
        )}
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
