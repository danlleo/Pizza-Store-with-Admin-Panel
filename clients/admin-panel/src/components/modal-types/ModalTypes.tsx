import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch } from '../../store'
import { useState } from 'react'
import { closeModalTypes } from '../../store/features/modalTypesSlice'
import { toast } from 'react-toastify'
import { useAddStoreTypeMutation } from '../../api/apiSlice'
import './ModalTypes.css'

const ModalTypes = () => {
  const [addStoreType] = useAddStoreTypeMutation()
  const [typeName, setTypeName] = useState('')
  const [isOpen, setIsOpen] = useState('modal__open')
  const dispatch = useAppDispatch()

  const closeModal = () => {
    setIsOpen('modal__close')
    setTimeout(() => {
      dispatch(closeModalTypes())
    }, 100)
  }

  const notifySuccess = () => {
    toast.success('Successfully added!')
  }

  const notifyError = (message: string) => {
    toast.error(message)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await addStoreType({ type: typeName })
      .unwrap()
      .then(() => {
        notifySuccess()
        closeModal()
      })
      .catch((err: any) => notifyError(err.message))
  }

  return (
    <div className={`modal ${isOpen}`}>
      <div className='overlay' onClick={closeModal}></div>
      <form className={`modal__container`} onSubmit={(e) => handleSubmit(e)}>
        <FontAwesomeIcon
          className='closeBtn'
          icon={faXmark}
          onClick={closeModal}
        />
        <h2>Add new product type name</h2>
        <input
          type='text'
          placeholder='Enter new product type'
          style={{ marginBottom: '1rem' }}
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
        />
        <input type='submit' value='Add product' />
      </form>
    </div>
  )
}

export default ModalTypes
