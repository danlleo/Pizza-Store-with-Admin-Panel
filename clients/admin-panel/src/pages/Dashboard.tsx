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
        minHeight: '100vh',
        maxWidth: '1270px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto'
      }}
    >
      <div className='header'>
        <h2 style={{ letterSpacing: '4px' }}>Admin Panel</h2>
        <button
          onClick={signOut}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#fff',
            fontSize: '16px',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}
        >
          Sign Out
        </button>
      </div>
      <FoodTypes />
    </div>
  )
}
