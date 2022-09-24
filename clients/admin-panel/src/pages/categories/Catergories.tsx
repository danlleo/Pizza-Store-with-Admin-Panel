import Navbar from '../../layout/navbar/Navbar'
import ModalTypes from '../../components/modal-types/ModalTypes'
import Category from '../../components/category/Category'
import { useAppSelector, useAppDispatch } from '../../store'
import { openModalTypes } from '../../store/features/modalTypesSlice'
import { useGetStoreTypesQuery } from '../../api/apiSlice'
import { PropagateLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import './Categories.css'

const Categories = () => {
  const { data: items, isLoading } = useGetStoreTypesQuery()

  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.modalTypeState.isOpen)

  const openModal = () => {
    dispatch(openModalTypes())
  }

  return (
    <div className='category'>
      <Navbar />
      <div className='category__body'>
        <div className='category__body__head'>
          <h1>All Types</h1>
          <button onClick={openModal}>Add Types</button>
        </div>
        {isOpen && <ModalTypes />}
        {!isLoading ? (
          <div>
            {items?.map((item) => (
              <Category name={item.type} key={item._id} />
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
      </div>
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
  )
}

export default Categories
