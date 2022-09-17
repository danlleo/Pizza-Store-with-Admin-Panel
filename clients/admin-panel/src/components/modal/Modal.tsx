import axios from 'axios'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch } from '../../store'
import { useState } from 'react'
import { close } from '../../store/features/modalSlice'
import { toast } from 'react-toastify'
import './Modal.css'

const Modal = () => {
  const [isOpen, setIsOpen] = useState('modal__open')
  const [inputs, setInputs] = useState({
    product_name: '',
    product_price: '',
    product_calories: '',
    product_fat: '',
    product_sugar: '',
    product_salt: '',
    product_carbs: '',
    product_protein: '',
    product_description: '',
    product_type: '',
    product_image: ''
  })
  const dispatch = useAppDispatch()

  const closeModal = () => {
    setIsOpen('modal__close')
    setTimeout(() => {
      dispatch(close())
    }, 100)
  }

  const notifySuccess = () => {
    toast.success('Successfully added!')
  }

  const handleChange = (e: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    axios
      .post('http://localhost:3002/foods', {
        name: inputs.product_name,
        description: inputs.product_description,
        price: inputs.product_price,
        type: inputs.product_type,
        image: inputs.product_image,
        calories: inputs.product_calories,
        fat: inputs.product_fat,
        carbs: inputs.product_carbs,
        proteins: inputs.product_protein,
        sugar: inputs.product_sugar
      })
      .then((res) => {
        console.log(res)
        dispatch(close())
        notifySuccess()
      })
      .catch((err) => {
        console.log(err)
      })
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
        <h1>Add new product</h1>
        <h2>Name and price</h2>
        <div className='modal__container__header'>
          <input
            type='text'
            name='product_name'
            placeholder='Product name'
            className='productName'
            required
            onChange={handleChange}
            value={inputs.product_name}
            style={{ width: '80%', marginRight: '1rem' }}
          />
          <input
            type='number'
            name='product_price'
            placeholder='Price'
            className='productPrice'
            required
            onChange={handleChange}
            value={inputs.product_price}
            style={{ width: '20%' }}
          />
        </div>
        <h2>Nutrition</h2>
        <div className='modal__container__nutrition'>
          <input
            type='number'
            name='product_calories'
            placeholder='Calories'
            required
            onChange={handleChange}
            value={inputs.product_calories}
          />
          <input
            type='number'
            name='product_fat'
            placeholder='Fat'
            required
            onChange={handleChange}
            value={inputs.product_fat}
          />
          <input
            type='number'
            name='product_sugar'
            placeholder='Sugar'
            required
            onChange={handleChange}
            value={inputs.product_sugar}
          />
          <input
            type='number'
            name='product_salt'
            placeholder='Salt'
            required
            onChange={handleChange}
            value={inputs.product_salt}
          />
          <input
            type='number'
            name='product_carbs'
            placeholder='Carbs'
            required
            onChange={handleChange}
            value={inputs.product_carbs}
          />
          <input
            type='number'
            name='product_protein'
            placeholder='Protein'
            required
            onChange={handleChange}
            value={inputs.product_protein}
          />
        </div>
        <h2>About</h2>
        <input
          type='text'
          name='product_description'
          placeholder='Description'
          className='description'
          required
          onChange={handleChange}
          value={inputs.product_description}
        />
        <h2>Choose a type</h2>
        <select
          name='product_type'
          onChange={handleChange}
          value={inputs.product_type}
        >
          <option value='burger'>Burger</option>
          <option value='pizza'>Pizza</option>
          <option value='drinks'>Drinks</option>
          <option value='desserts'>Desserts</option>
        </select>
        <h2>Choose an image</h2>
        <input
          type='file'
          name='product_image'
          onChange={handleChange}
          value={inputs.product_image}
        />
        <input type='submit' value='Add product' />
      </form>
    </div>
  )
}

export default Modal
