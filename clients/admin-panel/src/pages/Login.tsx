import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { setLoggedIn } from '../redux/slices/loggedInSlice'

interface Props {
  cookies: any
}

const Login = ({ cookies }: Props) => {
  const logged = useSelector((state: any): boolean => state.loggedIn.isLoggedIn)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const SubmitHandler = async (e: any) => {
    e.preventDefault()

    await axios
      .post(
        'http://localhost:8080/auth/login/',
        {
          email: emailRef.current?.value,
          password: passwordRef.current?.value
        },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        if (res.data.token) {
          dispatch(setLoggedIn(true))
          cookies.set('logged', true, {
            path: '/',
            sameSite: 'strict',
            maxAge: 60 * 60
          })
          navigate('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div
      className='auth clap-width'
      style={{
        minHeight: '100vh',
        width: '400px',
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}
    >
      <h1
        style={{
          alignSelf: 'flex-start',
          color: '#fff',
          marginBottom: '2rem',
          fontWeight: '400',
          fontSize: '42px'
        }}
      >
        Log In
      </h1>
      <form
        onSubmit={SubmitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <input
          type='email'
          placeholder='Enter email..'
          className='input-field'
          ref={emailRef}
          style={{
            borderRadius: '5px',
            border: 'none',
            background: 'rgba(0,0,0,.3)',
            padding: '0 20px',
            outline: 'none',
            marginBottom: '20px',
            color: '#fff',
            height: '50px',
            fontSize: '18px'
          }}
          required
        />
        <input
          type='password'
          placeholder='Enter password..'
          className='input-field'
          ref={passwordRef}
          style={{
            borderRadius: '5px',
            border: 'none',
            background: 'rgba(0,0,0,.3)',
            padding: '0 20px',
            outline: 'none',
            marginBottom: '20px',
            color: '#fff',
            height: '50px',
            fontSize: '18px'
          }}
          required
        />
        <input
          type='submit'
          value='Log In'
          className='input-submit'
          style={{
            border: 'none',
            borderRadius: '5px',
            height: '50px',
            padding: '0 20px',
            boxShadow: '0 0 20px 0 hsla(0,0%,100%,.2)',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        />
      </form>
    </div>
  )
}

export default Login
