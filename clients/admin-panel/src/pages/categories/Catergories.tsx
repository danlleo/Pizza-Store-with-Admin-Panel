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
  const { data: items, isLoading, isSuccess, isError } = useGetStoreTypesQuery()

  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.modalTypeState.isOpen)

  const openModal = () => {
    dispatch(openModalTypes())
  }

  let content

  if (isLoading) {
    content = (
      <>
        <PropagateLoader
          color='var(--main-accent-color)'
          style={{ alignSelf: 'center', marginTop: '1rem' }}
        />
      </>
    )
  } else if (isSuccess && items.length) {
    content = (
      <div>
        {items?.map((item) => (
          <Category name={item.type} id={item._id} key={item._id} />
        ))}
      </div>
    )
  } else if (isSuccess && items.length === 0) {
    content = (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '1rem'
        }}
      >
        <img
          src='https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
          style={{ width: '500px' }}
        />
      </div>
    )
  } else if (isError) {
    content = <h1>Error loading data..</h1>
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
        {content}
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
