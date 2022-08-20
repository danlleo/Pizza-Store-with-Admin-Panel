import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'

import { setLoggedIn } from '../../redux/slices/loggedInSlice'
import './FoodTypes.css'

export default () => {
  const logged = useSelector((state: any): boolean => state.loggedIn.isLoggedIn)
  const dispatch = useDispatch()
  const coookies = new Cookies()
  const [foodTypes, setFoodTypes] = useState<any[]>([])
  const [addFoodTypeError, setAddFoodTypeError] = useState<string>('')
  const [removeFoodTypeError, setRemoveFoodTypeError] = useState<string>('')

  const addNewTypeRef = useRef<HTMLInputElement>(null)
  const removeTypeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_LINK}/foodtypes`, {
        withCredentials: true
      })
      .then((res) => {
        setFoodTypes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addFoodType = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_LINK}/foodtypes`,
        {
          type: addNewTypeRef.current?.value
        },
        { withCredentials: true }
      )
      .then((res) => {
        setFoodTypes([...foodTypes, res.data])
      })
      .catch((err) => {
        if (err.response.data.message === 'Unauthorized') {
          coookies.set('logged', false, {
            path: '/',
            sameSite: 'strict'
          })
          dispatch(setLoggedIn(false))
        }
        setAddFoodTypeError(err?.response?.data?.errors?.type?.message)
      })
  }

  const removeFoodType = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_LINK}/foodtypes/${removeTypeRef.current?.value}`,
        { withCredentials: true }
      )
      .then((res) => {
        setFoodTypes(foodTypes.filter((type) => type.type !== res.data.type))
      })
      .catch((err) => {
        if (err.response.data.message === 'Unauthorized') {
          coookies.set('logged', false, {
            path: '/',
            sameSite: 'strict'
          })
          dispatch(setLoggedIn(false))
        }
        setRemoveFoodTypeError(err?.response?.data?.errors?.type?.message)
      })
  }

  return (
    <>
      <h1>Food Types</h1>
      <div className='food-types__container border-gradient border-gradient-red'>
        <div className='food-types__item'>
          <div className='food-types__title'>
            <p>All food types</p>
          </div>
          <div className='food-types__info'>
            {foodTypes.map((foodType) => (
              <div className='food-types__info--item' key={foodType?._id}>
                <p>{foodType?.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='food-types__item'>
          <div className='food-types__title'>
            <p>Add Food Type</p>
          </div>
          <div className='food-types__form'>
            <input type='text' placeholder='pizza' ref={addNewTypeRef} />
            <button onClick={addFoodType}>Create</button>
            {addFoodTypeError && <p>{addFoodTypeError}</p>}
          </div>
        </div>

        <div className='food-types__item'>
          <div className='food-types__title'>
            <p>Remove Food Type</p>
          </div>
          <div className='food-types__form'>
            <input type='text' placeholder='coffe' ref={removeTypeRef} />
            <button
              style={{ backgroundColor: '#ff4B33' }}
              onClick={removeFoodType}
            >
              Remove
            </button>
            {removeFoodTypeError && <p>{removeFoodTypeError}</p>}
          </div>
        </div>
      </div>
    </>
  )
}
