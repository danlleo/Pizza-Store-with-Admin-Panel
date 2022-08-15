import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

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
      className="auth clap-width"
      style={{
        height: '650px',
        width: '400px',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        onSubmit={SubmitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <input
          type="email"
          placeholder="Enter email.."
          className="input-field"
          ref={emailRef}
          required
        />
        <input
          type="password"
          placeholder="Enter password.."
          className="input-field"
          ref={passwordRef}
          required
        />
        <input type="submit" value="Login" className="input-submit" />
      </form>
    </div>
  )
}

export default Login
