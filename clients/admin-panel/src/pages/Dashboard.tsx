import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setLoggedIn } from '../redux/slices/loggedInSlice'
import Cookies from 'universal-cookie'

const API_LINK = 'http://localhost:8080'

export default () => {
  const logged = useSelector((state: any): boolean => state.loggedIn.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cookies = new Cookies()
  const [foodTypes, setFoodTypes] = useState<any[]>([])

  useEffect(() => {
    axios
      .get(`${API_LINK}/foodtypes`, { withCredentials: true })
      .then((res) => {
        setFoodTypes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const signOut = () => {
    axios
      .post(`${API_LINK}/auth/logout/`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res)
        dispatch(setLoggedIn(false))
        cookies.set('logged', false, {
          path: '/',
          sameSite: 'strict',
          maxAge: 60 * 60
        })
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Dashboard</h1>
      {foodTypes.map((foodType) => (
        <div key={foodType?._id}>
          <p>{foodType?.type}</p>
        </div>
      ))}
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}
