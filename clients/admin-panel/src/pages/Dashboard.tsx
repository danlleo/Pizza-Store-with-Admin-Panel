import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { setLoggedIn } from '../redux/slices/loggedInSlice'

import FoodTypes from '../components/FoodTypes/FoodTypes'

export default () => {
  const logged = useSelector((state: any): boolean => state.loggedIn.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cookies = new Cookies()
  const signOut = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_LINK}/auth/logout/`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res)
        dispatch(setLoggedIn(false))
        cookies.set('logged', false, {
          path: '/',
          sameSite: 'strict'
        })
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div
      style={{
        backgroundColor: '#363636',
        color: '#eeeeee',
        minHeight: '100vh'
      }}
    >
      <h1>Admin panel</h1>
      <button onClick={signOut}>Sign Out</button>
      <FoodTypes />
    </div>
  )
}
